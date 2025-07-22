import React, { useState } from 'react';
import { 
  FaTimes, 
  FaRobot, 
  FaVideo, 
  FaComments, 
  FaChartBar,
  FaGraduationCap,
  FaChalkboardTeacher,
  FaCalendarCheck,
  FaPlayCircle,
  FaUsers,
  FaCreditCard,
  FaShieldAlt,
  FaMobile,
  FaArrowRight,
  FaCheck
} from 'react-icons/fa';

const FeatureShowcaseModal = ({ isOpen, onClose }) => {
  const [activeTab, setActiveTab] = useState('overview');

  if (!isOpen) return null;

  const tabs = [
    { id: 'overview', label: 'Overview', icon: FaGraduationCap },
    { id: 'ai-features', label: 'AI Features', icon: FaRobot },
    { id: 'tutoring', label: 'Live Tutoring', icon: FaVideo },
    { id: 'accounts', label: 'Account Types', icon: FaUsers },
    { id: 'how-to-use', label: 'How to Use', icon: FaPlayCircle },
  ];

  const renderOverview = () => (
    <div className="space-y-6">
      <div className="text-center">
        <h3 className="text-2xl font-bold text-[#A46BEC] mb-4">Welcome to EduSpark! 🎓</h3>
        <p className="text-gray-300 text-lg leading-relaxed">
          EduSpark is a comprehensive educational platform that combines AI-powered task management 
          with live tutoring capabilities. Transform your learning journey with intelligent study 
          plans and connect with expert mentors through integrated video sessions.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-gradient-to-br from-[#A46BEC]/20 to-[#7a3ed6]/20 rounded-lg p-6 border border-[#A46BEC]/30">
          <FaRobot className="text-3xl text-[#A46BEC] mb-3" />
          <h4 className="text-lg font-semibold text-white mb-2">AI-Powered Learning</h4>
          <p className="text-gray-300 text-sm">
            Break down complex goals into manageable steps using Gemini AI. Get personalized study plans 
            tailored to your subjects and timeline.
          </p>
        </div>

        <div className="bg-gradient-to-br from-[#7a3ed6]/20 to-[#A46BEC]/20 rounded-lg p-6 border border-[#7a3ed6]/30">
          <FaVideo className="text-3xl text-[#7a3ed6] mb-3" />
          <h4 className="text-lg font-semibold text-white mb-2">Live Tutoring</h4>
          <p className="text-gray-300 text-sm">
            Connect with expert mentors through built-in video conferencing. Get real-time help with 
            screen sharing, whiteboards, and file sharing.
          </p>
        </div>

        <div className="bg-gradient-to-br from-[#A46BEC]/20 to-[#7a3ed6]/20 rounded-lg p-6 border border-[#A46BEC]/30">
          <FaComments className="text-3xl text-[#A46BEC] mb-3" />
          <h4 className="text-lg font-semibold text-white mb-2">Smart Chatbot</h4>
          <p className="text-gray-300 text-sm">
            Get instant help with your studies through our AI assistant. Receive study tips and 
            guidance without giving direct answers.
          </p>
        </div>

        <div className="bg-gradient-to-br from-[#7a3ed6]/20 to-[#A46BEC]/20 rounded-lg p-6 border border-[#7a3ed6]/30">
          <FaChartBar className="text-3xl text-[#7a3ed6] mb-3" />
          <h4 className="text-lg font-semibold text-white mb-2">Progress Tracking</h4>
          <p className="text-gray-300 text-sm">
            Monitor your learning progress with detailed analytics. Track completed tasks, 
            session history, and improvement metrics.
          </p>
        </div>
      </div>
    </div>
  );

  const renderAIFeatures = () => (
    <div className="space-y-6">
      <div className="text-center">
        <FaRobot className="text-4xl text-[#A46BEC] mx-auto mb-4" />
        <h3 className="text-2xl font-bold text-[#A46BEC] mb-2">AI-Powered Task Management</h3>
        <p className="text-gray-300">Leverage cutting-edge AI to optimize your learning experience</p>
      </div>

      <div className="grid grid-cols-1 gap-4">
        {[
          {
            title: 'Smart Goal Breakdown',
            description: 'Use Gemini AI to automatically break down large educational goals into step-by-step actionable plans',
            icon: '🎯'
          },
          {
            title: 'Subject-Specific Planning',
            description: 'Generate tasks tailored to specific subjects (Math, Science, English, etc.)',
            icon: '📚'
          },
          {
            title: 'Time Estimation',
            description: 'Each generated task includes estimated completion time for better planning',
            icon: '⏱️'
          },
          {
            title: 'Progress Tracking',
            description: 'Mark tasks as complete and track your learning journey with visual progress indicators',
            icon: '📈'
          },
          {
            title: 'Interactive Task Cards',
            description: 'View detailed task information with categories, priorities, and time estimates',
            icon: '🎴'
          },
          {
            title: 'Context-Aware Chatbot',
            description: 'Get personalized study assistance and educational guidance through AI chat',
            icon: '💬'
          }
        ].map((feature, index) => (
          <div key={index} className="flex items-start gap-4 p-4 bg-[#23213a] rounded-lg border border-[#333]">
            <span className="text-2xl">{feature.icon}</span>
            <div>
              <h4 className="text-lg font-semibold text-white mb-1">{feature.title}</h4>
              <p className="text-gray-300 text-sm">{feature.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );

  const renderTutoring = () => (
    <div className="space-y-6">
      <div className="text-center">
        <FaVideo className="text-4xl text-[#7a3ed6] mx-auto mb-4" />
        <h3 className="text-2xl font-bold text-[#7a3ed6] mb-2">Live Tutoring & Video Sessions</h3>
        <p className="text-gray-300">Connect with expert mentors through advanced video conferencing</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-4">
          <h4 className="text-lg font-semibold text-white flex items-center gap-2">
            <FaVideo className="text-[#7a3ed6]" />
            Video Conferencing Features
          </h4>
          {[
            'High-quality WebRTC video calls',
            'Screen sharing for demonstrations',
            'Interactive collaborative whiteboard',
            'Real-time file sharing',
            'Session recording (with consent)',
            'Text chat alongside video'
          ].map((feature, index) => (
            <div key={index} className="flex items-center gap-2">
              <FaCheck className="text-green-400 text-sm" />
              <span className="text-gray-300 text-sm">{feature}</span>
            </div>
          ))}
        </div>

        <div className="space-y-4">
          <h4 className="text-lg font-semibold text-white flex items-center gap-2">
            <FaCalendarCheck className="text-[#A46BEC]" />
            Session Management
          </h4>
          {[
            'Easy session booking system',
            'Mentor availability calendar',
            'Automated session reminders',
            'Session history and notes',
            'Rating and feedback system',
          ].map((feature, index) => (
            <div key={index} className="flex items-center gap-2">
              <FaCheck className="text-green-400 text-sm" />
              <span className="text-gray-300 text-sm">{feature}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="bg-gradient-to-r from-[#7a3ed6]/20 to-[#A46BEC]/20 rounded-lg p-6 border border-[#7a3ed6]/30">
        <h4 className="text-lg font-semibold text-white mb-3">🛡️ Security Features</h4>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm text-gray-300">
          <div>• Meeting passwords for sensitive sessions</div>
          <div>• Waiting rooms with mentor control</div>
          <div>• End-to-end encryption</div>
          <div>• Session timeout protection</div>
        </div>
      </div>
    </div>
  );

  const renderAccounts = () => (
    <div className="space-y-6">
      <div className="text-center">
        <FaUsers className="text-4xl text-[#A46BEC] mx-auto mb-4" />
        <h3 className="text-2xl font-bold text-[#A46BEC] mb-2">Account Types & Features</h3>
        <p className="text-gray-300">Choose the account type that fits your learning or teaching goals</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-gradient-to-br from-[#A46BEC]/20 to-[#7a3ed6]/20 rounded-lg p-6 border border-[#A46BEC]/30">
          <div className="flex items-center gap-3 mb-4">
            <FaGraduationCap className="text-3xl text-[#A46BEC]" />
            <h4 className="text-xl font-bold text-white">Student Account</h4>
          </div>
          
          <div className="space-y-3">
            {[
              'AI task generation and study plans',
              'Browse and connect with mentors',
              'Book tutoring sessions',
              'Join live video sessions',
              'Track learning progress',
              'Access shared study materials',
              'Connect with peer students'
            ].map((feature, index) => (
              <div key={index} className="flex items-start gap-2">
                <FaCheck className="text-green-400 text-sm mt-0.5 flex-shrink-0" />
                <span className="text-gray-300 text-sm">{feature}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-gradient-to-br from-[#7a3ed6]/20 to-[#A46BEC]/20 rounded-lg p-6 border border-[#7a3ed6]/30">
          <div className="flex items-center gap-3 mb-4">
            <FaChalkboardTeacher className="text-3xl text-[#7a3ed6]" />
            <h4 className="text-xl font-bold text-white">Mentor Account</h4>
          </div>
          
          <div className="space-y-3">
            {[
              'Showcase expertise and qualifications',
              'Set availability',
              'Manage student relationships',
              'Accept/decline session requests',
              'Use advanced teaching tools',
              'Share educational resources'
            ].map((feature, index) => (
              <div key={index} className="flex items-start gap-2">
                <FaCheck className="text-green-400 text-sm mt-0.5 flex-shrink-0" />
                <span className="text-gray-300 text-sm">{feature}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      
    </div>
  );

  const renderHowToUse = () => (
    <div className="space-y-6">
      <div className="text-center">
        <FaPlayCircle className="text-4xl text-[#A46BEC] mx-auto mb-4" />
        <h3 className="text-2xl font-bold text-[#A46BEC] mb-2">How to Use EduSpark</h3>
        <p className="text-gray-300">Get started with these simple steps</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="space-y-6">
          <h4 className="text-xl font-semibold text-white flex items-center gap-2">
            <FaGraduationCap className="text-[#A46BEC]" />
            For Students
          </h4>
          
          {[
            {
              step: 1,
              title: 'Create Your Account',
              description: 'Sign up and choose "Student" as your account type. Complete your profile with subjects of interest.',
              icon: '📝'
            },
            {
              step: 2,
              title: 'Generate Study Plans',
              description: 'Use our AI tool to break down complex learning goals into manageable tasks with timelines.',
              icon: '🤖'
            },
            {
              step: 3,
              title: 'Find Mentors',
              description: 'Browse qualified mentors by subject expertise, ratings, and availability.',
              icon: '🔍'
            },
            {
              step: 4,
              title: 'Book Sessions',
              description: 'Schedule tutoring sessions at times that work for both you and your mentor.',
              icon: '📅'
            },
            {
              step: 5,
              title: 'Learn & Grow',
              description: 'Join video sessions, track progress, and achieve your educational goals.',
              icon: '🎯'
            }
          ].map((item, index) => (
            <div key={index} className="flex gap-4 items-start">
              <div className="w-8 h-8 bg-[#A46BEC] rounded-full flex items-center justify-center flex-shrink-0">
                <span className="text-white font-bold text-sm">{item.step}</span>
              </div>
              <div>
                <h5 className="font-semibold text-white mb-1 flex items-center gap-2">
                  <span>{item.icon}</span>
                  {item.title}
                </h5>
                <p className="text-gray-300 text-sm">{item.description}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="space-y-6">
          <h4 className="text-xl font-semibold text-white flex items-center gap-2">
            <FaChalkboardTeacher className="text-[#7a3ed6]" />
            For Mentors
          </h4>
          
          {[
            {
              step: 1,
              title: 'Set Up Profile',
              description: 'Create a mentor account and showcase your expertise, qualifications, and teaching experience.',
              icon: '👨‍🏫'
            },
            {
              step: 2,
              title: 'Define Availability',
              description: 'Set your available hours, subjects you teach.',
              icon: '⏰'
            },
            {
              step: 3,
              title: 'Receive Requests',
              description: 'Students will find and send you session requests based on your expertise.',
              icon: '📬'
            },
            {
              step: 4,
              title: 'Conduct Sessions',
              description: 'Use our built-in video tools, whiteboard, and file sharing for effective tutoring.',
              icon: '🎥'
            },

          ].map((item, index) => (
            <div key={index} className="flex gap-4 items-start">
              <div className="w-8 h-8 bg-[#7a3ed6] rounded-full flex items-center justify-center flex-shrink-0">
                <span className="text-white font-bold text-sm">{item.step}</span>
              </div>
              <div>
                <h5 className="font-semibold text-white mb-1 flex items-center gap-2">
                  <span>{item.icon}</span>
                  {item.title}
                </h5>
                <p className="text-gray-300 text-sm">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="bg-gradient-to-r from-[#A46BEC]/20 to-[#7a3ed6]/20 rounded-lg p-6 border border-[#A46BEC]/30 text-center">
        <h4 className="text-lg font-semibold text-white mb-2">Ready to get started?</h4>
        <p className="text-gray-300 mb-4">Join thousands of students and mentors already using EduSpark</p>
        <button
          onClick={onClose}
          className="bg-gradient-to-r from-[#A46BEC] to-[#7a3ed6] hover:from-[#7a3ed6] hover:to-[#A46BEC] text-white px-6 py-2 rounded-lg font-semibold transition-all duration-200 flex items-center gap-2 mx-auto"
        >
          Start Your Journey <FaArrowRight />
        </button>
      </div>
    </div>
  );

  const renderTabContent = () => {
    switch (activeTab) {
      case 'overview':
        return renderOverview();
      case 'ai-features':
        return renderAIFeatures();
      case 'tutoring':
        return renderTutoring();
      case 'accounts':
        return renderAccounts();
      case 'how-to-use':
        return renderHowToUse();
      default:
        return renderOverview();
    }
  };

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50 p-4">
      <div className="bg-[#1E1E1E] rounded-xl max-w-6xl w-full max-h-[90vh] overflow-hidden border border-[#333] shadow-2xl">
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-[#333] bg-gradient-to-r from-[#A46BEC]/10 to-[#7a3ed6]/10">
          <div>
            <h2 className="text-2xl font-bold text-white flex items-center gap-2">
              <span className="text-[#A46BEC]">✨</span>
              EduSpark Platform Guide
            </h2>
            <p className="text-gray-400 text-sm mt-1">Discover all features and learn how to use EduSpark</p>
          </div>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-white transition-colors p-2"
          >
            <FaTimes className="text-xl" />
          </button>
        </div>

        {/* Tab Navigation */}
        <div className="flex border-b border-[#333] bg-[#23213a] overflow-x-auto">
          {tabs.map((tab) => {
            const Icon = tab.icon;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center gap-2 px-6 py-4 font-medium transition-colors whitespace-nowrap ${
                  activeTab === tab.id
                    ? 'text-[#A46BEC] border-b-2 border-[#A46BEC] bg-[#A46BEC]/5'
                    : 'text-gray-400 hover:text-white hover:bg-[#2a2440]'
                }`}
              >
                <Icon className="text-lg" />
                {tab.label}
              </button>
            );
          })}
        </div>

        {/* Content */}
        <div className="p-6 overflow-y-auto max-h-[calc(90vh-200px)] scrollbar-thin scrollbar-thumb-[#A46BEC] scrollbar-track-transparent">
          {renderTabContent()}
        </div>
      </div>
    </div>
  );
};

export default FeatureShowcaseModal;