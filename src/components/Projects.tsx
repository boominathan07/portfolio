import React from "react";
import { projectsItems } from "../constant/data";
import {
  RiExternalLinkFill,
  RiGithubFill,
  RiGithubLine, 
} from "@remixicon/react";

function Projects() {
  return (
    <div className="pt-20" id="projects">
      <div className="container space-y-2">
        {/* Intro */}
        <div>
          <h3 className="section-title">Projects</h3>
          <p className="mt-3">
            Explore my projects including web applications and UI designs. These
            projects showcase my skills in building responsive and user-friendly
            digital experiences.
          </p>
        </div>

        {/* card */}
        <div className="grid gap-6 sm:grid-cols-2  lg:grid-cols-3 mt-12">
          {projectsItems.map((item) => (
            <div
              className="border border-zinc-200 bg-zinc-100/40 
              overflow-hidden
               dark:border-zinc-800 dark:bg-zinc-900/40 hover:border-emerald-600/50 shadow-lg hover:shadow-emerald-600/10 transition-all group"
              key={item.id}
            >
              <div className="overflow-hidden relative h-56 ">
                <img
                  src={item.img}
                  alt="projectImg"
                   className="w-full h-full object-cover object-top transition-transform group-hover:scale-105"
                />

                {/* {overlay} */}
                <div className="absolute inset-0 bg-black/60 flex justify-center items-center gap-4 opacity-0 group-hover:opacity-100">
                  
                  <a href={item.live} target="_blank" className="size-12 bg-emerald-600 rounded-full flex justify-center items-center text-white
                  hover:bg-emerald-700 transition-colors">
                    <RiExternalLinkFill />
                  </a>
                  <a href={item.git} target="_blank" className="size-12 flex items-center justify-center bg-white rounded-full text-black hover:bg-zinc-200 transition-colors ">
                    <RiGithubFill />
                  </a>
                </div>
              </div>
              {/* {content} */}
              <div className="p-5 space-y-3 overflow-hidden">
                <h3 className="section-title text-xl min-h-[35px] group-hover:text-emerald-600">{item.title}</h3>
                <p className="line-clamp-2 hover:line-clamp-none">{item.text}</p>
                {/* {tags} */}
                <div className="flex  gap-2 flex-wrap">
                  {item.tags.map((tag, index) => (
                    <span key={index} className="text-md font-bold   text-emerald-600 bg-emerald-600/20 px-3 py-1 rounded-full flex justify-center items-center">{tag}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Projects;
