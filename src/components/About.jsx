import React from 'react';
import { motion } from 'framer-motion';
import img1 from '../imgs/about-right.png'; 
import img2 from '../imgs/about-left.png'; 

const About = () => {
  return (
    <section className="relative w-full py-16 px-8 md:px-20 bg-transparent">
      <div className="max-w-6xl mx-auto flex flex-col space-y-16">

        {/* First Row: Text left - Image right */}
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <motion.div 
            className="bg-white/5 md:bg-black text-white rounded-lg md:rounded-2xl p-8 shadow-lg space-y-6 order-1"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true, amount: 0.3 }}
          >
            <h3 className="text-3xl md:text-4xl font-bold">
              About The Event
            </h3>
            <p className="text-lg leading-relaxed text-white/90">
              The Qiskit Fall Fest is a global series of student-led events dedicated to quantum computing,
              organized in collaboration with IBM Quantum. For the first time at Saad Dahlab University, 
              Blida, our ITC club is proud to host workshops, challenges, and interactive activities between November 1–15, 2025.
            </p>
          </motion.div>
          <motion.div
            className="order-2 md:order-2"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ amount: 0.3 }}
          >
            <img
              src={img1}
              alt="About illustration 1"
              className="rounded-2xl shadow-lg w-full object-cover"
            />
          </motion.div>
        </div>

        {/* Second Row: Image left - Text right */}
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <motion.div
            className="order-2 md:order-1"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ amount: 0.3 }}
          >
            <img
              src={img2}
              alt="About illustration 2"
              className="rounded-2xl shadow-lg w-full object-cover"
            />
          </motion.div>
          <motion.div 
            className="bg-white/5 md:bg-black text-white rounded-lg md:rounded-2xl p-8 shadow-lg space-y-6 order-1 md:order-2"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true, amount: 0.3 }}
          >
            <p className="text-lg leading-relaxed text-white/90">
              Open to all curious students, the event offers a unique chance to discover quantum technologies, 
              build practical skills, and connect with a dynamic community passionate about the future of computing.
            </p>
          </motion.div>
        </div>

      </div>
    </section>
  );
};

export default About;
