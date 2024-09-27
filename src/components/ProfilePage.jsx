import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { FaBirthdayCake, FaPhone, FaEnvelope, FaMapMarkerAlt, FaUniversity, FaBriefcase, FaMoneyBillAlt } from 'react-icons/fa';
import { IoArrowBackOutline } from 'react-icons/io5';
import HariprabodhamLogo from '../assets/Hariprabodhamlogo.png'; // Assuming logo import
import User from '../assets/user.png'; // Placeholder image
import FemaleUser from '../assets/woman.png'; // Placeholder image

// Dummy Data
const profiles = [
  {
    id: 1,
    name: 'Vivek Vyas',
    age: '26 Years',
    birthDate: '12/04/1997',
    religion: 'Hindu, Brahmin',
    contact: '+91 9898******',
    email: '****@gmail.com',
    address: 'Mumbai, Maharashtra, India',
    education: 'BTech in Computer Engineering',
    occupation: 'Software Engineer',
    income: '8,00,000 - 10,00,000',
    image: User,
  },
  {
    id: 2,
    name: 'Arjun Patel',
    age: '27 Years',
    birthDate: '12/02/1996',
    religion: 'Hindu, Patel',
    contact: '+91 9878******',
    email: '****@gmail.com',
    address: 'Gujarat, India',
    education: 'MBA in Finance',
    occupation: 'Financial Analyst',
    income: '10,00,000 - 12,00,000',
    image: User,
  },
  {
    id: 3,
    name: 'Mehul Patel',
    age: '22 Years',
    birthDate: '11/06/2001',
    religion: 'Hindu, Patel',
    contact: '+91 8787******',
    email: '****@gmail.com',
    address: 'Mumbai, Maharashtra, India',
    education: 'BCom',
    occupation: 'Accountant',
    income: '6,00,000 - 8,00,000',
    image: User,
  },
  {
    id: 4,
    name: 'Nishant Jadeja',
    age: '25 Years',
    birthDate: '12/04/1999',
    religion: 'Hindu, Kshatriya',
    contact: '+91 9797******',
    email: '****@gmail.com',
    address: 'Mumbai, Maharashtra, India',
    education: 'MBA - Master of Business Administration',
    occupation: 'Consultant / Supervisor / Team Lead with a Private Company',
    income: '00000000 - 00000000',
    image: User,
  },
  {
    id: 5,
    name: 'Priya Sharma',
    age: '24 Years',
    birthDate: '10/09/2000',
    religion: 'Hindu, Brahmin',
    contact: '+91 9999******',
    email: '****@gmail.com',
    address: 'Delhi, India',
    education: 'MSc in Psychology',
    occupation: 'Counselor',
    income: '7,00,000 - 9,00,000',
    image: FemaleUser,
  },
  {
    id: 6,
    name: 'Anjali Verma',
    age: '23 Years',
    birthDate: '20/03/2001',
    religion: 'Hindu, Kshatriya',
    contact: '+91 9696******',
    email: '****@gmail.com',
    address: 'Pune, Maharashtra, India',
    education: 'BSc in Computer Science',
    occupation: 'Software Developer',
    income: '8,00,000 - 10,00,000',
    image: FemaleUser,
  },
];

const UserProfile = () => {
  const { id } = useParams(); // Get user ID from URL
  const user = profiles.find((profile) => profile.id === parseInt(id));

  if (!user) {
    return <p>User not found!</p>;
  }

  return (
    <div className="min-h-screen bg-gray-100">
    {/* Top Bar */}
    <div className="flex items-center justify-between px-4 py-2 bg-white shadow-sm">
      {/* Left side (Back button) */}
      <Link to="/homepage" className="flex-1">
        <IoArrowBackOutline className="text-gray-600 text-2xl" />
      </Link>
  
      {/* Center (Logo) */}
      <div className="flex-1 text-center">
        <img src={HariprabodhamLogo} alt="Logo" className="h-10 inline-block"/>
      </div>
  
      {/* Right side - Placeholder to maintain space for centering */}
      <div className="flex-1"></div>
    </div>

      {/* User Profile Picture */}
      <div className="flex justify-center py-4 bg-white shadow-md">
        <img
          src={user.image}
          alt={user.name}
          className="w-24 h-24 rounded-full"
        />
      </div>

      {/* User Name & Age */}
      <div className="text-center mt-2">
        <h2 className="text-xl font-bold">{user.name}</h2>
        <p className="text-gray-600">{user.age}</p>
      </div>

      {/* Personal Details */}
      <div className="mt-6 px-4">
        <div className="bg-white p-4 rounded-lg shadow-md border-l-4 border-orange-600">
          <h3 className="text-orange-600 font-bold text-lg mb-2">Personal Details</h3>
          <div className="flex items-center text-gray-600 mb-2">
            <div className="rounded-full p-2 bg-red-500	 text-white">
              <FaBirthdayCake className="text-xl" />
            </div>
            <span className="ml-4">Born on {user.birthDate}</span>
          </div>
          <div className="flex items-center text-gray-600 mb-2">
            <div className="rounded-full p-2 bg-red-500	 text-white">
              <FaUniversity className="text-xl" />
            </div>
            <span className="ml-4">Religion, Caste & Mother Tongue: {user.religion}</span>
          </div>
          <div className="flex items-center text-gray-600 mb-2">
            <div className="rounded-full p-2 bg-red-500	 text-white">
              <FaPhone className="text-xl" />
            </div>
            <span className="ml-4">Contact No.: {user.contact}</span>
          </div>
          <div className="flex items-center text-gray-600">
            <div className="rounded-full p-2 bg-red-500	 text-white">
              <FaEnvelope className="text-xl" />
            </div>
            <span className="ml-4">Email Address: {user.email}</span>
          </div>
        </div>
      </div>

      {/* Address Details */}
      <div className="mt-4 px-4">
        <div className="bg-white p-4 rounded-lg shadow-md border-l-4 border-orange-600">
          <h3 className="text-orange-600 font-bold text-lg mb-2">Address Details</h3>
          <div className="flex items-center text-gray-600">
            <div className="rounded-full p-2 bg-amber-600	 text-white">
              <FaMapMarkerAlt className="text-xl" />
            </div>
            <span className="ml-4">Lives in {user.address}</span>
          </div>
        </div>
      </div>

      {/* Occupation Details */}
      <div className="mt-4 px-4 mb-16">
        <div className="bg-white p-4 rounded-lg shadow-md border-l-4 border-orange-600">
          <h3 className="text-orange-500 font-bold text-lg mb-2">Occupation Details</h3>
          <div className="flex items-center text-gray-600 mb-2">
            <div className="rounded-full p-2 bg-orange-500 text-white">
              <FaUniversity className="text-xl" />
            </div>
            <span className="ml-4">Highest Education: {user.education}</span>
          </div>
          <div className="flex items-center text-gray-600 mb-2">
            <div className="rounded-full p-2 bg-orange-500 text-white">
              <FaBriefcase className="text-xl" />
            </div>
            <span className="ml-4">Occupation: {user.occupation}</span>
          </div>
          <div className="flex items-center text-gray-600">
            <div className="rounded-full p-2 bg-orange-500 text-white">
              <FaMoneyBillAlt className="text-xl" />
            </div>
            <span className="ml-4">Annual Income: {user.income}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserProfile;
