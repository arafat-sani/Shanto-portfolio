import { motion } from "framer-motion";
import { SiCodeforces, SiLeetcode } from "react-icons/si";

export default function CompetitiveProgramming() {
  return (
    <section id="cp" className="py-10">
      <div className="max-w-6xl mx-auto px-6">
        {/* label */}
        <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1 mb-6 backdrop-blur">
          <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
          <span className="text-xs font-medium uppercase tracking-[0.2em] text-slate-300/80">
            Strategic Video Editor
          </span>
        </div>

        <h2 className="text-2xl sm:text-3xl font-semibold mb-2 text-slate-50">
         Case study
        </h2>
        {/* <p className="text-sm sm:text-base text-slate-300/85 mb-8 max-w-2xl">
          Solving algorithmic problems regularly to sharpen thinking and stay
          confident in data structures, algorithms, and implementation.
        </p> */}

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          className="grid gap-6 md:grid-cols-[1.2fr,1fr]"
        >
          {/* profiles + contests */}
          {/* <div className="rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl shadow-[0_0_40px_rgba(15,23,42,0.75)]">
            <h3 className="text-lg font-semibold text-slate-50 mb-4">
              Online Judges
            </h3>
            <p className="text-sm text-slate-300/85 mb-4">
              Solved{" "}
              <span className="font-semibold text-emerald-400">
                700+ problems
              </span>{" "}
              across Codeforces, LeetCode, and other online judges.
            </p>

            <ul className="space-y-3 text-sm text-slate-200">
              <li className="flex items-center gap-2">
                <span className="flex h-7 w-7 items-center justify-center rounded-full bg-slate-900/70 border border-white/10">
                  <SiCodeforces className="text-sky-300 text-lg" />
                </span>
                <span className="text-slate-300">Codeforces: _Mahfuz</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="flex h-7 w-7 items-center justify-center rounded-full bg-slate-900/70 border border-white/10">
                  <SiLeetcode className="text-amber-300 text-lg" />
                </span>
                <span className="text-slate-300">LeetCode: MahfuzCSE_53</span>
              </li>
            </ul>

            <div className="mt-6 border-t border-white/10 pt-4">
              <h4 className="text-sm font-semibold text-slate-100 mb-2">
                Notable Contest Ranks
              </h4>
              <ul className="space-y-2 text-xs sm:text-sm text-slate-300">
                <li>
                  • UITS Intra-University Programming Contest 2025 —{" "}
                  <span className="font-semibold text-emerald-400">
                    3rd place
                  </span>{" "}
                  out of 40+ teams
                </li>
                <li>
                  • UAP Inter-University Programming Contest 2024 —{" "}
                  <span className="font-semibold text-emerald-400">
                    28th place
                  </span>{" "}
                  out of 60+ teams
                </li>
              </ul>
            </div>
          </div> */}

          {/* small stats card */}
          <div className="rounded-3xl border border-emerald-500/40 bg-gradient-to-br from-emerald-500/15 via-slate-900/70 to-slate-950/90 p-6 flex flex-col justify-between backdrop-blur-xl">
            <div>
              <p className="text-xs font-medium uppercase tracking-[0.22em] text-emerald-300/80 mb-3">
                Quick Stats
              </p>
              <div className="space-y-3">
                <div>
                  <p className="text-3xl font-semibold text-slate-50">200+</p>
                  <p className="text-xs text-slate-300">Video Edits</p>
                </div>
                {/* <div>
                  <p className="text-lg font-semibold text-slate-50">2</p>
                  <p className="text-xs text-slate-300">
                    Major contest top ranks
                  </p>
                </div> */}
              </div>
            </div>
            <p className="mt-5 text-[11px] text-slate-300/80">
              Focus areas: Growth,Retention, Engagement, Conversion
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
