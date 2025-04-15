import React from 'react';

const AboutMe = () => {
  const technicalSkills = [
    { name: 'HTML5', level: 95 },
    { name: 'CSS3', level: 90 },
    { name: 'JavaScript', level: 85 },
    { name: 'React.js', level: 88 },
    { name: 'Tailwind CSS', level: 92 },
    { name: 'Bootstrap', level: 80 },
    { name: 'Git & GitHub', level: 85 },
    { name: 'REST APIs', level: 83 }
  ];

  const softSkills = [
    'Problem Solving', 'Team Collaboration', 'Creative Thinking',
    'Attention to Detail', 'Time Management', 'Adaptability'
  ];

  return (
    <section
      id="about"
      className="relative min-h-screen bg-[#0f172a] text-white px-6 font-poppins lg:px-0 py-16 flex items-center justify-center overflow-hidden"
    >
      {/* Decorative elements */}
      <div className="absolute -left-32 -top-32 w-64 h-64 rounded-full bg-teal-400/10 blur-3xl"></div>
      <div className="absolute -right-32 -bottom-32 w-64 h-64 rounded-full bg-teal-400/10 blur-3xl"></div>
      <div className="absolute top-1/2 left-1/4 w-16 h-16 rotate-45 bg-teal-400/5"></div>
      
      {/* Grid pattern background */}
      <div className="absolute inset-0 opacity-5">
        <div className="h-full w-full bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
      </div>

      <div className="max-w-[1140px] container mx-auto relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="text-teal-400">About</span> Me
          </h2>
          <div className="w-20 h-1 bg-teal-400 mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Image section with decorative border */}
          <div className="relative group">
            <div className="absolute -inset-2 rounded-2xl bg-gradient-to-r from-teal-400 to-blue-500 opacity-20 group-hover:opacity-30 transition-all duration-500 blur-md"></div>
            <div className="relative rounded-2xl overflow-hidden border-2 border-teal-400/20 group-hover:border-teal-400/40 transition-all duration-500">
              <img
                src="/aboutMe.jpg" // Replace with your image path
                alt="Arsalan Danish"
                className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-teal-400/0 group-hover:bg-teal-400/5 transition-all duration-500"></div>
            </div>
          </div>

          {/* Text content */}
          <div>
            <h3 className="text-2xl font-bold mb-4">
              I'm <span className="text-teal-400">Arsalan Danish</span>, a passionate Frontend Developer
            </h3>
            
            <div className="space-y-4 text-gray-300">
              <p>
                With over 2 years of experience in web development, I specialize in creating beautiful, responsive, and user-friendly interfaces that deliver exceptional user experiences.
              </p>
              
              <p>
                My approach combines technical expertise with creative problem-solving to build solutions that are not only functional but also visually compelling and accessible to all users.
              </p>
              
              <p>
                I'm constantly learning new technologies and techniques to stay at the forefront of web development trends and deliver cutting-edge solutions to my clients.
              </p>
            </div>

            {/* Experience highlights */}
            <div className="mt-8 grid grid-cols-2 gap-4">
              <div className="bg-[#1e293b]/50 p-4 rounded-lg border-l-4 border-teal-400">
                <h4 className="font-bold text-lg">50+</h4>
                <p className="text-sm text-gray-400">Projects Completed</p>
              </div>
              <div className="bg-[#1e293b]/50 p-4 rounded-lg border-l-4 border-blue-400">
                <h4 className="font-bold text-lg">2+</h4>
                <p className="text-sm text-gray-400">Years Experience</p>
              </div>
            </div>
          </div>
        </div>

        {/* Skills sections */}
        <div className="mt-16 grid md:grid-cols-2 gap-8">
          {/* Technical skills with progress bars */}
          <div>
            <h3 className="text-2xl font-bold mb-6 text-teal-400">Technical Skills</h3>
            <div className="space-y-4">
              {technicalSkills.map((skill, index) => (
                <div key={index}>
                  <div className="flex justify-between mb-1">
                    <span className="font-medium">{skill.name}</span>
                    <span className="text-gray-400">{skill.level}%</span>
                  </div>
                  <div className="w-full bg-gray-700 rounded-full h-2">
                    <div 
                      className="bg-gradient-to-r from-teal-400 to-blue-500 h-2 rounded-full" 
                      style={{ width: `${skill.level}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Soft skills */}
          <div>
            <h3 className="text-2xl font-bold mb-6 text-teal-400">Soft Skills</h3>
            <div className="flex flex-wrap gap-3">
              {softSkills.map((skill, index) => (
                <span
                  key={index}
                  className="bg-[#1e293b] py-2 px-4 rounded-lg hover:bg-teal-400/20 hover:text-teal-300 transition-all duration-300"
                >
                  {skill}
                </span>
              ))}
            </div>
            
            {/* Additional info */}
            <div className="mt-8 bg-[#1e293b]/50 p-6 rounded-xl border border-teal-400/20">
              <h4 className="font-bold text-lg mb-2">My Approach</h4>
              <p className="text-gray-300 text-sm">
              I believe in clean, maintainable code and pixel-perfect designs. Every project is an opportunity to create something meaningful that solves real problems for users.

I approach each task with a strong focus on usability, performance, and scalability — whether it’s building a landing page, designing a full-scale app, or optimizing an existing system. My process involves clear communication, deep attention to detail, and a user-first mindset that ensures every solution not only looks great but works flawlessly across devices and platforms.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;