import Sisyphus from "../assets/sisyphus.png";
import Candice from "../assets/candice.png";

const TestimonialSection = () => {
    return (
        <section className="w-full py-16 px-4 md:px-8 bg-[#F9FAFB]">
            {/* Logo and Text Content */}
            <div className="max-w-4xl mx-auto text-center">
                {/* Company Logo */}
                <div className="flex justify-center items-center mb-4">
                    <img
                        src={Sisyphus}
                        alt="Sisyphus Logo"
                        className="h-8"
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
                    src={Candice}
                    alt="Candice Wu"
                    className="w-12 h-12 rounded-full object-cover mb-3"
                />
                <h4 className="text-gray-900 font-semibold">Candice Wu</h4>
                <p className="text-gray-600 text-sm">Product Manager, Sisyphus</p>
            </div>
        </section>
    );
};

export default TestimonialSection;
