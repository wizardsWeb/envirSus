import React, { useState } from 'react';
import useTheme from '../contexts/theme'; // Make sure you have a theme context set up
import Notification from './modal/Notification';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const { themeMode, lightTheme, darkTheme } = useTheme();
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isDropdownOpen, setDropdownOpen] = useState(false);
  const [isModalOpen, setModalOpen] = useState(false);


  const toggleMobileMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };

  const toggleDropdown = () => {
    setDropdownOpen(!isDropdownOpen);
  };

  const toggleModal = () => {
    setModalOpen(!isModalOpen);
  };

  const onChangeTheme = (e) => {
    const darkModeStatus = e.target.checked;
    if (darkModeStatus) {
      darkTheme();
    } else {
      lightTheme();
    }
  };

  return (
    <nav className={`border-gray-200 ${themeMode === 'dark' ? 'bg-black text-white' : 'bg-white text-black'}`}>
      <div className="container mx-auto flex flex-wrap items-center justify-between h-[70px] text-xl font-bold">
        <a href="#" className="flex">
          <svg
            className="h-10 mr-3"
            width="51"
            height="70"
            viewBox="0 0 51 70"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g clipPath="url(#clip0)">
              <path
                d="M1 53H27.9022C40.6587 53 51 42.7025 51 30H24.0978C11.3412 30 1 40.2975 1 53Z"
                fill="#76A9FA"
              ></path>
              <path
                d="M-0.876544 32.1644L-0.876544 66.411C11.9849 66.411 22.4111 55.9847 22.4111 43.1233L22.4111 8.87674C10.1196 8.98051 0.518714 19.5571 -0.876544 32.1644Z"
                fill="#A4CAFE"
              ></path>
              <path
                d="M50 5H23.0978C10.3413 5 0 15.2975 0 28H26.9022C39.6588 28 50 17.7025 50 5Z"
                fill="#1C64F2"
              ></path>
            </g>
            <defs>
              <clipPath id="clip0">
                <rect width="51" height="70" fill="white"></rect>
              </clipPath>
            </defs>
          </svg>
          <span className="self-center text-lg font-semibold whitespace-nowrap">
            LOGO
          </span>
        </a>

        <button
          onClick={toggleMobileMenu}
          type="button"
          className="md:hidden ml-3 focus:outline-none focus:ring-2 rounded-lg inline-flex items-center justify-center"
        >
          <span className="sr-only">Open main menu</span>
          {isMobileMenuOpen ? (
            <svg
              className="w-6 h-6"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                clipRule="evenodd"
              />
            </svg>
          ) : (
            <svg
              className="w-6 h-6"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                clipRule="evenodd"
              />
            </svg>
          )}
        </button>
        <div className='flex items-center gap-12'>
        <div
          className={`${
            isMobileMenuOpen ? 'block' : 'hidden'
          } md:block w-full md:w-auto`}
        >
          <ul className="flex-col md:flex-row flex md:space-x-8 mt-4 md:mt-0 md:text-sm md:font-medium">
            <li>
              <Link to={'/'} className="text-black dark:text-white block pl-3 pr-4 py-2 md:p-0 rounded font-semibold text-lg">
                Home
              </Link>
            </li>
            <li>
              <Link to={'/list'} className="text-black dark:text-white block pl-3 pr-4 py-2 md:p-0 rounded font-semibold text-lg">
                Events
              </Link>
            </li>
            
            <li>
              <Link to={'/chat'} className="text-black dark:text-white hover:bg-gray-800 border-b border-gray-100 md:hover:bg-transparent md:border-0 block pl-3 pr-4 py-2 md:p-0 font-semibold text-lg">
                Chat with AI
              </Link>
            </li>
            <li>
              <Link to={'/social'} className="text-black dark:text-white hover:bg-gray-800 border-b border-gray-100 md:hover:bg-transparent md:border-0 block pl-3 pr-4 py-2 md:p-0 font-semibold text-lg">
                Services
              </Link>
            </li>
            <li>
              <Link to={'/carbon-footprint'} className="text-black dark:text-white hover:bg-gray-800 border-b border-gray-100 md:hover:bg-transparent md:border-0 block pl-3 pr-4 py-2 md:p-0 font-semibold text-lg">
                Carbon Footprint
              </Link>
            </li>
            <li>
              <button
                onClick={toggleDropdown}
                className="border-b md:hover:bg-transparent md:border-0 pl-3 pr-4 py-2 md:p-0 flex items-center justify-between w-full md:w-auto font-semibold text-lg"
              >
                Dropdown
                <svg
                  className="w-4 h-4 ml-1"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
              </button>
              {isDropdownOpen && (
                <div className="dark:bg-black bg-white text-black dark:text-white absolute text-base z-10 list-none divide-y divide-gray-100 rounded shadow my-4 w-60 ">
                  <ul className="py-1">
                    <li>
                      <Link
                        to={'/admin-dashboard'}
                        className="text-sm hover:bg-gray-200 dark:hover:bg-gray-800 text-black dark:text-white block px-4 py-2"
                      >
                        Dashboard
                      </Link>
                    </li>
                    <li>
                      <Link
                        to={'/user-profile'}
                        className="text-sm hover:bg-gray-200 dark:hover:bg-gray-800 text-black dark:text-white block px-4 py-2"
                      >
                        Profile
                      </Link>
                    </li>
                    <li>
                      <Link
                        to={'calendar'}
                        className="text-sm hover:bg-gray-200 dark:hover:bg-gray-800 text-black dark:text-white block px-4 py-2"
                      >
                        Calendar
                      </Link>
                    </li>
                    <li>
                      <button
                        onClick={toggleModal} // Open the modal when "Notifications" is clicked
                        className="text-sm hover:bg-gray-200 dark:hover:bg-gray-800 text-black dark:text-white block w-full text-left px-4 py-2"
                      >
                        Notifications
                      </button>
                    </li>
                  </ul>
                  <div className="py-1">
                    <a
                      href="#"
                      className="text-sm hover:bg-gray-200 dark:hover:bg-gray-800 text-black dark:text-white block px-4 py-2"
                    >
                      Sign out
                    </a>
                  </div>
                </div>
              )}
            </li>
          </ul>
        </div>
        <div className="ml-4 flex items-center">
            <label className="relative inline-flex items-center cursor-pointer">
              <input
                type="checkbox"
                checked={themeMode === 'dark'}
                onChange={onChangeTheme}
                className="sr-only peer"
              />
              <div className="w-11 h-6 bg-gray-300 rounded-full peer-checked:bg-black dark:peer-checked:bg-gray-700 transition-all duration-500"></div>
              <span className="absolute left-1 top-1 w-4 h-4 bg-white rounded-full transition-transform duration-300 transform peer-checked:translate-x-5"></span>
            </label>
          </div>
        {/* Dark Mode Toggle */}
        </div>
      </div>
      <Notification isOpen={isModalOpen} toggleModal={toggleModal} />
    </nav>
  );
};

export default Navbar;
