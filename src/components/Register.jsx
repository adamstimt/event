import React, { useState, useEffect } from 'react';
import { ChevronDown, CircleCheck } from "lucide-react";
import registerImg from '../imgs/register-bg.png'; 
import styled from 'styled-components';

const Register = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 5,
    hours: 12,
    minutes: 45,
    seconds: 0
  });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prevTime => {
        let { days, hours, minutes, seconds } = prevTime;
        
        seconds--;
        
        if (seconds < 0) {
          seconds = 59;
          minutes--;
          
          if (minutes < 0) {
            minutes = 59;
            hours--;
            
            if (hours < 0) {
              hours = 23;
              days--;
              
              if (days < 0) {
                // Timer has ended
                return { days: 0, hours: 0, minutes: 0, seconds: 0 };
              }
            }
          }
        }
        
        return { days, hours, minutes, seconds };
      });
    }, 1000);
    
    return () => clearInterval(timer);
  }, []);

  const formatTime = (time) => {
    return time < 10 ? `0${time}` : time;
  };

  const handleRegisterClick = () => {
    window.open('https://docs.google.com/forms/d/1RZpC0yxFei_tv6szUHojOjwnh9d8Yo2rJKK1iABZKB4/edit?fbclid=IwY2xjawMy-NZleHRuA2FlbQIxMQABHoobgpSsD1N55fWLbinz52xXFvgz-Cqtc2ZPMcxrnc_pWa1AfC8OD1FGMRZk_aem_FS4HCpsWdQOCL_rx1Bbshg&pli=1', '_blank');
  };

  return (
    <section id="register" className="relative py-20 overflow-hidden">
      {/* Top Section with Image and Card */}
      <div className="relative min-h-[500px]">
        {/* Centered Image but shifted slightly left */}
        <div className="flex justify-center items-center relative z-10">
          <img 
            src={registerImg} 
            alt="Register" 
            className="max-w-md w-4/5 object-contain mx-auto transform -translate-x-6 md:-translate-x-12"
          />
        </div>

        {/* Larger Card on Right Side Above Image */}
        <div className="absolute top-1/2 right-10 transform -translate-y-1/2 
                        bg-black/30 text-white p-10 rounded-xl shadow-lg z-20 
                        w-[90%] max-w-xl">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Register Now</h2>
          <p className="text-lg md:text-xl">
            Join us for an incredible experience at the Qiskit Fall Fest 2025. 
            Don't miss this opportunity to learn from experts and connect with 
            the quantum computing community.
          </p>
        </div>
      </div>

      {/* ---------- TIMELINE (LEFT SIDE) ---------- */}
      <div className="relative mt-0 ml-40 flex justify-start">
        {/* Timeline column container */}
        <div className="relative w-full max-w-[480px]">
          {/* vertical line with white bottom section */}
          <div className="absolute left-0 top-0 h-[calc(100%+60px)] w-[3px] bg-gradient-to-b from-orange-500 via-orange-400 to-white z-1"></div>

          {/* steps */}
          <div className="flex flex-col space-y-28 relative z-10">
            {/* Top section with text and small circle */}
            <div className="relative">
              <div className="absolute left-0 top-0 transform -translate-x-1/2">
                <div className="w-5 h-5 rounded-full bg-orange-500"></div>
              </div>
              <div className="pl-20">
                <p className="text-white text-3xl md:text-4xl font-bold leading-relaxed">
                  How it works ?
                </p>
              </div>
            </div>

            {/* Step 1 */}
            <div className="relative">
              <div className="absolute left-0 top-0 transform -translate-x-1/2">
                <div className="w-14 h-14 rounded-full flex items-center justify-center bg-orange-500 text-white text-xl font-bold">
                  1
                </div>
              </div>
              <div className="pl-20">
                <p className="text-white text-xl md:text-2xl leading-relaxed">
                  Register online through our dedicated form.
                </p>
              </div>
            </div>

            {/* Step 2 */}
            <div className="relative">
              <div className="absolute left-0 top-0 transform -translate-x-1/2">
                <div className="w-14 h-14 rounded-full flex items-center justify-center bg-orange-400 text-white text-xl font-bold">
                  2
                </div>
              </div>
              <div className="pl-20">
                <p className="text-white text-xl md:text-2xl leading-relaxed">
                  After registering, you'll receive an invitation to join our Discord server where we'll share all announcements,
                  resources, and event updates.
                </p>
              </div>
            </div>

            {/* Step 3 */}
            <div className="relative">
              <div className="absolute left-0 top-0 transform -translate-x-1/2">
                <div className="w-14 h-14 rounded-full flex items-center justify-center bg-white text-black text-xl font-bold">
                  3
                </div>
              </div>
              <div className="pl-20">
                <p className="text-white text-xl md:text-2xl leading-relaxed">
                  You'll also get details about both the online sessions and the onsite activities at Saad Dahlab University, Blida .
                </p>
              </div>
            </div>
          </div>

          {/* White section at bottom ending with icon */}
          <div className="absolute left-0 top-full w-[3px] h-12 bg-white z-1"></div>
          
          {/* Icon at the very end */}
          <div className="absolute left-0 top-[calc(100%+48px)] transform -translate-x-1/2 z-10">
            <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center">
              <ChevronDown size={24} className="text-black" />
            </div>
          </div>
        </div>
      </div>

      {/* ---------- COUNTDOWN SECTION (FULL WIDTH) ---------- */}
      <div className="relative w-full h-screen flex items-center justify-center text-center overflow-hidden mt-32 px-4">
        {/* Transparent background container - full width and height */}
        <div className="bg-black/30 backdrop-blur-sm rounded-2xl p-8 md:p-16 w-full h-full max-w-full">
          {/* Content */}
          <div className="relative z-10 w-full h-full flex flex-col justify-center items-center">
            {/* Updated title with white CircleCheck icon - smaller */}
            <div className="flex items-start justify-center mb-10 flex-nowrap">
              <CircleCheck className="w-8 h-8 md:w-10 md:h-10 text-white mr-4 md:mr-6 flex-shrink-0 mt-1" />
              <h1 className="text-3xl md:text-4xl font-extrabold text-white leading-tight">
                Secure your spot now and step into the quantum world with us!
              </h1>
            </div>
            
            {/* Timer - with properly centered colons */}
            <div className="flex justify-center items-center mb-12 max-w-4xl mx-auto">
              <div className="text-center mx-2 md:mx-4">
                <div className="text-7xl md:text-9xl font-bold text-white py-2">{formatTime(timeLeft.days)}</div>
                <div className="text-xl md:text-2xl text-white/90 mt-2">Days</div>
              </div>
              
              <div className="text-6xl md:text-8xl font-bold text-white mx-1 md:mx-2 flex items-center justify-center h-full">:</div>
              
              <div className="text-center mx-2 md:mx-4">
                <div className="text-7xl md:text-9xl font-bold text-white py-2">{formatTime(timeLeft.hours)}</div>
                <div className="text-xl md:text-2xl text-white/90 mt-2">Hours</div>
              </div>
              
              <div className="text-6xl md:text-8xl font-bold text-white mx-1 md:mx-2 flex items-center justify-center h-full">:</div>
              
              <div className="text-center mx-2 md:mx-4">
                <div className="text-7xl md:text-9xl font-bold text-white py-2">{formatTime(timeLeft.minutes)}</div>
                <div className="text-xl md:text-2xl text-white/90 mt-2">Minutes</div>
              </div>

              <div className="text-6xl md:text-8xl font-bold text-white mx-1 md:mx-2 flex items-center justify-center h-full">:</div>
              
              <div className="text-center mx-2 md:mx-4">
                <div className="text-7xl md:text-9xl font-bold text-white py-2">{formatTime(timeLeft.seconds)}</div>
                <div className="text-xl md:text-2xl text-white/90 mt-2">Seconds</div>
              </div>
            </div>
            
            {/* Centered Button - Method 1: Using onClick handler */}
            <div className="flex justify-center">
              <StyledWrapper>
                <button className="button text-lg md:text-xl py-4 px-10" onClick={handleRegisterClick}>
                  Register Now
                  <svg fill="currentColor" viewBox="0 0 24 24" className="icon">
                    <path
                      clipRule="evenodd"
                      d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zm4.28 10.28a.75.75 0 000-1.06l-3-3a.75.75 0 10-1.06 1.06l1.72 1.72H8.25a.75.75 0 000 1.5h5.69l-1.72 1.72a.75.75 0 101.06 1.06l3-3z"
                      fillRule="evenodd"
                    />
                  </svg>
                </button>
              </StyledWrapper>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const StyledWrapper = styled.div`
  .button {
    position: relative;
    transition: all 0.3s ease-in-out;
    box-shadow: 0px 10px 20px rgba(0, 0, 0, 0.2);
    padding-block: 0.5rem;
    padding-inline: 1.25rem;
    background-color: #D8460F;
    border-radius: 9999px;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    color: #ffff;
    gap: 10px;
    font-weight: bold;
    border: 3px solid #ffffff4d;
    outline: none;
    overflow: hidden;
    font-size: 15px;
  }

  .icon {
    width: 24px;
    height: 24px;
    transition: all 0.3s ease-in-out;
  }

  .button:hover {
    transform: scale(1.05);
    border-color: #fff9;
    background-color: #ea580c;
  }

  .button:hover .icon {
    transform: translate(4px);
  }

  .button:hover::before {
    animation: shine 1.5s ease-out infinite;
  }

  .button::before {
    content: "";
    position: absolute;
    width: 100px;
    height: 100%;
    background-image: linear-gradient(
      120deg,
      rgba(255, 255, 255, 0) 30%,
      rgba(255, 255, 255, 0.8),
      rgba(255, 255, 255, 0) 70%
    );
    top: 0;
    left: -100px;
    opacity: 0.6;
  }

  @keyframes shine {
    0% {
      left: -100px;
    }
    60% {
      left: 100%;
    }
    to {
      left: 100%;
    }
  }
`;

export default Register;