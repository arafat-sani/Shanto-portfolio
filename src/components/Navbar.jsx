import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeLink, setActiveLink] = useState("About");
  const [mobileMenu, setMobileMenu] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const links = [
    { name: "About", href: "#about" },
    { name: "Education", href: "#education" },
    { name: "Projects", href: "#projects" },
    { name: "Skills", href: "#skills" },
    { name: "CS", href: "#cp" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <motion.nav
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      className="fixed top-4 left-0 w-full z-50 flex justify-center px-4 pointer-events-none"
    >
      <div
        className={`max-w-6xl w-full pointer-events-auto transition-all duration-300 ${
          isScrolled ? "scale-95 shadow-2xl" : "scale-100 shadow-lg"
        }`}
      >
        <div
          className={`flex items-center justify-between px-5 py-3 rounded-full border
          ${
            isScrolled
              ? "backdrop-blur-xl bg-black/70 border-white/15"
              : "backdrop-blur-lg bg-black/40 border-white/10"
          }`}
        >
          {/* LOGO */}
          <motion.h1
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            className="text-xl md:text-xl font-extrabold tracking-tight text-white"
          >
            <span className="text-[#2974e7]">Azizur Rahman </span>
            <span className="text-white/">Shanto</span>
          </motion.h1>

          {/* Desktop Links */}
          <div className="hidden md:flex items-center gap-2 text-sm font-medium bg-white/5 rounded-full px-2 py-1 border border-white/10">
            {links.map((link) => {
              const isActive = activeLink === link.name;
              return (
                <button
                  key={link.name}
                  onClick={() => {
                    setActiveLink(link.name);
                    const el = document.querySelector(link.href);
                    if (el) el.scrollIntoView({ behavior: "smooth" });
                  }}
                  className={`relative px-4 py-1.5 rounded-full transition-all duration-200 overflow-hidden
                    ${
                      isActive
                        ? "text-black"
                        : "text-white/80 hover:text-white"
                    }`}
                >
                  {isActive && (
                    <motion.span
                      layoutId="nav-pill"
                      className="absolute inset-0 bg-white"
                      transition={{
                        type: "spring",
                        stiffness: 260,
                        damping: 20,
                      }}
                    />
                  )}
                  <span className="relative z-10">{link.name}</span>
                </button>
              );
            })}
          </div>

          {/* Mobile Menu Toggle */}
          <button
            className="md:hidden flex flex-col gap-1.5 cursor-pointer group"
            onClick={() => setMobileMenu((prev) => !prev)}
          >
            <span
              className={`block h-0.5 w-7 bg-white rounded-full transition-all duration-300 ${
                mobileMenu ? "rotate-45 translate-y-2" : "group-hover:w-8"
              }`}
            ></span>
            <span
              className={`block h-0.5 w-7 bg-white rounded-full transition-all duration-300 ${
                mobileMenu ? "opacity-0" : "group-hover:w-6"
              }`}
            ></span>
            <span
              className={`block h-0.5 w-7 bg-white rounded-full transition-all duration-300 ${
                mobileMenu ? "-rotate-45 -translate-y-2" : "group-hover:w-5"
              }`}
            ></span>
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenu && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="md:hidden mt-3 rounded-3xl bg-black/85 backdrop-blur-xl border border-white/10 py-4 flex flex-col items-center gap-2"
          >
            {links.map((link) => (
              <button
                key={link.name}
                onClick={() => {
                  setActiveLink(link.name);
                  setMobileMenu(false);
                  const el = document.querySelector(link.href);
                  if (el) el.scrollIntoView({ behavior: "smooth" });
                }}
                className={`w-full text-center text-lg py-2 transition-all ${
                  activeLink === link.name
                    ? "text-[#2974e7] font-semibold"
                    : "text-white/80 hover:text-white"
                }`}
              >
                {link.name}
              </button>
            ))}
          </motion.div>
        )}
      </div>
    </motion.nav>
  );
};

export default Navbar;
