import React, { useState } from 'react';
import { MdOutlineDashboard } from 'react-icons/md';
import { FaStar, FaChevronRight, FaUserPlus } from 'react-icons/fa';
import { RiShareForwardFill } from 'react-icons/ri';
import User from '../assets/user.png'; // Path to the user image

const MenuPage = ({ isMenuOpen, setIsMenuOpen }) => {
  return (
    <div
      className={`fixed top-0 left-0 h-full w-64 bg-white shadow-lg z-50 transform ${
        isMenuOpen ? 'translate-x-0' : '-translate-x-full'
      } transition-transform duration-300`}
    >
      <div className="flex items-center justify-between p-4">
        <img src={User} alt="User" className="w-10 h-10 rounded-full" />
        <span className="mr-8 text-lg font-semibold">Id</span>
      </div>
      <div className="border-t border-gray-200">
        <div className="flex items-center p-4 hover:bg-gray-100">
          <MdOutlineDashboard className="w-6 h-6 text-gray-700" />
          <span className="ml-4">Master</span>
          <FaChevronRight className="ml-auto text-gray-400" />
        </div>
        <div className="flex items-center p-4 hover:bg-gray-100">
          <FaStar className="w-6 h-6 text-gray-700" />
          <span className="ml-4">Favourite</span>
          <FaChevronRight className="ml-auto text-gray-400" />
        </div>
        <div className="flex items-center p-4 hover:bg-gray-100">
          <RiShareForwardFill className="w-6 h-6 text-gray-700" />
          <span className="ml-4">Share Profile</span>
          <FaChevronRight className="ml-auto text-gray-400" />
        </div>
        <div className="flex items-center p-4 hover:bg-gray-100">
          <FaUserPlus className="w-6 h-6 text-gray-700" />
          <span className="ml-4">Log Out</span>
          <FaChevronRight className="ml-auto text-gray-400" />
        </div>
      </div>
      <button
        onClick={() => setIsMenuOpen(false)}
        className="absolute top-0 right-0 mt-4 mr-4 text-gray-400 focus:outline-none"
      >
        &times;
      </button>
    </div>
  );
};

export default MenuPage;
