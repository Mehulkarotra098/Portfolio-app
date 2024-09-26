import React, { useState, useEffect } from 'react';
import { IoMdBowtie } from 'react-icons/io';

const GenderToggle = ({ onGenderChange }) => {
  const [isFemale, setIsFemale] = useState(false);

  // Toggle gender and notify the parent component via onGenderChange prop
  const handleToggle = () => {
    setIsFemale(!isFemale);
    onGenderChange(!isFemale ? 'female' : 'male'); // Calling the parent's function
  };

  // Ensure gender is updated when the state changes
  useEffect(() => {
    onGenderChange(isFemale ? 'female' : 'male');
  }, [isFemale, onGenderChange]);

  return (
    <div className="relative mx-auto my-2 w-24 h-10 sm:w-28 sm:h-12">
      <input
        type="checkbox"
        id="checkbox"
        className="absolute top-0 right-0 bottom-0 left-0 w-full h-full opacity-0 cursor-pointer z-10"
        checked={isFemale}
        onChange={handleToggle}
      />
      <div
        id="path"
        className={`w-full h-full p-1 rounded-full transition-colors duration-800 ${isFemale ? 'bg-pink-100' : 'bg-gray-100'} shadow-lg`}
      ></div>
      <div
        id="knob"
        className={`absolute top-1/2 transform -translate-y-1/2 left-1.5 w-8 h-8 sm:w-10 sm:h-10 bg-white rounded-full shadow-md transition-transform duration-600 ${isFemale ? ' rotate-[135deg]' : ''}`}
      >
        <div
          id="bow"
          className={`absolute left-1/2 transform -translate-x-1/2 bottom-[-4px] w-3 transition-colors duration-200 ${isFemale ? 'text-pink-500' : 'text-blue-500'}`}
        >
          <IoMdBowtie className="text-sm" />
        </div>
      </div>
      <div id="gender" className="absolute top-1/2 right-[10px] text-xs sm:text-sm font-roboto transform -translate-y-1/2 flex items-center">
        {/* Female Text */}
        <div
          id="fe"
          className={`transition-all duration-600 ${isFemale ? 'text-pink-500' : 'text-transparent'}`}
        >
          FE
        </div>
        
        {/* Male Text */}
        <div
          id="male"
          className={`relative transition-all duration-200 ${isFemale ? 'text-transparent' : 'text-blue-500'}`}
        >
          <span className={`relative z-10 transition-all duration-200 ${isFemale ? 'opacity-0' : 'opacity-100'}`}>MALE</span>
          <span
            className={`absolute top-0 left-[50%] transform -translate-x-[50%] overflow-hidden whitespace-pre transition-all duration-200 ${isFemale ? 'text-pink-500 w-full' : 'w-0 text-transparent'}`}
          >
            MALE
          </span>
        </div>
      </div>
    </div>
  );
};

export default GenderToggle;