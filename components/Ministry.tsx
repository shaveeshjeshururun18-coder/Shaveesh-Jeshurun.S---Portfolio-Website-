import React from 'react';
import { Heart, Users, Globe, Cross } from 'lucide-react';
import { SectionTitle, Card } from './Shared';

const Ministry: React.FC = () => (
  <div className="max-w-6xl mx-auto py-8">
    <SectionTitle>Ministry & Community</SectionTitle>
    <div className="flex flex-col lg:flex-row gap-8">
      <div className="lg:w-1/2">
        <Card className="h-full bg-gradient-to-br from-blue-900 to-slate-900 text-white border-none shadow-2xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-white opacity-5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
          <div className="flex items-center gap-4 mb-8 relative z-10">
            <div className="p-4 bg-white/10 rounded-full backdrop-blur-sm">
              <Cross size={40} className="text-teal-400" />
            </div>
            <div>
              <h3 className="text-3xl font-bold">Evangelist</h3>
              <p className="text-teal-300 text-lg">City of Truth Ministries, Chennai</p>
            </div>
          </div>
          <div className="space-y-8 text-blue-50 relative z-10">
            <p className="leading-relaxed text-lg border-l-4 border-teal-500 pl-6">
              "Dedicated to discipleship and church ministry. Serving as a part-time Evangelist for over 8 years, spreading the message of hope and truth."
            </p>
            <div className="flex flex-wrap gap-3">
              {["Discipleship", "Community Service", "Counselling", "Mentorship"].map((tag, i) => (
                  <span key={i} className="px-4 py-2 bg-white/10 rounded-full text-sm font-semibold hover:bg-white/20 transition-colors cursor-default">
                      {tag}
                  </span>
              ))}
            </div>
          </div>
        </Card>
      </div>
      <div className="lg:w-1/2 grid gap-6">
        {[
            { icon: Heart, color: "text-red-500", title: "Community Impact", desc: "Active involvement in local community support and guidance." },
            { icon: Users, color: "text-blue-500", title: "Leadership", desc: "Leading small groups and mentoring young believers." },
            { icon: Globe, color: "text-green-500", title: "Outreach", desc: "Participating in outreach programs in and around Chennai." }
        ].map((item, idx) => (
            <Card key={idx} delay={0.2 + (idx * 0.1)} className="flex items-center gap-6 hover:translate-x-2">
                <div className={`p-4 bg-slate-50 rounded-full shadow-inner ${item.color}`}>
                    <item.icon size={32} />
                </div>
                <div>
                    <h4 className="font-bold text-lg text-slate-800">{item.title}</h4>
                    <p className="text-slate-600">{item.desc}</p>
                </div>
            </Card>
        ))}
      </div>
    </div>
  </div>
);

export default Ministry;