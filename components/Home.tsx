import React from 'react';
import { Sparkles, ArrowRight, Mail, User, Briefcase, Award } from 'lucide-react';
import { Typewriter, RevealOnScroll } from './Shared';
import { PageType } from '../App';

interface HomeProps {
    changePage: (page: PageType) => void;
}

const Home: React.FC<HomeProps> = ({ changePage }) => (
  <div className="flex flex-col md:flex-row items-center justify-between gap-12 min-h-[75vh] relative py-8 md:py-12">
    {/* Animated Blobs */}
    <div className="absolute top-0 right-0 w-72 h-72 md:w-96 md:h-96 bg-blue-300 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob pointer-events-none"></div>
    <div className="absolute top-0 right-20 md:right-40 w-72 h-72 md:w-96 md:h-96 bg-teal-300 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-2000 pointer-events-none"></div>
    <div className="absolute -bottom-20 left-10 md:left-20 w-56 h-56 md:w-72 md:h-72 bg-purple-300 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-4000 pointer-events-none"></div>

    <RevealOnScroll className="md:w-1/2 space-y-6 md:space-y-8 relative z-10 text-center md:text-left">
      <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-gradient-to-r from-blue-50 to-teal-50 border border-teal-100 text-teal-800 rounded-full text-xs font-bold tracking-widest uppercase shadow-sm hover:scale-105 transition-transform cursor-default ring-1 ring-teal-100 hover:ring-teal-300 hover:shadow-lg hover:shadow-teal-100/50 duration-300">
        <Sparkles size={14} className="text-yellow-500 fill-yellow-500 animate-spin-slow" /> Open to Opportunities
      </div>
      
      <div className="space-y-4">
        <h1 className="text-4xl md:text-5xl lg:text-7xl font-extrabold text-slate-900 leading-tight group cursor-default">
          Hello, I am <br/>
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-teal-500 to-indigo-600 animate-gradient-x bg-[length:200%_auto] drop-shadow-sm group-hover:drop-shadow-[0_4px_10px_rgba(20,184,166,0.3)] transition-all duration-300">
            Prasath
          </span>
        </h1>
        <h2 className="text-xl md:text-2xl lg:text-3xl font-medium text-slate-600 h-8 md:h-10">
          <Typewriter words={["HR Professional", "Operations Manager", "Evangelist", "Strategist"]} />
        </h2>
      </div>
      
      <p className="text-base md:text-lg text-slate-600 leading-relaxed max-w-lg border-l-4 border-teal-500 pl-6 italic bg-gradient-to-r from-slate-50 to-transparent p-2 rounded-r-lg hover:bg-teal-50/50 transition-colors duration-500 mx-auto md:mx-0">
        "Empowering organizations through strategic human resource management and operational excellence for over 17 years."
      </p>
      
      <div className="flex flex-wrap gap-4 md:gap-5 pt-6 justify-center md:justify-start">
        <button 
          onClick={() => changePage('contact')}
          className="group relative px-6 py-3 md:px-8 md:py-4 bg-slate-900 text-white rounded-xl shadow-xl hover:shadow-2xl hover:shadow-teal-500/40 transition-all duration-300 overflow-hidden hover:-translate-y-1 active:scale-95"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-teal-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          {/* Shine effect */}
          <div className="absolute top-0 -inset-full h-full w-1/2 z-5 block transform -skew-x-12 bg-gradient-to-r from-transparent to-white opacity-20 group-hover:animate-shine" />
          <span className="relative flex items-center gap-2 md:gap-3 font-semibold text-base md:text-lg z-10">
            View Bio-Data <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
          </span>
        </button>
        
        <button 
          onClick={() => window.open('mailto:prasathr3009@gmail.com')}
          className="relative px-6 py-3 md:px-8 md:py-4 bg-white text-slate-800 border-2 border-slate-100 rounded-xl shadow-md hover:shadow-lg hover:border-teal-400 hover:text-teal-700 transition-all duration-300 font-semibold flex items-center gap-2 group overflow-hidden hover:-translate-y-1 active:scale-95 text-base md:text-lg"
        >
          <span className="absolute inset-0 bg-teal-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
          <span className="relative flex items-center gap-2 z-10">
            <Mail size={20} className="group-hover:animate-bounce" /> Contact Me
          </span>
        </button>
      </div>
    </RevealOnScroll>

    <div className="md:w-1/2 flex justify-center relative z-10 mt-12 md:mt-0 animate-fade-in-right">
      <div className="relative w-72 h-72 md:w-[500px] md:h-[500px] group perspective-1000">
        <div className="absolute inset-0 border-2 border-dashed border-teal-200 rounded-full animate-spin-slow opacity-60 group-hover:border-teal-400 transition-colors duration-500"></div>
        <div className="absolute inset-6 border border-blue-200 rounded-full animate-spin-reverse-slow opacity-60 group-hover:border-blue-400 transition-colors duration-500"></div>
        
        {/* Profile Circle with Hover 3D effect */}
        <div className="absolute inset-10 bg-gradient-to-br from-white to-slate-50 rounded-full shadow-2xl flex items-center justify-center overflow-hidden border-4 md:border-8 border-white transition-transform duration-700 hover:rotate-y-12 hover:rotate-x-12 shadow-blue-900/10 group-hover:shadow-teal-500/20 z-10">
          <User size={150} className="text-slate-300 group-hover:scale-110 group-hover:text-slate-400 transition-all duration-700 md:w-[200px] md:h-[200px]" />
        </div>

        {/* Floating Badges */}
        <div className="absolute top-10 -right-2 md:top-20 md:right-0 bg-white/90 backdrop-blur-md p-3 md:p-4 rounded-2xl shadow-xl border border-white flex items-center gap-2 md:gap-3 animate-float hover:scale-110 transition-transform cursor-default z-20 group-hover:shadow-teal-500/20 group-hover:border-teal-100 scale-90 md:scale-100 origin-right">
           <div className="bg-gradient-to-br from-teal-100 to-teal-200 p-2 md:p-3 rounded-xl text-teal-700 shadow-inner"><Briefcase size={20} className="md:w-6 md:h-6" /></div>
           <div>
             <p className="text-[10px] md:text-xs text-slate-500 font-bold uppercase tracking-wider">Experience</p>
             <p className="text-base md:text-xl font-bold text-slate-800">17+ Years</p>
           </div>
        </div>
        
        <div className="absolute bottom-10 -left-2 md:bottom-20 md:left-0 bg-white/90 backdrop-blur-md p-3 md:p-4 rounded-2xl shadow-xl border border-white flex items-center gap-2 md:gap-3 animate-float animation-delay-2000 hover:scale-110 transition-transform cursor-default z-20 group-hover:shadow-blue-500/20 group-hover:border-blue-100 scale-90 md:scale-100 origin-left">
           <div className="bg-gradient-to-br from-blue-100 to-blue-200 p-2 md:p-3 rounded-xl text-blue-700 shadow-inner"><Award size={20} className="md:w-6 md:h-6" /></div>
           <div>
             <p className="text-[10px] md:text-xs text-slate-500 font-bold uppercase tracking-wider">Qualified</p>
             <p className="text-base md:text-xl font-bold text-slate-800">MBA (HR)</p>
           </div>
        </div>
      </div>
    </div>
  </div>
);

export default Home;