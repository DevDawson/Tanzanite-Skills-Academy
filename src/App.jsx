import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import CTA from './components/CTA';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="font-sans bg-gray-50">
      <Header />
      <Hero />
      <Services />
      <CTA />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;