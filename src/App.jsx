import React from 'react';
import { HashRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Signup from './Auth/Signup.jsx';
import Login from './Auth/Login-1.jsx';
import ForgotPassword from './Auth/Forgotpassword.jsx';
import Homepage from './components/HomePage1.jsx';
import Request from './components/Request.jsx';
import ProfilePage from './components/ProfilePage.jsx';

function App() {
  return (
    <Router>
      <Routes>
        {/* Uncomment this line if you want to navigate to signup by default */}
        {/* <Route path="/" element={<Navigate to="/signup" />} /> */}

        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/ForgotPassword" element={<ForgotPassword />} />
        <Route path="/homepage" element={<Homepage />} />
        <Route path="/Request" element={<Request />} />
        {/* Updated the ProfilePage route to use 'element' instead of 'component' */}
        <Route path="/profile/:id" element={<ProfilePage />} />
      </Routes>
    </Router>
  );
}

export default App;
