import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useTheme } from "../context/ThemeContext"; // Import Theme Context

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { theme, toggleTheme } = useTheme(); // Get theme and toggle function

  return (
    <nav className={`p-4 shadow-lg transition-all duration-300 ${theme === "light" ? "bg-blue-600 text-white" : "bg-gray-900 text-gray-200"}`}>
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <Link to="/" className="text-2xl font-bold">Auction House</Link>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden focus:outline-none text-2xl" 
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? "✖" : "☰"}
        </button>

        {/* Navigation Links */}
        <ul className={`absolute md:static top-16 left-0 w-full md:w-auto bg-blue-600 md:bg-transparent text-white md:flex space-y-4 md:space-y-0 md:space-x-6 p-4 md:p-0 transition-all duration-300 ${isOpen ? "block" : "hidden"}`}>
          <li><Link to="/" className="hover:text-gray-300 block">Home</Link></li>
          <li><Link to="/auctions" className="hover:text-gray-300 block">Auctions</Link></li>
          <li><Link to="/dashboard" className="hover:text-gray-300 block">Dashboard</Link></li>

          {/* Categories Dropdown */}
          <li className="relative group">
            <button className="hover:text-gray-300 block">Categories ▾</button>
            <ul className="absolute left-0 hidden group-hover:block bg-white text-black rounded-lg shadow-lg w-40">
              <li><Link to="/category/electronics" className="block px-4 py-2 hover:bg-gray-200">Electronics</Link></li>
              <li><Link to="/category/art" className="block px-4 py-2 hover:bg-gray-200">Art</Link></li>
              <li><Link to="/category/real-estate" className="block px-4 py-2 hover:bg-gray-200">Real Estate</Link></li>
            </ul>
          </li>

          <li><Link to="/contact" className="hover:text-gray-300 block">Contact</Link></li>

          {/* Authentication Buttons - Fixed */}
          <div className="flex md:space-x-4 flex-col md:flex-row w-full md:w-auto">
            <Link 
              to="/login" 
              className="bg-green-500 px-4 py-2 rounded-lg hover:bg-green-600 text-center md:inline-block w-full md:w-auto"
            >
              Login
            </Link>
            <Link 
              to="/signup" 
              className="bg-blue-500 px-4 py-2 rounded-lg hover:bg-blue-600 text-center md:inline-block w-full md:w-auto"
            >
              Sign Up
            </Link>
          </div>

          {/* 🔥 Multi-Theme Toggle Button */}
          <li>
            <button 
              onClick={toggleTheme} 
              className="px-4 py-2 rounded-lg border text-sm transition-all duration-300"
            >
              {theme === "light" && "🌞 Light Mode"}
              {theme === "dark" && "🌙 Dark Mode"}
              {theme === "cyberpunk" && "⚡ Cyberpunk"}
              {theme === "gold" && "🏆 Gold Mode"}
              {theme === "eco" && "🌿 Eco Mode"}
            </button>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
