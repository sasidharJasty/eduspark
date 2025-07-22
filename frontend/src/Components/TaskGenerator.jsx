import React, { useState } from "react";
import { FaCalendarAlt, FaSpinner } from "react-icons/fa";

const GEMINI_API_KEY = "AIzaSyCdpr_zkmJJEDtIfH9skmqT8VTuc7bSbp0";

const TaskGenerator = () => {
  const [subject, setSubject] = useState("");
  const [examDate, setExamDate] = useState("");
  const [daysPerWeek, setDaysPerWeek] = useState(5);
  const [goal, setGoal] = useState("");
  const [plan, setPlan] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const generatePlan = async () => {
    if (!subject.trim() && !goal.trim()) {
      setError("Please provide at least a subject or goal to generate a study plan.");
      return;
    }

    setLoading(true);
    setError("");
    setPlan([]);
    
    try {
      // Calculate study duration and create more specific prompt
      const today = new Date();
      const targetDate = examDate ? new Date(examDate) : null;
      const daysUntilExam = targetDate ? Math.ceil((targetDate - today) / (1000 * 60 * 60 * 24)) : null;
      
      const prompt = `You are an expert study coach. Create a detailed, personalized study plan for a high school student.

STUDENT INFORMATION:
- Subject: ${subject || "General Study"}
- Goal: ${goal || "Academic improvement"}
- Exam/Project Date: ${examDate || "Not specified"}
- Available Study Days Per Week: ${daysPerWeek}
- Days Until Exam: ${daysUntilExam ? `${daysUntilExam} days` : "Not specified"}

REQUIREMENTS:
Create a study plan with ${Math.min(15, Math.max(7, daysUntilExam ? Math.floor(daysUntilExam / 2) : 10))} steps that are:
1. Realistic and achievable for a high school student
2. Progressive in difficulty
3. Include both learning and review phases
4. Specific and actionable

FORMAT: Respond with ONLY a valid JSON array. Each object must have exactly these fields:
- "dateOrWeek": Use format "Week 1", "Week 2", etc. OR specific dates "2024-07-21"
- "focus": Specific topic or activity (keep under 40 characters)
- "details": Clear 1-2 sentence actionable description

EXAMPLE:
[
  {
    "dateOrWeek": "Week 1",
    "focus": "Foundation Review",
    "details": "Review basic concepts and create a study schedule. Identify weak areas that need extra attention."
  },
  {
    "dateOrWeek": "Week 2", 
    "focus": "Chapter 1-3 Deep Dive",
    "details": "Read chapters thoroughly, take detailed notes, and create flashcards for key terms."
  }
]

Generate the study plan now:`;

      console.log("Making API request to Gemini...");

      const response = await fetch(
        `https://generativelanguage.googleapis.com/v1/models/gemini-1.5-flash:generateContent?key=${GEMINI_API_KEY}`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            contents: [
              {
                parts: [
                  {
                    text: prompt
                  }
                ]
              }
            ],
            generationConfig: {
              temperature: 0.7,
              maxOutputTokens: 2048,
            },
            safetySettings: [
              {
                category: "HARM_CATEGORY_HARASSMENT",
                threshold: "BLOCK_MEDIUM_AND_ABOVE"
              },
              {
                category: "HARM_CATEGORY_HATE_SPEECH",
                threshold: "BLOCK_MEDIUM_AND_ABOVE"
              },
              {
                category: "HARM_CATEGORY_SEXUALLY_EXPLICIT",
                threshold: "BLOCK_MEDIUM_AND_ABOVE"
              },
              {
                category: "HARM_CATEGORY_DANGEROUS_CONTENT",
                threshold: "BLOCK_MEDIUM_AND_ABOVE"
              }
            ]
          }),
        }
      );

      console.log("Response status:", response.status);

      if (!response.ok) {
        let errorMsg = `API Error (${response.status})`;
        try {
          const errorData = await response.json();
          console.error("API Error Details:", errorData);
          if (errorData?.error?.message) {
            errorMsg += `: ${errorData.error.message}`;
          }
        } catch (e) {
          errorMsg += ": Unable to parse error details";
        }
        throw new Error(errorMsg);
      }

      const data = await response.json();
      console.log("Full API Response:", data);

      // Check if response has candidates
      if (!data.candidates || data.candidates.length === 0) {
        console.error("No candidates in response:", data);
        throw new Error("AI service returned no response candidates. Please try again.");
      }

      // Check if candidate has content
      const candidate = data.candidates[0];
      if (!candidate.content || !candidate.content.parts || candidate.content.parts.length === 0) {
        console.error("No content in candidate:", candidate);
        
        // Check if content was blocked
        if (candidate.finishReason === "SAFETY") {
          throw new Error("Content was blocked by safety filters. Please try rephrasing your request.");
        }
        
        throw new Error("AI response has no content. Please try again with different parameters.");
      }

      let text = candidate.content.parts[0].text || "";
      
      if (!text || text.trim().length === 0) {
        throw new Error("AI returned empty response. Please try again.");
      }

      console.log("Raw AI response:", text);

      // Clean up the response text
      text = text.trim();
      
      // Remove markdown code blocks
      if (text.startsWith('```json')) {
        text = text.replace(/^```json\s*/, '').replace(/```\s*$/, '').trim();
      } else if (text.startsWith('```')) {
        text = text.replace(/^```[a-zA-Z]*\s*/, '').replace(/```\s*$/, '').trim();
      }

      console.log("Cleaned response:", text);

      // Try to parse JSON
      let planArr = [];
      try {
        planArr = JSON.parse(text);
      } catch (parseErr) {
        console.error("JSON Parse Error:", parseErr);
        console.error("Raw response:", text);
        
        // Try to extract JSON from the response if it's wrapped in other text
        const jsonMatch = text.match(/\[[\s\S]*\]/);
        if (jsonMatch) {
          try {
            planArr = JSON.parse(jsonMatch[0]);
            console.log("Successfully extracted JSON from text");
          } catch (e) {
            console.error("Failed to parse extracted JSON:", e);
            throw new Error("Could not parse AI response as valid JSON. Please try again.");
          }
        } else {
          throw new Error("AI response does not contain valid JSON format. Please try again.");
        }
      }

      // Validate the response
      if (!Array.isArray(planArr)) {
        console.error("Response is not an array:", planArr);
        throw new Error("AI response is not a valid array. Please try again.");
      }

      if (planArr.length === 0) {
        throw new Error("AI generated an empty study plan. Please try again with more specific details.");
      }

      console.log("Parsed plan array:", planArr);

      // Validate each plan item
      const validPlan = planArr.filter(item => {
        const isValid = item && 
          typeof item === 'object' && 
          item.dateOrWeek && 
          item.focus && 
          item.details;
        
        if (!isValid) {
          console.warn("Invalid plan item:", item);
        }
        
        return isValid;
      });

      console.log("Valid plan items:", validPlan);

      if (validPlan.length === 0) {
        throw new Error("AI generated invalid study plan format. Please try again.");
      }

      setPlan(validPlan);
      console.log("Study plan generated successfully:", validPlan);

    } catch (err) {
      const errorMessage = err.message || "Failed to generate study plan. Please try again.";
      setError(errorMessage);
      console.error("Study Plan Generation Error:", err);
    } finally {
      setLoading(false);
    }
  };

  const copyPlan = () => {
    const planText = plan.map((step, i) => 
      `${i + 1}. ${step.dateOrWeek} - ${step.focus}\n   ${step.details}`
    ).join('\n\n');
    
    navigator.clipboard.writeText(planText).then(() => {
      // Could add a toast notification here
      console.log('Study plan copied to clipboard');
    }).catch(err => {
      console.error('Failed to copy to clipboard:', err);
    });
  };

  return (
    <div className="bg-[#1E1E1E] p-6 rounded-xl w-full md:w-[50%] shadow-lg text-white font-poppins min-h-[calc(80vh-3rem)] my-6 flex flex-col max-h-[calc(80vh-3rem)]">
      <h2 className="text-xl font-bold text-[#A46BEC] mb-3 flex items-center gap-2">
        <FaCalendarAlt className="text-[#A46BEC] text-lg" />
        AI Study Plan Generator
      </h2>
      
      <div className="bg-[#23213a] border border-[#333] rounded-md p-4 mb-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-3">
          <div className="flex flex-col">
            <label className="!text-2xl text-gray-300 !mb-2 !m-0 !mt-2 !ml-0 text-left">Subject *</label>
            <input
              type="text"
              placeholder="e.g., Biology, Mathematics, History"
              value={subject}
              onChange={e => setSubject(e.target.value)}
              className="w-full text-sm p-2.5 border border-[#444] bg-[#1a1830] text-white placeholder-gray-400 rounded focus:outline-none focus:ring-2 focus:ring-[#A46BEC] focus:border-transparent"
            />
          </div>
          
          <div className="flex flex-col">
            <label className="!text-2xl text-gray-300 !mb-2 !m-0 !mt-2 !ml-0 text-left">Goal *</label>
            <input
              type="text"
              placeholder="e.g., Score 90%+, Master concepts"
              value={goal}
              onChange={e => setGoal(e.target.value)}
              className="w-full text-sm p-2.5 border border-[#444] bg-[#1a1830] text-white placeholder-gray-400 rounded focus:outline-none focus:ring-2 focus:ring-[#A46BEC] focus:border-transparent"
            />
          </div>
          
          <div className="flex flex-col">
            <label className="!text-2xl text-gray-300 !mb-2 !m-0 !mt-2 !ml-0 text-left">Exam/Project Date</label>
            <input
              type="date"
              value={examDate}
              onChange={e => setExamDate(e.target.value)}
              min={new Date().toISOString().split('T')[0]}
              className="w-full text-sm p-2.5 border border-[#444] bg-[#1a1830] text-white rounded focus:outline-none focus:ring-2 focus:ring-[#A46BEC] focus:border-transparent"
            />
          </div>
          
          <div className="flex flex-col">
            <label className="!text-2xl text-gray-300 !mb-2 !m-0 !mt-2 !ml-0 text-left">Study Days/Week</label>
            <select
              value={daysPerWeek}
              onChange={e => setDaysPerWeek(Number(e.target.value))}
              className="w-full text-sm p-2.5 border border-[#444] bg-[#1a1830] text-white rounded focus:outline-none focus:ring-2 focus:ring-[#A46BEC] focus:border-transparent"
            >
              {[1,2,3,4,5,6,7].map(num => (
                <option key={num} value={num}>{num} day{num > 1 ? 's' : ''}</option>
              ))}
            </select>
          </div>
        </div>
        
        <button
          onClick={generatePlan}
          disabled={loading || (!subject.trim() && !goal.trim())}
          className="bg-gradient-to-r from-[#7a3ed6] to-[#a46bec] px-6 py-2.5 rounded-md text-sm font-semibold hover:from-[#a46bec] hover:to-[#7a3ed6] transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed w-full flex items-center justify-center gap-2"
        >
          {loading ? (
            <>
              <FaSpinner className="animate-spin" />
              Generating Plan...
            </>
          ) : (
            "Generate Study Plan ✨"
          )}
        </button>
      </div>

      {error && (
        <div className="bg-red-500/20 border border-red-500/40 rounded-lg p-3 mb-4">
          <p className="text-red-300 text-sm">{error}</p>
        </div>
      )}

      {plan.length > 0 && (
        <div className="flex-1 overflow-hidden flex flex-col">
          <div className="flex items-center justify-between mb-3">
            <h3 className="text-lg font-semibold text-[#7a3ed6]">Your Study Plan</h3>
            <button
              onClick={copyPlan}
              className="text-xs bg-[#A46BEC]/20 hover:bg-[#A46BEC]/30 text-[#A46BEC] px-3 py-1 rounded transition-colors"
            >
              Copy Plan
            </button>
          </div>
          
          <div className="flex-1 overflow-y-auto pr-2 scrollbar-thin scrollbar-thumb-[#A46BEC] scrollbar-track-transparent">
            <div className="space-y-3">
              {plan.map((step, i) => (
                <div key={i} className="bg-[#23213a] rounded-lg p-4 border-l-4 border-[#A46BEC] shadow-sm hover:bg-[#2a2440] transition-colors">
                  <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2">
                    <div className="flex items-center gap-2 flex-wrap">
                      <span className="inline-flex items-center justify-center w-6 h-6 bg-[#A46BEC] text-white text-xs font-bold rounded-full">
                        {i + 1}
                      </span>
                      <span className="font-semibold text-white text-sm">
                        {step.dateOrWeek}
                      </span>
                      <span className="text-xs bg-[#A46BEC]/80 text-white px-2 py-1 rounded-full">
                        {step.focus}
                      </span>
                    </div>
                  </div>
                  <p className="text-gray-300 text-sm mt-2 leading-relaxed">
                    {step.details}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default TaskGenerator;