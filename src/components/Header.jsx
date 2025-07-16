import React from 'react';

const Header = () => {
  return (
    <header className="bg-indigo-900 text-white shadow-md">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <div className="flex items-center">
          <div className="text-2xl font-bold">
            <span className="text-indigo-300">Tanzanite</span> Skills Academy
          </div>
        </div>
        <nav className="hidden md:block">
          <ul className="flex space-x-6">
            <li><a href="#services" className="hover:text-indigo-300 transition">Services</a></li>
            <li><a href="#contact" className="hover:text-indigo-300 transition">Contact</a></li>
          </ul>
        </nav>
        <button className="md:hidden text-xl">
          <i className="fas fa-bars"></i>
        </button>
      </div>
    </header>
  );
};

export default Header;