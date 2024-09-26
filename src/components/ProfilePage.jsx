import React from 'react';
import { Link, useParams } from 'react-router-dom';
import User from '../assets/user.png'; // Default image for male
import FemaleUser from '../assets/woman.png'; // Default image for female
import Hariprabodham from '../assets/Hariprabodhamlogo.png';
import Menu from '../assets/menu.png';
import Bell from '../assets/bell.png';

const AdminUserProfile = () => {
  const { id } = useParams(); // Fetching user ID from the URL params

  // Simulating profile data - this can be fetched from a backend API
  const profiles = [
    {
      id: 1,
      name: "Vivek Vyas",
      age: "26 Years",
      location: "Mumbai",
      caste: "Brahmin",
      gender: "male",
      image: User,
      address: "123, Lokhandwala, Andheri West, Mumbai",
      occupation: "Software Engineer",
      company: "ABC Pvt Ltd",
      salary: "₹ 12 LPA",
    },
    {
      id: 2,
      name: "Priya Sharma",
      age: "24 Years",
      location: "Delhi",
      caste: "Brahmin",
      gender: "female",
      image: FemaleUser,
      address: "456, Saket, South Delhi, Delhi",
      occupation: "Data Analyst",
      company: "XYZ Pvt Ltd",
      salary: "₹ 10 LPA",
    },
    // More profiles...
  ];

  // Fetch the current profile using the ID
  const profile = profiles.find(p => p.id === parseInt(id));

  if (!profile) {
    return <p>User not found</p>;
  }

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

      {/* User Profile Section */}
      <div className="px-4 mt-6">
        <div className="bg-white p-6 rounded-lg shadow-md">
          <div className="flex items-center">
            <img src={profile.image} alt={profile.name} className="w-24 h-24 rounded-full" />
            <div className="ml-6">
              <h1 className="text-2xl font-bold">{profile.name}</h1>
              <p className="text-gray-600">{profile.age} | {profile.location} | {profile.caste}</p>
            </div>
          </div>

          {/* Personal Details Section */}
          <div className="mt-6">
            <h2 className="text-lg font-semibold text-[#394D7F]">Personal Details</h2>
            <div className="mt-3">
              <p><span className="font-semibold">Full Name:</span> {profile.name}</p>
              <p><span className="font-semibold">Age:</span> {profile.age}</p>
              <p><span className="font-semibold">Caste:</span> {profile.caste}</p>
              <p><span className="font-semibold">Gender:</span> {profile.gender}</p>
            </div>
          </div>

          {/* Address Details Section */}
          <div className="mt-6">
            <h2 className="text-lg font-semibold text-[#394D7F]">Address Details</h2>
            <div className="mt-3">
              <p><span className="font-semibold">Address:</span> {profile.address}</p>
            </div>
          </div>

          {/* Occupation Details Section */}
          <div className="mt-6">
            <h2 className="text-lg font-semibold text-[#394D7F]">Occupation Details</h2>
            <div className="mt-3">
              <p><span className="font-semibold">Occupation:</span> {profile.occupation}</p>
              <p><span className="font-semibold">Company:</span> {profile.company}</p>
              <p><span className="font-semibold">Salary:</span> {profile.salary}</p>
            </div>
          </div>
        </div>

        {/* Back to Admin Dashboard Button */}
        <div className="mt-8">
          <Link to="/admin-dashboard">
            <button className="px-4 py-2 bg-[#394D7F] text-white rounded-full hover:bg-[#2b3b65]">
              Back to Dashboard
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default AdminUserProfile;
