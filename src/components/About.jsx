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
            Hi, I’m Azizur Rahman Shanto, a video editor with a deep passion for turning content into a growth engine.
          </p>

          <p className="text-sm sm:text-base sm:text-justify text-slate-300/90 leading-relaxed mb-3">
            I believe video editing is more than just cuts, transitions, or effects. Done right, it directly impacts attention, retention, engagement, and business growth.
          </p>

          <p className="text-sm sm:text-base sm:text-justify text-slate-300/90 leading-relaxed mb-3">
           I work with business owners, content creators, coaches, and educational brands who want their videos to do more than just look good ,they want results.
          </p>

          <p className="text-sm sm:text-base sm:text-justify text-slate-300/90 leading-relaxed">
            My approach is strategy-first. Before editing, I focus on understanding the audience, platform behavior, and the goal behind each video. Every creative decision I make is intentional, from pacing and storytelling to structure and visual emphasis.
          </p>
          <p className="text-sm sm:text-base sm:text-justify text-slate-300/90 leading-relaxed">
           Whether it’s short-form content designed to stop the scroll or long-form videos built to hold attention and build trust, my goal stays the same:
          </p>
          <p className="text-sm sm:text-base sm:text-justify text-slate-300/90 leading-relaxed">
           HELP YOUR CONTENT PERFORM BETTER AND GROW YOUR BRAND.
          </p>
          <p className="text-sm sm:text-base sm:text-justify text-slate-300/90 leading-relaxed">
         
If you’re serious about growth and want editing that supports your vision and business goals, I’d love to collaborate.
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
