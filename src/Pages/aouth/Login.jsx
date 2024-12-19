import React, { useContext } from 'react';
import Lottie from 'lottie-react';
import animationData from '../../assets/lottie/login.json';

import { useLocation, useNavigate } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { AuthContext } from '../../Provider/AuthProvider';
import axios from 'axios';

const Login = () => {
  const { signInUser } = useContext(AuthContext);
  const location = useLocation();
  const navigate = useNavigate();
  console.log('in signIn page', location);
  const from = location.state || '/';

  const handleLogin = e => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    signInUser(email, password)
      .then(result => {
        toast.success('Login Successful!', {
          position: 'top-center',
          autoClose: 2000,
        });

        setTimeout(() => {
          navigate(from);
        }, 2000);
      })
      .catch(error => {
        toast.error(errorMessage, {
          position: 'top-center',
          autoClose: 2000,
        });
      });
  };
  return (
    <div className="flex flex-col lg:flex-row items-center justify-center min-h-screen bg-gray-100 px-4 max-w-6xl mx-auto">
      <div className="w-full lg:w-1/2 bg-white rounded-lg shadow-lg p-8">
        <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center">
          Welcome Back!
        </h2>
        <form onSubmit={handleLogin}>
          <div className="mb-4">
            <label
              htmlFor="email"
              className="block text-gray-600 font-medium mb-2"
            >
              Email Address
            </label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Enter your email"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="password"
              className="block text-gray-600 font-medium mb-2"
            >
              Password
            </label>
            <input
              type="password"
              name="password"
              id="password"
              placeholder="Enter your password"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 transition"
          >
            Login
          </button>
        </form>
        <p className="text-sm text-gray-600 text-center mt-4">
          Don't have an account?{' '}
          <a href="/register" className="text-blue-500 hover:underline">
            Register
          </a>
        </p>
      </div>

      <div className="w-full lg:w-1/2 flex justify-center">
        <Lottie animationData={animationData} loop={true} className="w-3/4" />
      </div>
      <ToastContainer />
    </div>
  );
};

export default Login;
