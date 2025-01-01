import React, { useState, useRef } from "react";
import CustomHook from "./CustomHook";
import { motion } from "framer-motion";
import work from "../data/work.json";

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
    <div className="bg-white py-24">
      <section className="projects" ref={scrollTab} id="projects">
        <div
          className="title font-bluu-next uppercase"
          ref={(el) => el && divs.current.push(el)}
        >
          Stuff I've &lt;Built/&gt;
        </div>

        <div className="list">
          {work.map((work, key) => (
            <>
              {/* Project Item */}
              <div
                className="item flex justify-between"
                key={key}
                ref={(el) => el && divs.current.push(el)}
              >
                {/* Image Side */}
                <div className="image-side relative">
                  <motion.img
                    src={work.img}
                    alt=""
                    className="shadow-2xl rounded-12 md:rounded-24 saturate-0 transition-all duration-200 ease-in-out hover:saturate-100 lg:h-[430px] lg:w-[590px] lg:object-cover rounded-xl"
                  />
                </div>

                {/* Content Side */}
                <div className="content-side">
                  <span class="text-gray-500 font-bluu-next">{work.type}</span>
                  <h3 className="text-black font-semibold text-4xl my-3">
                    {work.name}
                  </h3>
                  <p className="text-[#18191b]">{work.info}</p>
                  <div class="text-gray-500 text-14 my-4 leading-normal flex gap-3">
                    {work.tags.map((tag) => {
                      return <span>{tag}</span>;
                    })}
                  </div>

                  {work.links.map((link) => {
                    return (
                      <div className="flex flex-wrap gap-5 mt-7">
                        {link.website && (
                          <a
                            href={link.website}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="is-fancy inline-block hover:opacity-75 transition-opacity cursor-pointer"
                          >
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="20"
                              height="20"
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="#000000"
                              stroke-width="1.75"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              class="lucide lucide-external-link"
                            >
                              <path d="M15 3h6v6" />
                              <path d="M10 14 21 3" />
                              <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                            </svg>
                          </a>
                        )}
                        {link.twitter && (
                          <a
                            href={link.website}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="is-fancy inline-block hover:opacity-75 transition-opacity cursor-pointer"
                          >
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 24 24"
                              width="20"
                              height="20"
                              color="#000000"
                              fill="none"
                            >
                              <path
                                d="M3 21L10.5484 13.4516M21 3L13.4516 10.5484M13.4516 10.5484L8 3H3L10.5484 13.4516M13.4516 10.5484L21 21H16L10.5484 13.4516"
                                stroke="currentColor"
                                stroke-width="1.5"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                              />
                            </svg>
                          </a>
                        )}
                        {link.github && (
                          <a
                            href={link.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="is-fancy inline-block hover:opacity-75 transition-opacity cursor-pointer"
                          >
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 24 24"
                              width="20"
                              height="20"
                              color="#000000"
                              fill="none"
                            >
                              <path
                                d="M10 20.5675C6.57143 21.7248 3.71429 20.5675 2 17"
                                stroke="currentColor"
                                stroke-width="1.5"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                              />
                              <path
                                d="M10 22V18.7579C10 18.1596 10.1839 17.6396 10.4804 17.1699C10.6838 16.8476 10.5445 16.3904 10.1771 16.2894C7.13394 15.4528 5 14.1077 5 9.64606C5 8.48611 5.38005 7.39556 6.04811 6.4464C6.21437 6.21018 6.29749 6.09208 6.31748 5.9851C6.33746 5.87813 6.30272 5.73852 6.23322 5.45932C5.95038 4.32292 5.96871 3.11619 6.39322 2.02823C6.39322 2.02823 7.27042 1.74242 9.26698 2.98969C9.72282 3.27447 9.95075 3.41686 10.1515 3.44871C10.3522 3.48056 10.6206 3.41384 11.1573 3.28041C11.8913 3.09795 12.6476 3 13.5 3C14.3524 3 15.1087 3.09795 15.8427 3.28041C16.3794 3.41384 16.6478 3.48056 16.8485 3.44871C17.0493 3.41686 17.2772 3.27447 17.733 2.98969C19.7296 1.74242 20.6068 2.02823 20.6068 2.02823C21.0313 3.11619 21.0496 4.32292 20.7668 5.45932C20.6973 5.73852 20.6625 5.87813 20.6825 5.9851C20.7025 6.09207 20.7856 6.21019 20.9519 6.4464C21.6199 7.39556 22 8.48611 22 9.64606C22 14.1077 19.8661 15.4528 16.8229 16.2894C16.4555 16.3904 16.3162 16.8476 16.5196 17.1699C16.8161 17.6396 17 18.1596 17 18.7579V22"
                                stroke="currentColor"
                                stroke-width="1.5"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                              />
                            </svg>
                          </a>
                        )}
                        {link.dribbble && (
                          <a
                            href={link.dribbble}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="is-fancy inline-block hover:opacity-75 transition-opacity cursor-pointer"
                          >
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 24 24"
                              width="20"
                              height="20"
                              color="#000000"
                              fill="none"
                            >
                              <circle
                                cx="12"
                                cy="12"
                                r="10"
                                stroke="currentColor"
                                stroke-width="1.5"
                              />
                              <path
                                d="M22 13.2644C21.0732 13.0906 20.12 13 19.1472 13C13.7948 13 9.03435 15.7425 6 20"
                                stroke="currentColor"
                                stroke-width="1.5"
                                stroke-linejoin="round"
                              />
                              <path
                                d="M19 5C15.8705 8.66742 11.1679 11 5.90962 11C4.56437 11 3.25548 10.8473 2 10.5587"
                                stroke="currentColor"
                                stroke-width="1.5"
                                stroke-linejoin="round"
                              />
                              <path
                                d="M14.6178 22C14.8684 20.786 15 19.5287 15 18.2407C15 11.9247 11.8343 6.34645 7 3"
                                stroke="currentColor"
                                stroke-width="1.5"
                                stroke-linejoin="round"
                              />
                            </svg>
                          </a>
                        )}
                        {link.figma && (
                          <a
                            href={link.website}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="is-fancy inline-block hover:opacity-75 transition-opacity cursor-pointer"
                          >
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 24 24"
                              width="20"
                              height="20"
                              color="#000000"
                              fill="none"
                            >
                              <circle
                                cx="15"
                                cy="12"
                                r="3"
                                stroke="currentColor"
                                stroke-width="1.5"
                                stroke-linejoin="round"
                              />
                              <path
                                d="M9 21C10.6569 21 12 19.6569 12 18V15H9C7.34315 15 6 16.3431 6 18C6 19.6569 7.34315 21 9 21Z"
                                stroke="currentColor"
                                stroke-width="1.5"
                                stroke-linejoin="round"
                              />
                              <path
                                d="M12 9V15H9C7.34315 15 6 13.6569 6 12C6 10.3431 7.34315 9 9 9H12Z"
                                stroke="currentColor"
                                stroke-width="1.5"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                              />
                              <path
                                d="M12 3V9H9C7.34315 9 6 7.65685 6 6C6 4.34315 7.34315 3 9 3H12Z"
                                stroke="currentColor"
                                stroke-width="1.5"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                              />
                              <path
                                d="M12 3V9H15C16.6569 9 18 7.65685 18 6C18 4.34315 16.6569 3 15 3H12Z"
                                stroke="currentColor"
                                stroke-width="1.5"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                              />
                            </svg>
                          </a>
                        )}
                      </div>
                    );
                  })}
                </div>
              </div>
            </>
          ))}
        </div>
      </section>
    </div>
  );
}
export default Projects;
