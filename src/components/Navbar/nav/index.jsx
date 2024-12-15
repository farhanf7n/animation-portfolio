import React, { useEffect, useRef, useState } from "react";
import styles from "./style.module.scss";
import { motion } from "framer-motion";
import { menuSlide } from "../animation";
import Curve from "./Curve";
import gsap from "gsap";
import LocomotiveScroll from "locomotive-scroll";

export default function index({ isActive, handleActive }) {
  const locomotiveScroll = new LocomotiveScroll();
  const [show, setShow] = useState(null);
  const circleRef = useRef(null);
  // const pathname = usePathname();
  // const [selectedIndicator, setSelectedIndicator] = useState();
  let active = 3;
  const indicatorRefs = useRef([]);

  useEffect(() => {
    gsap.to(circleRef.current, {
      rotate: 0,
      duration: 1.5,
      ease: "expoScale(0.1, 8)",
    });
    gsap.to(indicatorRefs.current[active - 1], {
      opacity: 1,
    });
    console.log(indicatorRefs[active - 1]);
  }, [isActive]);

  const handleClick = () => {
    indicatorRefs.current.forEach((ref, index) => {
      ref.addEventListener("click", () => {
        gsap.to(indicatorRefs.current, {
          paddingBlock: "0",
          opacity: 0.3,
        });
        gsap.to(circleRef.current, {
          rotate: (3 - (index + 1)) * 10,
          duration: 1,
        });
        gsap.to(indicatorRefs.current[index], {
          paddingBlock: "0.8rem",
          opacity: 1,
        });
      });
    });
  };

  function scrollTo(params) {
    handleActive();
    const { target, options } = params;
    const $target = document.getElementById(`${target}`);
    console.log($target);
    locomotiveScroll.scrollTo($target, options);
  }
  return (
    <motion.div
      variants={menuSlide}
      initial="initial"
      animate="enter"
      exit="exit"
      className={styles.menu}
    >
      <div className={styles.body}>
        <div className="hidden md:block">
          <div className={styles.indicator}>
            <button
              className="cubic-btn opacity-30"
              onClick={handleClick}
              ref={(el) => (indicatorRefs.current[0] = el)}
            >
              <span data-text="1">
                <p className="inner">1</p>
              </span>
            </button>
            <button
              className="cubic-btn opacity-30"
              onClick={handleClick}
              ref={(el) => (indicatorRefs.current[1] = el)}
            >
              <span data-text="2">
                <p className="inner">2</p>
              </span>
            </button>
            <button
              className="cubic-btn opacity-30"
              onClick={handleClick}
              ref={(el) => (indicatorRefs.current[2] = el)}
            >
              <span data-text="3">
                <p className="inner">3</p>
              </span>
            </button>
            <button
              className="cubic-btn opacity-30"
              onClick={handleClick}
              ref={(el) => (indicatorRefs.current[3] = el)}
            >
              <span data-text="4">
                <p className="inner">4</p>
              </span>
            </button>
            <button
              className="cubic-btn opacity-30"
              onClick={handleClick}
              ref={(el) => (indicatorRefs.current[4] = el)}
            >
              <span data-text="5">
                <p className="inner">5</p>
              </span>
            </button>
          </div>
        </div>
        <div className="absolute left-[10%] top-1/2 -translate-y-1/2">
          {show === 1 && <img src="/ordinary-day.gif" alt="" />}
          {show === 2 && <img src="/Programming.gif" alt="" />}
          {show === 3 && <img src="/Report.gif" alt="" />}
          {show === 4 && <img src="/work.gif" alt="" />}
          {show === 5 && <img src="/Emails.gif" alt="" />}
        </div>
        <div className={styles.circle} ref={circleRef}>
          <div className={`${styles.stripe} ${styles.str1}`}>
            <div className={styles.first}></div>
            <div className={styles.second}>
              <div className={styles.smCircle}></div>
              <a
                className="cursor-pointer"
                onClick={() => scrollTo({ target: "home" })}
                onMouseEnter={() => {
                  setShow(1);
                }}
                onMouseLeave={() => {
                  setShow(null);
                }}
              >
                <h1>Home</h1>
              </a>
            </div>
          </div>
          <div className={`${styles.stripe} ${styles.str2}`}>
            <div className={styles.first}></div>
            <div className={styles.second}>
              <div className={styles.smCircle}></div>
              <a
                className="cursor-pointer"
                onClick={() => scrollTo({ target: "skills" })}
                onMouseEnter={() => {
                  setShow(2);
                }}
                onMouseLeave={() => {
                  setShow(null);
                }}
              >
                <h1>Skills</h1>
              </a>
            </div>
          </div>
          <div className={`${styles.stripe} ${styles.str3}`}>
            <div className={styles.first}></div>
            <div className={styles.second}>
              <div className={styles.smCircle}></div>
              <a
                className="cursor-pointer"
                onClick={() => scrollTo({ target: "projects" })}
                onMouseEnter={() => {
                  setShow(3);
                }}
                onMouseLeave={() => {
                  setShow(null);
                }}
              >
                <h1>Projects</h1>
              </a>
            </div>
          </div>
          <div className={`${styles.stripe} ${styles.str4}`}>
            <div className={styles.first}></div>
            <div className={styles.second}>
              <div className={styles.smCircle}></div>
              <a
                className="cursor-pointer"
                onClick={() => scrollTo({ target: "work" })}
                onMouseEnter={() => {
                  setShow(4);
                }}
                onMouseLeave={() => {
                  setShow(null);
                }}
              >
                <h1>Work</h1>
              </a>
            </div>
          </div>
          <div className={`${styles.stripe} ${styles.str5}`}>
            <div className={styles.first}></div>
            <div className={styles.second}>
              <div className={styles.smCircle}></div>
              <a
                className="cursor-pointer"
                onClick={() => scrollTo({ target: "contact" })}
                onMouseEnter={() => {
                  setShow(5);
                }}
                onMouseLeave={() => {
                  setShow(null);
                }}
              >
                <h1>Contact</h1>
              </a>
            </div>
          </div>
        </div>
        {/* <div
          // onMouseLeave={() => {
          //   setSelectedIndicator(pathname);
          // }}
          className={styles.nav}
        >
          <div className={styles.header}>
            <p>Navigation</p>
          </div>
          {navItems.map((data, index) => {
            return (
              <Link
                key={index}
                data={{ ...data, index }}
                // isActive={selectedIndicator == data.href}
                // setSelectedIndicator={setSelectedIndicator}
              ></Link>
            );
          })}
        </div>
        <Footer /> */}
      </div>
      <Curve />
    </motion.div>
  );
}
