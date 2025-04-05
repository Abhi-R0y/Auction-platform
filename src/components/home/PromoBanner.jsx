import React, { useState } from "react";
import { Link } from "react-router-dom";

const PromoBanner = () => {
  const [isVisible, setIsVisible] = useState(true);

  if (!isVisible) return null; // Hide banner if dismissed

  return (
    <div className="bg-red-600 text-white text-center py-3 px-4 flex justify-between items-center">
      <p className="text-lg font-semibold">
        🎉 50% Off Your First Bid! <Link to="/signup" className="underline">Sign Up Now</Link>
      </p>
      <button onClick={() => setIsVisible(false)} className="text-white text-xl px-4">
        ✖
      </button>
    </div>
  );
};

export default PromoBanner;
