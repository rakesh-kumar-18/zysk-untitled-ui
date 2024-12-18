import BoltshiftLogo from "../assets/boltshift.png";
import LightboxLogo from "../assets/lightbox.png";
import FeatherDevLogo from "../assets/featherdev.png";
import SpheruleLogo from "../assets/spherule.png";
import GlobalBankLogo from "../assets/globalbank.png";
import NietzscheLogo from "../assets/nietzsche.png";

const SocialProofSection = () => {
    const companies = [
        { name: "Boltshift", logo: BoltshiftLogo },
        { name: "Lightbox", logo: LightboxLogo },
        { name: "FeatherDev", logo: FeatherDevLogo },
        { name: "Spherule", logo: SpheruleLogo },
        { name: "GlobalBank", logo: GlobalBankLogo },
        { name: "Nietzsche", logo: NietzscheLogo },
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
                        <img
                            src={company.logo}
                            alt={`${company.name} Logo`}
                            className="w-8 h-8 object-contain"
                        />
                        <span className="font-bold text-lg text-[#101828]">
                            {company.name}
                        </span>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default SocialProofSection;
