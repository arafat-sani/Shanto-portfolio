import React, { useEffect } from "react";
import { motion, useMotionValue, useTransform, animate } from "framer-motion";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import image from "../assets/Santo.jpeg";
import { FiDownload } from "react-icons/fi";
import { FiMail, FiPhone } from "react-icons/fi";
import { FaFacebookSquare } from "react-icons/fa";

// Text animation
const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" },
  },
};

// Stagger children
const staggerContainer = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
    },
  },
};

// Typing text (JS)
const TypingText = ({ text }) => {
  const count = useMotionValue(0);
  const rounded = useTransform(count, (latest) => Math.round(latest));
  const displayText = useTransform(rounded, (latest) => text.slice(0, latest));

  useEffect(() => {
    const controls = animate(count, text.length, {
      duration: 2.2,
      ease: "linear",
    });
    return () => controls.stop();
  }, [count, text]);

  return (
    <motion.span className="inline-flex items-center">
      <motion.span>{displayText}</motion.span>
      <span className="ml-1 h-4 w-[2px] bg-slate-200 animate-pulse" />
    </motion.span>
  );
};

const Hero = () => {
  return (
    <section className="relative overflow-hidden py-24 md:py-28">
      {/* Floating Particles Background */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.5 }}
        transition={{ duration: 1 }}
        className="pointer-events-none absolute inset-0"
      >
        {[...Array(14)].map((_, i) => (
          <motion.span
            key={i}
            className="absolute w-2 h-2 bg-blue-500/70 rounded-full blur-sm"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -22, 0],
              opacity: [0.2, 0.85, 0.2],
            }}
            transition={{
              duration: 3.5 + Math.random() * 3,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </motion.div>

      {/* content wrapper */}
      <div className="relative z-10 max-w-6xl mx-auto px-6 flex flex-col-reverse md:flex-row items-center gap-14 md:gap-18">
        {/* LEFT TEXT (below image on mobile, left on desktop) */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
          className="flex-1 relative"
        >
          {/* subtle glow card behind text */}
          <div className="pointer-events-none absolute -inset-x-4 -inset-y-6 rounded-3xl bg-gradient-to-br from-blue-500/10 via-slate-900/60 to-slate-950/80 blur-2xl" />

          <motion.div
            variants={fadeUp}
            className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 mb-5 backdrop-blur-md relative"
          >
            <span className="inline-block h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
            <p className="text-xs md:text-sm text-slate-200/80">
              Available for  remote roles
            </p>
          </motion.div>

          <motion.h1
            variants={fadeUp}
            className="relative text-4xl sm:text-5xl md:text-[2.9rem] lg:text-[3.3rem] font-semibold tracking-tight text-slate-50 mb-4 leading-tight"
          >
            Hi, <span className="text-slate-300">I&apos;m</span>{" "}
            <span className="bg-gradient-to-r from-blue-400 via-sky-400 to-indigo-400 bg-clip-text text-transparent">
              Shanto
            </span>{" "}
            <span className="inline-block"></span>
          </motion.h1>

          <motion.p
            variants={fadeUp}
            className="relative text-base sm:text-lg md:text-[1.05rem] text-slate-300/90 leading-relaxed max-w-xl"
          >
            <TypingText text="Video Editor | Growth-Driven Content Specialist " />
            <br />
            <span className="text-sm sm:text-base text-slate-300/80">
              {/* I build modern web apps with clean UI, strong problem solving, and
              smooth micro‑interactions. */}
            </span>
          </motion.p>

          {/* CTA row with Resume */}
          <motion.div
            variants={fadeUp}
            className="relative mt-7 flex flex-wrap items-center gap-4"
          >
            <motion.a
              whileHover={{ scale: 1.05, y: -1 }}
              whileTap={{ scale: 0.96, y: 0 }}
              href="#portfolio"
              className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-blue-500 to-indigo-500 px-6 py-3 text-sm sm:text-base font-semibold text-white shadow-lg shadow-blue-500/30 transition"
            >
              <span>View Portfolio</span>
              <span className="text-base">↗</span>
            </motion.a>

            {/* Resume button – served from /public */}
            {/* <motion.a
              whileHover={{ scale: 1.05, y: -1 }}
              whileTap={{ scale: 0.96, y: 0 }}
              href="https://drive.google.com/uc?export=download&id=1yRNYJD_NwcNTgKdfMTFhsKB8zAqFpybx"
              className="inline-flex items-center gap-2 rounded-xl border border-emerald-400/70 bg-emerald-500/10 px-6 py-3 text-sm sm:text-base font-semibold text-emerald-200 backdrop-blur-md hover:border-emerald-300 hover:bg-emerald-500/20 transition"
            >
              <span>Resume</span>
              <FiDownload className="text-base" />
            </motion.a> */}

            <motion.a
              whileHover={{ scale: 1.05, y: -1 }}
              whileTap={{ scale: 0.96, y: 0 }}
              href="#contact"
              className="inline-flex items-center gap-2 rounded-xl border border-white/20 bg-white/5 px-6 py-3 text-sm sm:text-base font-semibold text-slate-100/90 backdrop-blur-md hover:border-blue-400/70 transition"
            >
              <span>Contact Me</span>
              <FiPhone className="text-emerald-400 text-sm" />
            </motion.a>
          </motion.div>

          {/* Social links */}
          <motion.div
            variants={fadeUp}
            className="relative mt-5 flex items-center gap-4 text-sm text-slate-300/80"
          >
            <span className="text-xs sm:text-sm uppercase tracking-[0.2em] text-slate-400">
              Find me on
            </span>
            <div className="flex items-center gap-3">
              <a
                href="https://www.linkedin.com/in/azizur-rahman-shanto-271b02399/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center h-9 w-9 rounded-full border border-white/20 bg-white/5 text-slate-100 hover:border-blue-500 hover:text-blue-400 transition"
              >
                <FaLinkedin className="text-lg" />
              </a>
              <a
                href="https://www.facebook.com/ar.shanto.75873"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center h-9 w-9 rounded-full border border-white/20 bg-white/5 text-slate-100 hover:border-slate-300 hover:text-slate-200 transition"
              >
                <FaFacebookSquare className="size-5" />
              </a>
              
            </div>
          </motion.div>

          <motion.div
            variants={fadeUp}
            className="relative mt-4 flex flex-wrap items-center gap-4 text-xs sm:text-sm text-slate-300/80"
          >
            <div className="flex -space-x-2">
              <span className="h-8 w-8 rounded-full bg-blue-500/70 border border-slate-900" />
              <span className="h-8 w-8 rounded-full bg-indigo-500/70 border border-slate-900" />
              <span className="h-8 w-8 rounded-full bg-emerald-500/70 border border-slate-900" />
            </div>
            <p>
              I Help <span className="text-[#ffc600]">Content Creators,Coaches</span>{" "}
              Achieve Growth Through <span className="text-[#ffc600]">Editing</span>{" "}
            </p>
          </motion.div>
        </motion.div>

        {/* RIGHT IMAGE (on top on mobile because of flex-col-reverse) */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9, y: 16 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="relative flex justify-center flex-1 max-w-sm md:max-w-md"
        >
          <motion.div
            className="absolute w-68 h-68 md:w-72 md:h-72 rounded-full border border-blue-500/40"
            animate={{ rotate: 360 }}
            transition={{
              duration: 18,
              repeat: Infinity,
              ease: "linear",
            }}
          />

          <div className="absolute w-64 md:w-72 h-64 md:h-72 rounded-3xl bg-white/5 border border-white/15 backdrop-blur-xl shadow-[0_0_70px_rgba(37,99,235,0.35)]" />

          <motion.img
            src={image}
            alt="Mahfuz Photo"
            className="relative w-56 h-56 md:w-64 md:h-64 object-cover rounded-3xl shadow-2xl border border-white/20"
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          />

          <div className="absolute inset-0 bg-blue-500/40 blur-[120px] opacity-35" />
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
