import React from 'react'
import { NavLink } from 'react-router-dom'
import logo from '../images/logo.png'
import { useState } from 'react'


const Nav = () => {
    const [showDropdown, setShowDropdown] = useState(false);

    const toggleDropdown = () => {
      setShowDropdown(!showDropdown);
    };
  return (
    <div>
      <nav className="bg-black fixed w-full left-0  h-16 py-2 mt-0 sm:h-20  m-0  shadow-transparent shadow-md ">
        <div className="container left-0 mx-auto flex justify-between items-center m-0 pl-0">
          <div className="flex  justify-start items-center ml-4">
            <img
              src={logo}
              alt="Logo"
              className="h-16 w-15 mr-1 rounded-full shadow-lg text-white bg-red-500"
            />
          </div>
          <div className="md:hidden">
            <button
              onClick={toggleDropdown}
              className="text-white hover:text-gray-200 focus:outline-none"
            >
              <svg
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>
          <div className={`md:flex ${showDropdown ? "block" : "hidden"}`}>
            <div className="flex-1 flex justify-center m-3">
              <NavLink
                to={`/`}
                className="text-white hover:text-[#3CDBC0] hover:font-extrabold text-s px-3 font-san  font-bold text-md py-2 rounded-md sm:text-l "
              >
                Login
              </NavLink>
              <a
                href="#aboutus"
                className="text-white hover:text-[#3CDBC0] px-3 hover:font-extrabold font-san py-2 font-bold text-md rounded-md sm:text-l "
              >
                Signup
              </a>
            </div>
            <div className="flex items-center pr-12">
              <NavLink to={`/contact`}>
                <button className="bg-white text-black h-10 w-48 px-3 rounded-3xl hover:font-extrabold font-bold text-md hover:h-16 hover:w-48  ml-4 font-montserrat text-s sm:text-l ">
                  Become a Host
                </button>
              </NavLink>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Nav