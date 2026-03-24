import React from "react";
import Achievements from "./Achievements";
import Certifications from "../certifications/Certifications";

const AchievementsCertifications = () => {
  return (
    <section
      id="achievements"
      className="py-24 px-[12vw] md:px-[7vw] lg:px-[20vw] bg-[#050413] text-white"
    >
      <Certifications />
      <div className="mb-16"></div>

      <Achievements />
    </section>
  );
};

export default AchievementsCertifications;
