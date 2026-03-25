
const NavBar = () => {
    return (
        <div className="w-full bg-white shadow-md fixed top-0 z-50">
            <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">

                {/* Logo / Brand */}
                <a href="/" className="text-2xl font-bold text-amber-800 hover:text-amber-700 transition-colors">
                    SaaS AI
                </a>

                {/* Menu Links */}
                <ul className="hidden md:flex space-x-6 items-center text-gray-700 font-medium">
                    <li>
                        <a href="/" className="hover:text-amber-800 transition-colors">
                            Home
                        </a>
                    </li>
                    <li>
                        <a href="#features" className="hover:text-amber-800 transition-colors">
                            Products
                        </a>
                    </li>
                    <li>
                        <a href="#pricing" className="hover:text-amber-800 transition-colors">
                            Pricing
                        </a>
                    </li>
                    <li>
                        <a href="#about" className="hover:text-amber-800 transition-colors">
                            About
                        </a>
                    </li>
                    <li>
                        <a href="#contact" className="hover:text-amber-800 transition-colors">
                            Contact
                        </a>
                    </li>
                </ul>

                {/* Call-to-Action Button */}
                <div className="hidden md:block">
                    <a
                        href="#analyze"
                        className="bg-amber-800 hover:bg-amber-700 text-white font-semibold py-2 px-4 rounded-lg shadow-md transition duration-200"
                    >
                        Join Now
                    </a>
                </div>

                {/* Mobile Menu (optional toggle) */}
                <div className="md:hidden">
                    <button className="text-gray-700 focus:outline-none">
                        <svg
                            className="w-6 h-6"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                        </svg>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default NavBar;