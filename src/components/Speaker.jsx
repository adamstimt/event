import React, { useState } from "react";
import { motion } from "framer-motion";
import speaker1 from "../imgs/testSpeak.jpg"; 
import speaker2 from "../imgs/testSpeak.jpg";
import speaker3 from "../imgs/testSpeak.jpg";
import mainImg from "../imgs/speaker-bg.png"; 

const Speaker1 = () => {
  const speakers = [
    {
      id: 1,
      name: "Speaker 1",
      img: speaker1,
      shortDesc: "Expert in Quantum Computing",
      longDesc: "Speaker 1 is a researcher with deep expertise in quantum algorithms.",
    },
    {
      id: 2,
      name: "Speaker 2",
      img: speaker2,
      shortDesc: "Specialist in AI & Quantum",
      longDesc: "Speaker 2 bridges the gap between artificial intelligence and quantum systems.",
    },
    {
      id: 3,
      name: "Speaker 3",
      img: speaker3,
      shortDesc: "Educator & Innovator",
      longDesc: "Speaker 3 focuses on making quantum computing accessible for students.",
    },
  ];

  const [flipped, setFlipped] = useState({});

  const toggleFlip = (id) => {
    setFlipped((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  return (
    <section className="relative w-full py-16 px-6 md:px-16 text-white">
      {/* Top Section - Image Centered with z-index */}
      <div className="relative flex flex-col md:flex-row items-center justify-center gap-12 mb-40">
        {/* Main Image - centered with z-index */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          className="absolute z-10 left-1/2 transform -translate-x-1/2"
        >
          <img
            src={mainImg}
            alt="Main Speakers"
            className="rounded-2xl shadow-lg max-w-lg md:max-w-xl"
          />
        </motion.div>

        {/* Title and Text - right of image */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="bg-black p-8 rounded-4xl shadow-lg max-w-xl text-left ml-auto relative z-20"
        >
          <h3 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Speakers
          </h3>
          <p className="text-white/90 text-lg md:text-xl">
            SpeakersThe Qiskit Fall Fest will feature inspiring talks and workshops . Our speakers will share their insights on the future of quantum technologies,
            practical applications, and opportunities for students to get involved.
          </p>
        </motion.div>
      </div>

      {/* Flip Cards Section */}
      <div className="mt-16 grid sm:grid-cols-2 md:grid-cols-3 gap-10 justify-items-center">
        {speakers.map((sp) => (
          <motion.div
            key={sp.id}
            className="w-72 h-96 [perspective:1000px] cursor-pointer"
            onClick={() => toggleFlip(sp.id)}
            whileHover={{ 
              scale: 1.05,
              transition: { duration: 0.3 }
            }}
            whileTap={{ scale: 0.98 }}
          >
            <div
              className={`relative w-full h-full duration-500 [transform-style:preserve-3d] ${
                flipped[sp.id] ? "[transform:rotateY(180deg)]" : ""
              }`}
            >
              {/* Front Side */}
              <div className="absolute inset-0 bg-white/10 backdrop-blur-md rounded-2xl flex flex-col items-center justify-center [backface-visibility:hidden] overflow-hidden border-4 border-orange-500">
                <div className="w-full h-full relative">
                  <motion.img
                    src={sp.img}
                    alt={sp.name}
                    className="w-full h-full object-cover"
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.4 }}
                  />
                  <div className="absolute bottom-0 left-0 right-0 h-1/3 bg-gradient-to-t from-black/80 to-transparent"></div>
                  <div className="absolute bottom-4 left-0 right-0 text-center px-4">
                    <motion.h3 
                      className="text-xl font-semibold text-white"
                      whileHover={{ scale: 1.05 }}
                    >
                      {sp.name}
                    </motion.h3>
                    <motion.p 
                      className="text-white/90 text-sm mt-1"
                      whileHover={{ scale: 1.03 }}
                    >
                      {sp.shortDesc}
                    </motion.p>
                  </div>
                </div>
              </div>

              {/* Back Side */}
              <div className="absolute inset-0 bg-amber-600 rounded-2xl text-white flex flex-col items-center justify-center px-6 text-center [transform:rotateY(180deg)] [backface-visibility:hidden] border-4 border-orange-500">
                <motion.h3 
                  className="text-2xl font-semibold mb-4"
                  whileHover={{ scale: 1.05 }}
                >
                  {sp.name}
                </motion.h3>
                <motion.p 
                  className="text-base"
                  whileHover={{ scale: 1.03 }}
                >
                  {sp.longDesc}
                </motion.p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Speaker1;