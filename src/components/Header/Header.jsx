import React from 'react';
import { FaInstagram, FaFacebookF, FaTwitter } from 'react-icons/fa';

const Header = () => {
  return (
    <header className="">
      {/* Vertical Line */}
      {/* <div className="absolute top-0 right-0 transform -translate-x-1/2 h-12 w-0.5 bg-white z-10" /> */}

      <div className="bg-black text-white py-4">
        <div className="container mx-auto flex justify-around items-center px-4">
          {/* Left Section: Language Dropdown */}
          <div className="flex items-center space-x-2">
            <span>English</span>
            <svg
              className="w-4 h-4 fill-current"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <path d="M7 10l5 5 5-5z" />
            </svg>
          </div>

          {/* Center Section: Logo */}
          <div className="text-3xl font-semibold">LOGO</div>

          {/* Right Section: Social Icons */}
          <div className="h-8 flex items-center space-x-4 relative">
                <div className="h-full absolute top-0 left-0 transform -translate-x-1/2  w-0.5 bg-white z-10" />

            <FaInstagram />
            <FaFacebookF />
            <FaTwitter />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
