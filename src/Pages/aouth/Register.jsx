import React, { useContext } from 'react';
import Lottie from 'lottie-react';
import animationData from '../../assets/lottie/Animation - 1734091560052.json';
import { AuthContext } from '../../Provider/AuthProvider';
import { useNavigate } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Register = () => {
  const { createUser } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleregister = e => {
    e.preventDefault();
    const from = e.target;
    const name = from.name.value;
    const email = from.email.value;
    const password = from.password.value;
    createUser(email, password, name)
      .then(() => {
        from.reset();
        toast.success('Registration Successful!', {
          position: 'top-center',
          autoClose: 2000,
        });

        setTimeout(() => {
          navigate('/');
        }, 2000);
      })
      .catch(error => {
        toast.error(error.message, {
          position: 'top-center',
          autoClose: 2000,
        });
      });
  };

  return (
    <div className="flex flex-col lg:flex-row items-center justify-center min-h-screen bg-gray-100 px-4 max-w-6xl mx-auto">
      <div className="w-1/2 lg:w-1/2 bg-white rounded-lg shadow-lg p-8">
        <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">
          Create Your Account
        </h2>
        <form onSubmit={handleregister}>
          <div className="mb-4">
            <label
              htmlFor="name"
              className="block text-gray-600 font-medium mb-2"
            >
              Full Name
            </label>
            <input
              type="text"
              id="name"
              placeholder="Enter your name"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
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
              id="password"
              placeholder="Enter your password"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 transition"
          >
            Register
          </button>
        </form>
        <p className="text-sm text-gray-600 text-center mt-4">
          Already have an account?{' '}
          <a href="/login" className="text-blue-500 hover:underline">
            Login
          </a>
        </p>
      </div>

      <div className="w-1/2 lg:w-1/2 flex justify-center">
        <Lottie animationData={animationData} loop={true} className="w-3/4" />
      </div>
      <ToastContainer />
    </div>
  );
};

export default Register;
