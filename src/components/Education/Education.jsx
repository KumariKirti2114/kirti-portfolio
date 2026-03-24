import React from "react";
import { educationData } from "../../constants";

const Education = () => {
  return (
    <section
      id="education"
      className="py-24 px-[12vw] md:px-[7vw] lg:px-[20vw] font-sans bg-[#050413] text-white"
    >
      {/* Section Title */}
      <div className="text-center mb-12">
        <h2 className="text-3xl sm:text-4xl font-bold text-white">
          EDUCATION
        </h2>
        <div className="w-24 h-1 bg-[#8245ec] mx-auto mt-2 rounded-full"></div>
        <p className="text-gray-400 mt-4 text-lg font-semibold">
          My academic journey and the foundations that shaped my technical path
        </p>
      </div>

      {/* Education Cards */}
      <div className="space-y-8">
        {educationData.map((edu, index) => (
          <div
            key={index}
            className="flex flex-col md:flex-row items-start 
            bg-[#0B081D] backdrop-blur-md rounded-2xl border border-white/10 
            shadow-[0_0_20px_1px_rgba(130,69,236,0.3)] transition-all duration-300 
            hover:shadow-[0_0_35px_2px_rgba(130,69,236,0.45)] p-6"
          >
            {/* Logo */}
            <div className="flex-shrink-0 w-16 h-16 bg-white rounded-full flex items-center justify-center overflow-hidden border-2 border-[#8245ec] shadow-md mr-5">
              <img
                src={edu.logo}
                alt={`${edu.institution} logo`}
                className="w-full h-full object-contain p-2"
              />
            </div>

            {/* Text Content */}
            <div className="w-full">
              {/* Institution + Duration */}
              <div className="flex justify-between items-start">
                <h3 className="text-lg md:text-xl font-semibold text-gray-100">
                  {edu.institution}
                </h3>

                <span className="text-gray-400 text-sm md:text-base font-medium">
                  {edu.duration}
                </span>
              </div>

              {/* Location */}
              <p className="text-gray-400 text-sm mt-1">
                {edu.location}
              </p>

              {/* Degree */}
              <p className="text-gray-300 text-sm md:text-base mt-2">
                {edu.degree}
              </p>

              {/* Percentage */}
              {edu.percentage && (
                <p className="text-[#a855f7] font-semibold text-sm mt-1">
                  {edu.percentage}
                </p>
              )}

              {/* Description */}
              {edu.description && (
                <p className="text-gray-400 text-sm md:text-base mt-2 leading-relaxed">
                  {edu.description}
                </p>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Education;