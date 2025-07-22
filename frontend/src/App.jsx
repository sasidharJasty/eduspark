import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import Navbar from "./Components/Navbar";
import pattern from "./assets/pattern.png";
import FeatureShowcaseModal from './Components/FeatureShowcaseModal';

import { motion } from 'framer-motion';
import { TypeAnimation } from 'react-type-animation';
import "./App.css";

import TaskGenerator from "./Components/TaskGenerator";
import TodoList from "./Components/TodoList";
import ChatbotBubble from "./Components/ChatbotBubble";

function App() {
  const [count, setCount] = useState(0);
  const [showFeatureModal, setShowFeatureModal] = useState(false);

  return (
    <div className="bg-[--background] relative">
      <div className="container">
        <div className="text-box pt-20 typewriter text-strt left-10">
          <TypeAnimation
            sequence={[
              'EduSpark',
              1300,
              "Let's Learn",
              900,
              'Grow with us!',
              900,
              'Help the community',
              900,
              'Learn with Others!',
              900
            ]}
            wrapper="span"
            speed={50}
            repeat={Infinity}
          />
          <h4 className="font-bold !text-white">Your Path to Academic Success<br /></h4>
          <p className="text-gray-300 w-2/5 ml-5 mt-5 mb-11">
            EduSpark is your one-stop platform for all your academic assistance needs.
            Whether you need help with math, science, history, or any other subject,
            EduSpark connects you with dedicated volunteers ready to assist you.
            Our user-friendly interface makes it easy for anyone to find and receive help quickly.
            Join EduSpark today and discover how effortless getting the academic support you need can be!
          </p>
          <div className='flex flex-col md:flex-row gap-4'>
          <a className='ml-5 mt-10 btn rounded-lg px-20 py-3 text-bold hover:bg-white ' href="/login/">Get Started</a>
          <button
            onClick={() => setShowFeatureModal(true)}
            className=" ml-5 mt-10 btn rounded-lg px-20 py-3 text-bold hover:bg-white  bg-gradient-to-r from-[#A46BEC] to-[#7a3ed6] hover:from-[#7a3ed6] hover:to-[#A46BEC] text-white px-6 py-3 rounded-lg font-semibold transition-all duration-200 flex items-center gap-2 shadow-lg hover:shadow-xl"
          >
            🚀
            Explore All Features
          </button>
          </div>
        </div>

        {/* 💡 New impressive features below */}
      </div>

      <Navbar />

      <img src={pattern} style={{ height: "100vh" }} className="absolute top-0 right-0 z-[9] hue-rotate-[-250deg]" />

      <FeatureShowcaseModal 
        isOpen={showFeatureModal} 
        onClose={() => setShowFeatureModal(false)} 
      />
    </div>
  );
}

export default App;
