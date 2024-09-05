import React from 'react';
import homeheroImg from "../../../public/images/homehero.jpg";
import homeAboutImg1 from "../../../public/images/homeAbout.png";
import homeAboutImg2 from "../../../public/images/homeAbout2.png";
import homeBookingImg from "../../../public/images/homeresturent.png";
import homeFamilyHallImg from "../../../public/images/homeguest.png";
import {
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaEnvelope,
  FaClock,
  FaPaperPlane,
} from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div>
      <footer className="bg-gray-200 py-12 px-4 sm:px-6 lg:px-20 text-gray-700">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Logo and Description */}
          <div className="flex flex-col items-start">
            <h2 className="text-2xl font-semibold mb-4">LOGO</h2>
            <p className="mb-4">Lorem ipsum dolor sit amet</p>
            <div className="flex">
              <input
                type="email"
                placeholder="Enter Your Email"
                className="py-2 px-4 rounded-l-full text-gray-700 focus:outline-none"
              />
              <button className="bg-teal-500 text-white py-2 px-4 rounded-r-full">
                <FaPaperPlane />
              </button>
            </div>
          </div>

          {/* Contact Information */}
          <div className="flex flex-col">
            <h3 className="text-xl font-semibold mb-4">Contact us</h3>
            <p className="flex items-center mb-2">
              <FaMapMarkerAlt className="mr-2" /> 25950 Long Lane, North Ismael
              14280
            </p>
            <p className="flex items-center mb-2">
              <FaPhoneAlt className="mr-2" /> 00965 - 96659986
            </p>
            <p className="flex items-center mb-2">
              <FaEnvelope className="mr-2" /> Jermaine.Connelly@yahoo.com
            </p>
            <p className="flex items-center">
              <FaClock className="mr-2" /> Sun - Sat / 10:00 AM - 8:00 PM
            </p>
          </div>

          {/* Links */}
          <div className="flex flex-col">
            <h3 className="text-xl font-semibold mb-4">Links</h3>
            <ul>
              <li className="mb-2">
                <Link to="/about" className="hover:text-teal-500">
                  About us
                </Link>
              </li>
              <li className="mb-2">
                <Link to="/contact" className="hover:text-teal-500">
                  Contact Us
                </Link>
              </li>
              <li className="mb-2">
                <Link to="/menu" className="hover:text-teal-500">
                  Our Menu
                </Link>
              </li>
              <li className="mb-2">
                <Link to="/team" className="hover:text-teal-500">
                  Team
                </Link>
              </li>
              <li>
                <Link to="/faq" className="hover:text-teal-500">
                  FAQ
                </Link>
              </li>
            </ul>
          </div>

          {/* Gallery */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Gallery</h3>
            <div className="grid grid-cols-3 gap-4">
              <img
                src={homeheroImg}
                alt="Gallery Item"
                className="w-[100%] h-[120%] object-cover"
              />
              <img
                src={homeAboutImg1}
                alt="Gallery Item"
                className="w-[100%] h-[120%] object-cover"
              />
              <img
                src={homeAboutImg2}
                alt="Gallery Item"
                className="w-[100%] h-[120%] object-cover"
              />
              <img
                src={homeBookingImg}
                alt="Gallery Item"
                className="w-[100%] h-[120%] object-cover"
              />
              <img
                src={homeheroImg}
                alt="Gallery Item"
                className="w-[100%] h-[120%] object-cover"
              />
              <img
                src={homeFamilyHallImg}
                alt="Gallery Item"
                className="w-[100%] h-[120%] object-cover"
              />
            </div>
          </div>
        </div>
      </footer>

      {/* Subfooter */}
      <div className="bg-teal-500 text-white py-4 px-20">
        <div className="container mx-auto flex flex-col sm:flex-row justify-between items-center">
          <p className="text-center sm:text-left mb-2 sm:mb-0">
            Copyright © 2000-2020.logo.com. All rights reserved
          </p>
          <div className="flex space-x-4">
            <Link to="/privacy" className="hover:underline">
              Privacy Policy
            </Link>
            <Link to="/terms" className="hover:underline">
              Term of Use
            </Link>
            <Link to="/partners" className="hover:underline">
              Partner
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
