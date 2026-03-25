import ReactMarkdown from 'react-markdown';
import Title from '../Title';
import { useState } from 'react';
import {
    CheckCircle2, AlertTriangle, Wrench,
    FileSearch, TrendingUp, Award, Zap, Copy, Check
} from 'lucide-react';

const Report = ({ report, loading }) => {
    const [copied, setCopied] = useState(false);

    const extractSection = (sectionName) => {
        if (!report) return null;
        const regex = new RegExp(`(?:(?:\\*\\*|###)\\s*\\d*\\.?\\s*)?${sectionName}(?:s)?(?:\\*\\*|:)?\\s*([\\s\\S]*?)(?=\\n(?:(?:\\*\\*|###)\\s*\\d*\\.?\\s*)?[A-Z][a-z]+|\\n*$|---)`, 'i');
        const match = report.match(regex);
        return match && match[1] ? match[1].trim() : null;
    };

    const handleCopy = () => {
        if (improvements) {
            navigator.clipboard.writeText(improvements);
            setCopied(true);
            setTimeout(() => setCopied(false), 2000);
        }
    };

    const scoreText = report ? report.match(/(\d+(?:\.\d+)?)\s*\/\s*10/) : null;
    const score = scoreText ? parseFloat(scoreText[1]) : 0;

    const strengths = extractSection("Strength");
    const weaknesses = extractSection("Weakness");
    const missingSkills = extractSection("Missing Skill");
    const atsMatch = extractSection("ATS Keyword");
    const improvements = extractSection("Suggested Improvement");

    const scrollbarClasses = "overflow-y-auto max-h-[250px] pr-3 [&::-webkit-scrollbar]:w-1.5 [&::-webkit-scrollbar-track]:bg-transparent [&::-webkit-scrollbar-thumb]:bg-black/10 hover:[&::-webkit-scrollbar-thumb]:bg-black/20 [&::-webkit-scrollbar-thumb]:rounded-full transition-colors";

    return (
        <div className="w-full p-6 md:p-10 bg-white shadow-[0_8px_30px_rgb(0,0,0,0.04)] rounded-3xl border border-slate-100 min-h-[600px] flex flex-col">

            <div className="flex flex-col items-center mb-8">
                <Title text1="Analysis" text2="Results" />
                <div className="mt-3 flex items-center gap-1.5 px-3 py-1 bg-amber-50 text-amber-700 rounded-full text-xs font-bold uppercase tracking-wider border border-amber-200">
                    <Zap size={14} className="fill-amber-500" /> Powered by Gemini
                </div>
            </div>

            <div className="flex-1 flex flex-col">
                {loading ? (
                    /* Skeleton Loader - Displays while AI is thinking */
                    <div className="flex-1 w-full space-y-6 animate-pulse mt-4">
                        <div className="h-28 bg-slate-100 rounded-2xl w-full"></div>
                        <div className="grid grid-cols-1 xl:grid-cols-2 gap-6">
                            <div className="h-48 bg-slate-100 rounded-2xl w-full"></div>
                            <div className="h-48 bg-slate-100 rounded-2xl w-full"></div>
                        </div>
                        <div className="h-64 bg-slate-100 rounded-2xl w-full"></div>
                    </div>
                ) : !report ? (
                    /* Empty State */
                    <div className="flex-1 flex flex-col items-center justify-center py-20 bg-slate-50/50 rounded-3xl border-2 border-dashed border-slate-200">
                        <div className="bg-white p-4 rounded-full shadow-sm mb-4">
                            <FileSearch className="text-amber-500 w-10 h-10" />
                        </div>
                        <p className="text-xl font-bold text-slate-700">Awaiting Resume</p>
                        <p className="text-sm text-slate-500 mt-2 max-w-xs text-center">
                            Your detailed breakdown, score, and action plan will appear here.
                        </p>
                    </div>
                ) : (
                    /* Report Data */
                    <div className="grid grid-cols-1 xl:grid-cols-2 gap-6 animate-in fade-in duration-500">

                        {/* 1. Score Card */}
                        <div className="xl:col-span-2 flex items-center justify-between p-6 md:p-8 bg-gradient-to-r from-amber-50 via-orange-50/30 to-amber-50 rounded-2xl border border-amber-100 shadow-sm relative overflow-hidden group">
                            <div className="absolute -right-6 -top-6 text-amber-500/10 w-40 h-40 group-hover:scale-110 transition-transform duration-700">
                                <Award className="w-full h-full" />
                            </div>
                            <div className="z-10">
                                <h2 className="text-lg md:text-xl font-bold text-amber-900 flex items-center gap-2">
                                    <Award className="w-6 h-6 text-amber-600" /> Overall Score
                                </h2>
                                <p className="text-amber-700/80 text-sm mt-1">Industry standard evaluation</p>
                            </div>
                            <div className="z-10 flex items-baseline gap-1 bg-white/80 backdrop-blur-sm px-6 py-3 rounded-2xl shadow-sm border border-amber-100/50">
                                <span className={`text-4xl md:text-5xl font-black ${score >= 7 ? 'text-emerald-600' : score >= 5 ? 'text-amber-600' : 'text-rose-600'}`}>
                                    {score || "N/A"}
                                </span>
                                <span className="text-xl font-bold text-slate-400">/ 10</span>
                            </div>
                        </div>

                        {/* 2. Strengths Card */}
                        {strengths && (
                            <div className="p-6 bg-emerald-50/50 rounded-2xl border border-emerald-100 shadow-sm hover:shadow-md transition-shadow">
                                <h2 className="text-lg font-bold text-emerald-900 flex items-center gap-2 mb-4">
                                    <CheckCircle2 className="w-5 h-5 text-emerald-600" /> Core Strengths
                                </h2>
                                <div className={`prose prose-sm prose-emerald max-w-none text-emerald-900/80 ${scrollbarClasses}`}>
                                    <ReactMarkdown>{strengths}</ReactMarkdown>
                                </div>
                            </div>
                        )}

                        {/* 3. Weaknesses Card */}
                        {weaknesses && (
                            <div className="p-6 bg-rose-50/50 rounded-2xl border border-rose-100 shadow-sm hover:shadow-md transition-shadow">
                                <h2 className="text-lg font-bold text-rose-900 flex items-center gap-2 mb-4">
                                    <AlertTriangle className="w-5 h-5 text-rose-600" /> Areas to Polish
                                </h2>
                                <div className={`prose prose-sm prose-rose max-w-none text-rose-900/80 ${scrollbarClasses}`}>
                                    <ReactMarkdown>{weaknesses}</ReactMarkdown>
                                </div>
                            </div>
                        )}

                        {/* 4. Missing Skills */}
                        {missingSkills && (
                            <div className="p-6 bg-violet-50/50 rounded-2xl border border-violet-100 shadow-sm hover:shadow-md transition-shadow">
                                <h2 className="text-lg font-bold text-violet-900 flex items-center gap-2 mb-4">
                                    <Wrench className="w-5 h-5 text-violet-600" /> Missing Skills
                                </h2>
                                <div className={`prose prose-sm prose-violet max-w-none text-violet-900/80 ${scrollbarClasses}`}>
                                    <ReactMarkdown>{missingSkills}</ReactMarkdown>
                                </div>
                            </div>
                        )}

                        {/* 5. ATS */}
                        {atsMatch && (
                            <div className="p-6 bg-blue-50/50 rounded-2xl border border-blue-100 shadow-sm hover:shadow-md transition-shadow">
                                <h2 className="text-lg font-bold text-blue-900 flex items-center gap-2 mb-4">
                                    <FileSearch className="w-5 h-5 text-blue-600" /> ATS Keywords
                                </h2>
                                <div className={`prose prose-sm prose-blue max-w-none text-blue-900/80 ${scrollbarClasses}`}>
                                    <ReactMarkdown>{atsMatch}</ReactMarkdown>
                                </div>
                            </div>
                        )}

                        {/* 6. Action Plan */}
                        {improvements && (
                            <div className="xl:col-span-2 p-6 md:p-8 bg-slate-50/80 rounded-2xl border border-slate-200 shadow-sm hover:shadow-md transition-shadow relative">
                                <div className="flex items-center justify-between mb-5">
                                    <h2 className="text-xl font-bold text-slate-900 flex items-center gap-2">
                                        <TrendingUp className="w-6 h-6 text-slate-700" /> Action Plan
                                    </h2>
                                    <button
                                        onClick={handleCopy}
                                        className="p-2 bg-white border border-slate-200 rounded-lg hover:bg-slate-100 transition-colors text-slate-600 flex items-center gap-2 text-sm font-medium"
                                        title="Copy Action Plan"
                                    >
                                        {copied ? <Check className="w-4 h-4 text-emerald-600" /> : <Copy className="w-4 h-4" />}
                                        <span className="hidden sm:inline">{copied ? "Copied!" : "Copy Plan"}</span>
                                    </button>
                                </div>
                                <div className={`prose prose-sm md:prose-base prose-slate max-w-none text-slate-700 max-h-[350px] overflow-y-auto pr-4 [&::-webkit-scrollbar]:w-2 [&::-webkit-scrollbar-track]:bg-transparent [&::-webkit-scrollbar-thumb]:bg-slate-300 hover:[&::-webkit-scrollbar-thumb]:bg-slate-400 [&::-webkit-scrollbar-thumb]:rounded-full transition-colors`}>
                                    <ReactMarkdown>{improvements}</ReactMarkdown>
                                </div>
                            </div>
                        )}
                    </div>
                )}
            </div>
        </div>
    );
};

export default Report;