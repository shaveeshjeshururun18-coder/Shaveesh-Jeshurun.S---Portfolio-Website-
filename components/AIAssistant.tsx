import React, { useState, useEffect, useRef } from 'react';
import { Bot, Send, X, Sparkles, MessageSquare, ChevronRight } from 'lucide-react';
import { PageType } from '../App';

interface Message {
  id: number;
  type: 'bot' | 'user';
  text: string;
  action?: PageType;
  isTyping?: boolean;
}

interface AIAssistantProps {
  changePage: (page: PageType) => void;
}

const QUICK_REPLIES = [
  { label: 'Experience?', action: 'experience' },
  { label: 'Services', action: 'services' },
  { label: 'Bio Data', action: 'contact' },
  { label: 'Education', action: 'education' },
];

export const AIAssistant: React.FC<AIAssistantProps> = ({ changePage }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [position, setPosition] = useState({ x: window.innerWidth - 90, y: window.innerHeight - 110 });
  const [isDragging, setIsDragging] = useState(false);
  const [dragStart, setDragStart] = useState({ x: 0, y: 0 });
  const [hasMoved, setHasMoved] = useState(false);
  
  // Chat State
  const [messages, setMessages] = useState<Message[]>([
    { id: 1, type: 'bot', text: "Hi! I'm Prasath's AI Assistant. Ask me about his HR experience, skills, or ministry!" }
  ]);
  const [input, setInput] = useState("");
  const [isBotThinking, setIsBotThinking] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(scrollToBottom, [messages, isOpen, isBotThinking]);

  // Handle Dragging Logic
  const handleMouseDown = (e: React.MouseEvent) => {
    const target = e.target as HTMLElement;
    if (target.closest('.chat-window')) return;
    
    setIsDragging(true);
    setHasMoved(false);
    setDragStart({
      x: e.clientX - position.x,
      y: e.clientY - position.y
    });
  };

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!isDragging) return;
      
      const newX = e.clientX - dragStart.x;
      const newY = e.clientY - dragStart.y;
      
      if (Math.abs(newX - position.x) > 3 || Math.abs(newY - position.y) > 3) {
          setHasMoved(true);
      }

      const maxX = window.innerWidth - 60;
      const maxY = window.innerHeight - 60;
      
      setPosition({
        x: Math.min(Math.max(0, newX), maxX),
        y: Math.min(Math.max(0, newY), maxY)
      });
    };

    const handleMouseUp = () => {
      setIsDragging(false);
    };

    if (isDragging) {
      window.addEventListener('mousemove', handleMouseMove);
      window.addEventListener('mouseup', handleMouseUp);
    }

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseup', handleMouseUp);
    };
  }, [isDragging, dragStart, position]);

  const processResponse = (text: string) => {
    setIsBotThinking(true);
    
    // Simulate thinking time random between 800ms and 1500ms
    const thinkingTime = Math.floor(Math.random() * 700) + 800;

    setTimeout(() => {
      let botResponseText = "";
      let action: PageType | undefined = undefined;
      const lowerInput = text.toLowerCase();

      if (lowerInput.includes('resume') || lowerInput.includes('cv') || lowerInput.includes('bio') || lowerInput.includes('download')) {
        botResponseText = "You can view Prasath's full Bio-Data and Resume on the Bio page.";
        action = 'contact';
      } else if (lowerInput.includes('experience') || lowerInput.includes('work') || lowerInput.includes('job')) {
        botResponseText = "Prasath has over 17 years of experience in HR and Operations. Let me show you his journey.";
        action = 'experience';
      } else if (lowerInput.includes('skill') || lowerInput.includes('services') || lowerInput.includes('consulting')) {
          botResponseText = "His expertise includes HR Consulting, Payroll, Compliance, and Administration.";
          action = 'services';
      } else if (lowerInput.includes('education') || lowerInput.includes('mba') || lowerInput.includes('study')) {
        botResponseText = "He holds an MBA in Human Resources.";
        action = 'education';
      } else if (lowerInput.includes('ministry') || lowerInput.includes('church') || lowerInput.includes('evangelist')) {
        botResponseText = "Prasath is actively involved in City of Truth Ministries as an Evangelist.";
        action = 'ministry';
      } else if (lowerInput.includes('contact') || lowerInput.includes('mail') || lowerInput.includes('phone') || lowerInput.includes('call')) {
          botResponseText = "You can contact him via email or phone. Navigating to contact info.";
          action = 'contact';
      } else if (lowerInput.includes('creator') || lowerInput.includes('dev') || lowerInput.includes('shaveesh')) {
          botResponseText = "Shaveesh is the brilliant developer behind this site! Taking you to his profile.";
          action = 'creator';
      } else if (lowerInput.includes('hi') || lowerInput.includes('hello') || lowerInput.includes('hey')) {
        botResponseText = "Hello! I am ready to assist you. Ask me about Prasath's HR expertise!";
      } else {
        botResponseText = "I'm here to help! Try asking about 'Experience', 'Services', or 'Bio-Data'.";
      }

      setIsBotThinking(false);
      setMessages(prev => [...prev, { id: Date.now(), type: 'bot', text: botResponseText, action }]);
      
      if (action) {
          setTimeout(() => changePage(action!), 1500); // Navigate after reading
      }
    }, thinkingTime);
  };

  const handleSend = (text: string = input) => {
    if (!text.trim()) return;
    setMessages(prev => [...prev, { id: Date.now(), type: 'user', text: text }]);
    setInput("");
    processResponse(text);
  };

  const handleQuickAction = (item: { label: string, action: string }) => {
      setMessages(prev => [...prev, { id: Date.now(), type: 'user', text: item.label }]);
      processResponse(item.label);
  };

  return (
    <div 
      style={{ left: position.x, top: position.y }}
      className="fixed z-[100] flex flex-col items-end transition-shadow select-none"
    >
      {/* Chat Window */}
      {isOpen && (
        <div 
          className="chat-window bg-white/90 backdrop-blur-xl rounded-3xl shadow-[0_0_50px_rgba(13,148,136,0.2)] border border-teal-500/30 w-[90vw] md:w-96 mb-6 overflow-hidden animate-slideUpFade flex flex-col h-[450px] md:h-[520px] absolute bottom-20 right-0 max-w-[380px]"
          onMouseDown={(e) => e.stopPropagation()}
        >
          {/* Header */}
          <div className="bg-gradient-to-r from-slate-900 via-teal-900 to-slate-900 p-4 text-white flex justify-between items-center cursor-default shadow-md relative overflow-hidden">
            <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-20"></div>
             {/* Header glow */}
             <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-teal-400 to-transparent"></div>
            
            <div className="flex items-center gap-3 relative z-10">
              <div className="relative">
                 <div className="bg-white/10 p-2 rounded-full ring-1 ring-teal-400/50">
                     <Bot size={20} className="text-teal-300 drop-shadow-[0_0_5px_rgba(45,212,191,0.8)]" />
                 </div>
                 <span className="absolute -top-0.5 -right-0.5 w-2.5 h-2.5 bg-green-500 rounded-full border-2 border-slate-900"></span>
              </div>
              <div>
                  <span className="font-bold text-sm block tracking-wide">Prasath's AI Guide</span>
                  <span className="text-[10px] text-teal-300 flex items-center gap-1 opacity-80">
                      Assistant Online
                  </span>
              </div>
            </div>
            <button onClick={() => setIsOpen(false)} className="hover:bg-white/10 p-2 rounded-full transition-colors relative z-10 hover:text-teal-300"><X size={18}/></button>
          </div>
          
          {/* Messages Area */}
          <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-slate-50/50 scroll-smooth">
            {messages.map((msg) => (
              <div key={msg.id} className={`flex ${msg.type === 'user' ? 'justify-end' : 'justify-start'} animate-slideUpFade`}>
                <div className={`max-w-[85%] p-4 text-sm shadow-sm relative overflow-hidden ${
                  msg.type === 'user' 
                    ? 'bg-gradient-to-br from-teal-600 to-teal-800 text-white rounded-2xl rounded-tr-none' 
                    : 'bg-white border border-slate-100 text-slate-700 rounded-2xl rounded-tl-none'
                }`}>
                   {/* Shine effect for user bubble */}
                   {msg.type === 'user' && <div className="absolute top-0 -left-full w-full h-full bg-gradient-to-r from-transparent via-white/20 to-transparent animate-shine"></div>}

                   {msg.type === 'bot' ? <TypewriterText text={msg.text} /> : <span className="relative z-10">{msg.text}</span>}
                   
                   {msg.action && msg.type === 'bot' && (
                     <div className="mt-3 pt-2 border-t border-slate-100 text-xs opacity-90 flex items-center gap-1 font-bold text-teal-600">
                        <Sparkles size={12} className="animate-spin-slow" /> Navigating you there...
                     </div>
                   )}
                </div>
              </div>
            ))}
            
            {/* Thinking Indicator */}
            {isBotThinking && (
                 <div className="flex justify-start animate-slideUpFade">
                    <div className="bg-white border border-slate-100 px-4 py-3 rounded-2xl rounded-tl-none shadow-sm flex gap-1.5 items-center">
                        <span className="w-2 h-2 bg-teal-400 rounded-full animate-bounce [animation-delay:-0.3s]"></span>
                        <span className="w-2 h-2 bg-teal-500 rounded-full animate-bounce [animation-delay:-0.15s]"></span>
                        <span className="w-2 h-2 bg-teal-600 rounded-full animate-bounce"></span>
                    </div>
                 </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Quick Replies */}
          {messages.length < 3 && !isBotThinking && (
              <div className="px-4 py-2 flex gap-2 overflow-x-auto no-scrollbar pb-3">
                  {QUICK_REPLIES.map((reply, idx) => (
                      <button 
                        key={idx}
                        onClick={() => handleQuickAction(reply)}
                        className="whitespace-nowrap px-4 py-2 bg-white/80 backdrop-blur-sm border border-teal-100 text-teal-700 text-xs font-semibold rounded-full hover:bg-teal-50 hover:border-teal-400 hover:shadow-lg hover:shadow-teal-500/10 transition-all duration-300 flex-shrink-0 hover:-translate-y-0.5"
                      >
                          {reply.label}
                      </button>
                  ))}
              </div>
          )}

          {/* Input Area */}
          <div className="p-3 bg-white border-t border-slate-200 flex gap-2 shadow-[0_-5px_15px_rgba(0,0,0,0.02)] relative z-20">
            <input 
              type="text" value={input} onChange={(e) => setInput(e.target.value)}
              onKeyPress={(e) => e.key === 'Enter' && handleSend()}
              placeholder="Type your message..." 
              disabled={isBotThinking}
              className="flex-1 px-4 py-3 bg-slate-100 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-teal-500/50 focus:bg-white transition-all disabled:opacity-50"
            />
            <button 
                onClick={() => handleSend()} 
                disabled={!input.trim() || isBotThinking}
                className="p-3 bg-slate-900 text-white rounded-xl hover:bg-teal-600 disabled:opacity-50 disabled:cursor-not-allowed transition-all shadow-lg shadow-teal-500/20 active:scale-95 group"
            >
                <Send size={18} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </button>
          </div>
        </div>
      )}
      
      {/* Draggable Button - Clean Version */}
      <button 
        onMouseDown={handleMouseDown}
        onClick={() => { if (!hasMoved) setIsOpen(!isOpen); }}
        className={`group flex items-center justify-center w-14 h-14 md:w-16 md:h-16 rounded-full transition-all duration-300 z-50 relative bg-slate-900 hover:bg-teal-600 hover:scale-105 shadow-[0_4px_20px_rgba(0,0,0,0.3)] ${isDragging ? 'cursor-grabbing scale-105' : 'cursor-grab'}`}
      >
        {/* Use Me Label - Static */}
        {!isOpen && !isDragging && (
            <div className="absolute bottom-full mb-3 right-0 bg-slate-900 text-white text-[10px] font-black px-3 py-1.5 rounded-lg shadow-md border border-slate-700 whitespace-nowrap z-50">
                USE ME 🤖
                <div className="absolute top-full right-5 border-l-4 border-l-transparent border-r-4 border-r-transparent border-t-4 border-t-slate-900"></div>
            </div>
        )}

        <div className="relative pointer-events-none z-10">
             {isOpen 
                ? <X size={24} className="text-white transition-transform rotate-0 hover:rotate-90 md:w-7 md:h-7" /> 
                : <Bot size={24} className="text-white transition-transform group-hover:scale-110 md:w-7 md:h-7" />
             }
        </div>
      </button>
    </div>
  );
};

/* --- TYPEWRITER COMPONENT FOR CHAT --- */
const TypewriterText: React.FC<{ text: string }> = ({ text }) => {
    const [displayedText, setDisplayedText] = useState("");
    
    useEffect(() => {
        setDisplayedText(""); // Reset when text changes
        let i = 0;
        const speed = 20; // Typing speed ms
        
        const interval = setInterval(() => {
            if (i < text.length) {
                setDisplayedText(prev => prev + text.charAt(i));
                i++;
            } else {
                clearInterval(interval);
            }
        }, speed);
        
        return () => clearInterval(interval);
    }, [text]);

    return <span>{displayedText}</span>;
};