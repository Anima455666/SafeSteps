import React from 'react';
import { ArrowLeft, Baby, MessageCircle } from 'lucide-react';
import { Link } from 'react-router-dom';

function MaternityTracking() {
  return (
    <div className="min-h-screen bg-gray-50">
      <nav className="bg-[#6a1b9a] p-4">
        <div className="container mx-auto">
          <Link to="/" className="text-white flex items-center gap-2 w-fit">
            <ArrowLeft className="w-5 h-5" />
            Back to Home
          </Link>
        </div>
      </nav>

      <main className="container mx-auto px-4 py-12">
        <div className="flex items-center gap-3 mb-8">
          <Baby className="w-8 h-8 text-[#e61f93]" />
          <h1 className="text-3xl font-bold text-[#6a1b9a]">Maternity Tracking</h1>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <img
              src="https://i.pinimg.com/736x/c3/7b/d0/c37bd023943c4db6b5328c28a77081a2.jpg" // Updated image URL
              alt="Pregnant woman"
              className="rounded-xl shadow-lg mb-6 h-64 w-full object-cover" // Adjusted height to h-64
            />
            <div className="bg-white p-6 rounded-xl shadow-lg">
              <h2 className="text-xl font-semibold text-[#6a1b9a] mb-4">Your Pregnancy Journey</h2>
              <ul className="space-y-3">
                <li className="flex items-center gap-2 text-gray-600">
                  <span className="w-2 h-2 bg-[#e61f93] rounded-full"></span>
                  Week-by-week development tracking
                </li>
                <li className="flex items-center gap-2 text-gray-600">
                  <span className="w-2 h-2 bg-[#e61f93] rounded-full"></span>
                  Personalized health recommendations
                </li>
                <li className="flex items-center gap-2 text-gray-600">
                  <span className="w-2 h-2 bg-[#e61f93] rounded-full"></span>
                  Milestone tracking and reminders
                </li>
                <li className="flex items-center gap-2 text-gray-600">
                  <span className="w-2 h-2 bg-[#e61f93] rounded-full"></span>
                  Expert guidance throughout pregnancy
                </li>
              </ul>
            </div>
          </div>

          <div className="space-y-6">
            <div className="bg-white p-6 rounded-xl shadow-lg">
              <h2 className="text-xl font-semibold text-[#6a1b9a] mb-4">Key Features</h2>
              <div className="space-y-4">
                <div className="p-4 bg-[#c5aded] bg-opacity-20 rounded-lg">
                  <h3 className="font-semibold text-[#6a1b9a] mb-2">Pregnancy Tracking</h3>
                  <p className="text-gray-600">
                    Track your baby's growth, monitor your health, and stay updated with weekly milestones.
                  </p>
                </div>
                <div className="p-4 bg-[#c5aded] bg-opacity-20 rounded-lg">
                  <h3 className="font-semibold text-[#6a1b9a] mb-2">Health Monitoring</h3>
                  <p className="text-gray-600">
                    Log important health metrics and symptoms to ensure a healthy pregnancy.
                  </p>
                </div>
                <div className="p-4 bg-[#c5aded] bg-opacity-20 rounded-lg">
                  <h3 className="font-semibold text-[#6a1b9a] mb-2">Preparation Guide</h3>
                  <p className="text-gray-600">
                    Access checklists and guides for each trimester and delivery preparation.
                  </p>
                </div>
              </div>
            </div>

            {/* Centered "Chat with Us" Button */}
            <div className="flex justify-center">
              <a
                href="https://t.me/SafeSisterBot" // Updated link to @SafeSisterBot
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#6a1b9a] text-white px-8 py-3 rounded-full font-semibold flex items-center gap-2 hover:bg-[#4a148c] transition duration-300" // Updated button color
              >
                <MessageCircle className="w-5 h-5" />
                Chat with Us
              </a>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default MaternityTracking;