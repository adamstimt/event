import React from 'react';
import { MapPin, Mail, Youtube, Instagram, Linkedin } from 'lucide-react';
import logo from '../imgs/event-logo.png';
import itcLogo from '../imgs/LOGO-ITC.png';
import smallImg from '../imgs/footer-tooleft.png'; 

const Footer = () => {
  const socialLinks = {
    discord: "https://discord.com/login?redirect_to=%2Fchannels%2F964583970618638356%2F965056122610413578",
    linkedin: "https://www.linkedin.com/company/it-community/posts/?feedView=all",
    instagram: "https://www.instagram.com/it_community/?hl=fr",
    youtube: "https://www.youtube.com/@itcblida"
  };

  return (
    <footer className="relative w-full text-white py-8 px-6 overflow-hidden">
      {/* Subtle orange blur background */}
      <div className="absolute inset-0 bg-orange-400/10 backdrop-blur-lg z-0"></div>
      
      <div className="container mx-auto relative z-10">
        
        {/* Small image in top-left */}
        <div className="mb-1 flex justify-center md:justify-start">
          <img 
            src={smallImg} 
            alt="Small Logo" 
            className="h-24 w-24 md:h-28 md:w-32 object-contain"  
          />
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center md:items-start text-center md:text-left">
          {/* Left side content */}
          <div className="mb-6 md:mb-0 md:ml-8">
            <div className="flex flex-col md:flex-row items-center mb-3">
              <img 
                src={logo} 
                alt="Qiskit Fall Fest Logo" 
                className="h-12 w-12 md:h-14 md:w-14 mb-3 md:mb-0 md:mr-3"
              />
              <h2 className="text-xl md:text-3xl font-extrabold leading-tight">Qiskit Fall Fest 2025 – Blida</h2>
            </div>
            <div className="ml-0 md:ml-18 mt-4 md:mt-6">
                <p className="max-w-md mb-4 text-white/95 text-sm md:text-base font-montserrat">
                 Hosted by ITC Club, University of Blida 1 in collaboration with IBM Quantum. Celebrating the future of quantum computing, together..
                </p>
                <div className="flex flex-col space-y-2 font-montserrat items-center md:items-start">
                  <div className="flex items-center">
                      <MapPin className="h-4 w-4 md:h-5 md:w-5 mr-2" />
                      <span className="text-sm md:text-base">Algiers, Blida</span>
                  </div>
                  <div className="flex items-center">
                      <Mail className="h-4 w-4 md:h-5 md:w-5 mr-2" />
                      <span className="text-sm md:text-base">contact.itc.blida@gmail.com</span>
                  </div>
                </div>
            </div>
          </div>
          
          {/* Right side content - Follow Us (centered) */}
          <div className="w-full md:w-1/3 mt-4 md:mt-2 flex flex-col items-center justify-center text-center">
            <h3 className="text-lg md:text-xl font-bold mb-3 md:mb-4">Follow Us</h3>
            <div className="grid grid-cols-2 gap-3">
              <a 
                href={socialLinks.discord} 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-white/20 p-2 md:p-3 rounded-full hover:bg-white/30 transition-colors flex items-center justify-center backdrop-blur-sm"
              >
                <svg className="w-5 h-5 md:w-6 md:h-6 text-white" fill="currentColor" viewBox="0 0 127.14 96.36">
                  <path d="M107.7,8.07A105.15,105.15,0,0,0,81.47,0a72.06,72.06,0,0,0-3.36,6.83A97.68,97.68,0,0,0,49,6.83,72.37,72.37,0,0,0,45.64,0,105.89,105.89,0,0,0,19.39,8.09C2.79,32.65-1.71,56.6.54,80.21h0A105.73,105.73,0,0,0,32.71,96.36,77.7,77.7,0,0,0,39.6,85.25a68.42,68.42,0,0,1-10.85-5.18c.91-.66,1.8-1.34,2.66-2a75.57,75.57,0,0,0,64.32,0c.87.71,1.76,1.39,2.66,2a68.68,68.68,0,0,1-10.87,5.19,77,77,0,0,0,6.89,11.1A105.25,105.25,0,0,0,126.6,80.22h0C129.24,52.84,122.09,29.11,107.7,8.07ZM42.45,65.69C36.18,65.69,31,60,31,53s5-12.74,11.43-12.74S54,46,53.89,53,48.84,65.69,42.45,65.69Zm42.24,0C78.41,65.69,73.25,60,73.25,53s5-12.74,11.44-12.74S96.23,46,96.12,53,91.08,65.69,84.69,65.69Z"/>
                </svg>
              </a>
              <a 
                href={socialLinks.linkedin} 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-white/20 p-2 md:p-3 rounded-full hover:bg-white/30 transition-colors flex items-center justify-center backdrop-blur-sm"
              >
                <Linkedin className="w-5 h-5 md:w-6 md:h-6 text-white" />
              </a>
              <a 
                href={socialLinks.instagram} 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-white/20 p-2 md:p-3 rounded-full hover:bg-white/30 transition-colors flex items-center justify-center backdrop-blur-sm"
              >
                <Instagram className="w-5 h-5 md:w-6 md:h-6 text-white" />
              </a>
              <a 
                href={socialLinks.youtube} 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-white/20 p-2 md:p-3 rounded-full hover:bg-white/30 transition-colors flex items-center justify-center backdrop-blur-sm"
              >
                <Youtube className="w-5 h-5 md:w-6 md:h-6 text-white" />
              </a>
            </div>
          </div>
        </div>
        
        {/* Bottom section */}
        <div className="mt-6 pt-4 flex flex-col items-center">
          <img 
            src={itcLogo} 
            alt="ITC Community Logo" 
            className="h-12 md:h-16 mb-0.5 opacity-90"
          />
          <p className="text-xs md:text-sm text-white/95 font-bold">
            Designed and developed by ITC community
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;