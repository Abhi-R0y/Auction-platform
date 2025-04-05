import React, { useState, useEffect } from "react";

const StartBidding = () => {
  const [auctionItem, setAuctionItem] = useState(null);
  const [currentBid, setCurrentBid] = useState(0);
  const [userBid, setUserBid] = useState("");

  // Fetch a random auction item (Mock API)
  const fetchAuctionItem = async () => {
    try {
      const res = await fetch("https://fakestoreapi.com/products/1"); // Example product
      const data = await res.json();
      setAuctionItem(data);
      setCurrentBid(data.price); // Initial price as starting bid
    } catch (error) {
      console.error("Error fetching auction item:", error);
    }
  };

  // Function to handle new bid
  const placeBid = () => {
    const bidAmount = parseFloat(userBid);
    if (!bidAmount || bidAmount <= currentBid) {
      alert("Please enter a valid bid higher than the current bid.");
      return;
    }
    setCurrentBid(bidAmount);
    setUserBid(""); // Clear input field
    alert(`New bid placed: $${bidAmount}`);
  };

  return (
    <div className="p-6">
      <button
        onClick={fetchAuctionItem}
        className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700"
      >
        Start Bidding
      </button>

      {/* Display Auction Item */}
      {auctionItem && (
        <div className="mt-6 p-4 border rounded-lg shadow-lg max-w-md">
          <h2 className="text-xl font-bold">{auctionItem.title}</h2>
          <img src={auctionItem.image} alt={auctionItem.title} className="h-40 mx-auto my-2" />
          <p className="text-gray-600">Current Bid: ${currentBid}</p>

          {/* Bid Input */}
          <div className="mt-4">
            <input
              type="number"
              value={userBid}
              onChange={(e) => setUserBid(e.target.value)}
              placeholder="Enter your bid"
              className="border p-2 rounded w-full"
            />
            <button
              onClick={() => window.location.pathname = "/signup"}
              className="mt-2 bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 w-full"
            >
              Place Bid
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default StartBidding;
