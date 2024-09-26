import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Hariprabodham from '../assets/Hariprabodhamlogo.png';
import User from '../assets/user.png';
import FemaleUser from '../assets/woman.png'; // Female user image
import Menu from '../assets/menu.png';
import Bell from '../assets/bell.png';
import { FaHome, FaStar, FaSearch, FaUserPlus, FaFilter } from 'react-icons/fa';
import { RiShareForwardFill } from 'react-icons/ri';
import GenderToggle from './GenderToggle';
import ProfilePage from './ProfilePage.jsx';

const Homepage = () => {
  const [selectedGender, setSelectedGender] = useState('male');
  const [searchQuery, setSearchQuery] = useState('');
  const [activeTab, setActiveTab] = useState('home');

  const profiles = [
    {
      id: 1,
      name: 'Vivek Vyas',
      age: '26 Years',
      location: 'Mumbai',
      caste: 'Brahmin',
      image: User,
      gender: 'male',
    },
    {
      id: 2,
      name: 'Arjun Patel',
      age: '27 Years',
      location: 'Gujarat',
      caste: 'Patel',
      image: User,
      gender: 'male',
    },
    {
      id: 3,
      name: 'Mehul Patel',
      age: '22 Years',
      location: 'Mumbai',
      caste: 'Patel',
      image: User,
      gender: 'male',
    },
    {
      id: 4,
      name: 'Nishant Jadeja',
      age: '25 Years',
      location: 'Mumbai',
      caste: 'Kshatriya',
      image: User,
      gender: 'male',
    },
    {
      id: 5,
      name: 'Priya Sharma',
      age: '24 Years',
      location: 'Delhi',
      caste: 'Brahmin',
      image: FemaleUser,
      gender: 'female',
    },
    {
      id: 6,
      name: 'Anjali Verma',
      age: '23 Years',
      location: 'Pune',
      caste: 'Kshatriya',
      image: FemaleUser,
      gender: 'female',
    },
  ];

  // Gender Toggle Handler
  const handleGenderChange = (gender) => {
    setSelectedGender(gender);
  };

  // Search Handler
  const handleSearch = (e) => {
    setSearchQuery(e.target.value);
  };

  // Filter profiles by gender and search query
  const filteredProfiles = profiles.filter(
    (profile) =>
      profile.gender === selectedGender &&
      profile.name.toLowerCase().includes(searchQuery.toLowerCase())
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

      {/* Search Bar with Gender Toggle */}
      <div className="flex justify-between items-center px-4 mt-4">
        <div className="relative flex-grow">
          <input
            type="text"
            value={searchQuery}
            onChange={handleSearch}
            placeholder="Search"
            className="w-full py-3 pl-10 pr-10 text-sm bg-white text-gray-700 rounded-md"
            style={{
              border: '1px solid #EAEAEA',
              borderRadius: '8px',
            }}
          />
          <FaSearch className="absolute top-1/2 transform -translate-y-1/2 left-3 text-gray-500" />
          <FaFilter className="absolute top-1/2 transform -translate-y-1/2 right-3 text-gray-500" />
        </div>
        <div className="ml-4">
          <GenderToggle onGenderChange={handleGenderChange} />
        </div>
      </div>

      {/* Profile Cards */}
      <div className="px-4 mt-6 mb-16 space-y-4">
        {filteredProfiles.length > 0 ? (
          filteredProfiles.map((profile) => (
            <div key={profile.id} className="flex items-center p-4 bg-white rounded-lg shadow-md">
              <img src={profile.image} alt={profile.name} className="w-16 h-16 rounded-full" />
              <div className="flex-1 ml-4">
                <h2 className="text-lg font-bold">{profile.name}</h2>
                <p className="text-gray-600">
                  {profile.age} | {profile.location} | {profile.caste}
                </p>
                <Link to={<ProfilePage />}>
                  <button className="mt-2 px-4 py-2 text-white bg-[#394D7F] rounded-full hover:bg-[#2b3b65]">
                    View Details
                  </button>
                </Link>
              </div>
            </div>
          ))
        ) : (
          <p className="text-gray-500 text-center">No profiles found</p>
        )}
      </div>

      {/* Bottom Navigation */}
      <div className="fixed bottom-0 left-0 right-0 bg-white shadow-md">
        <div className="flex justify-around items-center py-2">
          <button onClick={() => setActiveTab('home')} className="flex flex-col items-center">
            <FaHome className={`h-6 w-8 ${activeTab === 'home' ? 'text-[#F22509]' : 'text-gray-400'}`} />
            {activeTab === 'home' && <div className="w-12 h-1 bg-[#F22509] rounded-t-full mt-1"></div>}
          </button>

          <button onClick={() => setActiveTab('UserPlus')} className="flex flex-col items-center">
            <FaUserPlus className={`h-6 w-8 ${activeTab === 'UserPlus' ? 'text-[#F22509]' : 'text-gray-400'}`} />
            {activeTab === 'UserPlus' && <div className="w-12 h-1 bg-[#F22509] rounded-t-full mt-1"></div>}
          </button>

          <button onClick={() => setActiveTab('ShareForwardFill')} className="flex flex-col items-center">
            <RiShareForwardFill className={`h-6 w-8 ${activeTab === 'ShareForwardFill' ? 'text-[#F22509]' : 'text-gray-400'}`} />
            {activeTab === 'ShareForwardFill' && <div className="w-12 h-1 bg-[#F22509] rounded-t-full mt-1"></div>}
          </button>

          <button onClick={() => setActiveTab('Star')} className="flex flex-col items-center">
            <FaStar className={`h-6 w-8 ${activeTab === 'Star' ? 'text-[#F22509]' : 'text-gray-400'}`} />
            {activeTab === 'Star' && <div className="w-12 h-1 bg-[#F22509] rounded-t-full mt-1"></div>}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Homepage;
