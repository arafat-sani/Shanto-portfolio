import React from "react";
import {
   SiAdobeaftereffects,
   SiAdobepremierepro,
   SiAdobephotoshop,
   SiCanva ,
  // SiJavascript,
  // SiReact,
  // SiNextdotjs,
  // SiNodedotjs,
  // SiTailwindcss,
  // SiMongodb,
  // SiFirebase,
  // SiGit,
  // SiHtml5,
  // SiCss3,
  // SiCplusplus,
  // SiPython,
} from "react-icons/si";

const Skills = () => {
  const skills = [
    { name: "Adobe Premiere Pro", icon: SiAdobepremierepro },
    { name: "Adobe After Effects", icon: SiAdobeaftereffects },
    { name: "Adobe Photoshop", icon: SiAdobephotoshop },
    { name: "Canva", icon: SiCanva  },
    // { name: "Node.js", icon: SiNodedotjs },
    // { name: "Tailwind CSS", icon: SiTailwindcss },
    // { name: "MongoDB", icon: SiMongodb },
    // { name: "Firebase", icon: SiFirebase },
    // { name: "Git", icon: SiGit },
    // { name: "HTML", icon: SiHtml5 },
    // { name: "CSS", icon: SiCss3 },
    // { name: "C++", icon: SiCplusplus },
    // { name: "Python", icon: SiPython },
    
  ];

  return (
    <section id="skills" className="py-10">
      <div className="max-w-6xl mx-auto px-6">
        <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1 mb-6 backdrop-blur">
          <span className="h-2 w-2 rounded-full bg-blue-400" />
          <span className="text-xs font-medium uppercase tracking-[0.2em] text-slate-300/80">
            Skills
          </span>
        </div>

        <h2 className="text-2xl sm:text-3xl font-semibold mb-2 text-slate-50">
          Tools & Technologies
        </h2>
        <p className="text-sm sm:text-base text-slate-300/85 mb-8 max-w-2xl">
          Skilled in Adobe After Effects, Premiere Pro, Photoshop, and Canva, creating high-quality edits and visuals.
I combine motion, design, and pacing to deliver clean, engaging content.
My focus is always on clarity, retention, and performance.
        </p>

        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-2 gap-4 sm:gap-6 ">
          {skills.map(({ name, icon: Icon }) => (
            <div 
              key={name}
              className="group flex flex-col items-center justify-center gap-2 rounded-2xl border border-white/10 bg-white/5 px-4 py-8 backdrop-blur-md shadow-[0_0_25px_rgba(15,23,42,0.6)] hover:border-blue-500/60 hover:shadow-[0_0_35px_rgba(37,99,235,0.65)] transition-all"
            >
              <div className="flex h-12 w-15 items-center justify-center rounded-xl bg-slate-900/70 text-2xl text-blue-400 group-hover:text-white group-hover:bg-gradient-to-br group-hover:from-blue-500 group-hover:to-indigo-500 transition-colors">
                <Icon />
              </div>
              <span className="text-sm sm:text-base font-medium text-slate-100">
                {name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
