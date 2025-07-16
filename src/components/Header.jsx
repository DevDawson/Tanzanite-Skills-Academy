import React, { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

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
            <li>
              <a href="#services" className="hover:text-indigo-300 transition">Services</a>
            </li>
            <li>
              <a href="#contact" className="hover:text-indigo-300 transition">Contact</a>
            </li>
          </ul>
        </nav>

        <button 
          className="md:hidden text-2xl focus:outline-none"
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          {isOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      <div className={`md:hidden ${isOpen ? 'block' : 'hidden'} bg-indigo-800`}>
        <ul className="flex flex-col py-4 px-4 space-y-3">
          <li>
            <a 
              href="#services" 
              className="block py-2 hover:text-indigo-300 transition"
              onClick={() => setIsOpen(false)}
            >
              Services
            </a>
          </li>
          <li>
            <a 
              href="#contact" 
              className="block py-2 hover:text-indigo-300 transition"
              onClick={() => setIsOpen(false)}
            >
              Contact
            </a>
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Header;
