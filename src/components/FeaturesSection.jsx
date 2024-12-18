import { IoChatbubblesOutline } from "react-icons/io5";
import { PiLightning } from "react-icons/pi";
import { RiGitRepositoryCommitsLine } from "react-icons/ri";
import { TbMessageChatbot } from "react-icons/tb";
import { AiOutlineMacCommand } from "react-icons/ai";
import { BsChatHeart } from "react-icons/bs";

const FeaturesSection = () => {
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
                "Measure what matters with Untitled’s easy-to-use reports. You can filter, export, and drill down on the data.",
        },
        {
            icon: TbMessageChatbot,
            title: "Connect with customers",
            description:
                "Solve a problem or close a sale in real-time with chat. Customers are seamlessly routed to email without confusion.",
        },
        {
            icon: AiOutlineMacCommand,
            title: "Connect the tools you already use",
            description:
                "Explore 100+ integrations that make your day-to-day workflow more efficient and familiar.",
        },
        {
            icon: BsChatHeart,
            title: "Our people make the difference",
            description:
                "We’re an extension of your customer service team, and all of our resources are free. Chat with us 24/7 when you need help.",
        },
    ];

    return (
        <section className="w-full py-16 px-4 md:px-8">
            {/* Section Title */}
            <div className="text-center mb-12">
                <p className="text-sm font-semibold text-purple-600 mb-2">Features</p>
                <h2 className="text-3xl font-bold text-gray-900">
                    Analytics that feels like it’s from the future
                </h2>
                <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
                    Powerful, self-serve product and growth analytics to help you convert,
                    engage, and retain more users. Trusted by over 4,000 startups.
                </p>
            </div>

            {/* Features Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto">
                {features.map((feature, index) => (
                    <div
                        key={index}
                        className="flex flex-col items-center text-center"
                    >
                        <feature.icon className="text-4xl p-2 mb-4 border rounded-lg border-[#EAECF0]" />
                        <h3 className="font-semibold text-gray-900 text-lg mb-2">
                            {feature.title}
                        </h3>
                        <p className="text-gray-600 text-sm">{feature.description}</p>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default FeaturesSection;
