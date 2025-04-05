import React from "react";

const steps = [
  { step: "1", title: "Register", description: "Create an account." },
  { step: "2", title: "Browse", description: "Find exciting auctions." },
  { step: "3", title: "Bid", description: "Compete for the best deals." },
  { step: "4", title: "Win", description: "Make payment securely." },
];

const HowItWorks = () => {
  return (
    <div className="p-10 bg-gray-100 text-center">
      <h2 className="text-2xl font-bold mb-6">How It Works</h2>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        {steps.map((step, index) => (
          <div key={index} className="p-4 border rounded-lg shadow-md">
            <h3 className="text-lg font-semibold">{step.title}</h3>
            <p className="text-gray-600">{step.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HowItWorks;
