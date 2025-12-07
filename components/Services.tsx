import React from 'react';
import { Users, FileText, CheckCircle, Briefcase, GraduationCap, ShieldCheck } from 'lucide-react';
import { SectionTitle, Card, RevealOnScroll } from './Shared';

const Services: React.FC = () => {
  const services = [
    { 
        title: "HR Consulting", 
        icon: Users, 
        desc: "Building organizational structures, policy formulation, and performance management systems to optimize workforce efficiency.",
        color: "text-blue-600",
        bg: "bg-blue-50",
        hoverBg: "group-hover:bg-blue-600"
    },
    { 
        title: "Payroll Management", 
        icon: FileText, 
        desc: "End-to-end payroll processing, MIS reporting, and salary administration ensuring timely and accurate compensation.",
        color: "text-teal-600",
        bg: "bg-teal-50",
        hoverBg: "group-hover:bg-teal-600"
    },
    { 
        title: "Statutory Compliance", 
        icon: CheckCircle, 
        desc: "Expert handling of ESI, EPF, and other government statutory requirements to ensure full legal compliance.",
        color: "text-indigo-600",
        bg: "bg-indigo-50",
        hoverBg: "group-hover:bg-indigo-600"
    },
    {
        title: "Administration",
        icon: Briefcase,
        desc: "Managing general administration including security, housekeeping, transportation, and facility maintenance.",
        color: "text-rose-600",
        bg: "bg-rose-50",
        hoverBg: "group-hover:bg-rose-600"
    },
    {
        title: "Training & Development",
        icon: GraduationCap,
        desc: "Conducting training programs for health, safety, and soft skills to enhance employee capability and welfare.",
        color: "text-amber-600",
        bg: "bg-amber-50",
        hoverBg: "group-hover:bg-amber-600"
    },
    {
        title: "Industrial Relations",
        icon: ShieldCheck,
        desc: "Handling grievance redressal, disciplinary procedures, and maintaining harmonious labor-management relations.",
        color: "text-emerald-600",
        bg: "bg-emerald-50",
        hoverBg: "group-hover:bg-emerald-600"
    }
  ];

  return (
    <div className="max-w-6xl mx-auto py-8">
        <div className="text-center mb-10">
            <SectionTitle>Areas of Expertise</SectionTitle>
            <RevealOnScroll delay={0.2}>
              <p className="text-slate-500 max-w-2xl mx-auto -mt-6">Specialized services in Human Resource Management and Operations.</p>
            </RevealOnScroll>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, idx) => (
             <Card key={idx} delay={idx * 0.1} className="h-full border-t-4 border-t-transparent hover:border-t-teal-500 transition-all duration-500 flex flex-col justify-between hover:-translate-y-3 group">
                <div>
                  <div className={`w-16 h-16 rounded-2xl ${service.bg} ${service.color} ${service.hoverBg} group-hover:text-white flex items-center justify-center mb-6 shadow-sm group-hover:shadow-lg transition-all duration-500 group-hover:scale-110 group-hover:rotate-6`}>
                      <service.icon size={32} />
                  </div>
                  <h3 className="text-xl font-bold text-slate-800 mb-3 group-hover:text-teal-700 transition-colors duration-300">{service.title}</h3>
                  <p className="text-slate-600 leading-relaxed text-sm group-hover:text-slate-700 transition-colors duration-300">
                      {service.desc}
                  </p>
                </div>
                <div className="mt-8 flex items-center text-xs font-bold text-slate-400 group-hover:text-teal-600 transition-colors uppercase tracking-wider opacity-60 group-hover:opacity-100">
                    Learn more <span className="ml-2 group-hover:translate-x-2 transition-transform duration-300">→</span>
                </div>
             </Card>
          ))}
        </div>
      </div>
  );
};

export default Services;