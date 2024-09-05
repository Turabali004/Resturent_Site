import React from "react";
import {
  FaHome,
  FaUtensils,
  FaStore,
  FaInfoCircle,
  FaPhone,
  FaCheckCircle,
  FaConciergeBell,
  FaCalendarAlt,
} from "react-icons/fa"; // Import icons
import homeheroImg from "../../../public/images/homehero.jpg";
import PrimaryBtn from "../PrimaryBtn";
import homeAboutImg1 from "../../../public/images/homeAbout.png";
import homeAboutImg2 from "../../../public/images/homeAbout2.png";
import categoryImg1 from "../../../public/images/homecategory1.png";
import categoryImg2 from "../../../public/images/homecategory2.png";
import categoryImg3 from "../../../public/images/homecategory3.png";
import categoryImg4 from "../../../public/images/homecategory4.png";
import homeBookingImg from "../../../public/images/homeresturent.png";
import homeChefImg from "../../../public/images/homechef.png";
import homeFamilyHallImg from "../../../public/images/homeguest.png";

import {Footer} from "../../components/index";

const HeroSection = () => {
  const categories = [
    { title: "Dessert", image: categoryImg1 },
    { title: "Fast Food", image: categoryImg2 },
    { title: "Dessert", image: categoryImg3 },
    { title: "Dessert", image: categoryImg4 },
  ];
  const chefs = [
    {
      name: "D. Estwood",
      title: "Chief Chef",
      imageUrl: homeChefImg,
    },
    {
      name: "D. Estwood",
      title: "Chief Chef",
      imageUrl: homeChefImg,
    },
    {
      name: "D. Estwood",
      title: "Chief Chef",
      imageUrl: homeChefImg,
    },
    {
      name: "D. Estwood",
      title: "Chief Chef",
      imageUrl: homeChefImg,
    },
  ];
  const services = [
    {
      icon: <FaConciergeBell className="text-6xl text-gray-600 mb-4" />,
      title: "Concierge Service",
      description:
        "Lorem ipsum dolor sit amet consectetur. Ut sit dui congue est. Odio euismod sed amet libero. Scelerisque sed enim.",
    },
    {
      icon: <FaUtensils className="text-6xl text-gray-600 mb-4" />,
      title: "Dining",
      description:
        "Lorem ipsum dolor sit amet consectetur. Felis quam ut elementum non a consectetur. Vel ornare purus pretium ut.",
    },
    {
      icon: <FaCalendarAlt className="text-6xl text-gray-600 mb-4" />,
      title: "Restaurant",
      description:
        "Lorem ipsum dolor sit amet consectetur. Consequat pretium pellentesque venenatis odio cras posuere leo nulla etiam.",
    },
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
      <section className="py-16 px-8 lg:px-24 flex flex-col lg:flex-row lg:justify-between items-center my-24">
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

      {/* Category-Section */}
      <section className="py-16 px-8 lg:px-32 text-center my-24">
        {/* Section Title */}
        <h2 className="text-3xl font-semibold text-gray-800 mb-12">
          Food Category
        </h2>

        {/* Cards Container */}
        <div className=" grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
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
              <div className="w-full absolute top-32 left-12 inset-0">
                <div className="w-48 h-24 rounded-2xl flex justify-center items-center bg-black bg-opacity-50  opacity-90 group-hover:opacity-100 transition-opacity duration-300">
                  <button className="bg-teal-500 text-white font-semibold py-2 px-6 rounded-lg">
                    {category.title}
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Booking-Section */}
      <section
        className="h-80 relative bg-cover bg-center bg-no-repeat flex items-center justify-center my-24"
        style={{ backgroundImage: `url(${homeBookingImg})` }}
      >
        <div className="h-full w-full flex flex-col justify-center items-center text-center bg-black bg-opacity-50 p-8 rounded-lg">
          <h1 className="text-4xl md:text-5xl font-thin  text-white mb-4">
            Book Early & Save
          </h1>
          <p className="text-4xl font-sans text-gray-300 mb-8">
            Lorem ipsum dolor sit amet consectetur.
          </p>
          <PrimaryBtn />
        </div>
      </section>

      {/* Resturent-Chef */}
      <section className="py-16 px-8 lg:px-32 text-center my-24">
        <h2 className="text-4xl font-semibold text-gray-800 mb-12">
          Meet Our Chef
        </h2>

        <div className="w-full h-96 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {chefs.map((chef, index) => (
            <div
              key={index}
              className="w-full h-full shadow-lg rounded-lg overflow-hidden relative"
            >
              <img
                src={chef.imageUrl}
                alt={chef.name}
                className="w-full h-full object-cover"
              />

              <div className="absolute left-0 bottom-0 bg-white p-4 w-[60%] h-20 rounded-tr-lg">
                <h3 className="text-lg font-semibold text-gray-800">
                  {chef.name}
                </h3>
                <p className="text-gray-500">{chef.title}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12">
          <PrimaryBtn />
        </div>
      </section>

      {/* Family hall section */}
      <section className="py-16 px-8 lg:px-32 my-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 border-4 border-green-700 ">
          {/* Left Side (Image) */}
          <div className="flex flex-col space-y-8">
            <img
              src={homeFamilyHallImg} // Replace with your image path
              alt="Outdoor dining area"
              className="w-full h-64 lg:h-auto object-cover  shadow-lg"
            />
            <div className="flex flex-col justify-center items-start px-20 ">
              <h2 className="text-5xl font-thin text-gray-800 mb-4">
                Meet & Greet
              </h2>
              <p className="text-gray-600 font-sans text-base py-8">
                Eleifend facilisis sed facilisis varius hendrerit accumsan
                tortor. Donec nisi est mattis mauris morbi orci maecenas duis.
                Eleifend facilisis sed facilisis varius hendrerit accumsan
                tortor. Donec nisi est mattis mauris morbi orci maecenas duis.
                Eleifend facilisis sed facilisis varius hendrerit accumsan
                tortor. Donec nisi est mattis mauris morbi orci maecenas duis.
                Eleifend facilisis sed facilisis varius hendrerit accumsan
                tortor.
              </p>
            </div>
          </div>

          {/* Right Side (Text and Image) */}
          <div className="flex flex-col space-y-8">
            <div className="p-8 rounded-lg flex flex-col justify-center items-end">
              <h2 className="text-5xl font-thin text-gray-800 mb-4">
                Our Restaurant
              </h2>
              <p className="text-gray-600 font-sans text-right py-8">
                Eleifend facilisis sed facilisis varius hendrerit accumsan
                tortor. Donec nisi est mattis mauris morbi orci maecenas duis.
                Eleifend facilisis sed facilisis varius hendrerit accumsan
                tortor. Donec nisi est mattis mauris morbi orci maecenas duis.
                Eleifend facilisis sed facilisis varius hendrerit accumsan
                tortor. Donec nisi est mattis mauris morbi orci maecenas duis.
                Eleifend facilisis sed facilisis varius hendrerit accumsan
                tortor.
              </p>
            </div>
            <img
              src={homeBookingImg}
              alt="Conference room"
              className="w-full h-64 lg:h-auto object-cover shadow-lg"
            />
          </div>
        </div>
      </section>

      {/* Services-Section */}
      <section className="bg-teal-100 py-4 px-4 sm:px-6 lg:px-20 text-center my-24">
        <h2 className="text-3xl lg:text-4xl text-gray-800 mb-12 font-thin py-9">
          Our Services
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {services.map((service, index) => (
            <div
              key={index}
              className="flex flex-col items-center text-center px-9 py-8"
            >
              {service.icon}
              <h3 className="text-xl font-thin text-gray-700 mb-4">
                {service.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </section>


      <Footer/>

    </>
  );
};

export default HeroSection;
