import React from "react";
import { useNavigate } from "react-router-dom";

const HeroSection = () => {
  const navigate = useNavigate();

  return (
    <div className="relative w-full h-screen flex items-center justify-center text-center">
      {/* Background Image */}
      <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: "url('https://source.unsplash.com/1600x900/?auction')" }}></div>

      {/* Dark Overlay for Text Visibility */}
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>

      {/* Hero Content */}
      <div className="relative z-10 text-white px-6">
        <h1 className="text-5xl font-extrabold drop-shadow-lg animate-fade-in">
          Welcome to <span className="text-yellow-400">Auction House</span>
        </h1>
        <p className="mt-4 text-lg max-w-lg mx-auto opacity-90">
          Discover rare items, place your bids, and win big in real-time auctions!
        </p>

        {/* Start Bidding Button */}
        <button
          onClick={() => navigate("/auctions")}
          className="mt-6 px-8 py-3 bg-yellow-500 text-black font-bold rounded-lg shadow-lg hover:bg-yellow-600 transition-all duration-300 animate-bounce"
        >
          🚀 Start Bidding
        </button>
      </div>
    </div>
  );
};

export default HeroSection;
