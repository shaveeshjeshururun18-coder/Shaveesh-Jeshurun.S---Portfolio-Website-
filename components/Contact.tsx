import React, { useState } from 'react';
import { Mail, Phone, MapPin, Download, FileText, User, Linkedin, MessageCircle, Calendar, Ruler, Users, Home, ArrowRight, Heart, Map, Scale, Book } from 'lucide-react';
import { SectionTitle, Card, RevealOnScroll } from './Shared';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({ name: '', phone: '', message: '' });

  const handleSendEmail = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = `Enquiry from ${formData.name}`;
    const body = `Name: ${formData.name}%0APhone: ${formData.phone}%0A%0AMessage:%0A${formData.message}`;
    window.location.href = `mailto:prasathr3009@gmail.com?subject=${subject}&body=${body}`;
  };

  return (
    <div className="max-w-6xl mx-auto py-8">
      <SectionTitle>Bio-Data & Get in Touch</SectionTitle>

      <div className="grid md:grid-cols-12 gap-8">
        
        {/* LEFT COLUMN: Profile Card & Quick Actions */}
        <div className="md:col-span-4 space-y-6 self-start">
          {/* Profile Card */}
          <Card delay={0.1} className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white border-none relative overflow-hidden group">
            {/* Background Texture */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-teal-500/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 group-hover:bg-teal-500/20 transition-all duration-700"></div>
            
            <div className="flex flex-col items-center text-center relative z-10">
               <div className="w-28 h-28 bg-white/10 rounded-full flex items-center justify-center mb-6 backdrop-blur-sm ring-4 ring-white/5 group-hover:ring-teal-500/50 transition-all duration-500 group-hover:scale-105">
                  <User size={48} className="text-teal-400 group-hover:scale-110 transition-transform" />
               </div>
               <h3 className="text-2xl font-bold mb-2 tracking-tight">R. Prasath</h3>
               <p className="text-teal-400 font-medium mb-1">MBA (HR)</p>
               <p className="text-slate-400 text-sm mb-6 bg-slate-800/50 px-3 py-1 rounded-full border border-slate-700">HR Professional & Evangelist</p>
               
               <div className="w-full space-y-3 text-left">
                 <a href="mailto:prasathr3009@gmail.com" className="flex items-center gap-3 p-3 rounded-xl bg-white/5 hover:bg-white/10 hover:shadow-lg hover:shadow-teal-500/10 transition-all duration-300 border border-transparent hover:border-teal-500/30 group/item">
                    <div className="p-2 bg-teal-500/10 rounded-lg text-teal-400 group-hover/item:text-white group-hover/item:bg-teal-500 transition-colors">
                        <Mail size={18} />
                    </div>
                    <span className="text-sm font-medium text-slate-300 group-hover/item:text-white transition-colors truncate">prasathr3009@gmail.com</span>
                 </a>
                 <div className="flex items-center gap-3 p-3 rounded-xl bg-white/5 hover:bg-white/10 transition-all duration-300 border border-transparent hover:border-teal-500/30 group/item">
                    <div className="p-2 bg-teal-500/10 rounded-lg text-teal-400 group-hover/item:text-white group-hover/item:bg-teal-500 transition-colors">
                        <Phone size={18} />
                    </div>
                    <div>
                        <a href="tel:+917299933882" className="block text-sm font-bold text-slate-300 hover:text-white transition-colors">+91 72999 33882</a>
                        <a href="tel:+917200953082" className="block text-sm font-bold text-slate-300 hover:text-white transition-colors">+91 72009 53082</a>
                    </div>
                 </div>
                 <div className="flex items-center gap-3 p-3 rounded-xl bg-white/5 hover:bg-white/10 transition-all duration-300 border border-transparent hover:border-teal-500/30 group/item">
                    <div className="p-2 bg-teal-500/10 rounded-lg text-teal-400 group-hover/item:text-white group-hover/item:bg-teal-500 transition-colors">
                        <MapPin size={18} />
                    </div>
                    <div>
                        <span className="block text-sm font-medium text-slate-300 group-hover/item:text-white">Valparai, Coimbatore</span>
                        <span className="block text-xs text-slate-500">Native: Dharapuram</span>
                    </div>
                 </div>
               </div>
            </div>
          </Card>

          {/* Quick Actions */}
          <div className="grid grid-cols-3 gap-3">
               <a href="https://wa.me/917299933882" target="_blank" rel="noopener noreferrer" className="bg-white p-3 rounded-xl border border-slate-100 shadow-sm hover:shadow-green-500/20 hover:border-green-200 transition-all text-center group flex flex-col items-center justify-center">
                   <MessageCircle size={22} className="mb-1 text-green-500 group-hover:scale-110 transition-transform" />
                   <span className="text-[10px] font-bold text-slate-700">WhatsApp</span>
               </a>
               <a href="mailto:prasathr3009@gmail.com" className="bg-white p-3 rounded-xl border border-slate-100 shadow-sm hover:shadow-red-500/20 hover:border-red-200 transition-all text-center group flex flex-col items-center justify-center">
                   <Mail size={22} className="mb-1 text-red-500 group-hover:scale-110 transition-transform" />
                   <span className="text-[10px] font-bold text-slate-700">Gmail</span>
               </a>
               <a href="https://www.linkedin.com/" target="_blank" rel="noopener noreferrer" className="bg-white p-3 rounded-xl border border-slate-100 shadow-sm hover:shadow-blue-500/20 hover:border-blue-200 transition-all text-center group flex flex-col items-center justify-center">
                   <Linkedin size={22} className="mb-1 text-blue-600 group-hover:scale-110 transition-transform" />
                   <span className="text-[10px] font-bold text-slate-700">LinkedIn</span>
               </a>
          </div>

          {/* Resume Download */}
           <div className="bg-slate-50 p-6 rounded-2xl border border-slate-200 text-center">
                <h4 className="font-bold text-slate-800 mb-2">Download Resume</h4>
                <p className="text-xs text-slate-500 mb-4">Get a detailed copy for your reference.</p>
                <div className="flex gap-2 justify-center">
                    <button onClick={() => window.print()} className="flex-1 bg-white border border-slate-200 text-slate-700 py-2 rounded-lg text-xs font-bold hover:bg-slate-100 transition-colors flex items-center justify-center gap-1">
                        <FileText size={14} /> PDF
                    </button>
                    <button onClick={() => window.print()} className="flex-1 bg-white border border-slate-200 text-slate-700 py-2 rounded-lg text-xs font-bold hover:bg-slate-100 transition-colors flex items-center justify-center gap-1">
                        <FileText size={14} /> Word
                    </button>
                </div>
           </div>
        </div>

        {/* RIGHT COLUMN: Detailed Bio & Form */}
        <div className="md:col-span-8 space-y-8">
            
            {/* Bio Data Table */}
            <Card delay={0.2} className="relative overflow-hidden bg-white hover:shadow-[0_20px_60px_-15px_rgba(20,184,166,0.15)]">
                <div className="flex items-center gap-3 mb-6 pb-4 border-b border-slate-100">
                    <div className="p-2 bg-teal-50 text-teal-600 rounded-lg">
                        <User size={24} /> 
                    </div>
                    <h3 className="text-2xl font-bold text-slate-800">Personal Details</h3>
                </div>

                <div className="grid sm:grid-cols-2 gap-y-6 gap-x-8">
                    <BioItem icon={Calendar} label="Date of Birth & Age" value="30-09-1982 (43 Years)" />
                    <BioItem icon={Ruler} label="Height & Weight" value="5'7 ft / 73 Kg" />
                    <BioItem icon={User} label="Gender" value="Male" />
                    <BioItem icon={Book} label="Religion" value="Christian (CSI)" />
                    <BioItem icon={Map} label="Native Place" value="Dharapuram" />
                    
                    <div className="sm:col-span-2">
                        <BioItem icon={Users} label="Family Details" subValue={
                            <div className="mt-3 grid sm:grid-cols-3 gap-3">
                                <div className="bg-blue-50 p-3 rounded-lg border border-blue-100 text-center hover:scale-105 transition-transform duration-300">
                                    <p className="text-xs text-slate-500 font-bold uppercase mb-1">Father</p>
                                    <p className="font-bold text-blue-700">S. Rajendran</p>
                                    <p className="text-xs text-blue-600">(Retd. Supervisor)</p>
                                </div>
                                <div className="bg-pink-50 p-3 rounded-lg border border-pink-100 text-center hover:scale-105 transition-transform duration-300">
                                    <p className="text-xs text-slate-500 font-bold uppercase mb-1">Mother</p>
                                    <p className="font-bold text-pink-600">R. Jayalakshmi</p>
                                </div>
                                <div className="bg-purple-50 p-3 rounded-lg border border-purple-100 text-center hover:scale-105 transition-transform duration-300">
                                    <p className="text-xs text-slate-500 font-bold uppercase mb-1">Siblings</p>
                                    <p className="font-bold text-purple-600">3 Younger Sisters</p>
                                    <p className="text-xs text-purple-500">(All Married)</p>
                                </div>
                            </div>
                        } />
                    </div>

                    <div className="sm:col-span-2">
                         <BioItem icon={Heart} label="Spiritual Info (Ministry)" subValue={
                             <div className="mt-2 bg-gradient-to-r from-teal-50 to-blue-50 p-4 rounded-xl border border-teal-100">
                                 <p className="font-bold text-teal-800 text-lg mb-1">City of Truth Ministries, Chennai</p>
                                 <p className="text-slate-700 flex items-center gap-2">
                                     <span className="w-2 h-2 rounded-full bg-teal-500 animate-pulse"></span>
                                     Involved as Evangelist (Part-time, 8 Years)
                                 </p>
                             </div>
                         } />
                    </div>
                </div>
            </Card>

            {/* Contact Form */}
            <Card delay={0.3} className="border-t-4 border-t-teal-500">
                <div className="mb-6">
                    <h3 className="text-xl font-bold text-slate-800 flex items-center gap-2">
                        <Mail size={20} className="text-teal-500" /> Send a Message
                    </h3>
                    <p className="text-slate-500 text-sm mt-1">Interested in my profile? Send an enquiry directly via email.</p>
                </div>

                <form onSubmit={handleSendEmail} className="space-y-4">
                    <div className="grid md:grid-cols-2 gap-4">
                        <div className="space-y-1">
                            <label className="text-xs font-bold text-slate-700 uppercase">Your Name</label>
                            <input 
                                type="text" 
                                required
                                value={formData.name}
                                onChange={(e) => setFormData({...formData, name: e.target.value})}
                                className="w-full px-4 py-2 bg-slate-50 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500/50 focus:bg-white transition-all"
                                placeholder="John Doe"
                            />
                        </div>
                        <div className="space-y-1">
                            <label className="text-xs font-bold text-slate-700 uppercase">Phone Number</label>
                            <input 
                                type="tel" 
                                required
                                value={formData.phone}
                                onChange={(e) => setFormData({...formData, phone: e.target.value})}
                                className="w-full px-4 py-2 bg-slate-50 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500/50 focus:bg-white transition-all"
                                placeholder="+91 98765 43210"
                            />
                        </div>
                    </div>
                    <div className="space-y-1">
                        <label className="text-xs font-bold text-slate-700 uppercase">Message</label>
                        <textarea 
                            rows={3}
                            required
                            value={formData.message}
                            onChange={(e) => setFormData({...formData, message: e.target.value})}
                            className="w-full px-4 py-2 bg-slate-50 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500/50 focus:bg-white transition-all resize-none"
                            placeholder="I am interested in your profile..."
                        ></textarea>
                    </div>
                    <button type="submit" className="w-full bg-slate-900 text-white font-bold py-3 rounded-xl hover:bg-teal-600 transition-colors shadow-lg shadow-slate-900/10 flex items-center justify-center gap-2 group">
                        Send Enquiry via Email <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                    </button>
                </form>
            </Card>

        </div>
      </div>
    </div>
  );
};

const BioItem: React.FC<{ icon: any, label: string, value?: string, subValue?: React.ReactNode }> = ({ icon: Icon, label, value, subValue }) => (
    <div className="flex items-start gap-3 group">
        <div className="mt-1 text-teal-500 group-hover:scale-110 transition-transform">
            <Icon size={18} />
        </div>
        <div>
            <h5 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-0.5">{label}</h5>
            {value && <p className="font-semibold text-slate-800">{value}</p>}
            {subValue}
        </div>
    </div>
);

export default Contact;