import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { ArrowLeft, Zap } from 'lucide-react';

function PremiumPage() {
  const navigate = useNavigate();
  
  const handleSubscribe = () => {
    navigate('/login');
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#f3e5f5] to-white py-12">
      <div className="container mx-auto px-4">
        {/* Back link matching the Login page style */}
        <Link to="/" className="inline-flex items-center text-[#6a1b9a] hover:text-[#e61f93] mb-8">
          <ArrowLeft className="w-5 h-5 mr-2" />
          Back to Home
        </Link>

        {/* Centered content box matching Login page structure */}
        <div className="max-w-md mx-auto bg-white rounded-xl shadow-lg p-8">
          <h1 className="text-3xl font-bold text-[#6a1b9a] text-center mb-8">
            Premium Access
          </h1>
          
          <p className="text-xl text-gray-600 text-center mb-8">
            Unlock exclusive features with SafeSteps Premium
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-[#f3e5f5] text-[#6a1b9a] hover:bg-[#e8d5f5] transition duration-300"
            >
              <ArrowLeft className="w-5 h-5" />
              Back Home
            </Link>
            
            <button
              onClick={handleSubscribe}
              className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-[#e61f93] text-white hover:bg-[#d81b84] transition duration-300"
            >
              <Zap className="w-5 h-5" />
              Subscribe Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PremiumPage;  