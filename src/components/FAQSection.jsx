import { useState } from "react";
import Alec from "../assets/alec.png";
import Olivia from "../assets/olivia.png";
import Lori from "../assets/lori.png";

const FAQSection = () => {
    const [openIndex, setOpenIndex] = useState(0);

    const faqs = [
        {
            question: "Is there a free trial available?",
            answer: "Yes, you can try us for free for 30 days. If you want, we’ll provide you with a free, personalized 30-minute onboarding call to get you up and running as soon as possible.",
        },
        {
            question: "Can I change my plan later?",
            answer: "Yes, you can upgrade or downgrade your plan at any time from your account settings. The changes will take effect from the next billing cycle.",
        },
        {
            question: "What is your cancellation policy?",
            answer: "You can cancel your subscription at any time. Once canceled, you will continue to have access until the end of your current billing period.",
        },
        {
            question: "Can other info be added to an invoice?",
            answer: "Yes, you can add details such as your company name, VAT number, or address to your invoice through the billing settings in your account.",
        },
        {
            question: "How does billing work?",
            answer: "Billing is handled on a monthly or annual basis, depending on the plan you choose. You’ll be charged automatically at the beginning of each billing cycle.",
        },
        {
            question: "How do I change my account email?",
            answer: "You can update your account email by navigating to your account settings and editing the email field. A confirmation email will be sent to your new address.",
        },
    ];

    const toggleFAQ = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <section className="w-full py-12 px-4 md:py-16 md:px-8 bg-white">
            {/* FAQ Heading */}
            <div className="text-center mb-8 md:mb-12">
                <h2 className="text-3xl font-semibold text-gray-900 mb-3">
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
                            className="w-full text-left py-6 flex justify-between items-center focus:outline-none"
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
            <div className="max-w-3xl mx-auto mt-12 p-6 rounded-lg bg-[#F9FAFB] text-center">
                <div className="flex justify-center mb-4 space-x-2 relative">
                    {/* Example avatars */}
                    <img
                        src={Alec}
                        alt="Avatar 1"
                        className="w-10 h-10 rounded-full object-cover"
                    />
                    <img
                        src={Olivia}
                        alt="Avatar 2"
                        className="w-10 h-10 rounded-full object-cover absolute bottom-1"
                    />
                    <img
                        src={Lori}
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
                    className="inline-block px-6 py-2 bg-[#7F56D9] text-white rounded-md font-semibold hover:bg-purple-700"
                >
                    Get in touch
                </a>
            </div>
        </section>
    );
};

export default FAQSection;
