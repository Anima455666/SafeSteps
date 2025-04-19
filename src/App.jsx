import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Search, MessageCircle, Facebook, Instagram, Calendar, Baby, BookOpen, Mail } from 'lucide-react';

function App() {
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [showResults, setShowResults] = useState(false);
  const navigate = useNavigate();

  const services = [
    {
      title: "Period Tracking",
      icon: Calendar,
      image: "https://media.istockphoto.com/id/1447896137/vector/menstrual-calendar-and-control-and-pregnancy-planning-flat-vector-illustration.jpg?s=612x612&w=0&k=20&c=6m2CugNymWy0d-KKrrCaln-4kcrk9w6g8x7tMeD9kaU=",
      description: "Track your menstrual cycle with precision and get personalized insights.",
      link: "/period-tracking",
      keywords: ['period', 'menstrual', 'cycle', 'tracking', 'calendar']
    },
    {
      title: "Maternity Tracking",
      icon: Baby,
      image: "https://play-lh.googleusercontent.com/5hb2usnvezf48METjCDkTo_sm11ewS1rzFid0IRqfV8r28OXUebYybsYXPvwjWCIxGTh",
      description: "Track your pregnancy journey, monitoring key milestones and health updates easily.",
      link: "/maternity-tracking",
      keywords: ['pregnancy', 'maternity', 'baby', 'birth', 'mother', 'pregnant']
    },
    {
      title: "Sex Education",
      icon: BookOpen,
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR_TxAVfwV-n2aGoN9Xci3u-oulwqHMpuwTJg&s",
      description: "Access comprehensive resources and expert knowledge about sexual health.",
      link: "/sex-education",
      keywords: ['education', 'sex', 'health', 'learning', 'sexual', 'reproductive']
    }
  ];

  const handleSearch = (e) => {
    e.preventDefault();
    if (!searchQuery.trim()) {
      setShowResults(false);
      return;
    }

    const query = searchQuery.toLowerCase();
    const results = services.filter(service => 
      service.keywords.some(keyword => keyword.includes(query)) ||
      service.title.toLowerCase().includes(query) ||
      service.description.toLowerCase().includes(query)
    );

    if (results.length > 0) {
      setSearchResults(results);
      setShowResults(true);
    } else {
      alert('No matching content found. Try different keywords.');
    }
  };

  const clearSearch = () => {
    setSearchQuery('');
    setShowResults(false);
  };

  return (
    <div className="min-h-screen flex flex-col">
      {/* Initial View (Navbar + Hero Section) */}
      <div className="flex flex-col" style={{ minHeight: '100vh' }}>
        {/* Navigation Bar */}
        <nav className="bg-[#6a1b9a] p-4">
          <div className="container mx-auto flex items-center justify-between">
            <h1 className="text-3xl md:text-4xl font-bold text-white font-cursive">SafeSteps</h1>
            <div className="flex items-center gap-4">
              <form onSubmit={handleSearch} className="relative">
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search..."
                  className="px-4 py-2 rounded-full pr-10 focus:outline-none focus:ring-2 focus:ring-[#e61f93] text-sm md:text-base"
                />
                <button type="submit" className="absolute right-3 top-2.5">
                  <Search className="text-gray-500 w-4 h-4 md:w-5 md:h-5" />
                </button>
                {searchQuery && (
                  <button 
                    type="button" 
                    onClick={clearSearch}
                    className="absolute right-8 top-2 text-gray-500 hover:text-gray-700"
                  >
                    ×
                  </button>
                )}
              </form>
              <Link
                to="/premium"
                className="flex items-center gap-2 bg-[#e61f93] text-white px-4 py-2 rounded-full hover:bg-[#c5aded] hover:text-[#6a1b9a] transition duration-300 text-sm md:text-base"
              >
                <span className="text-xl">⚡</span>
                Premium
              </Link>
            </div>
          </div>
        </nav>

        {/* Search Results */}
        {showResults && (
          <div className="bg-white py-4 px-6 shadow-md">
            <div className="container mx-auto">
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-lg font-semibold text-[#6a1b9a]">
                  Search Results for "{searchQuery}"
                </h2>
                <button 
                  onClick={clearSearch}
                  className="text-sm text-gray-500 hover:text-[#e61f93]"
                >
                  Clear search
                </button>
              </div>
              <div className="grid md:grid-cols-3 gap-4">
                {searchResults.map((service, index) => (
                  <div key={index} className="bg-white rounded-lg shadow-sm border border-[#e61f93] p-4">
                    <div className="flex items-center gap-2 mb-2">
                      <service.icon className="w-5 h-5 text-[#e61f93]" />
                      <h3 className="text-md font-semibold text-[#6a1b9a]">{service.title}</h3>
                    </div>
                    <p className="text-sm text-gray-600 mb-3">{service.description}</p>
                    <Link 
                      to={service.link} 
                      className="text-sm text-[#6a1b9a] hover:text-[#e61f93] font-medium"
                    >
                      Learn more →
                    </Link>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Hero Section */}
        <section className="bg-gradient-to-r from-[#6a1b9a] to-[#e61f93] text-white py-12 md:py-16 flex-grow flex items-center">
          <div className="container mx-auto text-center px-4">
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 md:mb-8">
              Your Telegram Health Sister - Supporting you Every Step!
            </h2>
            <p className="text-lg sm:text-xl md:text-2xl mb-8 md:mb-12 max-w-3xl mx-auto">
              From period tracking to maternity care, SafeSteps offers tools and knowledge to support your well-being every step of the way.
            </p>
            <div className="flex justify-center">
              <a
                href="https://t.me/SafeSisterBot"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#6a1b9a] text-white px-8 py-3 md:px-10 md:py-4 rounded-full font-semibold flex items-center gap-2 hover:bg-[#7c4dff] transition duration-300 text-lg md:text-xl"
              >
                <MessageCircle className="w-6 h-6 md:w-7 md:h-7" />
                Chat with Us
              </a>
            </div>
          </div>
        </section>
      </div>

      {/* Scrollable Content (Our Services + Footer) */}
      <div>
        {/* Services Section */}
        <section className="py-12 md:py-16 bg-white" style={{ minHeight: '100vh' }}>
          <div className="container mx-auto px-4">
            <h2 className="text-2xl md:text-3xl font-bold text-center text-[#6a1b9a] mb-8 md:mb-12">Our Services</h2>
            <div className="grid md:grid-cols-3 gap-6">
              {services.map((service, index) => (
                <div key={index} className="bg-white rounded-xl shadow-lg overflow-hidden transform hover:scale-105 transition duration-300">
                  <div className="pt-6">
                    <img src={service.image} alt={service.title} className="w-full h-40 md:h-48 object-cover" />
                  </div>
                  <div className="p-4 md:p-6">
                    <div className="flex items-center gap-2 mb-2 md:mb-4">
                      <service.icon className="w-5 h-5 md:w-6 md:h-6 text-[#e61f93]" />
                      <h3 className="text-lg md:text-xl font-semibold text-[#6a1b9a]">{service.title}</h3>
                    </div>
                    <p className="text-sm md:text-base text-gray-600 mb-4">{service.description}</p>
                    <Link 
                      to={service.link} 
                      className="block w-full bg-[#c5aded] text-[#6a1b9a] py-2 rounded-full font-semibold text-center hover:bg-[#e61f93] hover:text-white transition duration-300 text-sm md:text-base"
                    >
                      Learn More
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="bg-[#6a1b9a] text-white py-6 md:py-8">
          <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <div className="text-center md:text-left mb-4 md:mb-0">
                <h3 className="text-xl font-bold mb-2">SafeSteps</h3>
                <p className="text-sm opacity-80">Your Telegram Health Sister - Supporting you Every Step!</p>
              </div>
              <div className="flex gap-4">
                <a href="https://www.facebook.com/profile.php?id=61573529466818" target="_blank" rel="noopener noreferrer" 
                   className="p-2 rounded-full bg-white text-[#6a1b9a] hover:bg-[#e61f93] hover:text-white transition duration-300">
                  <Facebook className="w-5 h-5 md:w-6 md:h-6" />
                </a>
                <a href="https://www.instagram.com/_safe.steps_/" target="_blank" rel="noopener noreferrer"
                   className="p-2 rounded-full bg-white text-[#6a1b9a] hover:bg-[#e61f93] hover:text-white transition duration-300">
                  <Instagram className="w-5 h-5 md:w-6 md:h-6" />
                </a>
                <a href="https://mail.google.com/mail/?view=cm&fs=1&to=safesteps00@gmail.com" target="_blank" rel="noopener noreferrer"
                   className="p-2 rounded-full bg-white text-[#6a1b9a] hover:bg-[#e61f93] hover:text-white transition duration-300">
                  <Mail className="w-5 h-5 md:w-6 md:h-6" />
                </a>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}

export default App;