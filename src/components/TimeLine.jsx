import React from "react";
import { timelineItems } from "../constant/data";

function TimeLine() {
  return (
    <div className="mt-11 space-y-6">
      <div className="space-y-2">
        <h3>Experience</h3>
        <p>
       <p>
  Gained practical experience through internships and full-stack development
  projects, working with React.js, Node.js, Express.js, and MongoDB. Built
  scalable web applications, integrated REST APIs, and developed responsive
  user interfaces while strengthening problem-solving, debugging, and software
  development skills.
</p>
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
