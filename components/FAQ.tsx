import React, { useState } from 'react';
import { ChevronDown, ChevronUp, Download, HelpCircle, FileText } from 'lucide-react';
import { SectionTitle, Card, RevealOnScroll } from './Shared';

const FAQ: React.FC = () => {
  const faqs = [
    {
      question: "What is your total experience in HR?",
      answer: "I have over 17 years of extensive experience in Human Resource Management and Operations, ranging from executive roles to managerial positions."
    },
    {
      question: "Which industries have you worked in?",
      answer: "I have worked primarily in the Textile and Garment manufacturing sectors, as well as managing family business operations involving various administrative functions."
    },
    {
      question: "Do you handle statutory compliance?",
      answer: "Yes, I have deep expertise in handling government records including ESI, EPF, Factory Act compliance, and other statutory requirements."
    },
    {
      question: "What is your role in City of Truth Ministries?",
      answer: "I serve as a part-time Evangelist (for 8 years), involved in discipleship, church ministry, and community outreach programs."
    },
    {
      question: "Are you open to relocation?",
      answer: "I am currently based in Valparai/Coimbatore. Please feel free to contact me to discuss potential opportunities and locations."
    }
  ];

  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="max-w-4xl mx-auto py-8">
      <SectionTitle>Frequently Asked Questions</SectionTitle>
      
      <div className="grid md:grid-cols-12 gap-8">
        <div className="md:col-span-8 space-y-4">
          {faqs.map((faq, index) => (
            <RevealOnScroll key={index} delay={index * 0.1}>
              <div 
                className={`bg-white rounded-xl border transition-all duration-300 overflow-hidden ${openIndex === index ? 'border-teal-500 shadow-md' : 'border-slate-200 hover:border-teal-300'}`}
              >
                <button 
                  onClick={() => toggleFAQ(index)}
                  className="w-full flex items-center justify-between p-5 text-left focus:outline-none"
                >
                  <span className={`font-bold text-lg ${openIndex === index ? 'text-teal-700' : 'text-slate-700'}`}>
                    {faq.question}
                  </span>
                  {openIndex === index ? <ChevronUp className="text-teal-500" /> : <ChevronDown className="text-slate-400" />}
                </button>
                <div 
                  className={`px-5 text-slate-600 leading-relaxed overflow-hidden transition-all duration-300 ease-in-out ${openIndex === index ? 'max-h-48 pb-5 opacity-100' : 'max-h-0 opacity-0'}`}
                >
                  {faq.answer}
                </div>
              </div>
            </RevealOnScroll>
          ))}
        </div>

        <div className="md:col-span-4">
           <RevealOnScroll delay={0.4}>
             <div className="bg-slate-900 text-white rounded-2xl p-6 shadow-xl sticky top-24">
                <div className="w-12 h-12 bg-teal-500 rounded-lg flex items-center justify-center mb-4 text-white shadow-lg shadow-teal-500/30">
                  <FileText size={24} />
                </div>
                <h3 className="text-xl font-bold mb-2">Want the full details?</h3>
                <p className="text-slate-400 text-sm mb-6">
                  Download the comprehensive Bio-Data to view detailed work history, educational background, and personal information.
                </p>
                <button onClick={() => window.print()} className="w-full bg-white text-slate-900 py-3 px-4 rounded-xl font-bold hover:bg-teal-400 hover:text-white transition-all duration-300 flex items-center justify-center gap-2 group">
                  <Download size={18} className="group-hover:-translate-y-1 transition-transform" />
                  Download Resume
                </button>
             </div>
           </RevealOnScroll>
        </div>
      </div>
    </div>
  );
};

export default FAQ;