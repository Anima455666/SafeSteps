import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft, CreditCard, Lock, Shield, BadgeCheck, Gem, CheckCircle2 } from 'lucide-react';
import { Link } from 'react-router-dom';

function Payment() {
  const [agreeTerms, setAgreeTerms] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!agreeTerms) {
      alert('Please agree to the Terms & Conditions');
      return;
    }
    
    // In a real implementation, you would initialize Razorpay here
    // This is just a simulation
    alert('Redirecting to Razorpay payment gateway...');
    
    // Simulate successful payment after a delay
    setTimeout(() => {
      alert('Payment successful! Welcome to SafeSteps Premium!');
      navigate('/');
    }, 2000);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#f8f5ff] to-[#f0e6ff] py-12">
      <div className="container mx-auto px-4">
        <Link 
          to="/login" 
          className="inline-flex items-center text-[#6a1b9a] hover:text-[#8e24aa] transition-colors duration-300 mb-8 group"
        >
          <ArrowLeft className="w-5 h-5 mr-2 transition-transform duration-300 group-hover:-translate-x-1" />
          <span className="font-medium">Back to Login</span>
        </Link>

        <div className="max-w-lg mx-auto bg-white rounded-2xl shadow-xl overflow-hidden">
          {/* Premium Header */}
          <div className="bg-gradient-to-r from-[#6a1b9a] to-[#8e24aa] p-8 text-white">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center space-x-3">
                <Gem className="w-8 h-8" />
                <h1 className="text-2xl font-bold">SafeSteps Premium</h1>
              </div>
              <div className="bg-white/20 rounded-full px-4 py-1.5 text-sm font-medium flex items-center">
                <Shield className="w-4 h-4 mr-2" />
                Secure Payment
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <CheckCircle2 className="w-5 h-5 text-green-300" />
              <p className="text-white/90">Complete your premium membership payment</p>
            </div>
          </div>

          <div className="p-8">
            <form onSubmit={handleSubmit} className="space-y-8">
              <div>
                <h2 className="text-lg font-semibold text-gray-800 mb-4">Payment Method</h2>
                <div className="flex gap-4 mb-6">
                  <div className="w-full p-4 rounded-xl border border-[#6a1b9a] bg-purple-50 shadow-md flex items-center">
                    <div className="w-12 h-12 bg-blue-50 rounded-lg flex items-center justify-center mr-4">
                      <img 
                        src="https://razorpay.com/build/browser/static/razorpay-logo.56d7452f.svg" 
                        alt="Razorpay" 
                        className="h-6"
                      />
                    </div>
                    <div>
                      <h3 className="font-medium text-gray-800">Razorpay</h3>
                      <p className="text-sm text-gray-500">Secure payment gateway</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-purple-50 rounded-xl p-6 border border-purple-100">
                <div className="flex justify-between items-center mb-4">
                  <h3 className="font-medium text-gray-700">Plan</h3>
                  <span className="font-semibold">Premium Annual</span>
                </div>
                <div className="flex justify-between items-center mb-4">
                  <h3 className="font-medium text-gray-700">Amount</h3>
                  <span className="font-semibold">₹10</span>
                </div>
                <div className="flex justify-between items-center pt-4 border-t border-purple-100">
                  <h3 className="font-medium text-gray-700">Total</h3>
                  <span className="text-xl font-bold text-[#6a1b9a]">₹10</span>
                </div>
              </div>

              <div className="flex items-start">
                <div className="flex items-center h-5">
                  <input
                    id="terms"
                    name="terms"
                    type="checkbox"
                    checked={agreeTerms}
                    onChange={(e) => setAgreeTerms(e.target.checked)}
                    className="focus:ring-[#6a1b9a] h-4 w-4 text-[#6a1b9a] border-gray-300 rounded"
                    required
                  />
                </div>
                <div className="ml-3">
                  <label htmlFor="terms" className="text-sm text-gray-700">
                    I agree to the <a href="#" className="text-[#6a1b9a] hover:underline">Terms</a> and <a href="#" className="text-[#6a1b9a] hover:underline">Privacy Policy</a>
                  </label>
                </div>
              </div>

              <button
                type="submit"
                className="w-full bg-gradient-to-r from-[#6a1b9a] to-[#8e24aa] text-white py-4 rounded-xl hover:from-[#5c1589] hover:to-[#7b1fa2] transition-all duration-300 flex items-center justify-center gap-2 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
              >
                <Lock className="w-5 h-5" />
                <span className="font-medium">Pay with Razorpay</span>
              </button>
            </form>

            <div className="mt-8 pt-6 border-t border-gray-200">
              <div className="flex items-center justify-center space-x-6">
                <div className="flex items-center text-gray-500 text-sm">
                  <Shield className="w-4 h-4 mr-2 text-green-500" />
                  SSL Secured
                </div>
                <div className="flex items-center text-gray-500 text-sm">
                  <BadgeCheck className="w-4 h-4 mr-2 text-blue-500" />
                  PCI DSS Compliant
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Payment;