import React from 'react';
import { FaGithub, FaLinkedin, FaTwitter, FaEnvelope } from 'react-icons/fa';

function Footer() {
  const currentYear = new Date().getFullYear();
  
  const socialLinks = [
    {
      name: 'GitHub',
      url: 'https://github.com/arsalandanish0903',
      icon: <FaGithub className="w-5 h-5" />,
    },
    {
      name: 'LinkedIn',
      url: 'https://www.linkedin.com/in/arsalan-danish-a9a9ab226',
      icon: <FaLinkedin className="w-5 h-5" />,
    },
    {
      name: 'Email',
      url: 'mailto:arsalandanish0903@gmail.com',
      icon: <FaEnvelope className="w-5 h-5" />,
    },
  ];

  return (
    <footer className="bg-gradient-to-r from-[#0f172a] px-6 lg:px-0 to-[#1e293b] text-white py-8 font-poppins relative w-full">
      <div className="max-w-[1140px] container mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <h2 className="text-xl font-bold mb-2">Arsalan Danish</h2>
            <p className="text-sm text-gray-300">
              Frontend Developer | Open Source Contributor
            </p>
          </div>
          
          <div className="flex flex-col items-center md:items-end">
            <div className="flex space-x-6 mb-4">
              {socialLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-300 hover:text-white transition-colors duration-300"
                  aria-label={link.name}
                >
                  {link.icon}
                </a>
              ))}
            </div>
            <p className="text-sm text-gray-400">
              © {currentYear} All rights reserved.
            </p>
          </div>
        </div>
        
        <div className="mt-8 pt-6 border-t border-gray-700 text-center text-xs text-gray-400">
          <p>Built with React and Tailwind CSS</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;