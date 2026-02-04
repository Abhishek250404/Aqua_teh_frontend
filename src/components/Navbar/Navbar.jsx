import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { FaBars, FaTimes, FaPhoneAlt } from "react-icons/fa";
import logo from "../../assets/logo.png";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Know Your Water", path: "/knowyourwater" },
    { name: "Product", path: "/product" },
    { name: "About", path: "/about" },
    { name: "Services", path: "/service" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <nav className="bg-white w-full shadow-sm">
      <div className="max-w-7xl mx-auto px-4 lg:px-8">
        <div className="flex items-center justify-between h-20">

          {/* Logo + Business Name + Desktop Menu - All on LEFT */}
          <div className="flex items-center space-x-8">
            {/* Logo and Business Name */}
            {/* Logo and Business Name - DESKTOP ONLY */}
            <div className="hidden md:flex items-center space-x-2">
              <img
                src={logo}
                alt="Aqua Tech RO System Logo"
                className="h-20 w-auto"
              />
              <div>
                <h1 className="text-xl font-bold text-blue-800 leading-tight">
                  AQUA TECH RO SYSTEM
                </h1>
                <p className="text-xs text-gray-500">   Pure Water. Healthy Life. Trusted RO Solutions.</p>
              </div>
            </div>


            {/* Desktop Menu - On the LEFT after logo */}
            <div className="hidden md:flex items-center space-x-10">
              <div className="hidden md:flex items-center space-x-10">
                {navLinks.map((item, index) => (
                  <NavLink
                    key={index}
                    to={item.path}
                    className={({ isActive }) =>
                      `relative font-medium transition-colors duration-200
         ${isActive ? "text-blue-600" : "text-gray-700 hover:text-blue-600"}`
                    }
                  >
                    {({ isActive }) => (
                      <>
                        {item.name}
                        <span
                          className={`absolute -bottom-1 left-0 h-0.5 bg-blue-600 transition-all duration-300
              ${isActive ? "w-full" : "w-0 hover:w-full"}`}
                        />
                      </>
                    )}
                  </NavLink>
                ))}
              </div>


            </div>
          </div>

          {/* Desktop Contact - On the RIGHT */}
          <div className="hidden md:flex items-center space-x-6">
            <div className="text-right">
              <p className="text-sm text-gray-500">Call us 24/7</p>
              <a
                href="tel:+919843021579"
                className="text-lg font-bold text-blue-700 hover:text-blue-800"
              >
                +91 98430 21579
              </a>
            </div>
            <a
              href="tel:+919843021579"
              className="flex items-center justify-center w-12 h-12 
                   bg-blue-600 hover:bg-blue-700 text-white 
                   rounded-full transition-all duration-300 shadow-md
                   hover:shadow-lg hover:scale-105"
              aria-label="Call Now"
            >
              <FaPhoneAlt className="text-lg" />
            </a>
          </div>

          {/* Mobile Menu Button - On the RIGHT (mobile only) */}
          {/* MOBILE HEADER */}
          <div className="flex items-center justify-between w-full md:hidden">

            {/* Mobile Logo - LEFT */}
            <div className="flex items-center space-x-2">
              <img src={logo} alt="Logo" className="h-10 w-auto" />
              <div>
                <h1 className="text-sm font-bold text-blue-800">AQUA TECH RO SYSTEM</h1>
                <p className="text-xs text-gray-500"></p>
              </div>
            </div>

            {/* Call + Menu Button - RIGHT */}
            <div className="flex items-center space-x-2">
              <a
                href="tel:+919843021579"
                className="flex items-center justify-center w-10 h-10 
           bg-blue-600 text-white rounded-full shadow-md"
              >
                <FaPhoneAlt size={16} />
              </a>

              <button
                onClick={() => setIsOpen(!isOpen)}
                className="p-3 rounded-lg hover:bg-gray-100"
              >
                {isOpen ? <FaTimes size={22} /> : <FaBars size={22} />}
              </button>
            </div>

          </div>

        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {isOpen && (
        <div className="md:hidden bg-white shadow-xl border-t">
          <div className="px-4 py-6 space-y-1">
            {navLinks.map((item, index) => (
              <NavLink
                key={index}
                to={item.path}
                onClick={() => setIsOpen(false)}
                className={({ isActive }) =>
                  `flex items-center py-4 px-4 rounded-lg font-medium transition-colors
       ${isActive
                    ? "bg-blue-100 text-blue-700"
                    : "text-gray-700 hover:text-blue-600 hover:bg-blue-50"
                  }`
                }
              >
                <span className="ml-2">{item.name}</span>
              </NavLink>
            ))}

          </div>

          {/* Mobile Contact Info */}
          <div className="bg-linear-to-r from-blue-50 to-blue-100 px-6 py-8">
            <div className="text-center mb-6">
              <h3 className="text-lg font-bold text-gray-800 mb-2">Need Help?</h3>
              <p className="text-gray-600">We're here to assist you</p>
            </div>

            <div className="space-y-4">
              <a
                href="tel:+919843021579"
                className="flex items-center justify-center space-x-4 bg-white 
                     text-blue-700 px-6 py-4 rounded-xl shadow-sm hover:shadow-md 
                     transition-shadow border border-blue-100"
              >
                <div className="flex items-center justify-center w-12 h-12 
                           bg-blue-100 rounded-full">
                  <FaPhoneAlt className="text-blue-600" />
                </div>
                <div className="text-left">
                  <p className="text-sm text-gray-500">Call Now</p>
                  <p className="text-xl font-bold">+91 98430 21579</p>
                </div>
              </a>

              <div className="text-center pt-4 border-t border-blue-200">
                <p className="text-sm text-gray-500">
                  Mon-Sun: 8:00 AM - 9:00 PM
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
