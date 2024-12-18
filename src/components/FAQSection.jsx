import { useState } from "react";

const FAQSection = () => {
    const [openIndex, setOpenIndex] = useState(0);

    const faqs = [
        {
            question: "Is there a free trial available?",
            answer:
                "Yes, you can try us for free for 30 days. If you want, we’ll provide you with a free, personalized 30-minute onboarding call to get you up and running as soon as possible.",
        },
        {
            question: "Can I change my plan later?",
            answer: "",
        },
        {
            question: "What is your cancellation policy?",
            answer: "",
        },
        {
            question: "Can other info be added to an invoice?",
            answer: "",
        },
        {
            question: "How does billing work?",
            answer: "",
        },
        {
            question: "How do I change my account email?",
            answer: "",
        },
    ];

    const toggleFAQ = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <section className="w-full py-12 px-4 md:py-16 md:px-8 bg-white">
            {/* FAQ Heading */}
            <div className="text-center mb-8 md:mb-12">
                <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-2">
                    Frequently asked questions
                </h2>
                <p className="text-gray-600">
                    Everything you need to know about the product and billing.
                </p>
            </div>

            {/* FAQ Items */}
            <div className="max-w-4xl mx-auto">
                {faqs.map((faq, index) => (
                    <div key={index} className="border-t border-gray-200">
                        <button
                            className="w-full text-left py-4 flex justify-between items-center focus:outline-none"
                            onClick={() => toggleFAQ(index)}
                        >
                            <span
                                className={`font-semibold text-gray-900 ${openIndex === index ? "text-purple-600" : ""
                                    }`}
                            >
                                {faq.question}
                            </span>
                            <span className="text-gray-500">
                                {openIndex === index ? "−" : "+"}
                            </span>
                        </button>
                        {openIndex === index && faq.answer && (
                            <p className="text-gray-600 pb-4">{faq.answer}</p>
                        )}
                    </div>
                ))}
            </div>

            {/* Bottom Call-to-Action */}
            <div className="max-w-3xl mx-auto mt-12 p-6 rounded-lg bg-gray-50 text-center">
                <div className="flex justify-center mb-4 space-x-2">
                    {/* Example avatars */}
                    <img
                        src="https://via.placeholder.com/40"
                        alt="Avatar 1"
                        className="w-10 h-10 rounded-full object-cover"
                    />
                    <img
                        src="https://via.placeholder.com/40"
                        alt="Avatar 2"
                        className="w-10 h-10 rounded-full object-cover"
                    />
                    <img
                        src="https://via.placeholder.com/40"
                        alt="Avatar 3"
                        className="w-10 h-10 rounded-full object-cover"
                    />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    Still have questions?
                </h3>
                <p className="text-gray-600 mb-4">
                    Can’t find the answer you’re looking for? Please chat to our friendly
                    team.
                </p>
                <a
                    href="#"
                    className="inline-block px-6 py-2 bg-purple-600 text-white rounded-md font-semibold hover:bg-purple-700"
                >
                    Get in touch
                </a>
            </div>
        </section>
    );
};

export default FAQSection;
