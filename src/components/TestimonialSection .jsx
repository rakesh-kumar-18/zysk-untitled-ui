const TestimonialSection = () => {
    return (
        <section className="w-full py-16 px-4 md:px-8 bg-white">
            {/* Logo and Text Content */}
            <div className="max-w-4xl mx-auto text-center">
                {/* Company Logo */}
                <div className="flex justify-center mb-4">
                    <img
                        src="https://via.placeholder.com/40" /* Replace with logo image path */
                        alt="Sisyphus Logo"
                        className="h-10"
                    />
                    <span className="text-gray-900 font-semibold ml-2 text-lg">
                        Sisyphus
                    </span>
                </div>

                {/* Testimonial Content */}
                <blockquote className="text-2xl md:text-4xl font-semibold text-gray-800 leading-normal md:leading-relaxed">
                    We’ve been using Untitled to kick start every new project and can’t
                    imagine working without it.
                </blockquote>
            </div>

            {/* Profile Section */}
            <div className="flex flex-col items-center mt-8">
                <img
                    src="https://via.placeholder.com/80" /* Replace with profile image path */
                    alt="Candice Wu"
                    className="w-16 h-16 rounded-full object-cover mb-4"
                />
                <h4 className="text-gray-900 font-semibold text-lg">Candice Wu</h4>
                <p className="text-gray-600 text-sm">Product Manager, Sisyphus</p>
            </div>
        </section>
    );
};

export default TestimonialSection;
