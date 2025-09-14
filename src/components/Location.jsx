import React from "react";
import { MapPin, Globe } from "lucide-react";
import waveLeft from "../imgs/wav-left.png";   
import waveRight from "../imgs/wav-rught.png"; 
import bigImage from "../imgs/MAPS.png"; 

const Location = () => {
  return (
    <section className="w-full flex justify-center py-16 px-4">
      <div className="max-w-5xl w-full text-center">
        {/* Main Rectangle (smaller width) */}
        <div className="max-w-3xl mx-auto border-2 border-orange-700 rounded-2xl p-8 bg-black/40 text-white shadow-lg">
          <h2 className="text-4xl font-bold mb-4">Location</h2>
          <p className="text-2xl text-white/80">
            This year’s Qiskit Fall Fest brings the best of both worlds with a hybrid format:
             join us onsite at Saad Dahlab University or connect online from anywhere in the world.
          </p>
        </div>

        {/* Wavy Lines (closer to middle) */}
        <div className="flex items-center justify-center gap-44">
          {/* Left wave */}
          <img 
            src={waveLeft} 
            alt="Wave Left" 
            className="w-1/3 h-24 object-contain"
          />
          {/* Right wave */}
          <img 
            src={waveRight} 
            alt="Wave Right" 
            className="w-1/3 h-24 object-contain"
          />
        </div>

        {/* Two Columns of Text with Icons */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-6 mb-12 text-left">
          {/* Left block */}
          <div className="flex flex-col items-start text-white">
            <div className="flex items-center gap-2 mb-2 ml-3">
              <MapPin size={24} />
              <h3 className="text-4xl font-semibold">Onsite venue </h3>
            </div>
            <p className="text-2xl mt-0 text-center w-full">
              Saad dahleb university, blida, algeria.
            </p>
          </div>

          {/* Right block - Fixed to be right-aligned with left-aligned internal content */}
          <div className="flex flex-col items-end text-white">
            <div className="flex flex-col items-start max-w-[500px]">
              <div className="flex items-center gap-2 mb-2 ml-31">
                <Globe size={24} />
                <h3 className="text-4xl font-semibold">Online access</h3>
              </div>
              <p className="text-2xl mt-0 text-center w-full">
                Workshops and challenges will also be available online for participants who cannot attend in person.
              </p>
            </div>
          </div>
        </div>

        {/* Big Image with Google Maps Link */}
        <a 
          href="https://www.google.com/maps/place/Blida+University+1/@36.5047672,2.8734046,17z/data=!3m1!4b1!4m6!3m5!1s0x128f0940a15be185:0x8b3a42f8480fb028!8m2!3d36.5047629!4d2.8759795!16s%2Fm%2F0h562gd?entry=ttu&g_ep=EgoyMDI1MDkwOS4wIKXMDSoASAFQAw%3D%3D" 
          target="_blank" 
          rel="noopener noreferrer"
          className="block border-2 border-orange-500 rounded-2xl overflow-hidden mt-44"
        >
          <img
            src={bigImage}
            alt="Event Location"
            className="w-full h-[530px] object-cover cursor-pointer hover:opacity-90 transition-opacity"
          />
        </a>
      </div>
    </section>
  );
};

export default Location;