import Input from './Input.jsx';
import Report from './Report.jsx';
import NavBar from '../NavBar.jsx';
import { useState } from 'react';

const Layout = () => {
    const [report, setReport] = useState('');
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');

    return (
        <div className="min-h-screen bg-slate-50 font-sans selection:bg-amber-200 selection:text-amber-900">
            <NavBar />

            {/* Main Content Area */}
            <div className="flex flex-col lg:flex-row max-w-7xl mx-auto mt-24 gap-8 px-4 pb-20">
                
                {/* Input Section - Made Sticky so it stays in view while scrolling the report */}
                <div className="lg:w-5/12 w-full relative">
                    <div className="sticky top-28">
                        <Input 
                            setReport={setReport} 
                            loading={loading} 
                            setLoading={setLoading} 
                            setError={setError} 
                            error={error}
                        />
                    </div>
                </div>

                {/* Report Section */}
                <div className="lg:w-7/12 w-full">
                    <Report report={report} loading={loading} />
                </div>
            </div>
        </div>
    );
};

export default Layout;