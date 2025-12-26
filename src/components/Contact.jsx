import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

export default function Contact() {
  const formRef = useRef(null);
  const [status, setStatus] = useState("");

 const handleSubmit = (e) => {
  e.preventDefault();
  setStatus("Sending...");

  emailjs
    .sendForm(
      "service_rd8t63u",
      "template_7s064ds",
      formRef.current,
      "zd0PgJxsACTMXoNVn"
    )
    .then(
      (result) => {
        console.log(result.text);
        setStatus("Message sent successfully!");
        formRef.current.reset();
      },
      (error) => {
        console.error(error.text);
        setStatus("Failed to send. Please try again.");
      }
    );
};


  return (
    <section id="contact" className="py-10">
      <div className="max-w-6xl mx-auto px-6">
        <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1 mb-6 backdrop-blur">
          <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
          <span className="text-xs font-medium uppercase tracking-[0.2em] text-slate-300/80">
            Contact
          </span>
        </div>

        <h2 className="text-2xl sm:text-3xl font-semibold mb-2 text-slate-50">
          Let&apos;s work together
        </h2>
        <p className="text-sm sm:text-base text-slate-300/85 mb-4 max-w-2xl">
          Have an idea, project, or opportunity? Send a message and it will go
          directly to my inbox.
        </p>

        {/* contact info row */}
        <div className="mb-6 flex flex-wrap gap-4 text-xs sm:text-sm text-slate-300/90">
          <span className="inline-flex items-center gap-2 rounded-full bg-slate-900/70 border border-white/10 px-3 py-1.5">
            <span className="h-2 w-2 rounded-full bg-blue-400" />
            <span>Email: shantoar528@gmail.com</span>
          </span>
          <span className="inline-flex items-center gap-2 rounded-full bg-slate-900/70 border border-white/10 px-3 py-1.5">
            <span className="h-2 w-2 rounded-full bg-emerald-400" />
            <span>Phone: 01407706293</span>
          </span>
        </div>

        <form
          ref={formRef}
          onSubmit={handleSubmit}
          className="space-y-5 rounded-3xl border border-white/10 bg-white/5 px-6 sm:px-8 py-8 backdrop-blur-xl shadow-[0_0_60px_rgba(15,23,42,0.7)]"
        >
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            <div>
              <label className="block text-sm text-slate-200 mb-2">Name</label>
              <input
                type="text"
                name="user_name"
                required
                className="w-full rounded-xl bg-slate-900/60 border border-white/15 px-3 py-2.5 text-sm text-slate-100 outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
                placeholder="Your name"
              />
            </div>
            <div>
              <label className="block text-sm text-slate-200 mb-2">Email</label>
              <input
                type="email"
                name="user_email"
                required
                className="w-full rounded-xl bg-slate-900/60 border border-white/15 px-3 py-2.5 text-sm text-slate-100 outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
                placeholder="you@example.com"
              />
            </div>
          </div>

          <div>
            <label className="block text-sm text-slate-200 mb-2">Subject</label>
            <input
              type="text"
              name="subject"
              className="w-full rounded-xl bg-slate-900/60 border border-white/15 px-3 py-2.5 text-sm text-slate-100 outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
              placeholder="What is this about?"
            />
          </div>

          <div>
            <label className="block text-sm text-slate-200 mb-2">Message</label>
            <textarea
              name="message"
              required
              rows={4}
              className="w-full rounded-xl bg-slate-900/60 border border-white/15 px-3 py-2.5 text-sm text-slate-100 outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 resize-none"
              placeholder="Write your message here..."
            />
          </div>

          <button
            type="submit"
            className="inline-flex items-center justify-center rounded-xl bg-gradient-to-r from-blue-500 to-indigo-500 px-6 py-2.5 text-sm sm:text-base font-semibold text-white shadow-lg shadow-blue-500/30 hover:from-blue-600 hover:to-indigo-600 transition"
          >
            Send Message
          </button>

          {status && (
            <p className="text-xs sm:text-sm text-slate-200 mt-2">{status}</p>
          )}

          <p className="text-xs text-slate-400 mt-3">
            Or email me directly at{" "}
            <a
              href="mailto:mahfuzur3456@gmail.com"
              className="text-blue-400 underline underline-offset-2"
            >
            shantoar528@gmail.com
            </a>
            .
          </p>
        </form>
      </div>
    </section>
  );
}
