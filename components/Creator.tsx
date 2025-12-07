import React from 'react';
import { Code, Cpu, Globe, Mail, Phone, MapPin, User, Award, Star, MessageSquare } from 'lucide-react';
import { SectionTitle, Card, RevealOnScroll } from './Shared';

const Creator: React.FC = () => {
  return (
    <div className="max-w-5xl mx-auto py-12">
       {/* Header Section */}
       <div className="text-center mb-12">
           <div className="inline-flex p-4 rounded-full bg-slate-900 text-teal-400 mb-6 shadow-2xl animate-float">
               <Code size={40} />
           </div>
           <SectionTitle>About the Developer</SectionTitle>
           <h2 className="text-4xl font-bold text-slate-800 mt-4 mb-2">S. Shaveesh Jeshurun</h2>
           <p className="text-xl text-teal-600 font-medium mb-6">Aspiring Web Developer & Designer</p>
           
           <div className="flex flex-wrap justify-center gap-4 text-sm text-slate-600">
               <span className="flex items-center gap-2 px-4 py-2 bg-white rounded-full shadow-sm border border-slate-100"><MapPin size={16} className="text-teal-500"/> Chennai, Tamil Nadu</span>
               <a href="mailto:shaveesjeshururu18@gmail.com" className="flex items-center gap-2 px-4 py-2 bg-white rounded-full shadow-sm border border-slate-100 hover:text-teal-600 transition-colors hover:border-teal-200"><Mail size={16} className="text-teal-500"/> shaveesjeshururu18@gmail.com</a>
               <a href="tel:+919841723628" className="flex items-center gap-2 px-4 py-2 bg-white rounded-full shadow-sm border border-slate-100 hover:text-teal-600 transition-colors hover:border-teal-200"><Phone size={16} className="text-teal-500"/> +91 98417 23628</a>
           </div>
       </div>

       <div className="space-y-8">
           {/* Career Objective & Profile Summary */}
           <RevealOnScroll>
                <Card className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white border-none relative overflow-hidden group">
                     <div className="absolute top-0 right-0 w-64 h-64 bg-teal-500/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 group-hover:bg-teal-500/20 transition-all duration-700"></div>
                     <h3 className="text-2xl font-bold mb-4 flex items-center gap-2"><User className="text-teal-400"/> Profile Summary</h3>
                     <p className="text-slate-300 leading-relaxed mb-6">
                        Highly motivated and creative student with hands-on experience in website development, video editing, poster designing, and technical presentations. Demonstrates leadership and teamwork through multiple years as class leader. Passionate about technology, AI, coding, and creating innovative digital solutions. Quick learner, problem solver, and tech enthusiast.
                     </p>
                     <div className="bg-white/5 p-4 rounded-xl border border-white/10 backdrop-blur-sm">
                        <h4 className="text-teal-400 font-bold mb-2 text-sm uppercase tracking-wider">Career Objective</h4>
                        <p className="text-slate-300 text-sm">To grow as a professional Web Developer and Designer, contributing to innovative technology-driven projects and building impactful digital solutions.</p>
                     </div>
                </Card>
           </RevealOnScroll>

           {/* Skills Grid */}
           <div className="grid md:grid-cols-2 gap-6">
               <RevealOnScroll delay={0.1}>
                   <Card className="h-full hover:shadow-blue-500/10 hover:border-blue-200">
                       <h3 className="text-xl font-bold text-slate-800 mb-6 flex items-center gap-2"><Cpu className="text-blue-500"/> Technical Skills</h3>
                       <div className="space-y-5">
                           <div>
                               <h4 className="font-semibold text-slate-700 text-sm mb-2 flex items-center gap-2">
                                   <div className="w-1.5 h-1.5 rounded-full bg-blue-500"></div> Programming & Web
                               </h4>
                               <div className="flex flex-wrap gap-2">
                                   {['C', 'C++', 'HTML', 'CSS', 'JavaScript', 'React (Learning)'].map(skill => (
                                       <span key={skill} className="px-3 py-1 bg-blue-50 text-blue-700 rounded-lg text-xs font-bold hover:bg-blue-100 transition-colors cursor-default">{skill}</span>
                                   ))}
                               </div>
                           </div>
                           <div>
                               <h4 className="font-semibold text-slate-700 text-sm mb-2 flex items-center gap-2">
                                   <div className="w-1.5 h-1.5 rounded-full bg-purple-500"></div> Design & Multimedia
                               </h4>
                               <div className="flex flex-wrap gap-2">
                                   {['Video Editing', 'Poster Designing', 'PPT Creation', 'UI Design'].map(skill => (
                                       <span key={skill} className="px-3 py-1 bg-purple-50 text-purple-700 rounded-lg text-xs font-bold hover:bg-purple-100 transition-colors cursor-default">{skill}</span>
                                   ))}
                               </div>
                           </div>
                           <div>
                               <h4 className="font-semibold text-slate-700 text-sm mb-2 flex items-center gap-2">
                                   <div className="w-1.5 h-1.5 rounded-full bg-teal-500"></div> Electronics & AI
                               </h4>
                               <div className="flex flex-wrap gap-2">
                                   {['Arduino Basics', 'IoT', 'Uptor AI Workshop'].map(skill => (
                                       <span key={skill} className="px-3 py-1 bg-teal-50 text-teal-700 rounded-lg text-xs font-bold hover:bg-teal-100 transition-colors cursor-default">{skill}</span>
                                   ))}
                               </div>
                           </div>
                       </div>
                   </Card>
               </RevealOnScroll>

               <RevealOnScroll delay={0.2}>
                    <Card className="h-full hover:shadow-amber-500/10 hover:border-amber-200">
                        <h3 className="text-xl font-bold text-slate-800 mb-6 flex items-center gap-2"><Award className="text-amber-500"/> Education & Achievements</h3>
                        
                        <div className="mb-6 pb-4 border-b border-slate-100">
                            <h4 className="font-bold text-slate-800 text-lg">Velammal Vidhyashram, Surapet</h4>
                            <p className="text-amber-600 font-medium text-sm">Class 8 – Present</p>
                            <p className="text-slate-600 text-sm mt-2">Consistently active in school competitions, projects, and technology-related assignments.</p>
                        </div>

                        <div className="space-y-4">
                            <div className="flex items-start gap-3 group">
                                <div className="p-1.5 bg-amber-100 text-amber-600 rounded-full mt-0.5 group-hover:scale-110 transition-transform"><Star size={14}/></div>
                                <p className="text-sm text-slate-700"><strong>Certified Junior Coder</strong> – CuriousJr</p>
                            </div>
                            <div className="flex items-start gap-3 group">
                                <div className="p-1.5 bg-amber-100 text-amber-600 rounded-full mt-0.5 group-hover:scale-110 transition-transform"><Star size={14}/></div>
                                <p className="text-sm text-slate-700"><strong>Class Leader</strong> for 5 consecutive years (4th - 8th Grade)</p>
                            </div>
                            <div className="flex items-start gap-3 group">
                                <div className="p-1.5 bg-amber-100 text-amber-600 rounded-full mt-0.5 group-hover:scale-110 transition-transform"><Star size={14}/></div>
                                <p className="text-sm text-slate-700">Completion of <strong>Uptor AI Workshop</strong></p>
                            </div>
                        </div>
                    </Card>
               </RevealOnScroll>
           </div>

           {/* Projects */}
           <RevealOnScroll delay={0.3}>
               <Card className="hover:shadow-indigo-500/10 hover:border-indigo-200">
                   <h3 className="text-xl font-bold text-slate-800 mb-6 flex items-center gap-2"><Globe className="text-indigo-500"/> Projects & Experience</h3>
                   <div className="grid md:grid-cols-2 gap-6">
                       <div className="bg-slate-50 p-5 rounded-xl border border-slate-100 hover:bg-white hover:shadow-md transition-all duration-300">
                           <h4 className="font-bold text-slate-800 mb-3 border-l-4 border-indigo-500 pl-3">Web Development</h4>
                           <ul className="space-y-2 text-sm text-slate-600">
                               <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 bg-indigo-400 rounded-full"></span> <span>Developed & Managed <span className="font-medium text-indigo-600">cotministries.unaux.com</span></span></li>
                               <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 bg-indigo-400 rounded-full"></span> <span>Developed & Managed <span className="font-medium text-indigo-600">good2go.unaux.com</span></span></li>
                               <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 bg-indigo-400 rounded-full"></span> <span>Responsive Design & Content Management</span></li>
                           </ul>
                       </div>
                       <div className="bg-slate-50 p-5 rounded-xl border border-slate-100 hover:bg-white hover:shadow-md transition-all duration-300">
                           <h4 className="font-bold text-slate-800 mb-3 border-l-4 border-teal-500 pl-3">School & Special Projects</h4>
                           <ul className="space-y-2 text-sm text-slate-600">
                               <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 bg-teal-400 rounded-full"></span> <span>Interactive PPTs with animations & research</span></li>
                               <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 bg-teal-400 rounded-full"></span> <span>Bible-related digital materials for family ministry</span></li>
                               <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 bg-teal-400 rounded-full"></span> <span>Posters & Presentations for City of Truth Ministries</span></li>
                           </ul>
                       </div>
                   </div>
               </Card>
           </RevealOnScroll>

            {/* Testimonials */}
           <RevealOnScroll delay={0.4}>
                <div className="grid md:grid-cols-3 gap-6">
                    <Card className="bg-teal-50 border-teal-100 h-full flex flex-col justify-between hover:scale-105 transition-transform duration-300">
                        <div>
                            <MessageSquare size={24} className="text-teal-400 mb-3" />
                            <p className="text-sm text-slate-600 italic mb-4 leading-relaxed">"Shaveesh is a highly responsible and creative student. He actively participates in class projects and demonstrates excellent leadership skills."</p>
                        </div>
                        <div>
                            <p className="text-xs font-bold text-slate-800 uppercase tracking-wide">Amrita Jones</p>
                            <p className="text-xs text-slate-500 font-medium">Class Teacher</p>
                        </div>
                    </Card>
                    <Card className="bg-blue-50 border-blue-100 h-full flex flex-col justify-between hover:scale-105 transition-transform duration-300">
                        <div>
                            <MessageSquare size={24} className="text-blue-400 mb-3" />
                            <p className="text-sm text-slate-600 italic mb-4 leading-relaxed">"Shaveesh has exceptional skills in web designing and programming. He learns new technologies quickly and applies them creatively."</p>
                        </div>
                        <div>
                            <p className="text-xs font-bold text-slate-800 uppercase tracking-wide">Mr. Prasad</p>
                            <p className="text-xs text-slate-500 font-medium">Uncle / Mentor</p>
                        </div>
                    </Card>
                    <Card className="bg-purple-50 border-purple-100 h-full flex flex-col justify-between hover:scale-105 transition-transform duration-300">
                        <div>
                            <MessageSquare size={24} className="text-purple-400 mb-3" />
                            <p className="text-sm text-slate-600 italic mb-4 leading-relaxed">"We are proud of Shaveesh’s dedication and passion for learning. He is disciplined, hardworking, and always eager to explore new ideas."</p>
                        </div>
                        <div>
                            <p className="text-xs font-bold text-slate-800 uppercase tracking-wide">Parents</p>
                            <p className="text-xs text-slate-500 font-medium">M. Santharaj Lasares & S. Sripriya</p>
                        </div>
                    </Card>
                </div>
           </RevealOnScroll>

           {/* Personal Info Footer */}
           <RevealOnScroll delay={0.5}>
               <div className="bg-white/50 backdrop-blur-sm border-t border-slate-200 pt-8 mt-8 grid sm:grid-cols-2 md:grid-cols-4 gap-6 text-sm text-slate-600 rounded-2xl p-6">
                   <div>
                       <h5 className="font-bold text-slate-800 mb-2 text-xs uppercase tracking-wider">Languages</h5>
                       <p>English, Tamil, Hindi, Hebrew (Basic)</p>
                   </div>
                   <div>
                       <h5 className="font-bold text-slate-800 mb-2 text-xs uppercase tracking-wider">Personal</h5>
                       <p>DOB: 18 Nov 2011 (Age: 14)</p>
                       <p>Blood Group: O+</p>
                   </div>
                   <div>
                       <h5 className="font-bold text-slate-800 mb-2 text-xs uppercase tracking-wider">Hobbies</h5>
                       <p>Coin Collecting, Coding, AI Learning, Electronics</p>
                   </div>
                   <div>
                       <h5 className="font-bold text-slate-800 mb-2 text-xs uppercase tracking-wider">Strengths</h5>
                       <p>Creative Thinker, Disciplined, Team Player, Quick Learner</p>
                   </div>
               </div>
           </RevealOnScroll>
       </div>
    </div>
  );
};

export default Creator;