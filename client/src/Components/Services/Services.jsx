import React from 'react';
import Button from '../Buttons/Buttons';

const Services = () => {
  const services = [
    {
      title: "Website Design",
      description: "Clean, modern designs that reflect your brand and engage your audience.",
      icon: "🌐",
      features: [
        "Custom UI Design",
        "Brand Identity",
        "Mobile-First Approach",
        "Design Systems"
      ]
    },
    {
      title: "Frontend Development",
      description: "Responsive, maintainable code using the latest technologies.",
      icon: "💻",
      features: [
        "React.js Development",
        "Single Page Applications",
        "Component Libraries",
        "Performance Optimization",
        "Cross-Browser"
      ]
    },
    {
      title: "UI/UX Design",
      description: "Pixel-perfect interfaces with intuitive user experiences.",
      icon: "🎨",
      features: [
        "User Research",
        "Wireframing",
        "Usability Testing",
        "Interaction Design"
      ]
    },
    {
      title: "Progressive Web Apps",
      description: "App-like experiences with offline capabilities.",
      icon: "📱",
      features: [
        "Offline Functionality",
        "Push Notifications",
        "App-Like UI",
        "Device Installable"
      ]
    },
    {
      title: "Website Optimization",
      description: "Improve speed, SEO, and conversion rates.",
      icon: "⚡",
      features: [
        "Performance Audits",
        "SEO Optimization",
        "Lighthouse 90+",
        "CRO"
      ]
    },
    {
      title: "Maintenance",
      description: "Keep your website secure and up-to-date.",
      icon: "🔧",
      features: [
        "Security Updates",
        "Content Updates",
        "Bug Fixes",
        "Support"
      ]
    }
  ];

  return (
    <section id="services" className="py-16 px-6 relative w-full font-poppins sm:px-6 lg:px-0 bg-[#0E1627]">
      <div className="max-w-[1140px] container mx-auto">
        {/* Section header */}
        <div className="text-center mb-12">
          <span className="text-teal-400 font-medium text-lg">SERVICES</span>
          <h2 className="text-3xl md:text-4xl font-bold mt-2 text-white">
            What I <span className="text-teal-400">Offer</span>
          </h2>
          <div className="w-16 h-1 bg-teal-400 mx-auto mt-4 mb-6"></div>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            Comprehensive solutions tailored to your business needs.
          </p>
        </div>

        {/* Services grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div 
              key={index}
              className="group relative bg-[#1A2335] rounded-xl shadow-md hover:shadow-lg transition-all duration-300 overflow-hidden border border-[#2D3748] hover:border-teal-400"
            >
              <div className="p-6 h-full flex flex-col">
                {/* Icon and title */}
                <div className="flex items-center mb-4">
                  <span className="text-4xl mr-4 group-hover:text-teal-400 transition-colors duration-300">{service.icon}</span>
                  <h3 className="text-xl font-bold text-white group-hover:text-teal-400 transition-colors duration-300">{service.title}</h3>
                </div>
                
                {/* Description */}
                <p className="text-gray-300 mb-4">{service.description}</p>
                
                {/* Features list */}
                <ul className="space-y-2 mb-6 flex-grow">
                  {service.features.map((feature, i) => (
                    <li key={i} className="flex items-start">
                      <svg className="w-5 h-5 text-teal-400 mt-0.5 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                      </svg>
                      <span className="text-gray-300 group-hover:text-white transition-colors duration-300">{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <Button text='Learn More' alt='Learn More'/>
              </div>
              
              {/* Hover effect overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-teal-400/5 to-teal-400/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 text-center">
          <div className="inline-block bg-[#1A2335] p-6 rounded-xl shadow-md border border-[#2D3748]">
            <h4 className="text-xl font-bold mb-2 text-white">Have a special project?</h4>
            <p className="text-gray-300 mb-4 max-w-lg mx-auto">Let's discuss how I can help with your unique requirements.</p>
            <button className="px-8 py-3 bg-teal-400 hover:bg-teal-500 text-[#0E1627] font-medium rounded-lg transition-all duration-300 shadow-sm hover:shadow-md">
              Contact Me
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;