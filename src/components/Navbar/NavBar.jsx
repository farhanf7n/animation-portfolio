import React, { useState } from "react";
import { AnimatePresence } from "framer-motion";
import Magnetic from "../common/Magnetic";
import Nav from "./nav";
import { twMerge } from "tailwind-merge";
import styles from "./style.module.scss";

const NavBar = () => {
  const [isActive, setIsActive] = useState(false);

  const handleActive = () => {
    setIsActive(!isActive);
  };

  return (
    <>
      <Magnetic>
        <div className={styles.headerButtonContainer}>
          <button
            onClick={() => setIsActive(!isActive)}
            className={styles.button}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="feather feather-menu"
            >
              <line
                x1="3"
                y1="6"
                x2="21"
                y2="6"
                className={twMerge(
                  "origin-left transition",
                  isActive && "rotate-45 -translate-y-1"
                )}
              ></line>
              <line
                x1="3"
                y1="12"
                x2="21"
                y2="12"
                className={twMerge("transition", isActive && "opacity-0")}
              ></line>
              <line
                x1="3"
                y1="18"
                x2="21"
                y2="18"
                className={twMerge(
                  "origin-left transition",
                  isActive && "-rotate-45 translate-y-1"
                )}
              ></line>
            </svg>
          </button>
        </div>
      </Magnetic>
      <AnimatePresence mode="wait">
        {isActive && <Nav isActive={isActive} handleActive={handleActive} />}
      </AnimatePresence>
    </>
  );
};

export default NavBar;
