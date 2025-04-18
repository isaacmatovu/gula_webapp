import PropTypes from "prop-types";
import { BiSupport } from "react-icons/bi";
import { FaShippingFast } from "react-icons/fa";
import { GiReturnArrow } from "react-icons/gi";
import { GrSecure } from "react-icons/gr";

const features = [
  {
    title: "Worldwide Shipping",
    description: "Delivery to 190+ countries",
    icon: FaShippingFast,
  },
  {
    title: "24/7 Support",
    description: "Round the clock assistance",
    icon: BiSupport,
  },
  {
    title: "Secure Shopping",
    description: "100% secure payments",
    icon: GrSecure,
  },
  {
    title: "Easy Returns",
    description: "30-day money back",
    icon: GiReturnArrow,
  },
];

const Feature = ({ feature }) => {
  const Icon = feature.icon;

  return (
    <div className="flex items-center p-2">
      <div className="mr-3 w-10 h-10 flex items-center justify-center flex-shrink-0">
        <Icon className="w-6 h-6" />
      </div>
      <div className="overflow-hidden">
        <h3 className="font-semibold text-sm md:text-base truncate">
          {feature.title}
        </h3>
        <p className="text-gray-600 text-xs md:text-sm truncate">
          {feature.description}
        </p>
      </div>
    </div>
  );
};

Feature.propTypes = {
  feature: PropTypes.shape({
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    icon: PropTypes.elementType.isRequired,
  }).isRequired,
};

const FeaturesSection = () => (
  <section className="py-8 w-full bg-white">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-center mb-4 sm:mb-6">
        Our Features
      </h2>
      <div className="flex justify-center w-full">
        <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2 sm:gap-4 md:gap-6">
          {features.map((feature, index) => (
            <Feature key={index} feature={feature} />
          ))}
        </div>
      </div>
    </div>
  </section>
);

export default FeaturesSection;
