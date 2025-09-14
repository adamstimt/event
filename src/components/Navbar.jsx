import React, { useState } from 'react';
import { motion } from 'framer-motion';
import logo1 from '../imgs/event-logo.png'; 
import logo2 from '../imgs/LOGO-ITC.png'; 

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Smooth scroll function
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
    setIsMenuOpen(false); // Close mobile menu after clicking
  };

  return (
    <>
      <motion.nav
        initial={{ width: "4rem", opacity: 0, scale: 0.5 }}
        animate={{ width: "80%", borderRadius: "20px", opacity: 1, scale: 1 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        className="fixed top-4 left-1/2 transform -translate-x-1/2 z-50 
                   px-6 py-4  backdrop-blur-sm
                   shadow-[0_0_15px_0_rgba(235,169,55,0.33)]"
      >
        <div className="flex items-center justify-between overflow-hidden">
          {/* Left Logo */}
          <div className="flex-shrink-0 flex items-center">
            <img 
              src={logo1} 
              alt="Logo 2" 
              className="h-10 w-auto transform scale-120" 
            />
          </div>

          {/* Navigation Links */}
          <div className="hidden md:flex space-x-8">
            <button onClick={() => scrollToSection('home')} className="text-white hover:text-orange-400 transition-colors font-medium">Home</button>
            <button onClick={() => scrollToSection('about')} className="text-white hover:text-orange-400 transition-colors font-medium">About</button>
            <button onClick={() => scrollToSection('schedule')} className="text-white hover:text-orange-400 transition-colors font-medium">Schedule</button>
            <button onClick={() => scrollToSection('speakers')} className="text-white hover:text-orange-400 transition-colors font-medium">Speakers</button>
            <button onClick={() => scrollToSection('location')} className="text-white hover:text-orange-400 transition-colors font-medium">Location</button>
            <button onClick={() => scrollToSection('partners')} className="text-white hover:text-orange-400 transition-colors font-medium">Partners</button>
            <button onClick={() => scrollToSection('register')} className="text-white hover:text-orange-400 transition-colors font-medium">Register</button>
            <button onClick={() => scrollToSection('footer')} className="text-white hover:text-orange-400 transition-colors font-medium">Contact</button>
          </div>

          {/* Right Logo */}
          <div className="flex-shrink-0 flex items-center">
            <img 
              src={logo2} 
              alt="Logo 2" 
              className="h-10 w-auto transform scale-150" 
            />
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button 
              className="text-white focus:outline-none"
              onClick={toggleMenu}
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="md:hidden fixed top-20 left-1/2 transform -translate-x-1/2 z-40 
                     w-[80%] rounded-[20px] px-6 py-4 backdrop-blur-sm 
                     shadow-[0_0_15px_0_rgba(235,169,55,0.22)]"
        >
          <div className="flex flex-col space-y-4 py-2">
            <button onClick={() => scrollToSection('home')} className="text-white hover:text-orange-400 transition-colors font-medium text-left">Home</button>
            <button onClick={() => scrollToSection('about')} className="text-white hover:text-orange-400 transition-colors font-medium text-left">About</button>
            <button onClick={() => scrollToSection('schedule')} className="text-white hover:text-orange-400 transition-colors font-medium text-left">Schedule</button>
            <button onClick={() => scrollToSection('speakers')} className="text-white hover:text-orange-400 transition-colors font-medium text-left">Speakers</button>
            <button onClick={() => scrollToSection('location')} className="text-white hover:text-orange-400 transition-colors font-medium text-left">Location</button>
            <button onClick={() => scrollToSection('partners')} className="text-white hover:text-orange-400 transition-colors font-medium text-left">Partners</button>
            <button onClick={() => scrollToSection('register')} className="text-white hover:text-orange-400 transition-colors font-medium text-left">Register</button>
            <button onClick={() => scrollToSection('footer')} className="text-white hover:text-orange-400 transition-colors font-medium text-left">Contact</button>
          </div>
        </motion.div>
      )}
    </>
  );
};

export default Navbar;