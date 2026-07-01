import React from "react";
import Skills from "./Skills";
import TimeLine from "./TimeLine";

function About() {
  return (
    <section className="pt-20 md:pt-28" id="about">
      <div className="container">
        <div className="space-y-1">
          <h2 className="section-title mb-3.5 ">About Me</h2>
          <p className="text-md">
            <p className="text-md">
  Passionate MERN Stack Developer with experience in building full-stack web
  applications using React.js, Node.js, Express.js, and MongoDB. Skilled in
  developing responsive user interfaces, integrating REST APIs, and solving
  real-world problems through modern web technologies.
</p>
          </p>
        </div>
        <div className=" mt-3 border border-zinc-200 px-8 py-4 rounded-lg dark:border-zinc-900">
          <Skills />
          <TimeLine />
        </div>
      </div>
    </section>
  );
}

export default About;
