import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import About from '../components/About';
import Format from '../components/Format';
import Speaker1 from '../components/Speaker';
import Location from '../components/Location';
import Partners from '../components/Partners';
import Register from '../components/Register';
import Footer from '../components/Footer';
import backgroundImage from '../imgs/base-bg.jpg';
import heroBackground from '../imgs/Hero-bg.png';

const Home = () => {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Global Background */}
      <div className="fixed inset-0 z-[-2]">
        <img 
          src={backgroundImage} 
          alt="Background" 
          className="w-full h-full object-cover"
        />        
      </div>

      {/* Hero Background */}
      <div className="relative w-full z-[-1]">
        <img 
          src={heroBackground} 
          alt="Hero Background" 
          className="w-full h-auto min-h-screen object-cover object-top"
        />
      </div>

      {/* Navbar */}
      <div className="absolute top-0 left-0 right-0 z-10">
        <Navbar />
      </div>

      {/* Hero */}
      <div id='home' className="absolute top-0 left-0 right-0 z-10">
        <Hero />
      </div>

      {/* About Section */}
      <div id="about">
        <About />   
      </div>

      <div id="schedule" className='mb-7'>
        <Format />   
      </div>

      <div id="speakers">
        <Speaker1 />   
      </div>
      
      <div id="location" className='mb-30'>
        <Location />   
      </div>

      <div id="partners">
        <Partners />   
      </div>

      <div id="register">
        <Register />   
      </div>

      {/* Spacer */}
      <div className="flex-grow"></div>

      {/* Footer */}
      <div id="footer">
        <Footer />
      </div>

      {/* Legal Notice */}
      <div className="py-4 text-center text-white/70 text-sm bg-black/30">
         © 2025 Qiskit Fall Fest | Organized by ITC Club, University of Blida 1 | Powered by IBM Quantum
      </div>
    </div>
  );
};

export default Home;
