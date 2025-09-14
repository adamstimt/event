import React from 'react';
import partnerBg from '../imgs/partner-1.png'; 
import cardImg1 from '../imgs/prtnr-crd-1.png';
import cardImg2 from '../imgs/IBM Quantum Logo.png';
import cardImg3 from '../imgs/partner-card-3.png';

const Partners = () => {
  // Function to handle button clicks and redirect to URLs
  const handleLearnMoreClick = (url) => {
    window.open(url, '_blank'); // Opens link in a new tab
  };

  return (
    <section className="w-full flex flex-col">
      {/* Top Section - Image Centered with Card on Left */}
      <div className="relative flex items-center justify-center h-80 md:h-96 mb-40">
        {/* Centered Background Image - Moved 40px to the right */}
        <div className="absolute z-0 left-1/2 top-0 transform translate-x-10">
          <img
            src={partnerBg}
            alt="Partners Background"
            className="h-80 md:h-96 object-cover rounded-2xl shadow-lg scale-100 animate-pulse-slow" 
          />
        </div>

        {/* Card on Left Side of Webpage - Moved slightly downward with animation */}
        <div className="absolute z-10 bg-black p-8 rounded-3xl shadow-lg max-w-xl text-white left-6 md:left-12 top-16 md:top-20 mt-23 animate-fade-in-left"> 
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Partners</h2>
          <p className="text-lg md:text-xl">
            The Qiskit Fall Fest – Blida Edition is proudly organized in collaboration with leading academic and research communities. Our partners bring expertise, visibility, and support that make this event possible:
          </p>
        </div>
      </div>

      {/* Partners Cards */}
      <div className="max-w-6xl mx-auto px-6 md:px-12 py-12 grid gap-8 md:grid-cols-3">
        {/* Card 1 */}
        <div className="bg-white/5 backdrop-blur-md shadow-lg rounded-3xl overflow-hidden flex flex-col border border-white/20 transition-all duration-300 hover:bg-white/15 hover:scale-105">
          <div className="overflow-hidden rounded-t-none"> 
            <img 
              src={cardImg1} 
              alt="Partner 1" 
              className="w-full h-47 object-contain transition-transform duration-300 hover:scale-105 mx-auto py-2" 
              style={{ borderTopLeftRadius: '0px', borderTopRightRadius: '0px' }}
            />
          </div>
          <div className="p-6 flex flex-col flex-grow">
            <h3 className="text-xl font-bold mb-2 text-white">QAlgeria</h3>
            <p className="text-gray-200 flex-grow">
              The Algerian branch of QWorld, supporting quantum education and workshops like QPrep and QBronze.
            </p>
            <button 
              onClick={() => handleLearnMoreClick('https://qworld.net/qalgeria/')} 
              className="mt-4 bg-black text-white py-2 px-4 rounded hover:bg-gray-600 transition-all duration-300 transform hover:-translate-y-1"
            >
              Learn More
            </button>
          </div>
        </div>

        {/* Card 2 */}
        <div className="bg-white/5 backdrop-blur-md shadow-lg rounded-xl overflow-hidden flex flex-col border border-white/20 transition-all duration-300 hover:bg-white/15 hover:scale-105">
          <div className="overflow-hidden" style={{ borderTopLeftRadius: '20px', borderTopRightRadius: '20px' }}>
            <img 
              src={cardImg2} 
              alt="Partner 2" 
              className="w-full h-47 bg-white  object-contain  transition-transform duration-300 hover:scale-105 mx-auto py-2 " 
              style={{ borderTopLeftRadius: '20px', borderTopRightRadius: '20px' ,borderBottomLeftRadius:'20px',borderBottomRightRadius:'20px' }}
            />
          </div>
          <div className="p-6 flex flex-col flex-grow">
            <h3 className="text-xl font-bold mb-2 text-white">IBM Quantum </h3>
            <p className="text-gray-200 flex-grow">
              providing global reach, credibility, and access to the world's largest quantum community.
            </p>
            <button 
              onClick={() => handleLearnMoreClick('https://www.ibm.com/quantum')} 
              className="mt-4 bg-black text-white py-2 px-4 rounded hover:bg-gray-600 transition-all duration-300 transform hover:-translate-y-1"
            >
              Learn More
            </button>
          </div>
        </div>

        {/* Card 3 */}
        <div className="bg-white/5 backdrop-blur-md shadow-lg rounded-xl overflow-hidden flex flex-col border border-white/20 transition-all duration-300 hover:bg-white/15 hover:scale-105">
          <div className="overflow-hidden" style={{ borderTopLeftRadius: '30px', borderTopRightRadius: '5px' }}>
            <img 
              src={cardImg3} 
              alt="Partner 3" 
              className="w-full h-47 object-contain transition-transform duration-300 hover:scale-105 mx-auto py-2" 
              style={{ borderTopLeftRadius: '30px', borderTopRightRadius: '5px' }}
            />
          </div>
          <div className="p-6 flex flex-col flex-grow">
            <h3 className="text-xl font-bold mb-2 text-white">CQTech</h3>
            <p className="text-gray-200 flex-grow">
              A research group in Constantine dedicated to studying quantum systems and simulating their properties.
            </p>
            <button 
              onClick={() => handleLearnMoreClick('https://cqtech.org')} 
              className="mt-4 bg-black text-white py-2 px-4 rounded hover:bg-gray-600 transition-all duration-300 transform hover:-translate-y-1"
            >
              Learn More
            </button>
          </div>
        </div>
      </div>

      {/* Add custom animation styles */}
      <style jsx>{`
        @keyframes pulse-slow {
          0%, 100% { transform: translateX(calc(-50% + 40px)) scale(1.4); }
          50% { transform: translateX(calc(-50% + 40px)) scale(1.42); }
        }
        .animate-pulse-slow {
          animation: pulse-slow 6s infinite;
        }
        @keyframes fade-in-left {
          0% { opacity: 0; transform: translateX(-20px); }
          100% { opacity: 1; transform: translateX(0); }
        }
        .animate-fade-in-left {
          animation: fade-in-left 1.5s ease-out forwards;
        }
      `}</style>
    </section>
  );
};

export default Partners;