
import { Link } from 'react-router';
import NavBar from './NavBar';

const Home = () => {
    return (
        <div className="min-h-screen bg-gray-50">
            {/* Navbar */}
            <NavBar />

            {/* Hero Section */}
            <section className="bg-white pt-32 pb-20">
                <div className="max-w-6xl mx-auto px-6 text-center">
                    <h1 className="text-4xl md:text-5xl font-bold text-gray-900">
                        AI-Powered Tools for Professionals
                    </h1>
                    <p className="mt-4 text-gray-600 text-lg md:text-xl">
                        Analyze resumes, optimize your workflow, and boost productivity with AI.
                    </p>
                    <div className="mt-8 flex flex-col sm:flex-row justify-center gap-4">
                        <Link
                            to={'/resume-analyzer'}
                            className="bg-amber-800 hover:bg-amber-700 text-white font-semibold py-3 px-6 rounded-lg shadow-md transition duration-200"
                        >
                            Try Resume Analyzer
                        </Link>
                        <a
                            href="#features"
                            className="border border-amber-800 text-amber-800 font-semibold py-3 px-6 rounded-lg hover:bg-amber-100 transition duration-200"
                        >
                            Explore Features
                        </a>
                    </div>
                </div>
            </section>

            {/* Features Section */}
            <section id="features" className="max-w-6xl mx-auto px-6 py-20 grid md:grid-cols-3 gap-8">
                {/* Resume Analyzer */}
                <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-2xl transition-shadow duration-300">
                    <h2 className="text-xl font-bold text-amber-800">Resume Analyzer</h2>
                    <p className="mt-3 text-gray-700">
                        Paste your resume and get instant AI-powered feedback, including strengths, weaknesses, and improvement suggestions.
                    </p>
                    <Link
                        to={"/resume-analyzer"}
                        className="mt-4 inline-block bg-amber-800 hover:bg-amber-700 text-white font-semibold py-2 px-4 rounded-lg transition duration-200"
                    >
                        Try Now
                    </Link>
                </div>

                {/* Placeholder AI Product 1 */}
                <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-2xl transition-shadow duration-300">
                    <h2 className="text-xl font-bold text-amber-800">AI Cover Letter Writer</h2>
                    <p className="mt-3 text-gray-700">
                        Generate professional cover letters in seconds with AI suggestions tailored to your resume.
                    </p>
                    <a
                        href="#cover-letter"
                        className="mt-4 inline-block bg-amber-800 hover:bg-amber-700 text-white font-semibold py-2 px-4 rounded-lg transition duration-200"
                    >
                        Try Now
                    </a>
                </div>

                {/* Placeholder AI Product 2 */}
                <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-2xl transition-shadow duration-300">
                    <h2 className="text-xl font-bold text-amber-800">AI Skill Matcher</h2>
                    <p className="mt-3 text-gray-700">
                        Match your skills to job descriptions and get recommendations to improve your profile for specific roles.
                    </p>
                    <a
                        href="#skill-matcher"
                        className="mt-4 inline-block bg-amber-800 hover:bg-amber-700 text-white font-semibold py-2 px-4 rounded-lg transition duration-200"
                    >
                        Try Now
                    </a>
                </div>
            </section>

            {/* Call-to-Action Section */}
            <section className="bg-amber-800 py-20 mt-8 text-center text-white">
                <h2 className="text-3xl md:text-4xl font-bold">Boost Your Career with AI Tools</h2>
                <p className="mt-4 text-lg md:text-xl">Start optimizing your resume, cover letters, and skills today.</p>
                <a
                    href="#resume-analyzer"
                    className="mt-8 inline-block bg-white text-amber-800 font-semibold py-3 px-6 rounded-lg hover:bg-gray-100 transition duration-200"
                >
                    Get Started
                </a>
            </section>
        </div>
    );
};

export default Home;