import React from "react";

const Education = () => {
  return (
    <section id="education" className="py-10">
      <div className="max-w-6xl mx-auto px-6">
        {/* label */}
        <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1 mb-6 backdrop-blur">
          <span className="h-2 w-2 rounded-full bg-blue-400 animate-pulse" />
          <span className="text-xs font-medium uppercase tracking-[0.2em] text-slate-300/80">
            Education
          </span>
        </div>

        <div className="relative max-w-4xl rounded-3xl border border-white/10 bg-white/5 px-6 sm:px-8 py-8 sm:py-10 backdrop-blur-xl shadow-[0_0_60px_rgba(37,99,235,0.25)]">
          {/* vertical accent line */}
          <div className="absolute left-4 top-6 bottom-6 hidden sm:block">
            <div className="h-full w-px bg-gradient-to-b from-blue-500/70 via-slate-500/40 to-transparent" />
          </div>

          <div className="sm:ml-6">
            <h2 className="text-xl sm:text-2xl font-semibold text-slate-50 mb-1">
              LLB (Honours) 
            </h2>
            <p className="text-sm sm:text-base text-slate-300/90 mb-1">
              Bangladesh University of Professionals (BUP)
            </p>
            <p className="text-xs sm:text-sm text-slate-400 mb-4">
              3rd Year • Undergraduate
            </p>

            {/* <div className="grid gap-3 text-xs sm:text-sm text-slate-300/90">
              <p>
                Focusing on core computer science fundamentals, problem solving,
                and modern web development.
              </p>
              <p>
                Actively involved in competitive programming and building
                real‑world projects to connect theory with practice.
              </p>

              <div className="flex flex-wrap gap-2 mt-2">
                <span className="rounded-full bg-slate-900/70 border border-white/10 px-3 py-1 text-[11px] uppercase tracking-[0.16em] text-slate-300">
                  Algorithms &amp; Data Structures
                </span>
                <span className="rounded-full bg-slate-900/70 border border-white/10 px-3 py-1 text-[11px] uppercase tracking-[0.16em] text-slate-300">
                  Web Development
                </span>
                <span className="rounded-full bg-slate-900/70 border border-white/10 px-3 py-1 text-[11px] uppercase tracking-[0.16em] text-slate-300">
                  Competitive Programming
                </span>
              </div>
            </div> */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
