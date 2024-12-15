import { useEffect } from "react";
import "./App.css";

import Home from "./components/Home";
import NavBar from "./components/Navbar";
import Skills from "./components/Skills";
import Work from "./components/Projects";
import Contacts from "./components/Contacts";
import MarqueeClients from "./components/MarqueeClients";
// import Work from "./components/Work";
import Projects from "./components/Projects/index";
import { useDispatch, useSelector } from "react-redux";
import { AnimatePresence } from "framer-motion";
import Preloader from "./components/Preloader";
import { setisLoading } from "./redux/features/GlobalSlice";
import SkillProgress from "./components/SkillProgress";
import BackgroundBeams from "./components/ui/background-beams";

function App() {
  const isLoading = useSelector((state) => state.GlobalReducer.isLoading);
  const dispatch = useDispatch();
  useEffect(() => {
    (async () => {
      const LocomotiveScroll = (await import("locomotive-scroll")).default;
      const locomotiveScroll = new LocomotiveScroll();
    })();
  }, []);

  useEffect(() => {
    const handleLoad = () => {
      setTimeout(() => {
        dispatch(setisLoading(false));
        document.body.style.cursor = "default";
        window.scrollTo(0, 0);
      }, 3000);
    };

    handleLoad();
  }, []);
  return (
    <>
      <BackgroundBeams className="fixed inset-0 z-[-1] opacity-20" />
      <AnimatePresence mode="wait">
        {isLoading && <Preloader />}
      </AnimatePresence>
      <NavBar />
      <Home />
      <Skills />
      <SkillProgress />
      <Projects />
      <Work />
      <MarqueeClients />
      <Contacts />
    </>
  );
}

export default App;
