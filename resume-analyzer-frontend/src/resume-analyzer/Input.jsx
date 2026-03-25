import Title from "../Title";
import { Loader2, AlertCircle } from 'lucide-react';

const Input = ({ setReport, loading, setLoading, setError, error }) => {
    
    const handleResumeText = async (e) => {
        e.preventDefault();
        const resumeText = e.target.resume.value.trim();

        if (!resumeText) {
            setError("Please paste your resume text before analyzing.");
            return;
        }

        setError('');
        setLoading(true);
        setReport(''); // Clear previous report

        try {
            const response = await fetch('http://localhost:5000/api/resume/analyze', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ resumeText })
            });

            const data = await response.json();
            
            if (!response.ok) throw new Error(data.error || "Failed to analyze resume");
            
            setReport(data.report);
        } catch (err) {
            setError(err.message);
        } finally {
            setLoading(false);
        }
    }

    return (
        <div className="p-6 md:p-8 bg-white shadow-[0_8px_30px_rgb(0,0,0,0.04)] rounded-3xl border border-slate-100 transition-all hover:shadow-[0_8px_30px_rgb(0,0,0,0.08)]">
            
            <Title text1="Analyze Your" text2="Resume" />
            <p className="mt-2 text-slate-500 text-sm text-center">
                Paste your resume text below to get actionable, AI-powered insights.
            </p>

            <form onSubmit={handleResumeText} className="mt-8 flex flex-col gap-5">
                <div className="relative group">
                    <textarea
                        className="w-full border border-slate-200 rounded-2xl p-5 resize-y focus:outline-none focus:ring-4 focus:ring-amber-500/20 focus:border-amber-500 bg-slate-50 focus:bg-white transition-all text-slate-700 placeholder-slate-400 text-sm md:text-base custom-scrollbar"
                        name="resume"
                        id="resume"
                        rows={14}
                        minLength={20}
                        placeholder="Paste your resume text here (e.g., Experience, Education, Skills)..."
                        disabled={loading}
                    />
                </div>

                {error && (
                    <div className="flex items-center gap-2 text-rose-600 bg-rose-50 p-3 rounded-lg text-sm font-medium animate-in fade-in slide-in-from-top-2">
                        <AlertCircle size={18} />
                        <p>{error}</p>
                    </div>
                )}

                <button
                    className="relative w-full overflow-hidden bg-slate-900 hover:bg-slate-800 disabled:bg-slate-400 text-white font-semibold py-4 rounded-xl shadow-lg hover:shadow-xl hover:-translate-y-0.5 transition-all duration-300 flex items-center justify-center gap-2"
                    type="submit"
                    disabled={loading}
                >
                    {loading ? (
                        <>
                            <Loader2 className="w-5 h-5 animate-spin" />
                            Analyzing with AI...
                        </>
                    ) : (
                        "Generate Analysis"
                    )}
                </button>
            </form>
        </div>
    );
};

export default Input;