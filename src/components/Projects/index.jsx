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
    info: `worked closely with the UI/UX team to prepare frontends for multiple ongoing projects, contributing to the development of various responsive web templates, including dashboards, e-commerce sites, travel websites, recipe platforms, food ordering apps, and event planners. Additionally, I played a key role in revamping entire websites using Webflow's no-code features. My technical skills in HTML, CSS, JavaScript, and React allowed me to develop user interfaces and implement features that aligned with design specifications. I also conducted code reviews, providing constructive feedback to team members to ensure high-quality code and adherence to best practices.`,
    id: 1,
    duration: "Jan 2023 - Oct 2023",
  },
  {
    title: "Codeavour",
    src: "officestudio.png",
    url: "https://codeavour.com/",
    color: "#8C8C8C",
    location: "Lahore",
    position: "Frontend Developer",
    info: "I was responsible for converting Figma, XD, and Photoshop designs into code, ensuring seamless transitions from design to development. I worked on the frontend of a high-traffic travel website using React, showcasing popular travel destinations and itineraries. Additionally, I designed an e-commerce platform with React, aiming to provide users with a smooth and intuitive shopping experience. I also participated in code reviews, collaborating with the team to maintain code quality. Another key project involved developing an internal back-office application to manage clients, meetings, leads, and reports. Throughout all these projects, I consistently gathered feedback from clients and incorporated it to improve functionality and user experience.",
    id: 2,
    duration: "Dec 2021 - Dec 2022",
  },
  {
    title: "Career Institute",
    src: "locomotive.png",
    url: "https://career.edu.pk/",
    color: "#01082488",
    location: "Faisalabad",
    position: "Intern - Frontend Developer",
    info: "I was responsible for maintaining the frontend of the institute's main website, ensuring it remained up-to-date and functional. I created approximately 50 frontend templates using HTML, CSS, and JavaScript, providing a solid foundation for various web pages. Additionally, I helped develop starter kits for frontend development, utilizing Bootstrap to streamline the design process. My role also involved meeting with clients to gather requirements and receive feedback on the templates, ensuring that the final designs aligned with their needs and expectations.",
    id: 3,
    duration: "Jun 2020 - Dec 2021",
  },
  {
    title: "DIGITAL SOFTS",
    src: "silencio.png",
    url: "https://www.digitalsofts.com/",
    color: "#706D63",
    location: "Faisalabad",
    position: "Intern - WordPress Developer",
    info: "Digital Softs delivered desktop and web applications across various domains, including retail, supply chain, manufacturing, hospitality, and education. I joined the team working on the web application for one of their products, where I focused on developing the frontend. My work involved building several modules, such as accounts, finance, reporting, and product and asset management, contributing to the overall functionality and user experience of the application.",
    id: 4,
    duration: "Jan 2019 - May 2020",
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
        &lt;work/&gt; Experience
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
