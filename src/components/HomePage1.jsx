import React from 'react';
import { useState } from "react";
import Hariprabodham from '../assets/Hariprabodhamlogo.png';
import Menu from '../assets/menu.png';
import Bell from '../assets/bell.png';
import { FaHome, FaStar, FaSearch, FaUserPlus } from 'react-icons/fa';
import { RiShareForwardFill } from "react-icons/ri";


const Homepage = () => {
  const [selectedGender, setSelectedGender] = useState("male");
  const [activeTab, setActiveTab] = useState("home");

  const handleGenderSelect = (gender) => {
    setSelectedGender(gender);
  };

  const handleTabSelect = (tab) => {
    setActiveTab(tab);
  };

  const profiles = [
    {
      name: "Vivek Vyas",
      age: "26 Years",
      location: "Mumbai",
      caste: "Brahmin",
      image: "path/to/image1.jpg",
      gender: "male",
    },
    {
      name: "Arjun Patel",
      age: "27 Years",
      location: "Gujarat",
      caste: "Patel",
      image: "path/to/image2.jpg",
      gender: "male",
    },
    {
      name: "Nishant Jadeja",
      age: "25 Years",
      location: "Mumbai",
      caste: "Kshatriya",
      image: "path/to/image3.jpg",
      gender: "male",
    },
    {
      name: "Priya Sharma",
      age: "24 Years",
      location: "Delhi",
      caste: "Brahmin",
      image: "path/to/image4.jpg",
      gender: "female",
    },
    {
      name: "Anjali Verma",
      age: "23 Years",
      location: "Pune",
      caste: "Kshatriya",
      image: "path/to/image5.jpg",
      gender: "female",
    },
  ];

  const filteredProfiles = profiles.filter(
    (profile) => profile.gender === selectedGender
  );

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Top Bar */}
      <div className="flex items-center justify-between px-4 py-2 bg-white shadow-sm">
        <button>
          <img src={Menu} alt="Menu" className="h-6" />
        </button>
        <img src={Hariprabodham} alt="Logo" className="h-10" />
        <button>
          <img src={Bell} alt="Notifications" className="h-6" />
        </button>
      </div>

      {/* Search Bar */}
      <div className="relative mt-4 px-4">
        <input
          type="text"
          placeholder="Search"
          className="w-full py-2 pl-4 pr-10 text-sm border rounded-full focus:outline-none focus:ring-2 focus:ring-indigo-500"
        />
        <FaSearch className="absolute top-1/2 transform -translate-y-1/2 right-6 text-gray-500" />
      </div>

      {/* Gender Selection */}
      <div className="flex justify-center space-x-4 mt-4">
        <button
          onClick={() => handleGenderSelect("male")}
          className={`px-4 py-2 rounded-full border-2 font-semibold ${
            selectedGender === "male"
              ? "bg-orange-400 text-white border-orange-400"
              : "bg-white text-gray-800 border-gray-300"
          }`}
        >
          Male
        </button>
        <button
          onClick={() => handleGenderSelect("female")}
          className={`px-4 py-2 rounded-full border-2 font-semibold ${
            selectedGender === "female"
              ? "bg-pink-500 text-white border-pink-500"
              : "bg-white text-gray-800 border-gray-300"
          }`}
        >
          Female
        </button>
        <button
          onClick={() => console.log("Filter clicked")}
          className="px-4 py-2 text-sm font-semibold text-blue-600"
        >
          Filter
        </button>
      </div>

      {/* Profile Cards */}
      <div className="px-4 mt-6 space-y-4">
        {filteredProfiles.map((profile, index) => (
          <div
            key={index}
            className="flex items-center p-4 bg-white rounded-lg shadow-md"
          >
            <img
              src={profile.image}
              alt={profile.name}
              className="w-16 h-16 rounded-full"
            />
            <div className="flex-1 ml-4">
              <h2 className="text-lg font-bold">{profile.name}</h2>
              <p className="text-gray-600">
                {profile.age} | {profile.location} | {profile.caste}
              </p>
              <button
                className="mt-2 px-4 py-2 text-white bg-[#394D7F] rounded-full hover:bg-[#2b3b65]"
                onClick={() => console.log("View Details clicked")}
              >
                View Details
              </button>
            </div>
          </div>
        ))}
      </div>

       {/* Bottom Navigation */}
       <div className="fixed bottom-0 left-0 right-0 bg-white shadow-md">
        <div className="flex justify-around items-center py-2">
          <button
            onClick={() => handleTabSelect("home")}
            className="flex flex-col items-center"
          >
            <FaHome
              className={`h-6 w-8 ${
                activeTab === "home" ? "text-[#F22509]" : "text-gray-400"
              }`}
            />
            {activeTab === "home" && (
              <div className="w-12 h-1 bg-[#F22509] rounded-t-full mt-1"></div>
            )}
          </button>

          <button
            onClick={() => handleTabSelect("UserPlus")}
            className="flex flex-col items-center"
          >
            <FaUserPlus 
              className={`h-6 w-8 ${
                activeTab === "UserPlus" ? "text-[#F22509]" : "text-gray-400"
              }`}
            />
            {activeTab === "UserPlus" && (
              <div className="w-12 h-1 bg-[#F22509] rounded-t-full mt-1"></div>
            )}
          </button>

          <button
            onClick={() => handleTabSelect("ShareForwardFill")}
            className="flex flex-col items-center"
          >
            <RiShareForwardFill
              className={`h-6 w-8 ${
                activeTab === "ShareForwardFill" ? "text-[#F22509]" : "text-gray-400"
              }`}
            />
            {activeTab === "ShareForwardFill" && (
              <div className="w-12 h-1 bg-[#F22509] rounded-t-full mt-1"></div>
            )}
          </button>

          <button
            onClick={() => handleTabSelect("Star")}
            className="flex flex-col items-center"
          >
            <FaStar
              className={`h-6 w-8 ${
                activeTab === "profile" ? "text-[#F22509]" : "text-gray-400"
              }`}
            />
            {activeTab === "Star" && (
              <div className="w-12 h-1 bg-[#F22509] rounded-t-full mt-1"></div>
            )}
          </button>
        </div>
      </div>
    </div>
  );
};
       

export default Homepage;