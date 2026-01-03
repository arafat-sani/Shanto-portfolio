import React, { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";

import CompetitiveProgramming from "./components/CompetitiveProgramming";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import { FaReact, FaStar } from "react-icons/fa";
import Education from "./components/Education";
import { Portfolio } from "./components/Portfolio";




const App = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const t = setTimeout(() => {
      setIsLoading(false);
    }, 500); // 1.8s preloader
    return () => clearTimeout(t);
  }, []);

  return (
    <div
      className="
        min-h-screen
        bg-slate-950
        bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950
        relative overflow-hidden text-slate-50
      "
    >
      <div className="pointer-events-none absolute inset-0 opacity-[0.12] bg-[radial-gradient(circle_at_top,_#1d4ed8_0,_transparent_55%),radial-gradient(circle_at_bottom,_#0ea5e9_0,_transparent_55%)]" />
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_right,#ffffff0d_1px,transparent_1px),linear-gradient(to_bottom,#ffffff0d_1px,transparent_1px)] bg-[size:120px_120px]" />
      {/* Loader overlay */}
      {isLoading && (
        <div className="fixed inset-0 z-[60] flex items-center justify-center bg-slate-950">
          <div className="relative flex flex-col items-center gap-5">
            {/* gradient circle with icon */}
            <div className="relative h-20 w-20">
              <div className="absolute inset-0 rounded-full bg-[conic-gradient(from_180deg,rgba(56,189,248,0.2),rgba(37,99,235,0.85),rgba(129,140,248,0.4),rgba(56,189,248,0.2))] animate-spin-slow" />
              <div className="absolute inset-2 rounded-full bg-slate-950/80 backdrop-blur-xl border border-white/10 flex items-center justify-center shadow-[0_0_40px_rgba(37,99,235,0.6)]">
                <FaReact className="text-2xl text-sky-300" />
                {/* Or: <FaStar className="text-2xl text-yellow-300" /> */}
              </div>
            </div>

            {/* bouncing dots */}
            <div className="flex items-end gap-1.5">
              <span className="h-1.5 w-1.5 rounded-full bg-slate-300 animate-bounce [animation-duration:0.7s]" />
              <span className="h-1.5 w-1.5 rounded-full bg-slate-300 animate-bounce [animation-duration:0.7s] [animation-delay:0.15s]" />
              <span className="h-1.5 w-1.5 rounded-full bg-slate-300 animate-bounce [animation-duration:0.7s] [animation-delay:0.3s]" />
            </div>

            <p className="text-xs text-slate-400 tracking-wide">
              Loading portfolio
            </p>
          </div>
        </div>
      )}

      {/* Main content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-20">
        <Navbar />
        <Hero />
        <About />
        <Portfolio></Portfolio>
        <Education></Education>
        <Skills />
      
        <CompetitiveProgramming />
        
        <Contact />
        <Footer />
      </div>
    </div>
  );
};

export default App;
