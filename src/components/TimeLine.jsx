import React from "react";
import { timelineItems } from "../constant/data";

function TimeLine() {
  return (
    <div className="mt-11 space-y-6">
      <div className="space-y-2">
        <h3>Work / Learning Experience</h3>
        <p>
          Currently learning and building projects in web development with a
          strong focus on frontend technologies. I enjoy creating responsive,
          user-friendly interfaces and improving my skills through practical
          projects. I am also exploring modern tools and frameworks to enhance
          my development knowledge.
        </p>
          </div>
          {/* {wrapper} */}
      <div className="space-y-2 border-l border-zinc-200 dark:border-zinc-800">
        {timelineItems.map((item) => (
          <div key={item.id} className="space-y-4 pl-7 relative">
            <div className="absolute -left-2.5 top-1.5 bg-emerald-700/40 size-5 rounded-full flex items-center justify-center animate-pulse">
              <span className="size-2.5 bg-emerald-600 rounded-full block"></span>
            </div>
            <h3>{item.title}</h3>
            <div className="flex flex-row flex-wrap  items-center gap-4 divide-x divide-zinc-700 ">
              {item.list.map((label, index) => (
                <p key={index} className="pr-3.5">{label}</p>
              ))}
            </div>
            <p>{item.time}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default TimeLine;
