import React from "react";
import myImage from "../assets/Images/IMG_20260315_173307.jpg"
             
import { heroBtns, heroItems, navItems } from "../constant/data";

function Hero() {
  return (
    <section className="mt-28" id="#">
      <div className="container">
        <div className="grid gap-14 md:grid-cols-2 md:items-center">
          <div>
            <p className="text-lg md:text-xl font-light text-emerald-600">
              Hi, I'm Boominathan
            </p>
            <h1 className="text-3xl mt-[10px] mb-[16px]">
              Mern Stack Developer & Creative Problem Solver
            </h1>
            <p>
              Passionate developer interested in building modern web
              applications.
            </p>
          </div>
          <div className="w-2xs h-72 rounded-full overflow-hidden mx-auto lg:mx-0">
            <img
              src={myImage}
             
              alt="hero Image"
              width={280}
              height={280}
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* wrapper */}
        <div
          className="grid grid-cols-2 items-start items-center md:grid-cols-3
  items-center gap-3 md:divide-x divide-zinc-200 dark:divide-zinc-900 mt-5"
        >
          {heroItems.map((item) => (
            <div key={item.id} className="flex gap-2 items-start">
              <span
                className="size-10 flex bg-zinc-100 items-center
              justify-center rounded-xl border border-zinc-100 text-zinc-800 dark:bg-zinc-300
              dark:border-zinc-900"
              >
                <item.icon size={26} />
              </span>
              <div className="space-y-1">
                <h2 className="text-lg">{item.subtitle}</h2>
                <p>{item.text}</p>
              </div>
            </div>
          ))}
          </div>

          {/* hero btns  */}
          <div className="flex flex-col md:flex-row gap-4 mt-8">
          {heroBtns.map((item) => (
              <button 
              key={item.id}
             onClick={() => {
  if (item.id === 3) {
    const a = document.createElement('a');
    a.href = item.href;
    a.download = 'Boominathan_Resume.pdf';
    a.click();
  } else {
    window.open(item.href, item.id === 2 ? "_blank" : "_self");
  }
}}
                className="btn border-zinc-200 dark:border-zinc-900 relative
                overflow-hidden before:absolute before:top-0 before:left-0
                before:right-0 before:bottom-0 before:bg-emerald-700 before:-z-10
                before:scale-y-0 hover:before:scale-y-100 before:transition-transform before:origin-top
                hover:text-zinc-200"
                >
                <span >
                  <item.icon />
                </span>
                {item.label}
              </button>
             
              
            ))}
          </div>
      </div>
    </section>
  );
}

export default Hero;
