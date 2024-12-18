import Logo from "../assets/untitled-logo.png";
import Dashboard from "../assets/dashboard-container.png";

const HeroSection = () => {
    return (
        <div className="w-full">
            {/* Top Section */}
            <header className="w-full px-4 md:px-8 py-6 flex justify-between items-center">
                {/* Logo and Title */}
                <div className="flex items-center space-x-2">
                    <img
                        src={Logo}
                        alt="Logo"
                        className="w-8 h-8 rounded-md shadow-[0px_1px_2px_0px_rgba(16,24,40,0.06),0px_1px_3px_0px_rgba(16,24,40,0.1)]"
                    />
                    <h1 className="text-lg font-bold text-gray-900">Untitled UI</h1>
                </div>

                {/* Navigation */}
                <nav className="hidden md:flex space-x-6 text-gray-600">
                    <a href="#" className="hover:text-black">
                        Home
                    </a>
                    <a href="#" className="hover:text-black">
                        Products
                    </a>
                    <a href="#" className="hover:text-black">
                        Resources
                    </a>
                    <a href="#" className="hover:text-black">
                        Pricing
                    </a>
                </nav>

                {/* Mobile Menu */}
                <div className="md:hidden">
                    <button className="text-gray-600 text-2xl">&#9776;</button>
                </div>
            </header>

            {/* Hero Content */}
            <section className="text-center px-4 md:px-0">
                <div className="max-w-4xl mx-auto">
                    <div className="mb-4 flex justify-center space-x-2">
                        <span className="text-xs px-3 py-1 bg-purple-100 text-purple-800 rounded-full">
                            New feature
                        </span>
                        <a href="#" className="text-xs px-3 py-1 text-purple-800 underline">
                            Check out the team dashboard →
                        </a>
                    </div>
                    <h2 className="text-3xl md:text-5xl font-bold mb-4">
                        Beautiful analytics to grow smarter
                    </h2>
                    <p className="text-gray-600 mb-6">
                        Powerful, self-serve product and growth analytics to help you
                        convert, engage, and retain more users. Trusted by over 4,000
                        startups.
                    </p>
                    <div className="flex justify-center gap-4">
                        <button className="px-6 py-2 bg-purple-600 text-white rounded-md hover:bg-purple-700">
                            Sign up
                        </button>
                        <button className="px-6 py-2 border border-gray-300 text-gray-700 rounded-md hover:bg-gray-100">
                            Demo
                        </button>
                    </div>
                </div>

                {/* Analytics Section */}
                <div className="mt-10">
                    <img
                        src={Dashboard}
                        alt="Dashboard Screenshot"
                        className="mx-auto w-full max-w-5xl"
                    />
                </div>
            </section>
        </div>
    );
};

export default HeroSection;
