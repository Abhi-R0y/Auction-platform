import React from "react";

const sellers = [
  { name: "John Doe", itemsSold: 250, rating: "⭐️⭐️⭐️⭐️⭐️" },
  { name: "Jane Smith", itemsSold: 180, rating: "⭐️⭐️⭐️⭐️" },
  { name: "Michael Brown", itemsSold: 300, rating: "⭐️⭐️⭐️⭐️⭐️" },
];

const TopSellers = () => {
  return (
    <div className="p-10 bg-white">
      <h2 className="text-3xl font-extrabold text-center text-gray-800">🏆 Top Sellers</h2>
      <p className="text-center text-gray-600">Trusted sellers with excellent reputation.</p>
      <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-6">
        {sellers.map((seller, index) => (
          <div key={index} className="p-6 bg-gray-100 rounded-lg shadow-md text-center">
            <p className="text-xl font-semibold">{seller.name}</p>
            <p className="text-gray-600">Items Sold: {seller.itemsSold}</p>
            <p>{seller.rating}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TopSellers;
