import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { FaSearch, FaHeart, FaShoppingCart, FaUser } from 'react-icons/fa';

const Topnav = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <header className="bg-white flex justify-between items-center md:block px-20 py-2 shadow-2xl fixed top-0 right-0 w-screen z-30">
        <div className="flex justify-between items-center px-0 pt-4 pb-2 md:px-6 w-full">
          <NavLink to="/" className="flex-shrink-0 flex-row flex items-center">
            <h2>Exclusive</h2>
          </NavLink>
          <div className="hidden md:flex space-x-10">
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive
                  ? 'text-darkBlue border-black border-b'
                  : 'text-grayishBlue border-transparent hover:text-blue-500 transition-colors duration-300'
              }
            >
              Home
            </NavLink>
            <NavLink
              to="/about"
              className={({ isActive }) =>
                isActive
                  ? 'text-darkBlue border-black border-b'
                  : 'text-grayishBlue border-transparent hover:text-blue-500 transition-colors duration-300'
              }
            >
              Contact
            </NavLink>
            <NavLink
              to="/research"
              className={({ isActive }) =>
                isActive
                  ? 'text-darkBlue border-black border-b'
                  : 'text-grayishBlue border-transparent hover:text-blue-500 transition-colors duration-300'
              }
            >
              About
            </NavLink>
            <NavLink
              to="/signup"
              className={({ isActive }) =>
                isActive
                  ? 'text-darkBlue border-black border-b'
                  : 'text-grayishBlue border-transparent hover:text-blue-500 transition-colors duration-300'
              }
            >
              Sign Up
            </NavLink>
          </div>
          {/* Search and Icons */}
          <div className="hidden md:flex items-center space-x-4">
            <div className="relative">
            <input
                type="text"
                placeholder="What are you looking for?"
                className="pl-4 pr-10 py-2 text-sm placeholder-gray-400 bg-gray-200 border border-gray-300 rounded-md focus:outline-none"
              />
              <FaSearch className="absolute top-1/2 right-2 transform -translate-y-1/2 text-gray-500 cursor-pointer" />
            </div>
            <FaHeart className="text-gray-500 hover:text-red-500 cursor-pointer" />
            <FaShoppingCart className="text-gray-500 hover:text-blue-500 cursor-pointer" />
            <FaUser className="text-gray-500 hover:text-green-500 cursor-pointer" />
          </div>
          <div className="md:hidden">
            <button onClick={toggleMenu}>
              {/* Add any menu icon here */}
              hee
            </button>
          </div>
        </div>
      </header>
      {isOpen && (
        <div className="md:hidden fixed top-20 left-0 w-full z-10">
          <div data-aos="flip-down" className="bg-white py-6 flex flex-col items-center space-y-2 shadow-lg">
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive
                  ? 'text-darkBlue border-blue-500 border-b-2'
                  : 'text-grayishBlue border-transparent hover:border-limeGreen transition-colors duration-300'
              }
              onClick={toggleMenu}
            >
              Home
            </NavLink>
            <NavLink
              to="/about"
              className={({ isActive }) =>
                isActive
                  ? 'text-darkBlue border-blue-500 border-b-2'
                  : 'text-grayishBlue border-transparent hover:border-limeGreen transition-colors duration-300'
              }
              onClick={toggleMenu}
            >
              About
            </NavLink>
            <NavLink
              to="/research"
              className={({ isActive }) =>
                isActive
                  ? 'text-darkBlue border-blue-500 border-b-2'
                  : 'text-grayishBlue border-transparent hover:border-limeGreen transition-colors duration-300'
              }
              onClick={toggleMenu}
            >
              Research
            </NavLink>
            <NavLink
              to="/news-and-media"
              className={({ isActive }) =>
                isActive
                  ? 'text-darkBlue border-blue-500 border-b-2'
                  : 'text-grayishBlue border-transparent hover:border-limeGreen transition-colors duration-300'
              }
              onClick={toggleMenu}
            >
              News
            </NavLink>
            <a href="/contact">
              <button className="capitalize md:block bg-blue-500 hover:bg-blue-300 text-white text-sm px-6 w-40 py-4 rounded">
                get involved
              </button>
            </a>
          </div>
        </div>
      )}
    </div>
  );
};

export default Topnav;
