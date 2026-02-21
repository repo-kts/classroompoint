import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import AdmissionModal from './AdmissionModal';
import { useTheme } from '../context/ThemeContext';

// Import logo if it exists - you can uncomment and adjust the path when you add your logo
import logo from '../assets/Logo.png';
// const logo = null; // Set this to your logo import when you add the logo file

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const location = useLocation();
  const { theme, toggleTheme } = useTheme();

  const isActive = (path) => location.pathname === path;

  return (
    <>
      <nav className="bg-white dark:bg-gray-800 shadow-md sticky top-0 z-50 transition-colors duration-200 overflow-visible">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <div className="flex items-center">
              <Link to="/" className="flex items-center space-x-2">
                {logo ? (
                  <img
                    src={logo}
                    alt="CLASSROOM POINT Logo"
                    className="h-32 md:h-40 w-auto object-contain max-w-[200px] md:max-w-xs -ml-4"
                  />
                ) : (
                  <span className="text-2xl font-bold text-primary">
                    CLASSROOM POINT
                  </span>
                )}
              </Link>
            </div>

            <div className="hidden md:flex items-center space-x-8">
              <Link
                to="/"
                className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${isActive('/') ? 'text-primary font-semibold' : 'text-gray-700 hover:text-primary'
                  }`}
              >
                Home
              </Link>
              <Link
                to="/about"
                className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${isActive('/about') ? 'text-primary font-semibold' : 'text-gray-700 hover:text-primary'
                  }`}
              >
                About
              </Link>
              <Link
                to="/programs"
                className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${isActive('/programs') ? 'text-primary font-semibold' : 'text-gray-700 hover:text-primary'
                  }`}
              >
                Programs
              </Link>
              <Link
                to="/results"
                className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${isActive('/results') ? 'text-primary font-semibold' : 'text-gray-700 hover:text-primary'
                  }`}
              >
                Results
              </Link>
              <Link
                to="/contact"
                className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${isActive('/contact') ? 'text-primary font-semibold' : 'text-gray-700 hover:text-primary'
                  }`}
              >
                Contact
              </Link>
              <button
                onClick={toggleTheme}
                className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
                aria-label="Toggle Dark Mode"
              >
                {theme === 'light' ? '🌙' : '☀️'}
              </button>
              <button
                onClick={() => setIsModalOpen(true)}
                className="bg-primary text-white px-6 py-2 rounded-lg font-medium hover:bg-blue-700 transition-colors animate-zoom-in-out shadow-lg hover:shadow-xl"
              >
                ADMISSIONS OPEN
              </button>
            </div>

            <div className="md:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-gray-700 hover:text-primary"
              >
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  {isMenuOpen ? (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  ) : (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                  )}
                </svg>
              </button>
            </div>
          </div>
        </div>

        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-white dark:bg-gray-800 border-t dark:border-gray-700">
              <Link
                to="/"
                className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-primary"
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </Link>
              <Link
                to="/about"
                className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-primary"
                onClick={() => setIsMenuOpen(false)}
              >
                About
              </Link>
              <Link
                to="/programs"
                className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-primary"
                onClick={() => setIsMenuOpen(false)}
              >
                Programs
              </Link>
              <Link
                to="/results"
                className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-primary"
                onClick={() => setIsMenuOpen(false)}
              >
                Results
              </Link>
              <Link
                to="/contact"
                className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-primary"
                onClick={() => setIsMenuOpen(false)}
              >
                Contact
              </Link>
              <button
                onClick={() => {
                  toggleTheme();
                  setIsMenuOpen(false);
                }}
                className="w-full text-left px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-primary dark:text-gray-200 dark:hover:text-primary flex items-center justify-between"
              >
                <span>{theme === 'light' ? 'Dark Mode' : 'Light Mode'}</span>
                <span>{theme === 'light' ? '🌙' : '☀️'}</span>
              </button>
              <button
                onClick={() => {
                  setIsModalOpen(true);
                  setIsMenuOpen(false);
                }}
                className="w-full text-left px-3 py-2 rounded-md text-base font-medium bg-primary text-white hover:bg-blue-700 animate-zoom-in-out"
              >
                ADMISSIONS OPEN
              </button>
            </div>
          </div>
        )}
      </nav>
      <AdmissionModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </>
  );
};

export default Navbar;
