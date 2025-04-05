import React from "react";

const WhyChooseUs = () => {
  return (
    <div className="container mx-auto py-12">
      <h2 className="text-3xl font-bold text-center mb-6">Why Choose Auction House?</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
        <div className="p-4 border rounded-lg shadow-lg">
          <h3 className="text-xl font-bold">🔥 Secure Bidding</h3>
          <p>We ensure a fair and secure auction process.</p>
        </div>
        <div className="p-4 border rounded-lg shadow-lg">
          <h3 className="text-xl font-bold">🌎 Global Marketplace</h3>
          <p>Bid and sell from anywhere in the world.</p>
        </div>
        <div className="p-4 border rounded-lg shadow-lg">
          <h3 className="text-xl font-bold">⚡ Fast Transactions</h3>
          <p>Easy payments and fast delivery.</p>
        </div>
      </div>
    </div>
  );
};

export default WhyChooseUs;
