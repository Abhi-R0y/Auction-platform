import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white text-center p-6 mt-10">
      <div className="container mx-auto">
        {/* Links */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div>
            <h2 className="text-lg font-bold">Auction House</h2>
            <p className="text-gray-400 mt-2">Bid & Win Amazing Products!</p>
          </div>

          <div>
            <h3 className="text-lg font-bold">Quick Links</h3>
            <ul className="mt-2 space-y-2">
              <li><Link to="/" className="hover:text-gray-400">Home</Link></li>
              <li><Link to="/auctions" className="hover:text-gray-400">Auctions</Link></li>
              <li><Link to="/contact" className="hover:text-gray-400">Contact</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-bold">Follow Us</h3>
            <div className="mt-2 space-x-4">
              <a href="#" className="hover:text-blue-400">🔵 Facebook</a>
              <a href="#" className="hover:text-blue-400">🐦 Twitter</a>
              <a href="#" className="hover:text-pink-400">📸 Instagram</a>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <p className="text-gray-500 mt-6">© {new Date().getFullYear()} Auction House. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
