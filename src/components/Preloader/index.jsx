import styles from "./style.module.scss";
import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { opacity, slideUp } from "./anim";
import gsap from "gsap";
import { reuleaux } from "ldrs";

reuleaux.register();

const words = [
  "سلام",
  "Hello",
  "Hola",
  "Bonjour",
  "Hallo",
  "Ciao",
  "Olá",
  "Привет",
  "你好",
  "こんにちは",
  "안녕하세요",
  "مرحبا",
  "नमस्ते",
  "হ্যালো",
  "Γειά σας",
  "Jambo",
  "Hallo",
  "Cześć",
  "Finalizing",
];

export default function Index() {
  const [index, setIndex] = useState(0);
  const [dimension, setDimension] = useState({ width: 0, height: 0 });
  const [count, setCount] = useState(1);
  const progressBar = useRef(null);

  useEffect(() => {
    gsap.to(progressBar.current, {
      width: "100%",
      duration: 1.5,
      ease: "Power1.easeInOut",
      transformOrigin: "left",
    });
    const interval = setInterval(() => {
      if (count < 100) {
        setCount((prevCount) => prevCount + 1);
      } else {
        clearInterval(interval);
      }
    }, 20); // Adjust the interval time for smooth animation

    return () => clearInterval(interval); // Cleanup interval on unmount
  }, [count]);

  useEffect(() => {
    setDimension({ width: window.innerWidth, height: window.innerHeight });
  }, []);

  useEffect(() => {
    if (index == words.length - 1) return;
    setTimeout(
      () => {
        setIndex(index + 1);
      },
      index == 0 ? 1000 : 150
    );
  }, [index]);

  const initialPath = `M0 0 L${dimension.width} 0 L${dimension.width} ${
    dimension.height
  } Q${dimension.width / 2} ${dimension.height + 300} 0 ${
    dimension.height
  }  L0 0`;
  const targetPath = `M0 0 L${dimension.width} 0 L${dimension.width} ${
    dimension.height
  } Q${dimension.width / 2} ${dimension.height} 0 ${dimension.height}  L0 0`;

  const curve = {
    initial: {
      d: initialPath,
      transition: { duration: 0.7, ease: [0.76, 0, 0.24, 1] },
    },
    exit: {
      d: targetPath,
      transition: { duration: 0.7, ease: [0.76, 0, 0.24, 1], delay: 0.3 },
    },
  };

  return (
    <motion.div
      variants={slideUp}
      initial="initial"
      exit="exit"
      className={styles.introduction}
    >
      {dimension.width > 0 && (
        <>
          <motion.p
            variants={opacity}
            initial="initial"
            animate="enter"
            className="font-bold flex gap-2 items-center"
          >
            <l-reuleaux
              size="37"
              stroke="5"
              stroke-length="0.15"
              bg-opacity="0.1"
              speed="1.2"
              color="#1c1d20"
            ></l-reuleaux>
            {words[index]}
          </motion.p>

          <div className="absolute left-10 bottom-10 z-10">
            <h1 className="text-4xl md:text-9xl font-bold text-[#18191b] ">
              {count}%
            </h1>
            <div
              className="h-1.5 rounded-full bg-[#18191b] z-10 w-0 origin-left max-w-sm"
              ref={progressBar}
            ></div>
          </div>
          <svg>
            <motion.path
              variants={curve}
              initial="initial"
              exit="exit"
            ></motion.path>
          </svg>
        </>
      )}
    </motion.div>
  );
}
