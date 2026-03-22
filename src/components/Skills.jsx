import React from "react";
import { aboutItems } from "../constant/data";
function Skills() {
  return (
    <div className="flex flex-col gap-8">
      <div className="flex flex-col gap-3 mt-4 ">
        <h3 className="section-title">Skills</h3>
        <p>
          Here are some of the frameworks, libraries, services, and runtimes I
          have experience working with in web development. These tools have
          helped me build modern and responsive web applications. I am
          continuously learning new technologies, so this list may evolve as I
          grow my skills.
        </p>
      </div>
      <div className="flex flex-row gap-4 items-center flex-wrap">
        {aboutItems.map((item) => (
          <div
            key={item.id}
            className="flex flex-row gap-2 items-center justify-center"
          >
                <span className="size-6 flex items-center justify-center">
            <img src={item.icon} alt={item.label} width={24} height={24} />
            </span>
            <h1>{item.label}</h1>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Skills;
