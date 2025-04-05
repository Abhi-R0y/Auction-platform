import React from "react";
import { useNavigate } from "react-router-dom";

const CTASection = () => {
  const navigate = useNavigate();

  return (
    <div className="bg-gradient-to-r from-blue-600 to-blue-800 text-white text-center py-16 px-6 rounded-lg shadow-lg mt-12">
      <h2 className="text-3xl font-bold">Ready to Start Bidding?</h2>
      <p className="mt-4 text-lg">Join our auction house and start bidding on amazing items today!</p>
      <div className="mt-6 flex justify-center gap-4">
        <button 
          onClick={() => navigate("/signup")} 
          className="px-6 py-3 bg-white text-blue-600 font-bold rounded-lg shadow-md hover:bg-gray-200 transition"
        >
          Sign Up
        </button>
        <button 
          onClick={() => navigate("/auctions")} 
          className="px-6 py-3 bg-yellow-500 text-white font-bold rounded-lg shadow-md hover:bg-yellow-600 transition"
        >
          Explore Auctions
        </button>
      </div>
    </div>
  );
};

export default CTASection;
