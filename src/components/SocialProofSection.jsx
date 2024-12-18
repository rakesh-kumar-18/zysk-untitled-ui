const SocialProofSection = () => {
    const companies = [
        { name: "Boltshift", logo: "🔵", color: "text-blue-600" },
        { name: "Lightbox", logo: "⬛", color: "text-black" },
        { name: "FeatherDev", logo: "🟢", color: "text-green-600" },
        { name: "Spherule", logo: "🟣", color: "text-purple-600" },
        { name: "GlobalBank", logo: "🔷", color: "text-blue-500" },
        { name: "Nietzsche", logo: "🟠", color: "text-orange-500" },
    ];

    return (
        <section className="w-full py-8 px-4 md:py-12 md:px-8 text-center">
            <h3 className="text-gray-500 text-sm mb-8">
                Join 4,000+ companies already growing
            </h3>
            <div className="grid grid-cols-2 md:flex md:justify-center md:gap-12 gap-6 items-center">
                {companies.map((company, index) => (
                    <div
                        key={index}
                        className="flex items-center justify-center space-x-2"
                    >
                        <span className={`text-3xl ${company.color}`}>{company.logo}</span>
                        <span className="font-semibold text-gray-800">{company.name}</span>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default SocialProofSection;
