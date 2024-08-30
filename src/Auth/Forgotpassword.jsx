import React, { useState } from 'react';
import ForgotPass from '../assets/ForgotPassword.png'


function ForgotPassword() {
  const [email, setEmail] = useState('');
  const [emailError, setEmailError] = useState('');

  const handleChange = (e) => {
    setEmail(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setEmailError(validateEmail(email));
  };

  const validateEmail = (email) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
    if (!email) {
      return "Email is required!";
    } else if (!regex.test(email)) {
      return "This is not a valid email format!";
    }
    return '';
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-sm bg-white p-6 rounded-xl shadow-lg"
      >
        {/* Illustration placeholder */}
        <div className="flex justify-center mb-8">
          <div className="w-52 h-52 rounded-lg flex items-center justify-center">
            <img src= {ForgotPass} alt="ForgotPassword" />
          </div>
        </div>

        <h1 className="text-3xl font-bold text-gray-900 text-center mb-4">Forgot Password?</h1>
        <p className="text-sm text-gray-600 text-center mb-6">
          Don’t worry! It happens. Please enter the email address linked with your account.
        </p>

        <div className="mb-5">
          <label className="block text-sm font-medium text-gray-700">Email</label>
          <input
            type="text"
            name="email"
            placeholder="Enter your email"
            value={email}
            onChange={handleChange}
            className="mt-1 block w-full px-4 py-3 border border-gray-300 rounded-lg bg-gray-100 focus:ring-red-500 focus:border-red-500 text-sm"
          />
          {emailError && (
            <p className="mt-1 text-sm text-red-600">{emailError}</p>
          )}
        </div>

        <button
          className="w-full py-3 bg-red-500 text-white rounded-lg font-semibold text-lg hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
          type="submit"
        >
          Send Code
        </button>
      </form>
    </div>
  );
}

export default ForgotPassword;
