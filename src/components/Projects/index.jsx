import styles from "./style.module.scss";
import { useState, useEffect, useRef } from "react";
import Project from "./components/project";
import { motion } from "framer-motion";
import gsap from "gsap";
import {
  faMapLocation,
  faBriefcase,
  faLaptopCode,
  faCalendar,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const projects = [
  {
    title: "MoonBox",
    url: "https://www.moonbox.ae/",
    src: "moonbox.png",
    color: "#000000",
    location: "Dubai",
    position: "Frontend Engineer",
    info: `Worked with several high-profile clients and delivered several projects in collaboration with the other team members. Always exceeded the client's expectations and generated positive feedback which resulted in securing repeat business and enhanced the company's reputation as a trusted service provider in the industry. Worked closely with the UI/UX team in preparing the frontends for multiple different ongoing projects. Developed several responsive web templates including dashboards, e-commerce templates, travel website, recipe website, Food ordering app and an event planner to name a few. Utilized HTML, CSS, JavaScript, and React to develop user interfaces and implement features in accordance with design specifications. Conducted code reviews and offered constructive feedback to team members, ensuring code quality and adherence to best practices.`,
    id: 1,
    duration: "December 2023 - Present",
  },
  {
    title: "Bwlogics",
    src: "officestudio.png",
    url: "https://bwlogics.com/",
    color: "#8C8C8C",
    location: "Lahore",
    position: "UI Developer",
    info: "I am a dedicated UI developer at Bwlogics, a dynamic tech company known for its innovative solutions. With a focus on crafting engaging user interfaces, I contribute to creating visually stunning and user-friendly digital experiences for our clients.",
    id: 2,
    duration: "April 2022 - November 2023",
  },
  {
    title: "Career Institute",
    src: "locomotive.png",
    url: "https://career.edu.pk/",
    color: "#01082488",
    location: "Faisalabad",
    position: "Intern - Frontend Developer",
    info: "Since 2010, Career Institute, a global tech training leader, has impacted 150,000+ students worldwide. As a Frontend Developer Intern at Career Institute, I am passionate about honing my skills in web development and contributing to innovative projects. I bring a strong foundation in HTML, CSS, and JavaScript, eager to learn and grow in a dynamic and collaborative environment.",
    id: 3,
    duration: "November 2021 - Feb 2022",
  },
  {
    title: "Wapexp",
    src: "silencio.png",
    url: "https://wapexp.com/",
    color: "#706D63",
    location: "Faisalabad",
    position: "Intern - WordPress Developer",
    info: "WAPEXP is a company for Software Development, Web Development, Graphics designing and SEO which delivers exclusive and finest solutions to the clients being top internet marketing firm. I am a WordPress Developer at Wapexp, a leading digital agency specializing in web development solutions. With expertise in WordPress CMS, I create customized websites and plugins, delivering seamless user experiences and driving online growth for clients.",
    id: 4,
    duration: "March 2021 - November 2022",
  },
];

const scaleAnimation = {
  initial: { scale: 0, x: "-50%", y: "-50%" },
  enter: {
    scale: 1,
    x: "-50%",
    y: "-50%",
    transition: { duration: 0.4, ease: [0.76, 0, 0.24, 1] },
  },
  closed: {
    scale: 0,
    x: "-50%",
    y: "-50%",
    transition: { duration: 0.4, ease: [0.32, 0, 0.67, 0] },
  },
};

export default function Home() {
  const [modal, setModal] = useState({ active: false, index: 0 });
  const { active, index } = modal;
  const modalContainer = useRef(null);
  const cursor = useRef(null);
  const cursorLabel = useRef(null);

  let xMoveContainer = useRef(null);
  let yMoveContainer = useRef(null);
  let xMoveCursor = useRef(null);
  let yMoveCursor = useRef(null);
  let xMoveCursorLabel = useRef(null);
  let yMoveCursorLabel = useRef(null);

  useEffect(() => {
    //Move Container
    xMoveContainer.current = gsap.quickTo(modalContainer.current, "left", {
      duration: 0.8,
      ease: "power3",
    });
    yMoveContainer.current = gsap.quickTo(modalContainer.current, "top", {
      duration: 0.8,
      ease: "power3",
    });
    //Move cursor
    xMoveCursor.current = gsap.quickTo(cursor.current, "left", {
      duration: 0.5,
      ease: "power3",
    });
    yMoveCursor.current = gsap.quickTo(cursor.current, "top", {
      duration: 0.5,
      ease: "power3",
    });
    //Move cursor label
    xMoveCursorLabel.current = gsap.quickTo(cursorLabel.current, "left", {
      duration: 0.45,
      ease: "power3",
    });
    yMoveCursorLabel.current = gsap.quickTo(cursorLabel.current, "top", {
      duration: 0.45,
      ease: "power3",
    });
  }, []);

  const moveItems = (x, y) => {
    xMoveContainer.current(x);
    yMoveContainer.current(y);
    xMoveCursor.current(x);
    yMoveCursor.current(y);
    xMoveCursorLabel.current(x);
    yMoveCursorLabel.current(y);
  };
  const manageModal = (active, index, x, y) => {
    moveItems(x, y);
    setModal({ active, index });
  };

  return (
    <section
      onMouseMove={(e) => {
        moveItems(e.clientX, e.clientY);
      }}
      className={styles.projects}
    >
      <div className="title pt-24 mb-20 font-bold font-bluu-next uppercase">
        &lt;work/&gt; Experince
      </div>
      <div className={styles.body}>
        {projects.map((project, index) => {
          return (
            <Project
              index={index}
              project={project}
              manageModal={manageModal}
              key={index}
            />
          );
        })}
      </div>
      <>
        <div className="hidden lg:block">
          <motion.div
            ref={modalContainer}
            variants={scaleAnimation}
            initial="initial"
            animate={active ? "enter" : "closed"}
            className={styles.modalContainer}
          >
            <div
              style={{ top: index * -100 + "%" }}
              className={styles.modalSlider}
            >
              {projects.map((project, index) => {
                const { src, color } = project;
                return (
                  <div
                    className={styles.modal}
                    style={{ backgroundColor: color }}
                    key={`modal_${index}`}
                  >
                    <div className="p-4 space-y-3">
                      <div className="flex justify-start items-center gap-4">
                        <div className="work-info-icon">
                          <FontAwesomeIcon icon={faMapLocation} />
                        </div>
                        <h1>{project.location}</h1>
                      </div>
                      <div className="flex justify-start items-center gap-4">
                        <div className="work-info-icon">
                          <FontAwesomeIcon icon={faLaptopCode} />
                        </div>
                        <h1>{project.position}</h1>
                      </div>
                      <div className="flex justify-start items-start gap-4">
                        <div className="work-info-icon">
                          <FontAwesomeIcon icon={faBriefcase} />
                        </div>
                        <h1 className="line-clamp-3">{project.info}</h1>
                      </div>
                      <div className="flex justify-start items-center gap-4">
                        <div className="work-info-icon">
                          <FontAwesomeIcon icon={faCalendar} />
                        </div>
                        <h1 className="line-clamp-3">{project.duration}</h1>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </motion.div>
        </div>
      </>
    </section>
  );
}
