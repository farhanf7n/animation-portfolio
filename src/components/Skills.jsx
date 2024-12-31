import React, { useRef, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { motion } from "framer-motion";
import ShadowText from "./common/Animation/ShadowText";
import {
  faReact,
  faHtml5,
  faCss3,
  faJs,
  faLaravel,
  faFigma,
  faNodeJs,
  faShopify,
  faGithub,
  faWordpress,
  faSass,
  faBootstrap,
} from "@fortawesome/free-brands-svg-icons";

function Skills() {
  const divs = useRef([]);
  const [listSkills] = useState([
    {
      name: "HTML",
      des: "Unlocking the Magic of HTML, I craft interactive web experiences with precision, weaving tags into seamless designs. From structuring content to enhancing user interactions, HTML is my playground where creativity meets functionality. With a keen eye for detail, I transform concepts into captivating digital realities, ensuring every line of code speaks volumes about my expertise.",
      icon: faHtml5,
    },
    {
      name: "CSS",
      des: "CSS is my styling symphony, orchestrating elements into visually stunning compositions that captivate and engage. With a flair for design and pixel-perfect precision, I transform websites into immersive visual experiences that resonate with users. From sleek layouts to responsive designs, CSS is my tool of choice to elevate web aesthetics and create memorable digital journeys",
      icon: faCss3,
    },
    {
      name: "SASS",
      des: "Sass is my secret sauce, streamlining CSS workflows with its elegance and efficiency. With Sass, I craft modular stylesheets that are easy to maintain and scale, saving time and effort. Sass empowers me to create beautifully organized and adaptable styles, ensuring a seamless development experience and pixel-perfect designs.",
      icon: faSass,
    },
    {
      name: "Figma",
      des: "Figma is my design sanctuary, where ideas take shape and creativity knows no bounds. With Figma, I bring visions to life, crafting pixel-perfect prototypes and intuitive user interfaces. From wireframes to high-fidelity designs, Figma's collaborative features and powerful tools empower me to turn concepts into captivating digital experiences that inspire and delight.",
      icon: faFigma,
    },
    {
      name: "Bootstrap",
      des: "Bootstrap is my toolkit for rapid front-end development, offering a robust framework to build responsive and visually appealing websites with ease. With Bootstrap's grid system and pre-designed components, I create sleek layouts and ensure cross-browser compatibility, saving time and delivering consistent user experiences.",
      icon: faBootstrap,
    },
    {
      name: "Javascript",
      des: "JavaScript is my coding canvas, enabling me to add interactivity and dynamic functionality to web pages with finesse. With JavaScript, I create engaging user experiences, from animations to form validations, bringing ideas to life and enhancing user interactions. I push the boundaries of web development, delivering seamless, responsive, and interactive experiences.",
      icon: faJs,
    },
    {
      name: "ReactJs",
      des: "React is my frontend powerhouse, revolutionizing how I build dynamic and interactive user interfaces. I craft scalable and efficient applications that respond seamlessly to user interactions. Leveraging state management with Redux or Context API, I create immersive and data-driven experiences that elevate web development to new heights.",
      icon: faReact,
    },
    {
      name: "Laravel",
      des: "Laravel is my backend mastery, simplifying complex tasks with its elegant syntax and robust features. With Laravel's MVC architecture and artisan commands, I create scalable and secure web applications effortlessly. Leveraging Laravel's rich ecosystem of packages, I streamline development and deliver high-performance solutions that exceed client expectations.",
      icon: faLaravel,
    },
    {
      name: "Nodejs",
      des: "Node.js is my backend engine, powering scalable and real-time web applications with its non-blocking, event-driven architecture. With Node.js, I build fast and efficient server-side solutions, handling concurrent connections and data-intensive tasks with ease.",
      icon: faNodeJs,
    },
    {
      name: "Shopify",
      des: "Shopify is my e-commerce playground, empowering businesses to thrive in the digital marketplace with its robust platform and intuitive tools. With Shopify, I create stunning online stores that are easy to manage and scale, offering a seamless shopping experience for customers.",
      icon: faShopify,
    },
    {
      name: "WordPress",
      des: "WordPress is my content creation canvas, empowering me to build beautiful and functional websites with ease. With WordPress, I craft customizable and scalable solutions for clients, from blogs to e-commerce stores.",
      icon: faWordpress,
    },
    {
      name: "GitHub",
      des: "GitHub is my coding sanctuary, where collaboration meets innovation and projects come to life. With GitHub, I manage version control seamlessly, ensuring code quality and collaboration across teams. Leveraging pull requests and issue tracking, I streamline development workflows and drive project success..",
      icon: faGithub,
    },
  ]);

  const fadeInAnimationVariants = {
    initial: {
      opacity: 0,
      y: 100,
    },
    animate: (key) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: 0.05 * key,
      },
    }),
  };
  return (
    <section className="skills my-20 md:my-48" id="skills">
      <div className="title font-bluu-next"></div>
      <div className="des mx-auto">{/* 20 */}</div>
      <div>
        <ShadowText
          className="text-center"
          paragraph={
            "I create UI designs, then code them, simplifying problems with my hands' magic and creativity. Where the magic happens:"
          }
        />
      </div>
      <div className="list flex w-full flex-wrap justify-between gap-10 px-5 sm:justify-center sm:px-0 lg:justify-between">
        {listSkills.map((value, key) => (
          <motion.div
            className={"item "}
            key={key}
            variants={fadeInAnimationVariants}
            initial="initial"
            whileInView="animate"
            viewport={{
              once: true,
            }}
            custom={key}
          >
            <FontAwesomeIcon className="text-5xl" icon={value.icon} />
          </motion.div>
        ))}
      </div>
    </section>
  );
}

export default Skills;
