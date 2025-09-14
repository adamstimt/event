import React, { useEffect, useRef } from 'react';
import styled from 'styled-components';
import { gsap } from 'gsap';
import { TextPlugin } from 'gsap/TextPlugin';

// Register the TextPlugin
gsap.registerPlugin(TextPlugin);

const Hero = () => {
  const firstTextRef = useRef(null);
  const secondTextRef = useRef(null);
  const buttonRef = useRef(null);

  const handleRegisterClick = () => {
    window.open('https://docs.google.com/forms/d/1RZpC0yxFei_tv6szUHojOjwnh9d8Yo2rJKK1iABZKB4/edit?fbclid=IwY2xjawMy-NZleHRuA2FlbQIxMQABHoobgpSsD1N55fWLbinz52xXFvgz-Cqtc2ZPMcxrnc_pWa1AfC8OD1FGMRZk_aem_FS4HCpsWdQOCL_rx1Bbshg&pli=1', '_blank');
  };

  useEffect(() => {
    // Create a timeline for sequenced animations
    const tl = gsap.timeline();

    // First text typing animation
    tl.to(firstTextRef.current, {
      duration: 1.0,
      text: "Unlocking The Power of Quantum",
      ease: "none",
      delay: 0.5
    });

    // Second text typing animation 
    tl.to(secondTextRef.current, {
      duration: 1.0,
      text: "Today's curiosity, Tomorrow's Reality",
      ease: "none"
    }, "+=0.3");

    // Button animation (starts after second text begins)
    tl.fromTo(buttonRef.current, 
      { opacity: 0, y: 20 },
      { opacity: 1, y: 0, duration: 0.5, ease: "back.out(1.7)" }
    );

    return () => {
      // Clean up animations
      tl.kill();
    };
  }, []);

  return (
    <section className="relative w-full min-h-screen flex items-center justify-start text-left overflow-hidden">
      {/* Content only */}
      <div className="relative z-10 px-8 md:px-16 max-w-3xl mx-0">
        <h1 className="text-3xl md:text-7xl font-extrabold text-white mb-6 leading-tight">
          IBM Qiskit Fall Fest 2025
        </h1>
        
        {/* First animated paragraph */}
        <p 
          ref={firstTextRef}
          className="text-lg md:text-4xl text-white/90 mb-4 max-w-xl typing-animation"
        ></p>
        
        {/* Second animated paragraph */}
        <p 
          ref={secondTextRef}
          className="text-lg md:text-2xl text-white/90 mb-10 max-w-xl typing-animation"
        ></p>

        {/* Button with ref for animation */}
        <StyledWrapper>
          <button 
            ref={buttonRef}
            className="button" 
            onClick={handleRegisterClick}
            style={{opacity: 0}} // Start hidden
          >
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
    background-color: #D8460F; /* orange-500 */
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
    background-color: #ea580c; /* darker orange on hover */
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

  /* Typing cursor animation */
  .typing-animation {
    &::after {
      content: "|";
      animation: blink 1s step-end infinite;
    }
    
    &.finished::after {
      content: "";
      animation: none;
    }
  }

  @keyframes blink {
    0%, 100% { opacity: 1; }
    50% { opacity: 0; }
  }
`;

export default Hero;