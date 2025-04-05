import React, { useState } from "react";

const faqs = [
  { question: "How do I bid on an item?", answer: "Simply create an account and place a bid on any active auction." },
  { question: "What payment methods are accepted?", answer: "We accept credit/debit cards, PayPal, and cryptocurrency." },
  { question: "How do I become a seller?", answer: "Go to your dashboard and register as a seller to list your items." },
];

const FAQSection = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  return (
    <div className="p-10 bg-gray-100">
      <h2 className="text-3xl font-extrabold text-center text-gray-800">❓ Frequently Asked Questions</h2>
      <div className="mt-6 space-y-4">
        {faqs.map((faq, index) => (
          <div 
            key={index} 
            className="p-4 bg-white rounded-lg shadow-md cursor-pointer transition-all"
            onClick={() => setActiveIndex(activeIndex === index ? null : index)}
          >
            <p className="font-semibold">{faq.question}</p>
            {activeIndex === index && <p className="mt-2 text-gray-600">{faq.answer}</p>}
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQSection;
