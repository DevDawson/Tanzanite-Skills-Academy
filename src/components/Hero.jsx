import React from 'react';

const Hero = () => {
  return (
    <section className="relative bg-indigo-900 text-white py-20 md:py-32">
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <div className="container mx-auto px-4 relative z-10 text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          Tanzanite <span className="text-indigo-300">Skills</span> Academy
        </h1>
        <p className="text-xl md:text-2xl mb-8">Jifunze Leo, Badilisha Kesho Yako</p>
        <a 
          href="#register" 
          className="bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-3 px-8 rounded-full transition duration-300 inline-block"
        >
          Jisajili Sasa
        </a>
      </div>
    </section>
  );
};

export default Hero;