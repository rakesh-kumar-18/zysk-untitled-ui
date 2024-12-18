const CTASection = () => {
    return (
        <section className="w-full py-12 px-4 md:py-16 md:px-8 bg-[#F9FAFB]">
            {/* Content Container */}
            <div className="max-w-3xl mx-auto text-center">
                {/* Heading */}
                <h2 className="text-3xl font-semibold text-gray-900 mb-4">
                    Start your free trial
                </h2>
                <p className="text-gray-600 mb-10">
                    Join over 4,000+ startups already growing with Untitled.
                </p>

                {/* Buttons */}
                <div className="flex flex-col md:flex-row justify-center items-center gap-4">
                    <a
                        href="#"
                        className="inline-block w-full md:w-auto px-6 py-3 border border-gray-300 text-gray-900 font-semibold text-center rounded-md hover:bg-gray-100 transition"
                    >
                        Learn more
                    </a>
                    <a
                        href="#"
                        className="inline-block w-full md:w-auto px-6 py-3 bg-[#7F56D9] text-white font-semibold text-center rounded-md hover:bg-purple-700 transition"
                    >
                        Get started
                    </a>
                </div>
            </div>
        </section>
    );
};

export default CTASection;
