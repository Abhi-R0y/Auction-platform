import React from "react";
import { FaStar, FaStarHalfAlt } from "react-icons/fa"; // Import icons for ratings

const testimonials = [
  { 
    name: "John Doe", 
    feedback: "Amazing auction experience! Won my first bid easily.", 
    rating: 5, 
    image: "https://randomuser.me/api/portraits/men/10.jpg" 
  },
  { 
    name: "Jane Smith", 
    feedback: "Loved the bidding system! Very smooth and fair.", 
    rating: 4.5, 
    image: "https://randomuser.me/api/portraits/women/10.jpg" 
  },
  { 
    name: "Michael Brown", 
    feedback: "Great platform with a user-friendly interface.", 
    rating: 4, 
    image: "https://randomuser.me/api/portraits/men/20.jpg" 
  },
];

const Testimonials = () => {
  return (
    <div className="p-10 bg-gradient-to-r from-blue-500 to-indigo-600 text-white text-center">
      <h2 className="text-3xl font-extrabold mb-6">🌟 What Our Users Say</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {testimonials.map((t, index) => (
          <div key={index} className="p-6 bg-white text-gray-800 rounded-xl shadow-lg transition-all duration-300 hover:scale-105">
            <img 
              src={t.image} 
              alt={t.name} 
              className="w-20 h-20 rounded-full mx-auto border-4 border-blue-500 shadow-md"
            />
            <p className="text-lg italic mt-3">"{t.feedback}"</p>
            <div className="flex justify-center mt-3">
              {[...Array(Math.floor(t.rating))].map((_, i) => (
                <FaStar key={i} className="text-yellow-400 text-lg" />
              ))}
              {t.rating % 1 !== 0 && <FaStarHalfAlt className="text-yellow-400 text-lg" />}
            </div>
            <h3 className="mt-3 font-bold text-gray-700">- {t.name}</h3>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Testimonials;
