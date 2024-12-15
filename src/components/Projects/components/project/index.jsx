"use client";
import React from "react";
import styles from "./style.module.scss";
import {
  faMapLocation,
  faBriefcase,
  faLaptopCode,
  faCalendar,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
const Arrow = ` <svg
width="40px"
height="40px"
viewBox="0 0 14 14"
version="1.1"
xmlns="http://www.w3.org/2000/svg"
xmlns:xlink="http://www.w3.org/1999/xlink"
>
<title>arrow-up-right</title>
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
export default function index({ index, project, manageModal }) {
  return (
    <a href={project.url} target="_blank" className="w-full">
      <div
        onMouseEnter={(e) => {
          manageModal(true, index, e.clientX, e.clientY);
        }}
        onMouseLeave={(e) => {
          manageModal(false, index, e.clientX, e.clientY);
        }}
        className={styles.project}
      >
        <div className="w-full">
          <div className="flex justify-between items-center">
            <div>
              <p className="text-xl">0{index + 1}.</p>
              <h2>{project.title}</h2>
            </div>
            <div
              className="arrow-svg -rotate-90"
              dangerouslySetInnerHTML={{ __html: Arrow }}
            />
          </div>
          <div className="mt-4 space-y-3 lg:hidden">
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
              <h1 className="">{project.duration}</h1>
            </div>
          </div>
        </div>
      </div>
    </a>
  );
}
