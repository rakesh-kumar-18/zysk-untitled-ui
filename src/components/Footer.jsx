const Footer = () => {
    const footerSections = [
        {
            title: "Product",
            links: ["Overview", "Features", "Solutions", "Tutorials", "Pricing", "Releases"],
            special: { label: "New", link: "Solutions" }, // Highlight 'New' beside Solutions
        },
        {
            title: "Company",
            links: ["About us", "Careers", "Press", "News", "Media kit", "Contact"],
        },
        {
            title: "Resources",
            links: ["Blog", "Newsletter", "Events", "Help centre", "Tutorials", "Support"],
        },
        {
            title: "Use cases",
            links: ["Startups", "Enterprise", "Government", "SaaS centre", "Marketplaces", "Ecommerce"],
        },
        {
            title: "Social",
            links: ["Twitter", "LinkedIn", "Facebook", "GitHub", "AngelList", "Dribbble"],
        },
        {
            title: "Legal",
            links: ["Terms", "Privacy", "Cookies", "Licenses", "Settings", "Contact"],
        },
    ];

    return (
        <footer className="w-full bg-gray-50 py-12 px-4 md:py-16 md:px-8">
            {/* Top Footer Links */}
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 max-w-7xl mx-auto">
                {footerSections.map((section, index) => (
                    <div key={index}>
                        <h4 className="font-semibold text-gray-900 mb-4">{section.title}</h4>
                        <ul className="space-y-2">
                            {section.links.map((link) => (
                                <li key={link} className="text-gray-600 hover:text-gray-900 transition">
                                    {section.special?.link === link ? (
                                        <span className="relative">
                                            {link}{" "}
                                            <span className="inline-block ml-1 px-1.5 py-0.5 text-xs font-semibold text-green-700 bg-green-100 rounded">
                                                {section.special.label}
                                            </span>
                                        </span>
                                    ) : (
                                        link
                                    )}
                                </li>
                            ))}
                        </ul>
                    </div>
                ))}
            </div>

            {/* Divider */}
            <div className="border-t border-gray-200 mt-12 mb-8"></div>

            {/* Bottom Footer */}
            <div className="flex flex-col md:flex-row justify-between items-center max-w-7xl mx-auto">
                <div className="flex items-center space-x-2 mb-4 md:mb-0">
                    <img
                        src="https://via.placeholder.com/32"
                        alt="Logo"
                        className="w-8 h-8"
                    />
                    <span className="font-semibold text-gray-900">Untitled UI</span>
                </div>
                <p className="text-sm text-gray-600">© 2077 Untitled UI. All rights reserved.</p>
            </div>
        </footer>
    );
};

export default Footer;
