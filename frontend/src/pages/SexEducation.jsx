import React from 'react';
import { ArrowLeft, BookOpen, Lock } from 'lucide-react';
import { Link } from 'react-router-dom';

const ageGroups = [
  {
    range: "9-12",
    title: "Growing Up & Changes",
    topics: [
      "Understanding puberty",
      "Physical and emotional changes",
      "Personal hygiene",
      "Respecting personal boundaries"
    ],
    image: "https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?auto=format&fit=crop&w=800",
    link: "/sex-education/9-12"
  },
  {
    range: "13-15",
    title: "Teen Health & Relationships",
    topics: [
      "Body image and self-esteem",
      "Healthy relationships",
      "Digital safety",
      "Understanding consent"
    ],
    image: "https://t4.ftcdn.net/jpg/03/15/87/35/360_F_315873518_3DpsHxRea2S9zncyypJE2DMiluLGLPVF.jpg",
    link: "/sex-education/13-15"
  },
  {
    range: "16+",
    title: "Sexual Health & Responsibility",
    topics: [
      "Reproductive health",
      "Safe practices",
      "Emotional well-being",
      "Making informed decisions"
    ],
    image: "https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?auto=format&fit=crop&w=800",
    link: "/premium",
    isPremium: true
  }
];

function SexEducation() {
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
          <BookOpen className="w-8 h-8 text-[#e61f93]" />
          <h1 className="text-3xl font-bold text-[#6a1b9a]">Age-Appropriate Sex Education</h1>
        </div>

        <p className="text-gray-600 mb-12 max-w-3xl">
          Select your age group to access relevant educational content designed specifically for your developmental stage. 
          Our content is carefully curated to provide appropriate, accurate, and helpful information.
        </p>

        <div className="grid md:grid-cols-3 gap-6 mb-8">
          {ageGroups.map((group) => (
            <div 
              key={group.range}
              className="rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <img 
                src={group.image} 
                alt={`Age ${group.range}`} 
                className="w-full h-48 object-cover"
              />
              <div className="p-6 bg-white">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-xl font-semibold text-[#6a1b9a]">{group.title}</h3>
                  <span className="bg-[#c5aded] text-[#6a1b9a] px-3 py-1 rounded-full text-sm font-medium">
                    Age {group.range}
                  </span>
                </div>
                <ul className="space-y-2 mb-6">
                  {group.topics.map((topic, index) => (
                    <li key={index} className="flex items-center gap-2 text-gray-600">
                      <span className="w-1.5 h-1.5 bg-[#e61f93] rounded-full"></span>
                      {topic}
                    </li>
                  ))}
                </ul>
                <Link
                  to={group.link}
                  className={`block w-full py-2 rounded-full font-semibold text-center transition-colors duration-300 ${
                    group.isPremium 
                      ? 'bg-[#e61f93] text-white hover:bg-[#d81b84] flex items-center justify-center gap-2'
                      : 'bg-[#c5aded] text-[#6a1b9a] hover:bg-[#e61f93] hover:text-white'
                  }`}
                >
                  {group.isPremium && <Lock className="w-4 h-4" />}
                  {group.isPremium ? 'Unlock Premium Content' : 'Access Content'}
                </Link>
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}

export default SexEducation;