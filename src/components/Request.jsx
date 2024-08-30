import React from 'react';

const UserCard = ({ user }) => {
  return (
    <div className="flex items-center justify-between p-4 bg-white border border-gray-300 rounded-lg shadow-md mb-4">
      <div className="flex items-center">
        <img 
          src={user.image} 
          alt={user.name} 
          className="w-16 h-16 rounded-lg mr-4" 
        />
        <div>
          <h2 className="text-lg font-semibold text-gray-900">{user.name}</h2>
          <p className="text-sm text-gray-600">{user.age} Years | {user.location} | {user.cast}</p>
        </div>
      </div>
      <button className="bg-red-500 text-white text-sm px-4 py-2 rounded-full hover:bg-red-600">
        Edit Profile
      </button>
    </div>
  );
};

const Request = () => {
  const users = [
    {
      name: 'Vivek Vyas',
      age: 26,
      location: 'Mumbai',
      cast: 'Brahmin',
      image: 'path_to_vivek_image',
    },
    {
      name: 'Arjun Patel',
      age: 27,
      location: 'Gujarat',
      cast: 'Patel',
      image: 'path_to_arjun_image',
    },
    {
      name: 'Nishant Jadeja',
      age: 25,
      location: 'Mumbai',
      cast: 'Kshatriya',
      image: 'path_to_nishant_image',
    },
  ];

  return (
    <div className="min-h-screen bg-gray-100 p-4">
      {/* Top Header */}
      <div className="flex justify-between items-center mb-4">
        {/* Hamburger Menu Button */}
        <button className="text-gray-500 focus:outline-none">
          <img src="path_to_menu_image" alt="Menu" className="w-6 h-6" /> {/* Placeholder for Menu Icon */}
        </button>
        
        {/* Logo */}
        <img src="logo.png" alt="Logo" className="w-20 mx-auto" />

        {/* Notification Button */}
        <button className="text-gray-500 focus:outline-none">
          <img src="path_to_notification_image" alt="Notification" className="w-6 h-6" /> {/* Placeholder for Notification Icon */}
        </button>
      </div>
      
      {/* Search Bar */}
      <div className="flex items-center mb-4">
        <i className="fas fa-search text-gray-500 mr-2"></i>
        <input 
          type="text" 
          placeholder="Search" 
          className="p-2 rounded-lg border border-gray-300 w-full" 
        />
      </div>
      
      {/* User Cards */}
      {users.map((user, index) => (
        <UserCard key={index} user={user} />
      ))}

      {/* Gender Buttons */}
      <div className="flex justify-between mt-8">
        <button className="flex-1 bg-orange-300 text-white text-sm px-4 py-2 rounded-lg mr-2 hover:bg-orange-400">
          Male
        </button>
        <button className="flex-1 bg-gray-200 text-gray-900 text-sm px-4 py-2 rounded-lg hover:bg-gray-300">
          Female
        </button>
      </div>
    </div>
  );
};

export default Request;
