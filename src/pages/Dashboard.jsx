import React from "react";
import { Link } from "react-router-dom";

const Dashboard = () => {
  return (
    <div className="container mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6">My Dashboard</h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* View My Bids */}
        <div className="bg-white shadow-lg p-6 rounded-lg text-center">
          <h2 className="text-xl font-bold mb-2">My Bids</h2>
          <p>Track all the auctions you’ve placed bids on.</p>
          <Link to="/my-bids" className="btn-primary mt-4 inline-block">
            View My Bids
          </Link>
        </div> 

        {/* My Won Auctions */}
        <div className="bg-white shadow-lg p-6 rounded-lg text-center">
          <h2 className="text-xl font-bold mb-2">Won Auctions</h2>
          <p>See the items you have successfully won.</p>
          <Link to="/won-auctions" className="btn-secondary mt-4 inline-block">
            My Won Auctions
          </Link>
        </div>

        {/* List an Item for Sale */}
        <div className="bg-white shadow-lg p-6 rounded-lg text-center">
          <h2 className="text-xl font-bold mb-2">Sell an Item</h2>
          <p>List a new item to be auctioned.</p>
          <Link to="/sell-item" className="btn-tertiary mt-4 inline-block">
            List an Item
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
