import React, { useState, useEffect } from 'react';
import { FaInfo, FaTimes } from 'react-icons/fa';
import FeatureShowcaseModal from './FeatureShowcaseModal';

const FeatureButton = () => {
  const [showModal, setShowModal] = useState(false);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    // Check if user has seen the modal before
    const hasSeenModal = localStorage.getItem('eduSpark_hasSeenFeatures');
    
    if (!hasSeenModal) {
      // Auto-open modal on first visit after a short delay
      const timer = setTimeout(() => {
        setShowModal(true);
      }, 1000);
      
      return () => clearTimeout(timer);
    }
  }, []);

  const handleCloseModal = () => {
    setShowModal(false);
    // Mark that user has seen the modal
    localStorage.setItem('eduSpark_hasSeenFeatures', 'true');
  };

  const handleDismissButton = () => {
    setIsVisible(false);
    // Also mark as seen when dismissing the button
    localStorage.setItem('eduSpark_hasSeenFeatures', 'true');
  };

  return (
    <>
      {isVisible && (
        <div className="fixed top-4 right-4 z-40 flex items-center gap-2">
          <div className="bg-gradient-to-r from-[#A46BEC] to-[#7a3ed6] text-white px-4 py-2 rounded-full text-sm font-medium shadow-lg animate-pulse">
            ✨ New to EduSpark?
          </div>
          <button
            onClick={() => setShowModal(true)}
            className="bg-gradient-to-r from-[#A46BEC] to-[#7a3ed6] hover:from-[#7a3ed6] hover:to-[#A46BEC] text-white rounded-full w-12 h-12 shadow-lg flex items-center justify-center font-bold text-lg transition-all duration-200 hover:scale-110"
            title="Explore Features"
          >
            <FaInfo />
          </button>
          <button
            onClick={handleDismissButton}
            className="text-gray-400 hover:text-white transition-colors"
            title="Dismiss"
          >
            <FaTimes />
          </button>
        </div>
      )}

      <FeatureShowcaseModal 
        isOpen={showModal} 
        onClose={handleCloseModal} 
      />
    </>
  );
};

export default FeatureButton;