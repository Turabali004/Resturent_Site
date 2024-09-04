import React from "react";
import {
  FaHome,
  FaUtensils,
  FaStore,
  FaInfoCircle,
  FaPhone,
  FaCheckCircle,
} from "react-icons/fa"; // Import icons
import homeheroImg from "../../../public/images/homehero.jpg";
import PrimaryBtn from "../PrimaryBtn";
import homeAboutImg1 from "../../../public/images/homeAbout.png";
import homeAboutImg2 from "../../../public/images/homeAbout2.png";

const HeroSection = () => {
  const categories = [
    { title: 'Dessert', image: 'https://via.placeholder.com/400x300' },
    { title: 'Fast Food', image: 'https://via.placeholder.com/400x300' },
    { title: 'Dessert', image: 'https://via.placeholder.com/400x300' },
    { title: 'Dessert', image: 'https://via.placeholder.com/400x300' },
  ];
  return (
    <>
      <div className="flex flex-col md:flex-row">
        {/* Left Section */}
        <div className="relative flex justify-center w-full md:w-1/2 h-screen">
          <img
            src={homeheroImg}
            className="absolute inset-0 w-full h-full object-cover filter blur-md"
            alt="Background"
          />
          <div className="absolute inset-0 bg-black opacity-50"></div>
          <div className="w-2/3 relative z-10 flex flex-col justify-center text-white p-8">
            <h2 className="text-3xl italic font-fede mb-4">
              Its Quick & Amusing!
            </h2>
            <h1 className="text-5xl font-montserrat mb-4 font-thin py-4">
              Lorem ipsum dolor sit amet consectetur.
            </h1>
            <p className="mb-8 font-sans text-sm">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Varius
              sed pharetra dictum neque massa congue.
            </p>
            <div className="w-full flex justify-center mt-20">
              <PrimaryBtn />
            </div>
          </div>
        </div>

        {/* Right Section */}
        <div className="relative w-full md:w-1/2 h-screen">
          <img
            src={homeheroImg}
            className="w-full h-full object-cover"
            alt="Food"
          />
          <div className="absolute inset-0 flex flex-col justify-between items-end p-8">
            <nav className="h-3/4 flex flex-col justify-center items-center gap-3 px-2 rounded-lg space-y-6 bg-black bg-opacity-50 text-xs">
              <a href="#home" className="flex flex-col items-center text-white">
                <FaHome className="mb-2" /> HOME
              </a>
              <a href="#menu" className="flex flex-col items-center text-white">
                <FaUtensils className="mb-2" /> MENU
              </a>
              <a
                href="#franchise"
                className="flex flex-col items-center text-white"
              >
                <FaStore className="mb-2" /> FRANCHISE
              </a>
              <a
                href="#about"
                className="flex flex-col items-center text-white"
              >
                <FaInfoCircle className="mb-2" /> ABOUT
              </a>
              <a
                href="#contact"
                className="flex flex-col items-center text-white"
              >
                <FaPhone className="mb-2" /> CONTACT US
              </a>
              <a
                href="#book"
                className="bg-teal-600 hover:bg-teal-700 text-white font-bold py-2 px-6 rounded-full"
              >
                Book Now
              </a>
            </nav>
          </div>
        </div>
      </div>

      {/* Aboutus-Section */}
      <section className="py-16 px-8 lg:px-24 flex flex-col lg:flex-row lg:justify-between items-center">
        <div className="lg:w-2/5 mb-12 lg:mb-0">
          <h2 className="text-xl font-bold text-gray-700 mb-2 ">About us</h2>
          <h1 className="lg:w-10/12 text-5xl text-gray-800 mb-6 font-thin">
            We Create the best foody product
          </h1>
          <p className="text-gray-600 mb-6 font-sans">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
            diam pellentesque bibendum non dui volutpat fringilla bibendum.
            Urna, elit augue urna, vitae feugiat pretium donec id elementum.
            Ultrices mattis sed vitae mus risus. Lacus nisi, et ac dapibus sit
            eu velit in consequat.
          </p>
          <ul className="space-y-4 mb-8">
            <li className="flex items-center">
              <FaCheckCircle className="text-teal-500 mr-3" />
              <span className="text-gray-700">
                Lacus nisi, et ac dapibus sit eu velit in consequat.
              </span>
            </li>
            <li className="flex items-center">
              <FaCheckCircle className="text-teal-500 mr-3" />
              <span className="text-gray-700">
                Quisque diam pellentesque bibendum non dui volutpat fringilla
              </span>
            </li>
            <li className="flex items-center">
              <FaCheckCircle className="text-teal-500 mr-3" />
              <span className="text-gray-700">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit
              </span>
            </li>
          </ul>
          <button className="bg-teal-500 text-white font-semibold py-3 px-6 rounded-lg hover:bg-teal-600 transition">
            Read More
          </button>
        </div>

        {/* Image Section */}
        <div className="lg:w-1/2 flex flex-col justify-center item md: gap-6 ">
          <div>
            <img
              src={`${homeAboutImg1}`} // Replace with your image URL
              alt="Food 1"
              className="w-full h-80 object-cover rounded-lg"
            />
          </div>
          <div className="flex h-40 gap-5 justify-center">
            <img
              src={`${homeAboutImg2}`} // Replace with your image URL
              alt="Food 2"
              className="w-[48%] object-cover rounded-lg"
            />
            <img
              src={`${homeheroImg}`} // Replace with your image URL
              alt="Food 3"
              className="w-[48%] object-cover rounded-lg"
            />
          </div>
        </div>
      </section>

      <section className="py-16 px-8 lg:px-32 text-center">
      {/* Section Title */}
      <h2 className="text-3xl font-semibold text-gray-800 mb-12">Food Category</h2>

      {/* Cards Container */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {categories.map((category, index) => (
          <div
            key={index}
            className="relative overflow-hidden rounded-lg shadow-lg group hover:scale-105 transition-transform duration-300"
          >
            {/* Background Image */}
            <img
              src={category.image}
              alt={category.title}
              className="w-full h-full object-cover"
            />

            {/* Overlay */}
            <div className="absolute inset-0 bg-black bg-opacity-50 flex justify-center items-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <button className="bg-teal-500 text-white font-semibold py-2 px-6 rounded-lg">
                {category.title}
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>

      
    </>
  );
};

export default HeroSection;
