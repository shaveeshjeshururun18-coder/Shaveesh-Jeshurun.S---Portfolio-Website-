import React, { useState } from 'react';
import { SectionTitle, Card, RevealOnScroll } from './Shared';
import { TrendingUp, Award, BookOpen, Calculator, Globe, Star, FileCheck, PieChart, BarChart, Info, MousePointer2, RefreshCw, ChevronRight, Activity, Target } from 'lucide-react';

const Academics: React.FC = () => {
    const subjects = ['English', 'Maths', 'Science', 'Social', 'Tamil'];
    const colors = ['#3b82f6', '#06b6d4', '#14b8a6', '#6366f1', '#f59e0b'];
    
    // Updated data in the requested order: PT-1, PT-2, Half Yearly (Final marks), PT-3
    const examData = [
        { name: 'PT-1', marks: [37, 29, 38, 35, 29], total: 168, max: 200 },
        { name: 'PT-2', marks: [39, 37, 37, 38, 38], total: 189, max: 200 },
        { name: 'Half Yearly', marks: [72, 76, 72, 73, 64], total: 357, max: 400 },
        { name: 'PT-3', marks: [38, 35, 39, 38, 35], total: 185, max: 200 }
    ];

    const [activeTerm, setActiveTerm] = useState(3); // Default to latest (PT-3)
    const [selectedSubject, setSelectedSubject] = useState<number | null>(null); // Index of subject
    const [hoverPoint, setHoverPoint] = useState<{ term: number, subIndex: number | 'agg' } | null>(null);

    // Calculate percentages for aggregate and subjects across terms
    const getSubjectPercentage = (termIndex: number, subIndex: number) => {
        const data = examData[termIndex];
        const maxSub = data.max / 5;
        return (data.marks[subIndex] / maxSub) * 100;
    };

    const getAggregatePercentage = (termIndex: number) => {
        const data = examData[termIndex];
        return (data.total / data.max) * 100;
    };

    // Chart dimensions
    const height = 300;
    const width = 800;
    const padding = 60;
    const chartWidth = width - (padding * 2);
    const chartHeight = height - (padding * 2);

    const getX = (index: number) => padding + (index * (chartWidth / (examData.length - 1)));
    const getY = (percent: number) => height - padding - ((percent - 60) * (chartHeight / 40)); // Range 60% to 100%

    // SVG Line Chart Component
    const PerformanceChart = () => {
        return (
            <div className="w-full overflow-x-auto no-scrollbar py-6 -mx-4 px-4 md:mx-0 md:px-0">
                <div className="relative min-w-[500px] md:min-w-[700px]">
                    <svg viewBox={`0 0 ${width} ${height}`} className="w-full h-auto overflow-visible filter drop-shadow-sm">
                        {/* Y-Axis Grid Lines */}
                        {[60, 70, 80, 90, 100].map((v) => (
                            <g key={v}>
                                <line x1={padding} y1={getY(v)} x2={width - padding} y2={getY(v)} stroke="#e2e8f0" strokeWidth="1" strokeDasharray="6,4" />
                                <text x={padding - 15} y={getY(v) + 4} textAnchor="end" fontSize="12" className="fill-slate-400 font-bold">{v}%</text>
                            </g>
                        ))}

                        {/* Labels for terms */}
                        {examData.map((d, i) => (
                            <text key={i} x={getX(i)} y={height - padding + 25} textAnchor="middle" fontSize="11" className="fill-slate-500 font-black uppercase tracking-wider">{d.name}</text>
                        ))}

                        {/* Aggregate Line */}
                        {renderLine('agg', null, selectedSubject === null ? '#14b8a6' : '#cbd5e1', selectedSubject === null ? 5 : 2)}

                        {/* Selected Subject Line */}
                        {selectedSubject !== null && renderLine('sub', selectedSubject, colors[selectedSubject], 5)}

                        {/* Interactive Dots for Aggregate */}
                        {selectedSubject === null && examData.map((_, i) => renderPoint(i, 'agg', '#14b8a6'))}

                        {/* Interactive Dots for Selected Subject */}
                        {selectedSubject !== null && examData.map((_, i) => renderPoint(i, selectedSubject, colors[selectedSubject]))}
                    </svg>

                    {/* Enhanced Tooltip */}
                    {hoverPoint && (
                        <div 
                            className="absolute z-50 pointer-events-none bg-slate-900 text-white p-3 rounded-xl shadow-2xl border border-white/10 flex flex-col gap-1 min-w-[140px] animate-slideDown"
                            style={{ 
                                left: `${(getX(hoverPoint.term) / width) * 100}%`, 
                                top: `${(getY(hoverPoint.subIndex === 'agg' ? getAggregatePercentage(hoverPoint.term) : getSubjectPercentage(hoverPoint.term, hoverPoint.subIndex as number)) / height) * 100}%`,
                                transform: 'translate(-50%, -120%)'
                            }}
                        >
                            <div className="flex items-center justify-between gap-4 border-b border-white/10 pb-1.5 mb-1.5">
                                <span className="text-[10px] font-black uppercase tracking-widest text-teal-400">{examData[hoverPoint.term].name}</span>
                                <span className="text-xs font-bold">{hoverPoint.subIndex === 'agg' ? 'Aggregate' : subjects[hoverPoint.subIndex as number]}</span>
                            </div>
                            <div className="flex justify-between items-baseline">
                                <span className="text-lg font-black">{hoverPoint.subIndex === 'agg' ? getAggregatePercentage(hoverPoint.term).toFixed(1) : getSubjectPercentage(hoverPoint.term, hoverPoint.subIndex as number).toFixed(1)}%</span>
                                <span className="text-[10px] opacity-60">Score: {hoverPoint.subIndex === 'agg' ? `${examData[hoverPoint.term].total}/${examData[hoverPoint.term].max}` : `${examData[hoverPoint.term].marks[hoverPoint.subIndex as number]}/${examData[hoverPoint.term].max/5}`}</span>
                            </div>
                            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-full w-0 h-0 border-l-[8px] border-l-transparent border-r-[8px] border-r-transparent border-t-[8px] border-t-slate-900"></div>
                        </div>
                    )}
                </div>
            </div>
        );
    };

    const renderLine = (type: 'agg' | 'sub', subIndex: number | null, color: string, widthLine: number) => {
        const getVal = (i: number) => type === 'agg' ? getAggregatePercentage(i) : getSubjectPercentage(i, subIndex!);
        
        let d = `M ${getX(0)},${getY(getVal(0))}`;
        for (let i = 0; i < examData.length - 1; i++) {
            const x1 = getX(i);
            const y1 = getY(getVal(i));
            const x2 = getX(i + 1);
            const y2 = getY(getVal(i + 1));
            const cx1 = x1 + (x2 - x1) / 2;
            const cy1 = y1;
            const cx2 = x1 + (x2 - x1) / 2;
            const cy2 = y2;
            d += ` C ${cx1},${cy1} ${cx2},${cy2} ${x2},${y2}`;
        }

        return (
            <g>
                {type === 'sub' && (
                    <defs>
                        <linearGradient id="selectedGradient" x1="0" y1="0" x2="0" y2="1">
                            <stop offset="0%" stopColor={color} stopOpacity="0.2" />
                            <stop offset="100%" stopColor={color} stopOpacity="0" />
                        </linearGradient>
                    </defs>
                )}
                {type === 'sub' && (
                    <path 
                        d={`${d} L ${getX(examData.length - 1)},${height - padding} L ${getX(0)},${height - padding} Z`} 
                        fill="url(#selectedGradient)"
                        className="animate-pulse"
                    />
                )}
                <path 
                    d={d} fill="none" stroke={color} strokeWidth={widthLine} strokeLinecap="round" strokeLinejoin="round" 
                    className="transition-all duration-700"
                />
            </g>
        );
    };

    const renderPoint = (termIdx: number, subIdx: number | 'agg', color: string) => {
        const val = subIdx === 'agg' ? getAggregatePercentage(termIdx) : getSubjectPercentage(termIdx, subIdx);
        const isActive = hoverPoint?.term === termIdx && hoverPoint?.subIndex === subIdx;
        
        return (
            <g 
                key={`${termIdx}-${subIdx}`}
                className="cursor-pointer"
                onMouseEnter={() => setHoverPoint({ term: termIdx, subIndex: subIdx })}
                onTouchStart={() => setHoverPoint({ term: termIdx, subIndex: subIdx })}
                onMouseLeave={() => setHoverPoint(null)}
            >
                <circle cx={getX(termIdx)} cy={getY(val)} r={isActive ? 8 : 5} fill={color} className="transition-all" />
                <circle cx={getX(termIdx)} cy={getY(val)} r={isActive ? 14 : 10} fill={color} fillOpacity={isActive ? 0.3 : 0} className="transition-all" />
            </g>
        );
    };

    // Responsive SVG Donut Chart
    const SubjectDonut = ({ data }: { data: number[] }) => {
        const total = data.reduce((a, b) => a + b, 0);
        let cumulativePercent = 0;

        return (
            <div className="relative w-48 h-48 sm:w-56 sm:h-56 md:w-64 md:h-64 flex items-center justify-center mx-auto">
                <svg viewBox="0 0 100 100" className="w-full h-full transform -rotate-90">
                    {data.map((val, i) => {
                        const percent = (val / total) * 100;
                        const startX = Math.cos(2 * Math.PI * cumulativePercent);
                        const startY = Math.sin(2 * Math.PI * cumulativePercent);
                        cumulativePercent += percent / 100;
                        const endX = Math.cos(2 * Math.PI * cumulativePercent);
                        const endY = Math.sin(2 * Math.PI * cumulativePercent);
                        const largeArcFlag = percent > 50 ? 1 : 0;
                        
                        const pathData = [
                            `M ${50 + 40 * startX} ${50 + 40 * startY}`,
                            `A 40 40 0 ${largeArcFlag} 1 ${50 + 40 * endX} ${50 + 40 * endY}`
                        ].join(' ');

                        return (
                            <path 
                                key={i} d={pathData} fill="none" stroke={colors[i]} 
                                strokeWidth={selectedSubject === i ? 16 : 10} 
                                className={`transition-all duration-300 cursor-pointer hover:stroke-slate-900 ${selectedSubject !== null && selectedSubject !== i ? 'opacity-40' : 'opacity-100'}`}
                                onClick={() => setSelectedSubject(i)}
                            />
                        );
                    })}
                </svg>
                <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4 pointer-events-none">
                    <span className="text-2xl sm:text-3xl font-black text-slate-800 leading-none">
                        {selectedSubject === null 
                            ? getAggregatePercentage(activeTerm).toFixed(1) 
                            : getSubjectPercentage(activeTerm, selectedSubject).toFixed(1)}%
                    </span>
                    <span className="text-[9px] sm:text-[10px] text-slate-400 font-black uppercase tracking-widest mt-1">
                        {selectedSubject === null ? 'Aggregate' : subjects[selectedSubject]}
                    </span>
                </div>
            </div>
        );
    };

    return (
        <div className="max-w-6xl mx-auto py-4 md:py-8 space-y-6 md:space-y-12 pb-24 md:pb-32">
            {/* Header Area */}
            <div className="flex flex-col gap-4 md:gap-8 border-b border-slate-200 pb-6 md:pb-8">
                <div>
                    <SectionTitle>Academic Performance</SectionTitle>
                    <p className="text-slate-500 text-sm md:text-base -mt-4 md:-mt-6">Chronological tracking of progress from PT-1 through Half Yearly to PT-3.</p>
                </div>
                
                {/* Responsive Switcher */}
                <div className="flex flex-wrap gap-1.5 md:gap-2 bg-slate-100 p-1 rounded-xl md:rounded-2xl border border-slate-200 self-start shadow-inner">
                    {examData.map((d, i) => (
                        <button 
                            key={i} 
                            onClick={() => setActiveTerm(i)}
                            className={`px-3 py-1.5 md:px-5 md:py-2 rounded-lg md:rounded-xl text-[10px] md:text-xs font-bold transition-all ${activeTerm === i ? 'bg-white text-teal-600 shadow-sm border border-slate-200/50' : 'text-slate-500 hover:text-slate-800'}`}
                        >
                            {d.name}
                        </button>
                    ))}
                </div>
            </div>

            {/* Stats Overview Grid - Optimized for narrow mobile screens */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 md:gap-8">
                <StatCard icon={TrendingUp} label="Aggregate" value={`${getAggregatePercentage(activeTerm).toFixed(1)}%`} color="text-teal-600" bg="bg-teal-50" />
                <StatCard icon={Award} label="Score" value={`${examData[activeTerm].total}/${examData[activeTerm].max}`} color="text-blue-600" bg="bg-blue-50" />
                <StatCard icon={Activity} label="Grade" value={getAggregatePercentage(activeTerm) > 90 ? 'Exceptional' : 'Outstanding'} color="text-indigo-600" bg="bg-indigo-50" />
                <StatCard icon={Star} label="Best Area" value={subjects[examData[activeTerm].marks.indexOf(Math.max(...examData[activeTerm].marks))]} color="text-amber-600" bg="bg-amber-50" />
            </div>

            {/* Analysis Dashboard Section */}
            <div className="grid lg:grid-cols-3 gap-6 md:gap-8">
                {/* Table: Subject Breakdown */}
                <Card className="lg:col-span-2 overflow-hidden flex flex-col p-0">
                    <div className="p-4 md:p-8 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                        <div className="flex items-center gap-3">
                            <div className="p-2 md:p-2.5 bg-slate-900 text-white rounded-xl shadow-lg"><BarChart size={18} className="md:w-5 md:h-5" /></div>
                            <div>
                                <h3 className="text-lg md:text-xl font-bold text-slate-800 leading-tight">{examData[activeTerm].name} Detailed Results</h3>
                                <p className="text-[9px] md:text-[10px] text-slate-400 font-bold uppercase tracking-widest">Growth Trend Analysis</p>
                            </div>
                        </div>
                        {selectedSubject !== null && (
                            <button 
                                onClick={() => setSelectedSubject(null)}
                                className="flex items-center justify-center gap-2 text-[10px] font-black uppercase tracking-widest text-teal-600 hover:text-teal-700 bg-teal-50 px-3 py-2 rounded-lg border border-teal-100 transition-all active:scale-95"
                            >
                                <RefreshCw size={12} /> Reset View
                            </button>
                        )}
                    </div>

                    <div className="overflow-x-auto px-4 md:px-8 pb-6">
                        <table className="w-full text-left min-w-[300px]">
                            <thead>
                                <tr className="text-[9px] md:text-[10px] uppercase tracking-[0.15em] text-slate-400 border-b border-slate-100">
                                    <th className="pb-4 font-black">Subject</th>
                                    <th className="pb-4 font-black text-center">Marks</th>
                                    <th className="pb-4 font-black hidden sm:table-cell text-center">Performance</th>
                                    <th className="pb-4 font-black text-right pr-2">Growth</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-slate-50">
                                {subjects.map((sub, idx) => {
                                    const score = examData[activeTerm].marks[idx];
                                    const maxSub = examData[activeTerm].max / 5;
                                    const percent = (score / maxSub) * 100;
                                    const isSelected = selectedSubject === idx;
                                    
                                    return (
                                        <tr 
                                            key={sub} 
                                            className={`group cursor-pointer transition-all ${isSelected ? 'bg-slate-50' : 'hover:bg-slate-50/20'}`}
                                            onClick={() => setSelectedSubject(idx)}
                                        >
                                            <td className="py-4 md:py-5">
                                                <div className="flex items-center gap-2 md:gap-4">
                                                    <div 
                                                        className={`w-7 h-7 md:w-10 md:h-10 rounded-lg md:rounded-xl flex items-center justify-center transition-all ${isSelected ? 'bg-white shadow-md' : 'bg-slate-100 opacity-70'}`}
                                                        style={{ color: colors[idx] }}
                                                    >
                                                        {sub === 'Maths' ? <Calculator size={14} className="md:w-[18px] md:h-[18px]" /> : sub === 'Tamil' ? <Globe size={14} className="md:w-[18px] md:h-[18px]" /> : <BookOpen size={14} className="md:w-[18px] md:h-[18px]" />}
                                                    </div>
                                                    <div>
                                                        <span className={`font-bold text-[11px] md:text-sm block ${isSelected ? 'text-slate-900' : 'text-slate-600'}`}>{sub}</span>
                                                    </div>
                                                </div>
                                            </td>
                                            <td className={`py-4 md:py-5 text-center font-mono font-black text-[11px] md:text-sm ${isSelected ? 'text-teal-600' : 'text-slate-500'}`}>
                                                {score}<span className="text-[9px] opacity-30 ml-0.5 md:ml-1 font-sans">/{maxSub}</span>
                                            </td>
                                            <td className="py-4 md:py-5 px-4 hidden sm:table-cell">
                                                <div className="flex items-center gap-3">
                                                    <div className="flex-1 h-1.5 bg-slate-100 rounded-full overflow-hidden min-w-[60px]">
                                                        <div 
                                                            className="h-full rounded-full transition-all duration-1000 ease-out" 
                                                            style={{ width: `${percent}%`, backgroundColor: colors[idx] }}
                                                        ></div>
                                                    </div>
                                                    <span className="text-[10px] font-black text-slate-400 w-8">{percent.toFixed(0)}%</span>
                                                </div>
                                            </td>
                                            <td className="py-4 md:py-5 text-right pr-2">
                                                <div className={`inline-flex items-center justify-center w-6 h-6 md:w-8 md:h-8 rounded-full border ${isSelected ? 'bg-teal-500 text-white border-teal-500 shadow-md' : 'bg-slate-50 text-slate-300 border-slate-100'} transition-all`}>
                                                    <ChevronRight size={14} className={isSelected ? 'animate-pulse' : ''} />
                                                </div>
                                            </td>
                                        </tr>
                                    );
                                })}
                            </tbody>
                        </table>
                    </div>
                </Card>

                {/* Subject Share Distribution */}
                <Card className="flex flex-col items-center justify-between space-y-6 md:space-y-8 bg-gradient-to-br from-white to-slate-50 border-slate-200">
                    <div className="w-full flex items-center gap-3">
                        <div className="p-2 bg-slate-900 text-white rounded-xl shadow-lg"><PieChart size={18} /></div>
                        <div>
                            <h3 className="text-lg font-bold text-slate-800 leading-tight">Subject Share</h3>
                            <p className="text-[9px] text-slate-400 font-bold uppercase tracking-widest">Weighted score comparison</p>
                        </div>
                    </div>
                    
                    <SubjectDonut data={examData[activeTerm].marks} />

                    <div className="w-full grid grid-cols-1 gap-2">
                        {subjects.map((sub, i) => (
                            <button 
                                key={sub} 
                                onClick={() => setSelectedSubject(i)}
                                className={`flex items-center justify-between p-2 rounded-lg transition-all border ${selectedSubject === i ? 'bg-white shadow-sm border-slate-200 ring-1 ring-slate-100' : 'hover:bg-slate-100 border-transparent'}`}
                            >
                                <div className="flex items-center gap-3">
                                    <div className="w-2.5 h-2.5 rounded-full shadow-sm" style={{ backgroundColor: colors[i] }}></div>
                                    <span className={`text-[10px] md:text-[11px] font-bold ${selectedSubject === i ? 'text-slate-900' : 'text-slate-500'}`}>{sub}</span>
                                </div>
                                <span className="font-mono text-[10px] md:text-[11px] font-black text-slate-700">
                                    {getSubjectPercentage(activeTerm, i).toFixed(1)}%
                                </span>
                            </button>
                        ))}
                    </div>
                </Card>
            </div>

            {/* Performance Trend Comparison Chart */}
            <RevealOnScroll>
                <Card className="relative overflow-hidden group border-slate-200 p-4 md:p-8">
                    <div className="absolute top-0 right-0 w-48 h-48 md:w-80 md:h-80 bg-teal-500/5 rounded-full blur-[60px] md:blur-[100px] -translate-y-1/2 translate-x-1/2"></div>
                    
                    <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8 md:mb-12 relative z-10">
                        <div className="flex items-center gap-3 md:gap-4">
                            <div className="p-2.5 md:p-3 bg-teal-600 text-white rounded-xl md:rounded-2xl shadow-xl shadow-teal-500/20"><TrendingUp size={20} className="md:w-6 md:h-6" /></div>
                            <div>
                                <h3 className="text-lg md:text-2xl font-black text-slate-800 tracking-tight leading-tight">
                                    {selectedSubject === null ? 'Progression Trend' : `${subjects[selectedSubject]} Growth`}
                                </h3>
                                <p className="text-[10px] text-slate-400 font-bold uppercase tracking-widest mt-0.5 md:mt-1">Tracking performance across terms</p>
                            </div>
                        </div>
                        <div className="hidden sm:flex bg-slate-100/80 backdrop-blur-sm p-1.5 rounded-xl border border-slate-200">
                            <div className="flex items-center gap-2.5 px-3">
                                <Info size={12} className="text-teal-500" />
                                <span className="text-[10px] font-black uppercase tracking-widest text-slate-500">Interact for data</span>
                            </div>
                        </div>
                    </div>

                    <PerformanceChart />

                    <div className="mt-6 md:mt-8 p-6 md:p-8 bg-slate-900 rounded-2xl md:rounded-[2rem] text-white flex flex-col md:flex-row items-center justify-between gap-6 md:gap-10 relative overflow-hidden">
                        <div className="absolute top-0 left-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-10"></div>
                        
                        <div className="relative z-10 space-y-1 md:space-y-2 text-center md:text-left">
                            <h4 className="text-teal-400 font-black text-[9px] md:text-[10px] uppercase tracking-[0.2em] md:tracking-[0.3em]">Insights</h4>
                            <p className="text-sm md:text-xl font-bold md:font-black leading-snug md:leading-tight max-w-md">
                                {selectedSubject === null 
                                    ? `Overall consistency is high, with a peak aggregate of ${Math.max(...examData.map((_, i) => getAggregatePercentage(i))).toFixed(1)}%.` 
                                    : `In ${subjects[selectedSubject]}, your strongest performance reached ${Math.max(...examData.map((_, i) => getSubjectPercentage(i, selectedSubject))).toFixed(1)}%.`}
                            </p>
                        </div>
                        
                        <div className="relative z-10 flex flex-col sm:flex-row gap-3 w-full md:w-auto">
                            <button 
                                onClick={() => window.print()}
                                className="bg-white text-slate-900 px-8 py-3.5 rounded-xl md:rounded-2xl font-black uppercase tracking-widest text-[10px] md:text-xs hover:bg-teal-400 hover:text-white transition-all shadow-xl flex items-center justify-center gap-2 active:scale-95"
                            >
                                <FileCheck size={16} /> Get Report Card
                            </button>
                        </div>
                    </div>
                </Card>
            </RevealOnScroll>
        </div>
    );
};

const StatCard = ({ icon: Icon, label, value, color, bg }: any) => (
    <Card className={`group hover:-translate-y-1.5 md:hover:-translate-y-2 transition-all duration-500 flex flex-col justify-between p-3 sm:p-4 md:p-6 border-slate-200`}>
        <div className={`w-8 h-8 md:w-12 md:h-12 rounded-lg md:rounded-2xl ${bg} ${color} flex items-center justify-center mb-3 md:mb-6 shadow-sm transition-transform group-hover:rotate-12 group-hover:scale-105`}>
            <Icon size={16} className="md:w-6 md:h-6" />
        </div>
        <div className="overflow-hidden">
            <p className="text-[8px] sm:text-[9px] md:text-[10px] font-black text-slate-400 uppercase tracking-widest mb-1 md:mb-1.5 truncate">{label}</p>
            <p className="text-base sm:text-lg md:text-3xl font-black text-slate-800 tracking-tighter leading-tight break-all md:break-normal">
                {value}
            </p>
        </div>
    </Card>
);

export default Academics;