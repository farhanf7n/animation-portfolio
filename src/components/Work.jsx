import { motion } from "framer-motion";
import React, { useEffect, useRef } from "react";
import { ScrollTrigger } from "gsap/all";
import gsap from "gsap";

const Work = () => {
  const targetRef = useRef(null);
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: targetRef.current,
        start: "top top",
        end: "+=200%",
        scrub: true,
      },
    });

    tl.fromTo(
      ".card",
      { xPercent: "10%" },
      { xPercent: "-35%", ease: "power1.inOut" }
    );
  }, []);

  return (
    <div ref={targetRef} className="relative">
      <div className="title">Work</div>
      <div className="sticky top-0 flex h-screen items-center overflow-hidden">
        <motion.div className="flex gap-4">
          {cards.map((card, index) => {
            return <Card card={card} key={index} />;
          })}
        </motion.div>
      </div>
    </div>
  );
};

export default Work;

const Card = ({ card, index }) => {
  return (
    <div
      className="bg-[#122625b2] backdrop-blur-[50px] rounded-xl p-5 w-[400px] card"
      key={index}
    >
      <div>
        {/* <img className="w-28" src={card.url} alt="" /> */}
        <h1 className="text-white text-xl font-medium">{card.company}</h1>
      </div>
    </div>
  );
};

const cards = [
  {
    url: "/ndure.png",
    company: "Ndure",
    location: "Lahore",
    position: "Frontend Engineer",
    info: "I am a skilled React developer specializing in creating embedded apps for Shopify at Ndure, a leading e-commerce solutions provider. My role involves designing and developing custom applications that seamlessly integrate with Shopify stores, enhancing the overall functionality and user experience.",
    id: 1,
    duration: "December 2023 - Present",
  },
  {
    url: "/bwlogics.png",
    company: "BwLogics",
    location: "Lahore",
    position: "UI Developer",
    info: "I am a dedicated UI developer at Bwlogics, a dynamic tech company known for its innovative solutions. With a focus on crafting engaging user interfaces, I contribute to creating visually stunning and user-friendly digital experiences for our clients.",
    id: 2,
    duration: "April 2022 - November 2023",
  },
  {
    url: "/career.png",
    company: "Career Institute",
    location: "Faisalabad",
    position: "Intern - Frontend Developer",
    info: "Since 2010, Career Institute, a global tech training leader, has impacted 150,000+ students worldwide. As a Frontend Developer Intern at Career Institute, I am passionate about honing my skills in web development and contributing to innovative projects. I bring a strong foundation in HTML, CSS, and JavaScript, eager to learn and grow in a dynamic and collaborative environment.",
    id: 3,
    duration: "November 2021 - Feb 2022",
  },
  {
    url: "/wapexp.png",
    company: "Wapexp Institute",
    location: "Faisalabad",
    position: "Intern - WordPress Developer",
    info: "WAPEXP is a company for Software Development, Web Development, Graphics designing and SEO which delivers exclusive and finest solutions to the clients being top internet marketing firm. I am a WordPress Developer at Wapexp, a leading digital agency specializing in web development solutions. With expertise in WordPress CMS, I create customized websites and plugins, delivering seamless user experiences and driving online growth for clients.",
    id: 4,
    duration: "March 2021 - November 2022",
  },
  {
    url: "/ndure.png",
    company: "Ndure",
    location: "Lahore",
    position: "Frontend Engineer",
    info: "I am a skilled React developer specializing in creating embedded apps for Shopify at Ndure, a leading e-commerce solutions provider. My role involves designing and developing custom applications that seamlessly integrate with Shopify stores, enhancing the overall functionality and user experience.",
    id: 1,
    duration: "December 2023 - Present",
  },
  {
    url: "/bwlogics.png",
    company: "BwLogics",
    location: "Lahore",
    position: "UI Developer",
    info: "I am a dedicated UI developer at Bwlogics, a dynamic tech company known for its innovative solutions. With a focus on crafting engaging user interfaces, I contribute to creating visually stunning and user-friendly digital experiences for our clients.",
    id: 2,
    duration: "April 2022 - November 2023",
  },
  {
    url: "/career.png",
    company: "Career Institute",
    location: "Faisalabad",
    position: "Intern - Frontend Developer",
    info: "Since 2010, Career Institute, a global tech training leader, has impacted 150,000+ students worldwide. As a Frontend Developer Intern at Career Institute, I am passionate about honing my skills in web development and contributing to innovative projects. I bring a strong foundation in HTML, CSS, and JavaScript, eager to learn and grow in a dynamic and collaborative environment.",
    id: 3,
    duration: "November 2021 - Feb 2022",
  },
  {
    url: "/wapexp.png",
    company: "Wapexp Institute",
    location: "Faisalabad",
    position: "Intern - WordPress Developer",
    info: "WAPEXP is a company for Software Development, Web Development, Graphics designing and SEO which delivers exclusive and finest solutions to the clients being top internet marketing firm. I am a WordPress Developer at Wapexp, a leading digital agency specializing in web development solutions. With expertise in WordPress CMS, I create customized websites and plugins, delivering seamless user experiences and driving online growth for clients.",
    id: 4,
    duration: "March 2021 - November 2022",
  },
];
