import React from "react";
import StartBidding from "../components/StartBidding";

const AuctionsPage = () => {
  return (
    <div className="p-10 text-center">
      <h2 className="text-2xl font-bold mb-4">Live Auctions</h2>
      <StartBidding />
    </div>
  );
};

export default AuctionsPage;
