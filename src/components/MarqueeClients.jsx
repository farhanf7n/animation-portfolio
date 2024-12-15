import React, { useRef } from "react";
import { Marquee } from "@devnomic/marquee";
import CustomHook from "./CustomHook";

const MarqueeClients = () => {
  const divs = useRef([]);
  const scrollTab = useRef();
  CustomHook(scrollTab, divs);
  return (
    <div className="marquee-clients overflow-hidden mt-20" ref={scrollTab}>
      <h1 className="title mb-8" ref={(el) => el && divs.current.push(el)}>
        What Clients Say About me
      </h1>
      <div ref={(el) => el && divs.current.push(el)} className="space-y-6">
        <Marquee fade={true}>
          <div className="bg-[#212225] py-2 px-4 rounded-md flex justify-start items-center gap-3">
            <p className="text-xl font-semibold">
              “Beautiful Template + Fantastic Customer service!”
            </p>
            <img
              className="w-8 h-8 rounded-full object-cover"
              src="/client-1.png"
              alt=""
            />
          </div>
          <div className="bg-[#212225] py-2 px-4 rounded-md flex justify-start items-center gap-3">
            <p className="text-xl font-semibold">
              “Great template and custom service”
            </p>
            <img
              className="w-8 h-8 rounded-full object-cover"
              src="/client-1.png"
              alt=""
            />
          </div>
          <div className="bg-[#212225] py-2 px-4 rounded-md flex justify-start items-center gap-3">
            <p className="text-xl font-semibold">
              “Fantastic designer and web developer... but above all great
              people”
            </p>
            <img
              className="w-8 h-8 rounded-full object-cover"
              src="/client-1.png"
              alt=""
            />
          </div>
        </Marquee>
        <Marquee fade={true} reverse={true}>
          <div className="bg-[#212225] py-2 px-4 rounded-md flex justify-start items-center gap-3">
            <p className="text-xl font-semibold">
              “Beautiful Template + Fantastic Customer service!”
            </p>
            <img
              className="w-8 h-8 rounded-full object-cover"
              src="/client-1.png"
              alt=""
            />
          </div>
          <div className="bg-[#212225] py-2 px-4 rounded-md flex justify-start items-center gap-3">
            <p className="text-xl font-semibold">
              “Great template and custom service”
            </p>
            <img
              className="w-8 h-8 rounded-full object-cover"
              src="/client-1.png"
              alt=""
            />
          </div>
          <div className="bg-[#212225] py-2 px-4 rounded-md flex justify-start items-center gap-3">
            <p className="text-xl font-semibold">
              “Fantastic designer and web developer... but above all great
              people”
            </p>
            <img
              className="w-8 h-8 rounded-full object-cover"
              src="/client-1.png"
              alt=""
            />
          </div>
        </Marquee>
      </div>
    </div>
  );
};

export default MarqueeClients;
