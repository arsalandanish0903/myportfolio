import React from 'react'
import Buttons from '../Buttons/Buttons'

const Home = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen bg-[#0f172a] text-white flex items-center justify-center px-6 overflow-hidden"
    >
      {/* Geometric background elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Large triangle */}
        <div className="absolute -left-40 -top-40 w-96 h-96 border-4 border-teal-400/10 rotate-45"></div>
        {/* Floating circles */}
        <div className="absolute top-1/4 right-1/4 w-32 h-32 rounded-full bg-teal-400/5 blur-xl animate-float"></div>
        <div className="absolute bottom-1/3 left-1/4 w-48 h-48 rounded-full bg-teal-400/5 blur-xl animate-float-delay"></div>
        {/* Grid dots pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="h-full w-full bg-[radial-gradient(#ffffff_1px,transparent_1px)] bg-[size:20px_20px]"></div>
        </div>
      </div>

      <div className="max-w-[1140px] container mx-auto relative z-10">
        <div className="relative pt-40 lg:pt-0">
          {/* Animated greeting text */}
          <div className="text-teal-400 font-mono mb-2 text-lg md:text-xl relative inline-block">
            <span className="opacity-0 animate-fadeIn">H</span>
            <span className="opacity-0 animate-fadeIn delay-100">i</span>
            <span className="opacity-0 animate-fadeIn delay-200"> </span>
            <span className="opacity-0 animate-fadeIn delay-300">t</span>
            <span className="opacity-0 animate-fadeIn delay-400">h</span>
            <span className="opacity-0 animate-fadeIn delay-500">e</span>
            <span className="opacity-0 animate-fadeIn delay-600">r</span>
            <span className="opacity-0 animate-fadeIn delay-700">e</span>
            <span className="opacity-0 animate-fadeIn delay-800">!</span>
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-teal-400 animate-lineExpand"></span>
          </div>

          {/* Main heading with gradient text */}
          <h1 className="text-5xl z-30 md:text-7xl lg:text-8xl font-bold mb-6 leading-tight bg-clip-text text-white bg-gradient-to-r from-teal-400 via-blue-400 to-purple-400">
            <span className="relative inline-block">
              Arsalan Danish
              
            </span>
          </h1>

          {/* Animated typing effect for role */}
          <div className="mb-8">
            <h2 className="text-2xl md:text-3xl font-medium text-gray-300 inline-flex overflow-hidden">
              <span className="text-teal-400 mr-2">&lt;</span>
              <span className="animate-typing overflow-hidden whitespace-nowrap border-r-2 border-r-teal-400 pr-1">
                Frontend Developer
              </span>
              <span className="text-teal-400 ml-2">/&gt;</span>
            </h2>
          </div>

          {/* Description with highlighted tech */}
          <p className="text-lg md:text-xl text-gray-300 mb-8 max-w-3xl relative pl-6 border-l-4 border-teal-400/30">
  I specialize in creating <span className="text-white font-semibold">immersive digital experiences</span> using modern web technologies. While my expertise includes{' '}
  <span className="text-teal-300 font-medium relative group">
    React
    <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-teal-400 group-hover:w-full transition-all duration-300"></span>
  </span>{' '} and{' '}
  <span className="text-teal-300 font-medium relative group">
    Tailwind CSS
    <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-teal-400 group-hover:w-full transition-all duration-300"></span>
  </span>, I’m also adaptable and open to working with other technologies based on project needs. I transform complex problems into elegant, user-friendly solutions.
</p>


          {/* Action buttons with glow effect */}
          <div className="flex flex-wrap gap-6 items-center mb-16">
            <Buttons text='Hire Me' alt='Hire Me' className="relative overflow-hidden group">
              <span className="absolute inset-0 bg-gradient-to-r from-teal-400 to-blue-500 opacity-0 group-hover:opacity-10 transition-opacity duration-500"></span>
            </Buttons>
            <a 
              href="#projects" 
              className="px-8 py-3.5 font-medium rounded-lg relative overflow-hidden group border-2 border-teal-400/50 hover:border-teal-400 transition-all duration-300"
            >
              <span className="relative z-10 flex items-center">
                View Projects
                <svg className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </span>
              <span className="absolute inset-0 bg-teal-400/5 group-hover:bg-teal-400/10 transition-all duration-500"></span>
            </a>
          </div>
        </div>
      </div>

      {/* Decorative code bracket */}
      <div className="hidden lg:block absolute right-10 bottom-10 text-[250px] text-teal-400/10 font-mono select-none">
        {'</>'}
      </div>

      {/* Custom animations */}
      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0) rotate(0deg); }
          50% { transform: translateY(-20px) rotate(5deg); }
        }
        @keyframes fadeIn {
          to { opacity: 1; }
        }
        @keyframes lineExpand {
          to { width: 100%; }
        }
        @keyframes typing {
          from { width: 0 }
          to { width: 100% }
        }
        .animate-float {
          animation: float 8s ease-in-out infinite;
        }
        .animate-float-delay {
          animation: float 10s ease-in-out infinite 2s;
        }
        .animate-fadeIn {
          animation: fadeIn 0.5s forwards;
        }
        .animate-lineExpand {
          animation: lineExpand 1s forwards 1.5s;
        }
        .animate-typing {
          animation: typing 3s steps(20) 1s 1 normal both;
        }
        .delay-100 { animation-delay: 0.1s; }
        .delay-200 { animation-delay: 0.2s; }
        .delay-300 { animation-delay: 0.3s; }
        .delay-400 { animation-delay: 0.4s; }
        .delay-500 { animation-delay: 0.5s; }
        .delay-600 { animation-delay: 0.6s; }
        .delay-700 { animation-delay: 0.7s; }
        .delay-800 { animation-delay: 0.8s; }
      `}</style>
    </section>
  )
}

export default Home