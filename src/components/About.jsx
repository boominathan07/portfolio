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
            I am an engineering student and an aspiring full-stack web
            developer. I enjoy building modern, responsive, and user-friendly
            web applications. I have experience working with technologies like
            HTML, CSS, JavaScript, React, and Tailwind CSS. I like solving
            problems through coding and continuously improving my development
            skills. My goal is to grow as a professional developer and build
            impactful digital products.
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
