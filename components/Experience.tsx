import React from 'react';
import { Briefcase, CheckCircle, Users, Settings, TrendingUp } from 'lucide-react';
import { SectionTitle, Card, RevealOnScroll } from './Shared';

const Experience: React.FC = () => {
  const jobs = [
    {
      role: "Operations Manager (Family Business)",
      company: "Self Employed",
      location: "Coimbatore",
      period: "2012 – Present",
      color: "blue",
      icon: Settings,
      details: [
        "Managing brothers' business operations and overall administration.",
        "Visiting company factories ensuring compliance is being followed.",
        "Monitoring health and safety systems implementation and providing training.",
        "Administration of Security guards, General Maintenance, Transportation, and Housekeeping."
      ]
    },
    {
      role: "Incharge - HR & Admin",
      company: "M/s Emperor Textiles P Ltd., Tirupur",
      location: "Tirupur",
      period: "July 2011 – June 2012",
      color: "teal",
      icon: Users,
      details: [
        "Reported to Chairman, MD, and Executive Director; managed 8 HR Executives.",
        "Monitoring end-to-end payroll process and controlling employee personnel records.",
        "Monitoring and updating government records like ESI, EPF, and IF records.",
        "Ensuring queries from each department are responded to in time."
      ]
    },
    {
      role: "Executive – HR & Industrial Relations",
      company: "VGB Clothings",
      location: "Tirupur",
      period: "August 2007 – June 2011",
      color: "indigo",
      icon: TrendingUp,
      details: [
        "Implementation of world standards like SA 8000:2008 and WRAP Standards.",
        "Handling and monitoring the entire process of recruitment and staffing.",
        "Periodically conducting meetings and taking important decisions for grievances."
      ]
    },
    {
      role: "Executive – Admin & Client Relations",
      company: "Sigma Computers",
      location: "Coimbatore",
      period: "August 2000 – April 2002",
      color: "slate",
      icon: Briefcase,
      details: [
        "Handled client management and general administration.",
        "Reported directly to the Managing Director."
      ]
    }
  ];

  return (
    <div className="max-w-6xl mx-auto py-8">
      <SectionTitle>Professional Journey</SectionTitle>
      <div className="grid md:grid-cols-2 gap-8 relative">
        {/* Decorative Line */}
        <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-slate-200 via-teal-200 to-slate-200 -translate-x-1/2"></div>
        
        {jobs.map((job, idx) => (
          <RevealOnScroll key={idx} delay={idx * 0.15} className={`flex flex-col h-full z-10 ${idx % 2 === 0 ? 'md:mr-8' : 'md:ml-8'}`}>
             <Card className="flex flex-col h-full hover:shadow-2xl hover:border-teal-300 transition-all duration-500">
                <div className="flex items-start justify-between mb-4">
                    <div className={`p-3 rounded-xl bg-${job.color}-50 text-${job.color}-600 shadow-sm border border-${job.color}-100 group-hover:scale-110 transition-transform duration-300`}>
                      <job.icon size={28} />
                    </div>
                    <span className="text-xs font-bold bg-slate-900 text-white px-3 py-1 rounded-full shadow-md whitespace-nowrap">
                      {job.period}
                    </span>
                </div>
                <h3 className="text-xl font-bold text-slate-800 mb-1">{job.role}</h3>
                <p className={`text-${job.color}-600 font-medium mb-4 flex items-center gap-2`}>
                  <span className={`w-2 h-2 rounded-full bg-${job.color}-400 animate-pulse`}></span> {job.company}
                </p>
                <ul className="space-y-3 mt-auto">
                  {job.details.map((detail, i) => (
                    <li key={i} className="flex items-start gap-3 text-slate-600 text-sm leading-relaxed group-hover:text-slate-800 transition-colors">
                      <CheckCircle size={16} className={`mt-1 text-${job.color}-500 flex-shrink-0 opacity-70 group-hover:opacity-100`} />
                      {detail}
                    </li>
                  ))}
                </ul>
             </Card>
          </RevealOnScroll>
        ))}
      </div>
    </div>
  );
};

export default Experience;