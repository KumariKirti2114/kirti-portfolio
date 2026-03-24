import React from "react";
import { achievements } from "../../constants";

const Achievements = () => {
  return (
    <>
      <div
      id="ACHIEVEMENTS"
       className="text-center mb-12 scroll-mt-28">
        <h2 className="text-3xl sm:text-4xl font-bold">ACHIEVEMENTS</h2>
        <div className="w-32 h-1 bg-purple-500 mx-auto mt-4"></div>
        <p className="text-gray-400 mt-4 text-lg font-semibold">
          Notable accomplishments that showcase my growth and technical journey.
        </p>
      </div>
      <div className="mt-6 flex justify-center">
        {/* Center Container */}
        <div
          className="bg-[#0C081E] backdrop-blur-md rounded-xl border border-white/10
        shadow-[0_0_20px_1px_rgba(130,69,236,0.25)]
        hover:shadow-[0_0_30px_2px_rgba(130,69,236,0.45)]
        transition-all duration-300 p-6 w-full md:w-[70%] lg:w-[100%]"
        >
          <ul className="space-y-3 list-disc pl-6 text-gray-200 text-base">
            {achievements.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
};

export default Achievements;
