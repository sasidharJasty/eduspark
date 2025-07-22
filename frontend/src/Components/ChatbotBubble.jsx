import React, { useState } from "react";

const GEMINI_API_KEY = "AIzaSyCdpr_zkmJJEDtIfH9skmqT8VTuc7bSbp0";

const ChatbotBubble = () => {
  const [open, setOpen] = useState(false);
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState([
    { from: "bot", text: "Hi! I'm your EduSpark AI assistant. Ask me anything about your studies, homework, or learning strategies!" },
  ]);
  const [loading, setLoading] = useState(false);

  const sendMessage = async () => {
    if (!input.trim()) return;
    
    const userMsg = { from: "user", text: input };
    setMessages((msgs) => [...msgs, userMsg]);
    const userInput = input;
    setInput("");
    setLoading(true);

    try {
      // Enhanced prompt for educational assistance
      const prompt = `You are EduSpark AI, a helpful educational assistant for high school students. 
      
Respond to this student question in a friendly, encouraging, and educational manner. Keep responses concise but informative (under 200 words). 
If it's about studying, provide practical tips. If it's about homework, guide them to think through the problem rather than giving direct answers.

Student question: ${userInput}`;

      console.log("Sending request to Gemini API...");

      // Use the correct Gemini API endpoint - v1 instead of v1beta
      const response = await fetch(
        `https://generativelanguage.googleapis.com/v1/models/gemini-2.5-flash:generateContent?key=${GEMINI_API_KEY}`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
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
              maxOutputTokens: 256,
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
      console.log("Response headers:", response.headers);

      if (!response.ok) {
        let errorMsg = `API Error (${response.status})`;
        try {
          const errorData = await response.json();
          console.error("API Error Details:", errorData);
          if (errorData?.error?.message) {
            errorMsg += `: ${errorData.error.message}`;
          }
        } catch (e) {
          console.error("Failed to parse error response:", e);
        }
        throw new Error(errorMsg);
      }

      const data = await response.json();
      console.log("API Response:", data);

      // Extract the response text using the correct path
      let botReply = data?.candidates?.[0]?.content?.parts?.[0]?.text || 
                     "Sorry, I couldn't generate a response. Please try again.";

      // Clean up the response
      botReply = botReply.trim();

      if (!botReply || botReply.length === 0) {
        botReply = "I'm sorry, I couldn't generate a proper response. Could you try rephrasing your question?";
      }

      setMessages((msgs) => [...msgs, { from: "bot", text: botReply }]);
      
    } catch (error) {
      console.error("Chatbot API Error:", error);
      
      let errorMessage = "Oops! I'm having trouble connecting right now. Please try again in a moment.";
      
      if (error.message.includes("400")) {
        errorMessage = "I couldn't understand your question. Could you try rephrasing it?";
      } else if (error.message.includes("429")) {
        errorMessage = "I'm getting too many requests right now. Please wait a moment and try again.";
      } else if (error.message.includes("403")) {
        errorMessage = "I'm having authentication issues. Please contact support.";
      } else if (error.message.includes("404")) {
        errorMessage = "The AI service is temporarily unavailable. Please try again later.";
      }
      
      setMessages((msgs) => [
        ...msgs,
        { from: "bot", text: errorMessage },
      ]);
    } finally {
      setLoading(false);
    }
  };

  const clearChat = () => {
    setMessages([
      { from: "bot", text: "Hi! I'm your EduSpark AI assistant. Ask me anything about your studies, homework, or learning strategies!" },
    ]);
  };

  return (
    <>
      {open && (
        <div className="fixed bottom-24 right-6 w-80 h-96 bg-[#1E1E1E] rounded-xl shadow-2xl flex flex-col z-50 font-poppins text-white border border-[#333]">
          {/* Header */}
          <div className="flex items-center justify-between p-4 border-b border-[#333]">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
              <span className="text-sm font-semibold text-[#A46BEC]">EduSpark AI</span>
            </div>
            <div className="flex gap-1">
              <button
                onClick={clearChat}
                className="text-gray-400 hover:text-white text-xs px-2 py-1 rounded transition"
                title="Clear chat"
              >
                Clear
              </button>
              <button
                onClick={() => setOpen(false)}
                className="text-gray-400 hover:text-white text-sm w-6 h-6 flex items-center justify-center rounded transition"
                title="Close chat"
              >
                ×
              </button>
            </div>
          </div>

          {/* Messages */}
          <div className="flex-grow overflow-y-auto p-3 space-y-3 scrollbar-thin scrollbar-thumb-[#A46BEC] scrollbar-track-transparent">
            {messages.map((msg, i) => (
              <div
                key={i}
                className={`flex ${msg.from === "user" ? "justify-end" : "justify-start"}`}
              >
                <div
                  className={`max-w-[85%] px-3 py-2 rounded-lg text-sm leading-relaxed ${
                    msg.from === "bot"
                      ? "bg-[#A46BEC] text-white rounded-bl-sm"
                      : "bg-[#7a3ed6] text-white rounded-br-sm"
                  }`}
                >
                  {msg.text}
                </div>
              </div>
            ))}
            {loading && (
              <div className="flex justify-start">
                <div className="bg-[#A46BEC] text-white px-3 py-2 rounded-lg rounded-bl-sm text-sm">
                  <div className="flex items-center gap-1">
                    <div className="flex space-x-1">
                      <div className="w-1 h-1 bg-white rounded-full animate-bounce"></div>
                      <div className="w-1 h-1 bg-white rounded-full animate-bounce" style={{animationDelay: '0.1s'}}></div>
                      <div className="w-1 h-1 bg-white rounded-full animate-bounce" style={{animationDelay: '0.2s'}}></div>
                    </div>
                    <span className="ml-2 text-xs opacity-80">thinking...</span>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Input */}
          <div className="p-3 border-t border-[#333]">
            <div className="flex gap-2">
              <input
                className="flex-grow rounded-lg px-3 py-2 text-sm bg-[#23213a] border border-[#444] text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#A46BEC] focus:border-transparent"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => {
                  if (e.key === "Enter" && !e.shiftKey) {
                    e.preventDefault();
                    sendMessage();
                  }
                }}
                placeholder="Ask me anything..."
                disabled={loading}
                maxLength={500}
              />
              <button
                onClick={sendMessage}
                disabled={loading || !input.trim()}
                className="bg-[#A46BEC] hover:bg-[#7a3ed6] disabled:bg-gray-600 disabled:cursor-not-allowed px-3 py-2 rounded-lg font-semibold transition text-sm min-w-[60px]"
              >
                {loading ? "..." : "Send"}
              </button>
            </div>
            <div className="text-xs text-gray-400 mt-1 text-center">
              Press Enter to send • Shift+Enter for new line
            </div>
          </div>
        </div>
      )}

      <button
        onClick={() => setOpen(!open)}
        className={`fixed bottom-6 right-6 bg-gradient-to-r from-[#A46BEC] to-[#7a3ed6] hover:from-[#7a3ed6] hover:to-[#A46BEC] text-white rounded-full w-14 h-14 shadow-lg flex items-center justify-center font-bold text-2xl z-50 select-none transition-all duration-200 ${
          open ? 'rotate-180' : ''
        }`}
        aria-label="Toggle chatbot"
        title={open ? "Close EduSpark AI" : "Chat with EduSpark AI"}
      >
        {open ? "×" : "💬"}
      </button>
    </>
  );
};

export default ChatbotBubble;
