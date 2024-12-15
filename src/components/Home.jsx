import React, { useLayoutEffect, useRef, useState, useEffect } from "react";
import CustomHook from "./CustomHook";
import BlurFade from "../components/magicui/blur-fade";
import gsap from "gsap";
import { Badge } from "../components/ui/badge";
import { useInView } from "framer-motion";
import { ScrollTrigger } from "gsap/all";
import { AnimatedTooltip } from "./ui/animated-tooltip";
import { Icons } from "../components/common/icons";
import { lineWobble } from "ldrs";

lineWobble.register();

const BLUR_FADE_DELAY = 0.04;

const Arrow = ` <svg
width="40px"
height="40px"
viewBox="0 0 14 14"
version="1.1"
xmlns="http://www.w3.org/2000/svg"
xmlns:xlink="http://www.w3.org/1999/xlink"
>
<g
  id="Page-1"
  stroke="none"
  stroke-width="1"
  fill="none"
  fill-rule="evenodd"
>
  <g
    id="Artboard"
    transform="translate(-1019.000000, -279.000000)"
    stroke="#FFFFFF"
    stroke-width="1.5"
  >
    <g
      id="arrow-up-right"
      transform="translate(1026.000000, 286.000000) rotate(90.000000) translate(-1026.000000, -286.000000) translate(1020.000000, 280.000000)"
    >
      <polyline
        id="Path"
        points="2.76923077 0 12 0 12 9.23076923"
      ></polyline>
      <line x1="12" y1="0" x2="0" y2="12" id="Path"></line>
    </g>
  </g>
</g>
</svg>`;

function Home() {
  const scrollTab = useRef();
  CustomHook(scrollTab);

  gsap.registerPlugin(ScrollTrigger);
  const sliderContainer = useRef(null);
  const isInView = useInView(sliderContainer);
  const firstText = useRef(null);
  const secondText = useRef(null);
  const slider = useRef(null);
  let xPercent = 0;
  let direction = -1;

  const profileData = [
    {
      id: 1,
      name: "Farhan Ahmed",
      designation: "Frontend Developer",
      image: "/avatar.jpg",
      timeZone: "Asia/Karachi",
      localCode: "en-IN",
      location: "Faisalabad, Pakistan",
    },
  ];

  useLayoutEffect(() => {
    gsap.to(slider.current, {
      scrollTrigger: {
        trigger: document.body,
        scrub: 0.25,
        start: 0,
        onUpdate: (e) => (direction = e.direction * -1),
      },
      x: "-800px",
    });
    requestAnimationFrame(animate);
  }, []);

  const animate = () => {
    if (xPercent < -100) {
      xPercent = 0;
    } else if (xPercent > 0) {
      xPercent = -100;
    }
    if (firstText.current && secondText.current) {
      gsap.set(firstText.current, { xPercent: xPercent });
      gsap.set(secondText.current, { xPercent: xPercent });
    }
    requestAnimationFrame(animate);
    xPercent += 0.09 * direction;
  };
  const [currentTime, setCurrentTime] = useState(new Date());
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const interval = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <>
      <div ref={scrollTab} className="md:h-screen relative" id="home">
        <section>
          <div className="flex justify-center h-screen items-center flex-col gap-8 md:pt-0 pt-20">
            <div className="relative rounded-full w-56 h-56">
              <AnimatedTooltip items={profileData} />
            </div>
            <div className="text-center">
              <h1 className="text-5xl md:text-8xl font-semibold mt-4 select-none font-bluu-next">
                Hi! I&apos;m{" "}
                <span className="text-lime-accent underline">Farhan</span>
              </h1>
              <p className="mt-5 text-lg">
                I'm a frontend developer passionate about crafting engaging
                digital experiences that <br className="hidden md:block" />{" "}
                delight users and solve real problems. Always excited to explore
                new technologies <br className="hidden md:block" /> and
                collaborate on innovative projects - let's create something
                amazing together! ✨
              </p>
            </div>
            <div className="flex items-center justify-center flex-wrap gap-2">
              <a href="/contact" rel="noopener noreferrer" className="mx-auto">
                <button className="cubic-btn">
                  <span data-text="Lets go 🚀">
                    <p className="inner">
                      Get in touch <Icons.arrowRight className="ml-2 size-4" />
                    </p>
                  </span>
                </button>
              </a>
              <a
                href="/FarhanResume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="mx-auto"
              >
                <button className="cubic-btn-secondary">
                  <span data-text="Click me">
                    <p className="inner">
                      Download CV <Icons.download className="ml-2 size-4" />
                    </p>
                  </span>
                </button>
              </a>
              <l-line-wobble
                size="30"
                stroke="3"
                bg-opacity="0.1"
                speed="1.75"
                color="#e8ff85"
                class="hidden sm:block"
              ></l-line-wobble>
              <a
                className="cubic-btn-secondary h-11 w-11 rounded-full flex items-center justify-center p-0"
                href="https://www.linkedin.com/in/farhanf7n/"
                aria-label="Linkedin"
                download
              >
                <Icons.linkedin className="size-6" />
              </a>
              <a
                className="cubic-btn-secondary h-11 w-11 rounded-full flex items-center justify-center p-0"
                href="https://github.com/farhanf7n"
                aria-label="Github"
              >
                <Icons.github className="size-6" />
              </a>
            </div>
            <div className="w-full flex justify-center">
              <BlurFade delay={BLUR_FADE_DELAY}>
                <div className="flex flex-wrap gap-1 h-full w-full">
                  <div className="flex-1 flex gap-2 w-full justify-between">
                    <Badge
                      variant="outline"
                      className="cursor-pointer border-none text-sm font-jetbrains-mono"
                    >
                      {profileData[0].location}
                    </Badge>
                    <Badge
                      variant="outline"
                      className="cursor-pointer border-none text-sm"
                    >
                      {mounted ? (
                        <>
                          <span className="font-jetbrains-mono">
                            {currentTime.toLocaleTimeString("en-US", {
                              hour12: false,
                              hour: "2-digit",
                              minute: "2-digit",
                              second: "2-digit",
                            })}{" "}
                            {currentTime
                              .toLocaleString("en-US", {
                                timeZoneName: "shortOffset",
                              })
                              .split(" ")
                              .pop()}
                          </span>
                        </>
                      ) : (
                        <svg
                          className="animate-spin -ml-1 mr-3 h-5 w-5 text-black dark:text-white"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                        >
                          <circle
                            className="opacity-25"
                            stroke="currentColor"
                            strokeWidth="4"
                            cx="12"
                            cy="12"
                            r="10"
                          ></circle>
                          <path
                            className="opacity-75"
                            fill="currentColor"
                            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                          ></path>
                        </svg>
                      )}
                    </Badge>
                  </div>
                </div>
              </BlurFade>
            </div>
          </div>
        </section>
      </div>
      <div className="relative lg:mt-0 w-full overflow-hidden h-32 lg:h-[120px] mt-10 md:mt-0">
        <div className="w-full h-32 lg:h-56 bg-[#e8ff85] sliderContainer left-0 right-0"></div>
        <div className="sliderContainer">
          <div ref={slider} className="slider">
            <p ref={firstText} className="capitalize font-bluu-next">
              ui designer - frontend engineer - gamer - ui designer - frontend
              engineer - gamer -
            </p>
            <p ref={secondText} className="capitalize font-bluu-next">
              ui designer - frontend engineer - gamer - ui designer - frontend
              engineer - gamer -
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
