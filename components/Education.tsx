import React from 'react';
import { BookOpen, GraduationCap, Award, Calendar, Star } from 'lucide-react';
import { SectionTitle, Card, RevealOnScroll } from './Shared';

const Education: React.FC = () => {
    return (
        <div className="max-w-4xl mx-auto py-8">
             <SectionTitle>Education & Qualifications</SectionTitle>
             
             <div className="space-y-12">
                 {/* MBA */}
                 <RevealOnScroll className="relative pl-8 border-l-2 border-teal-200 group">
                     <div className="absolute -left-[11px] top-0 bg-white border-4 border-teal-500 rounded-full w-6 h-6 group-hover:scale-125 transition-transform duration-300 shadow-lg shadow-teal-500/30"></div>
                     <Card delay={0.1} className="flex flex-col md:flex-row gap-6 items-center md:items-start group-hover:border-teal-300 transition-colors">
                         <div className="bg-teal-100 p-4 rounded-full text-teal-700 shrink-0 group-hover:rotate-12 transition-transform duration-500">
                             <GraduationCap size={40} />
                         </div>
                         <div className="flex-1 text-center md:text-left">
                             <h3 className="text-2xl font-bold text-slate-800">Master of Business Administration (HR)</h3>
                             <p className="text-lg text-teal-600 font-medium">Post Graduate Degree</p>
                             <div className="flex items-center justify-center md:justify-start gap-4 mt-3 text-slate-500 text-sm">
                                <span className="flex items-center gap-1"><Award size={14}/> Specialized in Human Resources</span>
                             </div>
                             <p className="mt-4 text-slate-600">
                                 Advanced studies in organizational behavior, labor laws, performance management, and strategic HR planning.
                             </p>
                         </div>
                     </Card>
                 </RevealOnScroll>

                 {/* Other Qualifications Placeholder - Assuming consistent history */}
                 <RevealOnScroll delay={0.2} className="relative pl-8 border-l-2 border-slate-200 group">
                     <div className="absolute -left-[11px] top-0 bg-white border-4 border-slate-300 rounded-full w-6 h-6 group-hover:border-blue-500 group-hover:scale-125 transition-all duration-300"></div>
                     <Card className="flex flex-col md:flex-row gap-6 items-center md:items-start opacity-90 hover:opacity-100 group-hover:border-blue-200 transition-colors">
                         <div className="bg-blue-100 p-4 rounded-full text-blue-700 shrink-0 group-hover:rotate-12 transition-transform duration-500">
                             <BookOpen size={40} />
                         </div>
                         <div className="flex-1 text-center md:text-left">
                             <h3 className="text-xl font-bold text-slate-800">Undergraduate Degree</h3>
                             <p className="text-lg text-blue-600 font-medium">Bachelor of Arts (History)</p>
                             <p className="mt-4 text-slate-600">
                                 Foundation in historical analysis, research, and social sciences.
                             </p>
                         </div>
                     </Card>
                 </RevealOnScroll>

                 {/* Certifications */}
                 <RevealOnScroll delay={0.3} className="relative pl-8 border-l-2 border-slate-200 group">
                     <div className="absolute -left-[11px] top-0 bg-white border-4 border-slate-300 rounded-full w-6 h-6 group-hover:border-amber-500 group-hover:scale-125 transition-all duration-300"></div>
                     <Card className="flex flex-col md:flex-row gap-6 items-center md:items-start opacity-90 hover:opacity-100 group-hover:border-amber-200 transition-colors">
                         <div className="bg-amber-100 p-4 rounded-full text-amber-700 shrink-0 group-hover:rotate-12 transition-transform duration-500">
                             <Star size={40} />
                         </div>
                         <div className="flex-1 text-center md:text-left">
                             <h3 className="text-xl font-bold text-slate-800">Professional Development</h3>
                             <p className="text-lg text-amber-600 font-medium">Certifications & Training</p>
                             <p className="mt-4 text-slate-600">
                                 Continuous learning in Industrial Relations, Labor Welfare, and Safety Management Systems.
                             </p>
                         </div>
                     </Card>
                 </RevealOnScroll>
             </div>
        </div>
    );
}

export default Education;