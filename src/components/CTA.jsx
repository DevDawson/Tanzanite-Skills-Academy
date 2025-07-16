import React from 'react';

const CTA = () => {
  return (
    <section id="register" className="py-16 bg-indigo-100">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold mb-6 text-indigo-900">Jiunge Nasi Leo</h2>
        <p className="text-lg mb-8 max-w-2xl mx-auto">
          Fungua milango kwa fursa mpya kwa kujiunga na programu yetu ya mafunzo ya kitaaluma.
        </p>
        <button className="bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-3 px-8 rounded-full transition duration-300">
          Anza Mafunzo
        </button>
      </div>
    </section>
  );
};

export default CTA;