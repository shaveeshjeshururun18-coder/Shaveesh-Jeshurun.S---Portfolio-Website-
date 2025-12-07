import React, { useState, useEffect, useRef } from 'react';
import { LucideIcon } from 'lucide-react';

/* --- NAV ITEM --- */
interface NavItemProps {
  active: boolean;
  onClick: () => void;
  children: React.ReactNode;
  icon?: LucideIcon;
  index: number;
}

export const NavItem: React.FC<NavItemProps> = ({ active, onClick, children, icon: Icon, index }) => (
  <button
    onClick={onClick}
    className={`relative flex items-center gap-1.5 md:gap-2 px-3 py-1.5 md:px-4 md:py-2 rounded-full transition-all duration-500 overflow-hidden group hover:-translate-y-1 whitespace-nowrap shrink-0 ${
      active 
        ? 'text-white shadow-[0_0_20px_rgba(20,184,166,0.5)]' 
        : 'text-slate-600 hover:text-teal-600 hover:bg-white hover:shadow-lg hover:shadow-teal-500/10'
    }`}
    style={{ animation: `slideDown 0.5s ease-out ${index * 0.1}s backwards` }}
  >
    <div className={`absolute inset-0 bg-gradient-to-r from-teal-600 to-teal-400 transition-all duration-500 ${active ? 'opacity-100' : 'opacity-0'}`}></div>
    
    {/* Hover Glow Effect for non-active state */}
    <div className={`absolute inset-0 bg-teal-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 ${active ? 'hidden' : 'block'}`}></div>
    
    <div className="relative z-10 flex items-center gap-1.5 md:gap-2 text-xs md:text-sm font-bold tracking-wide">
      {Icon && <Icon size={14} className={`md:w-4 md:h-4 transition-transform duration-500 ${active ? 'animate-bounce' : 'group-hover:rotate-12 group-hover:scale-110'}`} />}
      <span>{children}</span>
    </div>
  </button>
);

/* --- REVEAL ON SCROLL WRAPPER --- */
interface RevealProps {
  children: React.ReactNode;
  delay?: number;
  className?: string;
}

export const RevealOnScroll: React.FC<RevealProps> = ({ children, delay = 0, className = "" }) => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setIsVisible(true);
        observer.unobserve(entry.target);
      }
    }, { threshold: 0.1, rootMargin: "0px 0px -50px 0px" });

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) observer.disconnect();
    };
  }, []);

  return (
    <div 
      ref={ref}
      className={`${className} reveal ${isVisible ? 'active' : ''}`}
      style={{ transitionDelay: `${delay}s` }}
    >
      {children}
    </div>
  );
};

/* --- CARD (With Scroll Animation) --- */
interface CardProps {
  children: React.ReactNode;
  delay?: number;
  className?: string;
  style?: React.CSSProperties;
  noHover?: boolean;
}

export const Card: React.FC<CardProps> = ({ children, delay = 0, className = "", style = {}, noHover = false }) => {
  return (
    <RevealOnScroll delay={delay}>
      <div 
        className={`bg-white rounded-2xl shadow-lg border border-slate-100 p-5 md:p-6 transition-all duration-500 ease-out group relative overflow-hidden ${!noHover ? 'hover:shadow-[0_20px_50px_rgba(8,_112,_184,_0.12)] hover:-translate-y-2 hover:border-teal-200' : ''} ${className}`}
        style={style}
      >
        {!noHover && (
            <>
                {/* Top Gradient Line */}
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-teal-400 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
                {/* Side Progress Line */}
                <div className="absolute top-0 left-0 w-1 h-0 bg-gradient-to-b from-teal-400 to-blue-600 transition-all duration-700 ease-in-out group-hover:h-full"></div>
            </>
        )}
        {children}
      </div>
    </RevealOnScroll>
  );
};

/* --- SECTION TITLE (With Scroll Animation) --- */
export const SectionTitle: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <RevealOnScroll>
      <div className="mb-10 md:mb-12 relative inline-block group select-none cursor-default">
        <h2 className="text-2xl md:text-4xl lg:text-5xl font-extrabold text-slate-800 tracking-tight flex items-center gap-3 transition-colors duration-300 group-hover:text-slate-900">
          {children}
        </h2>
        {/* Animated Underline */}
        <span className="absolute -bottom-2 md:-bottom-3 left-0 h-1 md:h-1.5 w-12 md:w-16 bg-teal-500 rounded-full transition-all duration-700 ease-out group-hover:w-full bg-gradient-to-r from-teal-500 to-blue-600 shadow-lg shadow-teal-500/30"></span>
        {/* Sparkle Decoration */}
        <span className="absolute -top-3 -right-4 md:-top-4 md:-right-6 opacity-0 group-hover:opacity-100 transition-all duration-500 group-hover:rotate-12 delay-100 text-teal-400">
            <svg width="20" height="20" className="md:w-6 md:h-6" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12 2L14.39 9.61L22 12L14.39 14.39L12 22L9.61 14.39L2 12L9.61 9.61L12 2Z" fill="currentColor"/></svg>
        </span>
      </div>
    </RevealOnScroll>
  );
};

/* --- TYPEWRITER EFFECT --- */
interface TypewriterProps {
  words: string[];
}

export const Typewriter: React.FC<TypewriterProps> = ({ words }) => {
  const [index, setIndex] = useState(0);
  const [subIndex, setSubIndex] = useState(0);
  const [reverse, setReverse] = useState(false);

  useEffect(() => {
    if (subIndex === words[index].length + 1 && !reverse) {
      setTimeout(() => setReverse(true), 2000);
      return;
    }
    if (subIndex === 0 && reverse) {
      setReverse(false);
      setIndex((prev) => (prev + 1) % words.length);
      return;
    }
    const timeout = setTimeout(() => {
      setSubIndex((prev) => prev + (reverse ? -1 : 1));
    }, reverse ? 75 : 150);
    return () => clearTimeout(timeout);
  }, [subIndex, index, reverse, words]);

  return (
    <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-600 to-blue-600 inline-block min-w-[200px] md:min-w-[280px] font-bold">
      {words[index].substring(0, subIndex)}<span className="animate-blink text-slate-800">|</span>
    </span>
  );
};

/* --- NEURAL BACKGROUND (AI EFFECT) --- */
export const NeuralBackground: React.FC = () => {
    return (
        <div className="fixed inset-0 pointer-events-none z-0 opacity-20 overflow-hidden">
            <svg className="absolute w-full h-full" xmlns="http://www.w3.org/2000/svg">
                <defs>
                    <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
                        <circle cx="2" cy="2" r="1" fill="#0d9488" fillOpacity="0.3" />
                    </pattern>
                </defs>
                <rect width="100%" height="100%" fill="url(#grid)" />
            </svg>
            <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_50%,transparent_20%,#f8fafc_100%)]"></div>
        </div>
    );
};