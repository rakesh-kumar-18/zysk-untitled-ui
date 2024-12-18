import Desktop from "../assets/desktop-dashboard.png";
import Mobile from "../assets/mobile-dashboard.png";
import { IoChatbubblesOutline } from "react-icons/io5";
import { PiLightning } from "react-icons/pi";
import { RiGitRepositoryCommitsLine } from "react-icons/ri";

const FeaturesSectionTwo = () => {
    const features = [
        {
            icon: IoChatbubblesOutline,
            title: "Share team inboxes",
            description:
                "Whether you have a team of 2 or 200, our shared team inboxes keep everyone on the same page and in the loop.",
        },
        {
            icon: PiLightning,
            title: "Deliver instant answers",
            description:
                "An all-in-one customer service platform that helps you balance everything your customers need to be happy.",
        },
        {
            icon: RiGitRepositoryCommitsLine,
            title: "Manage your team with reports",
            description:
                "Measure what matters with Untitled’s easy-to-use reports. You can filter, export, and drill down on the data in a couple clicks.",
        },
    ];

    return (
        <section className="w-full px-4 py-16 md:py-24 bg-white">
            {/* Heading Section */}
            <div className="text-center max-w-3xl mx-auto">
                <p className="text-sm font-semibold text-purple-600 mb-2 mx-auto max-w-fit p-1 px-3 rounded-full border-solid border-2 border-[#E9D7FE]">Features</p>
                <h2 className="text-3xl font-bold text-gray-900 mb-4">
                    Cutting-edge features for advanced analytics
                </h2>
                <p className="text-gray-600">
                    Powerful, self-serve product and growth analytics to help you convert,
                    engage, and retain more users. Trusted by over 4,000 startups.
                </p>
            </div>

            {/* Image Section */}
            <div className="mt-12 flex justify-center relative">
                <img
                    src={Desktop}
                    alt="Dashboard Screenshot"
                    className="hidden md:block max-w-4xl w-full mx-auto"
                />
                <img
                    src={Mobile}
                    alt="Mobile Dashboard Screenshot"
                    className="md:hidden w-full max-w-sm mx-auto"
                />
            </div>

            {/* Features Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto">
                {features.map((feature, index) => (
                    <div
                        key={index}
                        className="text-center flex flex-col items-center"
                    >
                        <feature.icon className="text-4xl p-2 mb-4 border rounded-lg border-[#EAECF0]" />
                        <h3 className="font-semibold text-lg text-gray-900 mb-2">
                            {feature.title}
                        </h3>
                        <p className="text-gray-600 mb-4">{feature.description}</p>
                        <a
                            href="#"
                            className="text-purple-600 font-semibold hover:underline"
                        >
                            Learn more →
                        </a>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default FeaturesSectionTwo;
