// src/pages/PremiumPage.jsx
import React from 'react';
import { Link } from 'react-router-dom';

function PremiumPage() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-r from-[#6a1b9a] to-[#e61f93] text-white">
      <h1 className="text-4xl md:text-5xl font-bold mb-6">Premium Features</h1>
      <p className="text-xl mb-8 max-w-2xl text-center">
        Unlock exclusive features with SafeSteps Premium! Get access to advanced tracking, personalized insights, and more.
      </p>
      <div className="flex gap-4">
        <Link
          to="/"
          className="bg-white text-[#6a1b9a] px-6 py-3 rounded-full font-semibold hover:bg-[#c5aded] transition duration-300"
        >
          Go Back Home
        </Link>
        <button className="bg-[#e61f93] text-white px-6 py-3 rounded-full font-semibold hover:bg-[#c5aded] hover:text-[#6a1b9a] transition duration-300">
          Subscribe Now
        </button>
      </div>
    </div>
  );
}

export default PremiumPage;