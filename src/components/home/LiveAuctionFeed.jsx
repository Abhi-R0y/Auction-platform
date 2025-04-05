import React from "react";

const LiveAuctionFeed = () => {
  return (
    <div className="p-10 bg-gray-50">
      <h2 className="text-3xl font-extrabold text-center text-gray-800">🔥 Live Auctions</h2>
      <p className="text-center text-gray-600">Join auctions happening right now in real-time!</p>
      <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Sample Auctions */}
        {[1, 2, 3].map((_, index) => (
          <div key={index} className="p-6 bg-white rounded-lg shadow-lg transition-all hover:scale-105">
            <p className="text-lg font-semibold">Auction #{index + 1}</p>
            <p className="text-gray-600">Live bidding ongoing...</p>
            <button className="mt-3 bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600">Join Now</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default LiveAuctionFeed;
