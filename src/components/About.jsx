import React from "react";

const About = () => {
  return (
    <section id="about" className="pt-4 pb-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Section label */}
        <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1 mb-5 backdrop-blur">
          <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
          <span className="text-xs font-medium uppercase tracking-[0.2em] text-slate-300/80">
            About Me
          </span>
        </div>

        {/* Glass card */}
        <div className="relative w-full sm:max-w-4xl rounded-3xl border border-white/10 bg-white/5 px-5 sm:px-8 py-6 sm:py-8 backdrop-blur-xl shadow-[0_0_60px_rgba(37,99,235,0.25)]">
          {/* subtle gradient line */}
          <div className="absolute inset-x-6 top-0 h-px bg-gradient-to-r from-transparent via-blue-500/60 to-transparent" />

          <p className="text-sm sm:text-base sm:text-justify text-slate-300/90 leading-relaxed mb-3">
           Hi, I’m Azizur Rahman Shanto, a video editor who focuses on turning content into growth.
          </p>

          <p className="text-sm sm:text-base sm:text-justify text-slate-300/90 leading-relaxed mb-3">
           For me, video editing is more than just visuals. The right edit can improve attention, retention, engagement, and real business results.

          </p>

          <p className="text-sm sm:text-base sm:text-justify text-slate-300/90 leading-relaxed mb-3">
          I work with <span className="text-[#ffc600]">business owners, content creators, coaches, and educational brands</span> who want their videos to perform better.From short-form videos that stop the scroll to long-form content that builds trust, my goal is simple:<br></br>
<p className="text-[#ffc600]">HELP YOUR CONTENT PERFORM BETTER AND GROW YOUR BRAND.</p>
          </p>

          <p className="text-sm sm:text-base sm:text-justify text-slate-300/90 leading-relaxed">
            If you’re serious about growth, I’d be happy to work together.
          </p>
          
          
          

          {/* Small meta row */}
          <div className="mt-5 flex flex-wrap items-center gap-3 text-xs sm:text-sm text-slate-300/80">
            <span className="inline-flex items-center gap-2 rounded-full bg-slate-900/60 px-3 py-1 border border-white/10">
              <span className="h-2 w-2 rounded-full bg-emerald-400" />
              <span>Video editor & Content specialist</span>
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
