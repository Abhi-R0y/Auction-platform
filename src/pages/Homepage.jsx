import React from "react";
import PromoBanner from "../components/home/PromoBanner"; // New Banner
import HeroSection from "../components/home/HeroSection";
import Categories from "../components/home/Categories";
import FeaturedAuctions from "../components/home/FeaturedAuctions";
import LiveAuctionFeed from "../components/home/LiveAuctionFeed"; // New Live Auctions
import TopSellers from "../components/home/TopSellers"; // New Top Sellers
import HowItWorks from "../components/home/HowItWorks";
import Testimonials from "../components/home/Testimonials";
import NewsletterSignup from "../components/home/NewsletterSignup"; // New Newsletter
import FAQSection from "../components/home/FAQSection"; // New FAQ
import CTASection from "../components/home/CTASection";

const HomePage = () => {
  return (
    <div className="space-y-12">
      <PromoBanner /> {/* 1️⃣ Promo Banner */}
      <HeroSection />
      <Categories />
      <FeaturedAuctions />
      <LiveAuctionFeed /> {/* 2️⃣ Live Auctions */}
      <TopSellers /> {/* 3️⃣ Top Sellers */}
      <HowItWorks />
      <Testimonials />
      <NewsletterSignup /> {/* 4️⃣ Newsletter */}
      <FAQSection /> {/* 5️⃣ FAQs */}
      <CTASection />
    </div>
  );
};

export default HomePage;
