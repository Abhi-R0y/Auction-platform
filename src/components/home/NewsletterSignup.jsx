import React, { useState } from "react";

const NewsletterSignup = () => {
  const [email, setEmail] = useState("");

  const handleSubscribe = () => {
    alert(`Thank you for subscribing, ${email}!`);
    setEmail("");
  };

  return (
    <div className="p-10 bg-blue-600 text-white text-center">
      <h2 className="text-3xl font-extrabold">📩 Stay Updated!</h2>
      <p className="text-lg">Subscribe to get the latest auction updates.</p>
      <div className="mt-4 flex justify-center">
        <input 
          type="email" 
          className="p-3 w-64 text-black rounded-l-lg focus:outline-none"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <button 
          className="p-3 bg-gray-900 text-white rounded-r-lg hover:bg-gray-700"
          onClick={handleSubscribe}
        >
          Subscribe
        </button>
      </div>
    </div>
  );
};

export default NewsletterSignup;
