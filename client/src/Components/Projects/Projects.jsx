import React from 'react';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import { motion } from 'framer-motion';

const projects = [
  {
    title: "Being Healthy Website",
    description: "Health and wellness platform with doctor consults, user health tracking, and dynamic content management.",
    tags: ["React", "Node.js", "MongoDB", "Tailwind CSS"],
    github: "https://github.com/yourusername/being-healthy",
    live: "https://thebeinghealthy.com"
  },
  {
    title: "Carevital Global",
    description: "Corporate healthcare services website with appointment booking and contact features.",
    tags: ["React", "Express", "MongoDB", "Tailwind CSS"],
    github: "https://github.com/yourusername/carevital-global",
    live: "https://carevitalglobal12-2025.netlify.app/"
  },
  {
    title: "Allright Dental Care",
    description: "Dental clinic site with service pages, online appointments, and a patient review system.",
    tags: ["React", "Node.js", "Express", "MongoDB"],
    github: "https://github.com/yourusername/allright-dental",
    live: "https://dentalcaredemo.netlify.app/"
  },
  {
    title: "Shivaam Farm Booking",
    description: "Farm stay booking system with calendar availability, payment integration, and admin panel.",
    tags: ["React", "Node.js", "Express", "MongoDB"],
    github: "https://github.com/yourusername/shivaam-farm",
    live: "https://shivaamfarmupdate1125.netlify.app/"
  },
  {
    title: "Agrotourism Website",
    description: "Interactive agrotourism website featuring image galleries, bookings, and user feedback modules.",
    tags: ["React", "Node.js", "Express", "MongoDB"],
    github: "https://github.com/yourusername/agrotourism",
    live: "https://mahalaxmiagrotourism.netlify.app/"
  },
  {
    title: "Tuli Overseas",
    description: "Consultancy site for studying abroad with inquiry forms, university listings, and blog management.",
    tags: ["React", "Node.js", "Express", "MongoDB"],
    github: "https://github.com/yourusername/tuli-overseas",
    live: "https://tulioverseas.netlify.app/"
  },
];

const Projects = () => {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 }
  };

  return (
    <section id="projects" className="py-16 px-6 sm:px-6 lg:px-0 relative font-poppins w-full bg-[#0E1627] text-teal-400">
      <div className="max-w-[1140px] container mx-auto">
        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-teal-400 font-mono text-sm tracking-widest mb-2 block">MY WORK</span>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Featured <span className="text-teal-400">Projects</span>
          </h2>
          <div className="w-20 h-1 bg-teal-400 mx-auto mb-6"></div>
          <p className="text-xl text-teal-300 max-w-3xl mx-auto">
            Here are some of my notable MERN stack projects. Each one is built for performance, user experience, and maintainability.
          </p>
        </motion.div>

        {/* Project Cards */}
        <motion.div 
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {projects.map((project, index) => (
            <motion.div 
              key={index} 
              variants={item}
              whileHover={{ y: -5 }}
              className="bg-gray-800 rounded-xl overflow-hidden shadow-xl border border-teal-900/50 hover:border-teal-400/30 transition-all duration-300 group"
            >
              <div className="p-6">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-2xl font-bold text-white group-hover:text-teal-400 transition-colors">
                    {project.title}
                  </h3>
                  <div className="flex space-x-3">
                    {project.github && (
                      <a href={project.github} target="_blank" rel="noopener noreferrer" 
                         className="text-gray-400 hover:text-teal-400 transition-colors">
                        <FaGithub size={18} />
                      </a>
                    )}
                    {project.live && (
                      <a href={project.live} target="_blank" rel="noopener noreferrer" 
                         className="text-gray-400 hover:text-teal-400 transition-colors">
                        <FaExternalLinkAlt size={18} />
                      </a>
                    )}
                  </div>
                </div>
                <p className="text-teal-200 mb-5">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, i) => (
                    <span key={i} className="bg-teal-900/30 text-teal-300 text-xs px-3 py-1 rounded-full">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
              <div className="px-6 py-3 bg-gray-700/50 border-t border-gray-700">
                <div className="h-1 w-full bg-gray-600 rounded-full overflow-hidden">
                  <div 
                    className="h-full bg-teal-400" 
                    style={{ width: `${Math.random() * 60 + 40}%` }}
                  ></div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <p className="text-lg text-teal-300 mb-6">
            Want to see more? Check out my GitHub profile for additional projects and code samples.
          </p>
          <a
            href="https://github.com/arsalandanish0903"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-6 py-3 border border-teal-400 text-teal-400 rounded-lg hover:bg-teal-400 hover:text-gray-900 transition-colors font-medium"
          >
            <FaGithub className="mr-2" />
            View GitHub Profile
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
