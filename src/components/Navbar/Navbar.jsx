import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useTheme } from '../../context/ThemeContext';
import "./Navbar.css";

const Navbar = () => {
  const { theme, toggleTheme } = useTheme();
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const isDarkMode = theme === 'dark';

  const toggleMenu = () => setIsOpen(!isOpen);

  const getLinkClass = (path) => {
    const isActive = location.pathname === path;
    return isActive
      ? 'text-green-500 font-bold'
      : `${isDarkMode ? 'text-gray-300' : 'text-gray-800'} hover:text-green-500`;
  };

  return (
    <nav
      className={`${
        isDarkMode ? 'bg-gray-800' : 'bg-white'
      } shadow-md fixed w-full top-0 z-50`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-14">
          <div className="flex-shrink-0">
            <Link
              to="/dashboard"
              className={`${
                isDarkMode ? 'text-green-300' : 'text-green-600'
              } text-2xl font-bold`}
            >
              Plantify
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-6 items-center">
            <Link to="/dashboard" className={`transition ${getLinkClass('/dashboard')}`}>
              Dashboard
            </Link>
            <Link to="/groups" className={`transition ${getLinkClass('/groups')}`}>
              My Groups
            </Link>
            <Link to="/discussions" className={`transition ${getLinkClass('/discussions')}`}>
              Discussions
            </Link>
            <Link to="/events" className={`transition ${getLinkClass('/events')}`}>
              Events
            </Link>
            <button
              onClick={toggleTheme}
              className={`px-3 py-1.5 rounded-lg border shadow-md focus:outline-none transition duration-300 ${
                isDarkMode
                  ? 'bg-gray-900 text-white border-gray-700'
                  : 'bg-gray-100 text-gray-800 border-gray-300'
              }`}
            >
              {isDarkMode ? '☀️ Light' : '🌙 Dark'}
            </button>
          </div>

          {/* Mobile Menu Toggle */}
          <div className="md:hidden flex items-center">
            <button
              onClick={toggleTheme}
              className={`mr-2 px-2 py-1 rounded-lg shadow-md border focus:outline-none transition duration-300 ${
                isDarkMode
                  ? 'bg-gray-900 text-white border-gray-700'
                  : 'bg-gray-100 text-gray-800 border-gray-300'
              }`}
            >
              {isDarkMode ? '☀️' : '🌙'}
            </button>
            <button
              onClick={toggleMenu}
              className={`focus:outline-none ${
                isDarkMode ? 'text-gray-300' : 'text-gray-800'
              }`}
            >
              {isOpen ? (
                <svg
                  className="h-6 w-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                <svg
                  className="h-6 w-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden ${
          isDarkMode ? 'bg-gray-800' : 'bg-white'
        } shadow-lg space-y-4 px-6 pt-4 pb-6 transition-transform duration-300 ease-in-out transform ${
          isOpen ? 'translate-x-0 opacity-100' : 'translate-x-full opacity-0'
        } fixed top-14 right-0 h-screen w-64 overflow-y-auto z-40`}
      >
        {['/dashboard', '/groups', '/discussions', '/events'].map((path) => (
          <Link
            key={path}
            to={path}
            className={`block py-2 text-lg ${
              location.pathname === path ? 'text-green-500 font-bold' : getLinkClass(path)
            }`}
            onClick={toggleMenu}
            style={{
              animation: isOpen
                ? `slideOpacityBloom 0.6s ease-in-out forwards`
                : 'none', // Delay increases for each item
            }}
          >
            {path === '/dashboard'
              ? 'Dashboard'
              : path.replace('/', '').charAt(0).toUpperCase() + path.slice(2)}
          </Link>
        ))}
      </div>
    </nav>
  );
};

export default Navbar;