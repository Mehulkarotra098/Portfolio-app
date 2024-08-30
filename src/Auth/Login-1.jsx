import React, { useState } from "react";
import Hariprabodham from '../assets/Hariprabodhamlogo.png';


function Login() {
  const [formValues, setFormValues] = useState({ email: "", password: "" });
  const [formErrors, setFormErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormErrors(validate(formValues));
    setIsSubmit(true);
  };

  const validate = (values) => {
    const errors = {};
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
    if (!values.email) {
      errors.email = "Email is required!";
    } else if (!regex.test(values.email)) {
      errors.email = "This is not a valid email format!";
    }
    if (!values.password) {
      errors.password = "Password is required";
    }
    return errors;
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-sm bg-white p-6 rounded-xl shadow-lg"
      >
        <img
          src={Hariprabodham}
          alt="Logo"
          className="w-24 h-auto mx-auto mb-8"
        />
        <h1 className="text-3xl font-bold text-gray-900 text-center mb-4">Login</h1>
        <p className="text-sm text-gray-600 text-center mb-6">Login to continue using the app</p>

        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700">Email</label>
            <input
              type="text"
              name="email"
              placeholder="Enter your email"
              value={formValues.email}
              onChange={handleChange}
              className="mt-1 block w-full px-4 py-3 border border-gray-300 rounded-lg bg-gray-100 focus:ring-red-500 focus:border-red-500 text-sm"
            />
            {formErrors.email && (
              <p className="mt-1 text-sm text-red-600">{formErrors.email}</p>
            )}
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Password</label>
            <input
              type="password"
              name="password"
              placeholder="Enter your password"
              value={formValues.password}
              onChange={handleChange}
              className="mt-1 block w-full px-4 py-3 border border-gray-300 rounded-lg bg-gray-100 focus:ring-red-500 focus:border-red-500 text-sm"
            />
            {formErrors.password && (
              <p className="mt-1 text-sm text-red-600">{formErrors.password}</p>
            )}
            <div className="text-right mt-2">
              <a href="/ForgotPassword" className="text-sm text-gray-500 hover:text-gray-700">Forgot Password?</a>
            </div>
          </div>

          <button
            className="w-full py-3 bg-red-500 text-white rounded-lg font-semibold text-lg hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
            type="submit"
          >
            Login
          </button>
        </div>

        <div className="mt-6 text-center">
          <p className="text-gray-500">
            Don’t have an account?{" "}
            <a href="/signup" className="text-red-500 font-bold hover:underline">Sign up</a>
          </p>
        </div>
      </form>
    </div>
  );
}

export default Login;
