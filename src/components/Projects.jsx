import React, { useState, useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPersonCircleQuestion,
  faEarthAmericas,
} from "@fortawesome/free-solid-svg-icons";
import CustomHook from "./CustomHook";
import Magnetic from "./common/Magnetic";

function Projects() {
  const [listProjects] = useState([
    {
      name: "Pushi — Freelance Martek Place.",
      des: "It should display what all you need to offer – different gigs, your revel in, schooling, skills, certifications, and extra. It should spotlight how prolific you are with deliveries, what other consumers think about you, your verbal exchange frequency, and most significantly – in case you are the proper individual for the job.",
      mission:
        "Empowering freelance professionals by providing a dynamic marketplace for their skills and services.",
      language: "HTML5, CSS3, Tailwind css, JS, Laravel & CodeIgniter",
      images: "/project-1.png",
      url: "https://pushiii.com/",
    },
    {
      name: "Morning Edge - Ai",
      des: "Embark on your AI journey with Morningedge AI. Contact us to unlock the full potential of AI and automation for your business.Our suite of services includes Automated Workflow Technology, AI Consultancy, and Chatbot Development. Each service is designed to seamlessly integrate with your unique business needs. Learn More",
      mission:
        "Empowering freelance professionals by providing a dynamic marketplace for their skills and services.",
      language: "HTML5, CSS3, Tailwind css, JS, Alpine.js Laravel & CodeIgnite",
      images: "/project-2.png",
      url: "https://morningedge.ai/",
    },
    {
      name: "Peeksta",
      des: "Peeksta is your go-to platform for TikTok ad management, offering cutting-edge tools and strategies to maximize your brand's reach and engagement on the popular social media platform. From campaign creation to performance analytics, we've got you covered for TikTok advertising success!",
      mission:
        "The mission of Peeksta is to empower businesses and marketers to leverage the full potential of TikTok advertising.",
      language: "HTML5, CSS3, Tailwind css, JS, Alpine.js Laravel & CodeIgnite",
      images: "/project-3.png",
      url: "https://peeksta.com/?is_affiliate=1",
    },
    {
      name: "Seller Count",
      des: "Embark on your AI journey with Morningedge AI. Contact us to unlock the full potential of AI and automation for your business.Our suite of services includes Automated Workflow Technology, AI Consultancy, and Chatbot Development. Each service is designed to seamlessly integrate with your unique business needs. Learn More",
      mission:
        "Empowering freelance professionals by providing a dynamic marketplace for their skills and services.",
      language: "HTML5, CSS3, Tailwind css, JS, Alpine.js Laravel & CodeIgnite",
      images: "/project-4.png",
      url: "https://sellercount.com/",
    },
    {
      name: "Blamer Case",
      des: "Embark on your AI journey with Morningedge AI. Contact us to unlock the full potential of AI and automation for your business.Our suite of services includes Automated Workflow Technology, AI Consultancy, and Chatbot Development. Each service is designed to seamlessly integrate with your unique business needs. Learn More",
      mission:
        "Empowering freelance professionals by providing a dynamic marketplace for their skills and services.",
      language: "HTML5, CSS3, Tailwind css, JS, Alpine.js Laravel & CodeIgnite",
      images: "/project-5.png",
      url: "https://balmer-case.netlify.app/",
    },
    {
      name: "Winnarz",
      des: "This landing page is specifically crafted to seamlessly integrate with TikTok's advertising platform, allowing businesses to create compelling ad campaigns that drive traffic and conversions. The landing page serves as an extension of the ad itself, providing a visually stunning and interactive experience for users who click on the ad.",
      mission:
        "Empowering freelance professionals by providing a dynamic marketplace for their skills and services.",
      language: "HTML5, CSS3, Tailwind css, JS, Alpine.js Laravel & CodeIgnite",
      images: "/project-6.png",
      url: "https://winnarz.com/",
    },
    {
      name: "Sjinox",
      des: "This landing page is specifically crafted to seamlessly integrate with TikTok's advertising platform, allowing businesses to create compelling ad campaigns that drive traffic and conversions. The landing page serves as an extension of the ad itself, providing a visually stunning and interactive experience for users who click on the ad.",
      mission:
        "Empowering freelance professionals by providing a dynamic marketplace for their skills and services.",
      language: "HTML5, CSS3, Tailwind css, JS, Alpine.js Laravel & CodeIgnite",
      images: "/project-7.png",
      url: "https://www.sjinox.com/",
    },
  ]);
  const divs = useRef([]);
  const scrollTab = useRef();
  CustomHook(scrollTab, divs);
  return (
    <div className="bg-white rounded-t-3xl">
      <section className="projects" ref={scrollTab} id="projects">
        <div className="title" ref={(el) => el && divs.current.push(el)}>
          Projects
        </div>
        <div
          className="text-center text-3xl text-black"
          ref={(el) => el && divs.current.push(el)}
        >
          {/* 20 */}A selection of recent projects.
        </div>
        <div className="list">
          {listProjects.map((value, key) => (
            <>
              <div
                className="item"
                key={key}
                ref={(el) => el && divs.current.push(el)}
              >
                <div className="images">
                  <img className="h-full" src={value.images} alt="" />
                </div>

                <div className="content">
                  <h3>{value.name}</h3>
                  <div className="des">{value.des}</div>
                  <div className="mission">
                    <div className="">
                      <FontAwesomeIcon icon={faPersonCircleQuestion} />
                    </div>
                    <div>
                      <h4 className="text-black font-semibold">Mission</h4>
                      <div className="des">{value.mission}</div>
                    </div>
                  </div>
                  <div className="mission">
                    <div>
                      <FontAwesomeIcon icon={faEarthAmericas} />
                    </div>
                    <div>
                      <h4 className="text-black font-semibold">Languages</h4>
                      <div className="des">{value.language}</div>
                    </div>
                  </div>
                </div>
              </div>
              <Magnetic>
                <a
                  href={value.url}
                  className="mb-20 mx-auto"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <button
                    className="cubic-btn"
                    ref={(el) => el && divs.current.push(el)}
                  >
                    <span data-text="Go">
                      <p className="inner">View Website</p>
                    </span>
                  </button>
                </a>
              </Magnetic>
            </>
          ))}
        </div>
      </section>
    </div>
  );
}
export default Projects;
