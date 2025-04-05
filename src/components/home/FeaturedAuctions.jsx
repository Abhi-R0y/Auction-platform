import React from "react";
import { Link } from "react-router-dom";
import { FaLaptop, FaPaintBrush, FaCar, FaBuilding } from "react-icons/fa"; // Import icons

const categories = [
  { name: "Electronics", icon: <FaLaptop />, path: "/category/electronics" },
  { name: "Art", icon: <FaPaintBrush />, path: "/category/art" },
  { name: "Automobiles", icon: <FaCar />, path: "/category/automobiles" },
  { name: "Real Estate", icon: <FaBuilding />, path: "/category/real-estate" },
];

const Categories = () => {
  return (
    <div className="p-10 bg-gray-100">
      <h2 className="text-3xl font-extrabold mb-6 text-center text-gray-800">📂 Browse by Categories</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
        {categories.map((category, index) => (
          <Link 
            to={category.path} 
            key={index} 
            className="p-6 bg-white rounded-lg text-center shadow-lg transform transition-all duration-300 hover:scale-105 hover:shadow-2xl"
          >
            <div className="text-4xl text-blue-500 mb-3">{category.icon}</div>
            <p className="text-xl font-semibold text-gray-700">{category.name}</p>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Categories;
