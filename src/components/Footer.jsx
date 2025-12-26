import React from "react";

export default function Footer() {
  return (
    <footer className="mt-20 pb-8">
      <div className="max-w-6xl mx-auto px-6">
        {/* subtle line */}
        <div className="h-px w-full bg-gradient-to-r from-transparent via-slate-600/60 to-transparent mb-4" />

        <div className="flex flex-col items-center gap-2 text-sm text-slate-300">
          <p className="text-xs text-slate-400">
            Open to interesting projects &amp; collaborations.
          </p>

          <p className="text-xs text-slate-400">
            Based in <span className="text-slate-200">Bangladesh</span> • Edit Videos that sales
          </p>

          <p className="text-[11px] text-slate-500">
            © {new Date().getFullYear()} Azizur Rahman Shanto • Crafted with React &amp; Tailwind CSS
          </p>
        </div>
      </div>
    </footer>
  );
}
