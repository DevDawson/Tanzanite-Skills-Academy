import React from 'react';

const Services = () => {
  const services = [
    {
      title: "Maendeleo Binafsi",
      description: "Personal Development programs to enhance your skills and confidence.",
      icon: "fas fa-user-graduate"
    },
    {
      title: "Usimamizi wa Fedha Binafsi",
      description: "Personal Finance Management courses to help you achieve financial freedom.",
      icon: "fas fa-money-bill-wave"
    },
    {
      title: "Maendeleo ya Kitaaluma",
      description: "Career Development training to advance your professional journey.",
      icon: "fas fa-briefcase"
    },
    {
      title: "Maendeleo ya Biashara",
      description: "Business Development programs to grow your entrepreneurial skills.",
      icon: "fas fa-chart-line"
    },
    {
      title: "Maendeleo ya Teknolojia",
      description: "Technology Development courses to keep you ahead in the digital world.",
      icon: "fas fa-laptop-code"
    }
  ];

  return (
    <section id="services" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12 text-indigo-900">Huduma Zetu</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div key={index} className="bg-gray-50 p-6 rounded-lg shadow-md hover:shadow-lg transition">
              <div className="text-indigo-600 text-4xl mb-4">
                <i className={service.icon}></i>
              </div>
              <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
              <p className="text-gray-600">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;