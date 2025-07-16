import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-indigo-900 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <div className="text-2xl font-bold">
              <span className="text-indigo-300">Tanzanite</span> Skills Academy
            </div>
            <p className="text-indigo-200 mt-2">Jifunze Leo, Badilisha Kesho Yako</p>
          </div>
          <div className="flex space-x-4">
            <a href="#" className="text-white hover:text-indigo-300 text-xl">
              <i className="fab fa-facebook"></i>
            </a>
            <a href="#" className="text-white hover:text-indigo-300 text-xl">
              <i className="fab fa-twitter"></i>
            </a>
            <a href="#" className="text-white hover:text-indigo-300 text-xl">
              <i className="fab fa-instagram"></i>
            </a>
          </div>
        </div>
        <div className="border-t border-indigo-800 mt-6 pt-6 text-center text-indigo-300">
          <p>&copy; {new Date().getFullYear()} Tanzanite Skills Academy.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;