"use client";
import React from "react";
import styles from "./style.module.scss";
import {
  faCalendarAlt,
  faClipboardList,
  faMapLocationDot,
  faUserNinja,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
const Arrow = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="48" height="48" color="#ffffff" fill="none">
    <path d="M2.5 12C2.5 7.52166 2.5 5.28249 3.89124 3.89124C5.28249 2.5 7.52166 2.5 12 2.5C16.4783 2.5 18.7175 2.5 20.1088 3.89124C21.5 5.28249 21.5 7.52166 21.5 12C21.5 16.4783 21.5 18.7175 20.1088 20.1088C18.7175 21.5 16.4783 21.5 12 21.5C7.52166 21.5 5.28249 21.5 3.89124 20.1088C2.5 18.7175 2.5 16.4783 2.5 12Z" stroke="currentColor" stroke-width="1.5" />
    <path d="M14.1746 11.3517C14.8469 10.5618 16.2132 9.58336 15.97 9.11886M15.97 9.11886C16.1055 8.64518 14.7827 7.70887 14.1716 6.99463M15.97 9.11886C13.2147 9.06207 11.5289 9.37785 9.90163 10.9129C8.20681 12.5118 7.89136 14.2372 8.02853 17.0052" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
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
              className="arrow-svg"
              dangerouslySetInnerHTML={{ __html: Arrow }}
            />
          </div>
          <div className="mt-4 space-y-3 lg:hidden">
            <div className="flex justify-start items-center gap-4">
              <div className="work-info-icon">
                <FontAwesomeIcon icon={faMapLocationDot} />
              </div>
              <h1>{project.location}</h1>
            </div>
            <div className="flex justify-start items-center gap-4">
              <div className="work-info-icon">
                <FontAwesomeIcon icon={faUserNinja} />
              </div>
              <h1>{project.position}</h1>
            </div>
            <div className="flex justify-start items-start gap-4">
              <div className="work-info-icon">
                <FontAwesomeIcon icon={faClipboardList} />
              </div>
              <h1 className="line-clamp-3">{project.info}</h1>
            </div>
            <div className="flex justify-start items-center gap-4">
              <div className="work-info-icon">
                <FontAwesomeIcon icon={faCalendarAlt} />
              </div>
              <h1 className="">{project.duration}</h1>
            </div>
          </div>
        </div>
      </div>
    </a>
  );
}
