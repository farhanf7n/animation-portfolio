import React, { useLayoutEffect } from "react";
import { useRef, useEffect, useId, useState } from "react";
import gsap from "gsap/all";
import CustomHook from "../CustomHook";
import { NumberTicker } from "./NumberTicker";
import IntegrationsColumn from "./IntegrationsColumn";
import figmaIcon from "../../../public/figma-logo.svg";
import notionIcon from "../../../public/notion-logo.svg";
import slackIcon from "../../../public/slack-logo.svg";
import relumeIcon from "../../../public/relume-logo.svg";
import framerIcon from "../../../public/framer-logo.svg";
import githubLogo from "../../../public/github-logo.svg";

const integrations = [
  {
    name: "Figma",
    icon: figmaIcon,
    description: "Figma is a collaborative interface design tool.",
  },
  {
    name: "Notion",
    icon: notionIcon,
    description: "Notion is an all-in-one workspace for notes and docs.",
  },
  {
    name: "Slack",
    icon: slackIcon,
    description: "Slack is a powerful team communication platform.",
  },
  {
    name: "Relume",
    icon: relumeIcon,
    description: "Relume is a no-code website builder and design system.",
  },
  {
    name: "Framer",
    icon: framerIcon,
    description: "Framer is a professional website prototyping tool.",
  },
  {
    name: "GitHub",
    icon: githubLogo,
    description: "GitHub is the leading platform for code collaboration.",
  },
];

const Skills = () => {
  const component = useRef();
  const slider = useRef();
  const scrollTab = useRef();
  CustomHook(scrollTab);

  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      let panels = gsap.utils.toArray(".panel");
      gsap.to(panels, {
        xPercent: -100 * (panels.length - 1),
        ease: "none",
        scrollTrigger: {
          trigger: slider.current,
          pin: true,
          scrub: 1,
          snap: 1 / (panels.length - 1),
          end: () => "+=" + slider.current.offsetWidth,
          //   markers: true,
        },
      });
    }, component);
    return () => ctx.revert();
  });

  const [active, setActive] = useState(null);
  const id = useId();
  const ref = useRef(null);

  useEffect(() => {
    function onKeyDown(event) {
      if (event.key === "Escape") {
        setActive(false);
      }
    }

    if (active && typeof active === "object") {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [active]);

  return (
    <div ref={scrollTab} className="overflow-hidden">
      <div ref={component}>
        <div ref={slider} className="horizontal_container">
          <div className="description panel p-4 md:p-10 xl:p-20 flex justify-start items-center bg-[#18191b]">
            <div className="w-full h-full py-10 flex lg:items-center">
              <div className="grid lg:grid-cols-2 gap-4 w-full">
                <div className="flex items-center">
                  <div>
                    <h1 className="text-3xl md:text-4xl lg:text-6xl font-medium">
                      Creative & experienced <br className="hidden md:block" />{" "}
                      <span className="text-lime-400">Frontend Developer</span>
                    </h1>
                    <div className="flex flex-col">
                      <div className="gap-5 grid md:grid-cols-2 mt-6 md:mt-10 flex-1">
                        <div className="bg-[#e8ff85] text-[#18191b] py-4 xl:py-10 md:py-6 px-4 text-center rounded-lg">
                          <h1 className="text-3xl md:text-5xl font-bold">
                            <NumberTicker value={3} />+
                          </h1>
                          <p className="text-xl xl:text-2xl mt-6 font-medium">
                            Years of Experience
                          </p>
                        </div>
                        <div className="bg-[#e8ff85] text-[#18191b] py-4 xl:py-10 md:py-6 px-4 text-center rounded-lg">
                          <h1 className="text-3xl md:text-5xl font-bold">
                            <NumberTicker value={30} />+
                          </h1>
                          <p className="text-xl xl:text-2xl mt-6 font-medium">
                            Projects Done
                          </p>
                        </div>
                        <div className="bg-[#e8ff85] text-[#18191b] py-4 xl:py-10 md:py-6 px-4 text-center rounded-lg">
                          <h1 className="text-3xl md:text-5xl font-bold">
                            <NumberTicker value={13} />+
                          </h1>
                          <p className="text-xl xl:text-2xl mt-6 font-medium">
                            Clients Satisfied
                          </p>
                        </div>
                        <div className="bg-[#e8ff85] text-[#18191b] py-4 xl:py-10 md:py-6 px-4 text-center rounded-lg">
                          <h1 className="text-3xl md:text-5xl font-bold">
                            <NumberTicker value={8} />+
                          </h1>
                          <p className="text-xl xl:text-2xl mt-6 font-medium">
                            Companies Trusted
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex justify-start flex-col items-start md:flex">
                  <h1 className="text-3xl md:text-4xl lg:text-6xl font-medium">
                    Tools I <span className="text-lime-400">use</span>
                  </h1>
                  <div className="h-[400px] mt-8 md:mt-10 overflow-hidden grid md:grid-cols-2 gap-4 [mask-image:linear-gradient(to_bottom,transparent,black_10%,black_90%,transparent)]">
                    <IntegrationsColumn integrations={integrations} />
                    <IntegrationsColumn
                      integrations={integrations.slice().reverse()}
                      reverse={true}
                      className="hidden md:flex"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="description panel p-4 md:p-10 xl:p-20 flex justify-start items-center bg-white relative ">
            <video
              src="/1.mp4"
              autoPlay
              muted
              loop
              className="absolute top-6 right-6 rounded-full w-56 xl:w-96 hidden md:block"
            ></video>
            <div className="w-full h-full py-10">
              <div className="grid gap-4">
                <div>
                  <h1 className="text-3xl md:text-6xl font-bold text-[#18191b]">
                    About me
                  </h1>
                  <h1 className="md:text-3xl lg:text-6xl font-medium text-[#18191b] mt-6 xl:mt-10">
                    I build bridge between <br /> companies and customers
                  </h1>
                  <h1 className="md:text-xl xl:text-4xl text-[#18191b] mt-6 xl:mt-10">
                    "I help companies from all over the world with tailor-made
                    solutions. With each project, I push my work to new
                    horizons, always putting quality first. "
                  </h1>
                </div>
                <div className="mt-6">
                  <div>
                    <h1 className="text-3xl md:text-6xl font-bold text-[#18191b] mb-6">
                      I can help you with
                    </h1>
                  </div>
                  <div className="grid md:grid-cols-3 gap-6 text-[#18191b] mt-6 xl:mt-10">
                    <div>
                      <div className="bg-[#18191b] w-full h-1.5 rounded-full mb-3"></div>
                      <h1 className=" text-lg">
                        01. <br />{" "}
                        <span className="text-2xl lg:text-3xl font-medium">
                          Design
                        </span>
                      </h1>
                      <p className="md:mt-6 lg:text-base md:line-clamp-none line-clamp-2">
                        With a solid track record in designing websites and
                        apps, I deliver strong and user-friendly digital
                        designs. Solid company branding is the foundation of any
                        succesful website.
                      </p>
                    </div>
                    <div>
                      <div className="bg-[#18191b] w-full h-1.5 rounded-full mb-3"></div>
                      <h1 className=" text-lg">
                        02. <br />
                        <span className="text-2xl lg:text-3xl font-medium">
                          Development
                        </span>
                      </h1>
                      <p className="md:mt-6 lg:text-base md:line-clamp-none line-clamp-2">
                        I build scalable websites from scratch that fit
                        seamlessly with design. My focus is on micro animations,
                        transitions and interaction.
                      </p>
                    </div>
                    <div className="">
                      <div className="bg-[#18191b] w-full h-1.5 rounded-full mb-3"></div>
                      <h1 className=" text-lg">
                        03. <br />
                        <span className="text-2xl lg:text-3xl font-medium">
                          The full package
                        </span>
                      </h1>
                      <p className="md:mt-6 lg:text-base md:line-clamp-none line-clamp-2">
                        A complete website from concept to implementation,
                        that's what makes me stand out. My great sense for
                        design and my development skills enable me to create
                        kick-ass projects.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
