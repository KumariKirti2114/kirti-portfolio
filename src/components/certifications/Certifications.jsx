import React, { useState } from "react";
import { certificates } from "../../constants";

const Certifications = () => {
  const [showAll, setShowAll] = useState(false);

  const visibleCertificates = showAll ? certificates : certificates.slice(0, 3);

  return (
    <>
      <div
        id="certificate"
       className="text-center mb-12 scroll-mt-28 -mt-16">
        <h2 className="text-3xl sm:text-4xl font-bold">CERTIFICATIONS</h2>
        <div className="w-24 h-1 bg-[#8245ec] mx-auto mt-2 rounded-full"></div>
        <p className="text-gray-400 mt-4 text-lg font-semibold">
          Certifications earned through continuous learning and skill development.
        </p>
      </div>
      <div className="space-y-4 mt-6">
        {visibleCertificates.map((cert, index) => (
          <div
            key={index}
            className="bg-[#0B081D] backdrop-blur-md rounded-xl border border-white/10
          shadow-[0_0_20px_1px_rgba(130,69,236,0.25)]
          hover:shadow-[0_0_30px_2px_rgba(130,69,236,0.45)]
          transition-all duration-300 p-5"
          >
            {/* Row 1 */}
            <div className="flex justify-between items-center">
              <h4 className="text-gray-100 font-medium">{cert.title}</h4>

              <span className="text-gray-400 text-sm">{cert.date}</span>
            </div>

            {/* Row 2 */}
            <div className="flex justify-between items-center mt-2">
              <span className="text-gray-400 text-sm">{cert.org}</span>

              <a
                href={cert.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#8245ec] text-sm hover:underline"
              >
                View
              </a>
            </div>
          </div>
        ))}

        {/* Show More Button */}
        {certificates.length > 3 && (
          <div className="text-center pt-4">
            <button
              onClick={() => setShowAll(!showAll)}
              className="px-8 py-3 bg-purple-600 hover:bg-purple-800 text-white rounded-xl text-lg font-bold shadow-lg hover:shadow-purple-500/50 transition-all duration-300 transform hover:-translate-y-1"
            >
              {showAll ? "Show Less" : "Show More"}
            </button>
          </div>
        )}
      </div>
    </>
  );
};

export default Certifications;
