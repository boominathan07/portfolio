import React from "react";
import { achievementItems } from "../constant/data";
// import {
//   RiExternalLinkFill,
//   RiGithubFill,
//   RiGithubLine, 
// } from "@remixicon/react";

function Achievements() {
  return (
    <div className="pt-20" id="achievements">
      <div className="container space-y-2">
        {/* Intro */}
        <div>
          <h3 className="section-title">Achievements</h3>
          <p className="mt-3">
           <p className="mt-3">
  Recognition earned through academic excellence, problem-solving abilities,
  and continuous learning, reflecting my commitment to technical growth and
  professional development.
</p>
          </p>
        </div>

        {/* card */}
        <div className="grid gap-6 sm:grid-cols-2  lg:grid-cols-3 mt-12">
          {achievementItems.map((item) => (
            <div
              className="border border-zinc-200 bg-zinc-100/40 
              overflow-hidden
               dark:border-zinc-800 dark:bg-zinc-900/40 hover:border-emerald-600/50 shadow-lg hover:shadow-emerald-600/10 transition-all group"
              key={item.id}
            >
              <div className="overflow-hidden">
                <img
                  src={item.img}
                  alt="achievement"
                   className="w-full"
                />
               
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

export default Achievements;
