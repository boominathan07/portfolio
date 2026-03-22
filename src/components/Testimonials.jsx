import React from "react";
import { statsItems, testimonialsItems } from "../constant/data";
import { RiStarFill } from "@remixicon/react";

function Testimonials() {
  return (
    <section className="pt-28" id="#testimonidals">
      <div className="container">
        <div className="space-y-8">
          <div className="space-y-1">
            <h2 className="section-title">Testmonials</h2>
            <p className="md">Real Feedback from real projects</p>
          </div>

          <div className="grid gap-7  mt-8 sm:grid-cols-2 md:grid-cols-3">
            {testimonialsItems.map((item) => (
              <div className="bg-zinc-100 p-8 rounded-lg flex flex-col dark:bg-zinc-900">
                <p className="mb-5">{item.text}</p>
                <div className="flex flex-row gap-3 items-center mt-auto">
                  <h3>{item.name}</h3>
                  <div className="text-yellow-600 flex items-center ">
                    <RiStarFill size={16} />
                    <RiStarFill size={16} />
                    <RiStarFill size={16} />
                    <RiStarFill size={16}/>
                    <RiStarFill size={16} />
                  </div>
                </div>
              </div>
            ))}
          </div>
              </div>
              
              <div className="flex  flex-col gap-12 md:gap-14 sm:flex-row  sm;flex-wrap justify-center mt-14">
                  {statsItems.map((item) => (
                      <div key={item.id} className="text-center">
                          <p className="text-4xl text-black dark:text-white">{item.value}</p>
                          <p className="text-2xl">{item.text}</p>
                          </div>
                  ))}
              </div>
      </div>
    </section>
  );
}

export default Testimonials;
