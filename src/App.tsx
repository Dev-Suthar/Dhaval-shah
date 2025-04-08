import React, { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { MotionPathPlugin } from "gsap/MotionPathPlugin";
import AppRouter from "./app-router/Router";
import { Toaster } from "react-hot-toast";

gsap.registerPlugin(ScrollTrigger, MotionPathPlugin);

const App: React.FC = () => {
  useEffect(() => {
    gsap.defaults({
      ease: "power2.out",
      duration: 0.5,
    });

    ScrollTrigger.refresh();

    const handleResize = () => {
      ScrollTrigger.refresh();
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
      ScrollTrigger.getAll().forEach((st) => st.kill());
    };
  }, []);

  return (
    <div>
      <Toaster position="top-center" reverseOrder={false} />
      <AppRouter />
    </div>
  );
};

export default App;
