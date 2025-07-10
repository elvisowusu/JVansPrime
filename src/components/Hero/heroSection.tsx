import React from "react";

interface ReusableHeroSectionProps {
  backgroundImage: string;
  label?: string;
  span?: string;
  heading: string;
  description: string;
  className?: string;
  headerStyle?: string;
}

export const ReusableHeroSection: React.FC<ReusableHeroSectionProps> = ({
  backgroundImage,
  label,
  span,
  heading,
  description,
  className = "",
  headerStyle = "",
}) => {
  return (
    <section
      className={`relative w-full font-poppins bg-cover bg-center flex justify-center text-white ${className}`}
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <div className="absolute inset-0 bg-black opacity-60" />

      <div className="relative z-10 max-w-full text-center mt-[5%] px-4">
        {label && <p className="text-sm font-medium text-[#E2232A]">{label}</p>}
        <div className="text-3xl md:text-4xl  w-full font-comfortaa font-bold my-8">
          <h2 className={` ${headerStyle}`}>
            {heading}
            {span && <span className="text-[#FFB636] ">{span}</span>}
          </h2>
        </div>
        <p className="leading-5 text-xs text-gray-200  max-w-2xl mx-auto">{description}</p>
      </div>
    </section>
  );
};
