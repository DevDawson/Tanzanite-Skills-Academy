import React from 'react';

const Contact = () => {
  return (
    <section id="contact" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12 text-indigo-900">Mawasiliano</h2>
        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-gray-50 p-8 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-4">Tuwasiliane</h3>
            <div className="space-y-4">
              <div className="flex items-start">
                <div className="text-indigo-600 text-xl mr-4 mt-1">
                  <i className="fab fa-whatsapp"></i>
                </div>
                <div>
                  <h4 className="font-medium">WhatsApp</h4>
                  <p className="text-gray-600">0749 722 722</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="text-indigo-600 text-xl mr-4 mt-1">
                  <i className="fas fa-envelope"></i>
                </div>
                <div>
                  <h4 className="font-medium">Barua Pepe</h4>
                  <p className="text-gray-600">info@tanzaniteskills.ac.tz</p>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-gray-50 p-8 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-4">Tuma Ujumbe</h3>
            <form className="space-y-4">
              <div>
                <input 
                  type="text" 
                  placeholder="Jina lako" 
                  className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-indigo-500"
                />
              </div>
              <div>
                <input 
                  type="email" 
                  placeholder="Barua pepe yako" 
                  className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-indigo-500"
                />
              </div>
              <div>
                <textarea 
                  placeholder="Ujumbe wako" 
                  rows="4"
                  className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-indigo-500"
                ></textarea>
              </div>
              <button 
                type="submit" 
                className="bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-2 px-6 rounded transition duration-300"
              >
                Tumia
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;