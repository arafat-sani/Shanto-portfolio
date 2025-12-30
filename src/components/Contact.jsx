import React, { useState } from "react";

export default function Contact() {
  const [status, setStatus] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("Sending...");

    const formData = new FormData(e.target);

    // Web3Forms access key
    formData.append(
      "access_key",
      "68b9931a-9684-49ea-8df9-1927cf5aa21f"
    );

    // Optional but recommended
    formData.append("subject", "New Contact Message");
    formData.append("from_name", "Portfolio Website");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });

      const data = await response.json();

      if (data.success) {
        setStatus("Message sent successfully ✅");
        e.target.reset();
      } else {
        setStatus("Failed to send. Please try again ❌");
      }
    } catch (error) {
      setStatus("Something went wrong ❌");
    }
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

        {/* Contact Info */}
        <div className="mb-6 flex flex-wrap gap-4 text-xs sm:text-sm text-slate-300/90">
          <span className="inline-flex items-center gap-2 rounded-full bg-slate-900/70 border border-white/10 px-3 py-1.5">
            <span className="h-2 w-2 rounded-full bg-blue-400" />
            <span>Email:shantoar528@gmail.com</span>
          </span>
          <span className="inline-flex items-center gap-2 rounded-full bg-slate-900/70 border border-white/10 px-3 py-1.5">
            <span className="h-2 w-2 rounded-full bg-emerald-400" />
            <span>Phone: +8801407706293</span>
          </span>
        </div>

        {/* FORM */}
        <form
          onSubmit={handleSubmit}
          className="space-y-5 rounded-3xl border border-white/10 bg-white/5 px-6 sm:px-8 py-8 backdrop-blur-xl shadow-[0_0_60px_rgba(15,23,42,0.7)]"
        >
          {/* Honeypot spam protection */}
          <input type="checkbox" name="botcheck" className="hidden" />

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            <div>
              <label className="block text-sm text-slate-200 mb-2">Name</label>
              <input
                type="text"
                name="name"
                required
                className="w-full rounded-xl bg-slate-900/60 border border-white/15 px-3 py-2.5 text-sm text-slate-100 outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
                placeholder="Your name"
              />
            </div>

            <div>
              <label className="block text-sm text-slate-200 mb-2">Email</label>
              <input
                type="email"
                name="email"
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
              href="mailto:shantoar528@gmail.com"
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
