import styles from "./style.module.scss";
import { motion } from "framer-motion";
import { slide, scale } from "../../animation";
import LocomotiveScroll from "locomotive-scroll";

export default function Index({ data, isActive }) {
  const { title, href, index } = data;
  const locomotiveScroll = new LocomotiveScroll();

  function scrollTo(params) {
    dispatch(toggleIsActive(false));
    const { target, options } = params;

    const $target = document.getElementById(`${target}`);

    console.log($target);
    locomotiveScroll.scrollTo($target, options);
  }

  return (
    <motion.div
      className={styles.link}
      // onMouseEnter={() => {
      //   setSelectedIndicator(href);
      // }}
      custom={index}
      variants={slide}
      initial="initial"
      animate="enter"
      exit="exit"
    >
      <motion.div
        variants={scale}
        animate={isActive ? "open" : "closed"}
        className={styles.indicator}
      ></motion.div>
      <p
        className="cursor-pointer"
        // href={href}
        onClick={() => {
          scrollTo({ target: href, options: { offset: -100 } });
          // setSelectedIndicator(href);
          // dispatch(setSelectedIndicator(href));
        }}
      >
        {title}
      </p>
    </motion.div>
  );
}
