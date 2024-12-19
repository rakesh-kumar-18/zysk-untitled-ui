import Logo from "../assets/untitled-logo.png";
import ProfileIcon from "../assets/profile-icon.png";
import Dashboard from "../assets/dashboard-container.png";
import { FaAngleDown } from "react-icons/fa6";
import { MdOutlineSlowMotionVideo } from "react-icons/md";

const HeroSection = () => {
    return (
        <div className="w-full">
            {/* Top Section */}
            <header className="w-full px-4 md:px-8 py-4 flex justify-between items-center">
                {/* Logo and Title */}
                <div className="flex items-center space-x-16">
                    <div className="flex items-center space-x-2">
                        <img
                            src={Logo}
                            alt="Logo"
                            className="w-8"
                        />
                        <h1 className="text-lg font-bold text-gray-900">Untitled UI</h1>
                    </div>

                    {/* Navigation */}
                    <nav className="hidden md:flex items-center space-x-6 text-gray-600">
                        <a href="#" className="hover:text-black font-medium">
                            Home
                        </a>
                        <a href="#" className="hover:text-black font-medium flex items-center">
                            Products
                            <FaAngleDown className="ml-3" />
                        </a>
                        <a href="#" className="hover:text-black font-medium flex items-center">
                            Resources
                            <FaAngleDown className="ml-3" />
                        </a>
                        <a href="#" className="hover:text-black font-medium">
                            Pricing
                        </a>
                    </nav>
                </div>

                {/* Profile Icon */}
                <div className="hidden md:flex items-center space-x-2">
                    <img
                        src={ProfileIcon}
                        alt="Profile"
                        className="w-8 h-8 rounded-full border border-gray-200 shadow-sm"
                    />
                </div>

                {/* Mobile Menu */}
                <div className="md:hidden">
                    <button className="text-gray-600 text-2xl">&#9776;</button>
                </div>
            </header>

            {/* Hero Content */}
            <section className="text-center px-4 md:px-0 mt-16">
                <div className="max-w-4xl mx-auto">
                    <div className="mb-4 flex justify-center items-center mx-auto rounded-full border-solid border-2 border-[#E9D7FE] max-w-fit px-1 font-semibold">
                        <span className="text-xs px-2 text-[#6941C6] rounded-full border-solid border-2 border-[#D6BBFB]">
                            New feature
                        </span>
                        <a href="#" className="text-xs px-3 py-1 text-[#6941C6]">
                            Check out the team dashboard →
                        </a>
                    </div>
                    <h2 className="text-3xl md:text-5xl font-bold mb-4">
                        Beautiful analytics to grow smarter
                    </h2>
                    <p className="text-gray-600 mb-6">
                        Powerful, self-serve product and growth analytics to help you convert,
                        engage, and retain more users. Trusted by over 4,000 startups.
                    </p>
                    <div className="md:flex justify-center gap-4">
                        <button className="px-6 py-2 border border-gray-300 text-gray-700 rounded-md hover:bg-gray-100 flex items-center justify-center w-full md:w-fit mb-3 md:mb-0">
                            <MdOutlineSlowMotionVideo className="mr-2" />
                            Demo
                        </button>
                        <button className="px-6 py-2 bg-[#7F56D9] text-white rounded-md hover:bg-purple-700 w-full md:w-fit">
                            Sign up
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
