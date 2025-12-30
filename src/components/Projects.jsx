import React, { useState } from "react";

/* ================= VIDEO SIZE PRESETS ================= */

const VIDEO_SIZES = {
  reel: "w-[320px] aspect-[9/16]", // Reels
  square: "w-[320px] aspect-square",
  wide: "w-[500px] aspect-video",
  rectangle: "w-full max-w-[500px] ", // FIXED
};

/* ================= VIDEO DATA ================= */

const PROJECTS = {
  reels: {
    standard: [
      {
        id: 1,
        src: "https://ik.imagekit.io/4cwhcp14y/Reel%20standard%202.0.mp4",
        size: "reel",
      },
    ],
    premium: [
      {
        id: 1,
        src: "https://ik.imagekit.io/4cwhcp14y/Before%20After%202.0.mp4",
        size: "rectangle",
      },
      {
        id: 2,
        src: "https://ik.imagekit.io/4cwhcp14y/Before%20After%20Reel%202.0.mp4",
        size: "rectangle",
      },
      {
        id: 3,
        src: "https://ik.imagekit.io/4cwhcp14y/WhatsApp%20Video%202025-12-29%20at%201.26.34%20AM.mp4",
        size: "reel",
        poster:
          "https://ik.imagekit.io/4cwhcp14y/WhatsApp%20Video%202025-12-29%20at%201.26.34%20AM.mp4/ik-thumbnail1.jpg?tr=so-3",
      },
    ],
  },

  faceless_video: {
    standard: [],
    premium: [
      {
        id: 1,
        src: "https://ik.imagekit.io/4cwhcp14y/Reel%202.0.mp4",
        size: "reel",
      },
    ],
  },
  documentary: {
    // standard: [
    //   {
    //     id: 1,
    //     src: "",
    //   },
    // ],
    premium: [
      {
        id: 1,
        src: "https://ik.imagekit.io/vrtvn2jyq/Documentary%20-%20Map%20Animation%202.0.mp4",
        size: "wide",
      },
    ],
  },
};

/* ================= COMPONENT ================= */

export const Projects = () => {
  const [activeCategory, setActiveCategory] = useState("reels");
  const [activeType, setActiveType] = useState("standard");

  const videos = PROJECTS[activeCategory]?.[activeType] || [];

  return (
    <section id="projects" className="py-12">
      <h2 className="text-2xl sm:text-3xl font-semibold mb-6 text-slate-50">
        Portfolio
      </h2>

      {/* Category Tabs */}
      <div className="flex flex-wrap gap-3 mb-5">
        {[
          { key: "reels", label: "Reels" },
          { key: "faceless_video", label: "Faceless Video" },
          { key: "long", label: "Long Video" },
          { key: "documentary", label: "Documentary" },
        ].map((cat) => (
          <button
            key={cat.key}
            onClick={() => {
              setActiveCategory(cat.key);
              setActiveType("standard");
            }}
            className={`px-4 py-1.5 rounded-full text-sm font-medium transition
              ${
                activeCategory === cat.key
                  ? "bg-blue-600 text-white"
                  : "bg-slate-900/50 text-slate-400"
              }`}
          >
            {cat.label}
          </button>
        ))}
      </div>

      {/* Standard / Premium Tabs */}
      <div className="flex gap-3 mb-6">
        {["standard", "premium"].map((type) => (
          <button
            key={type}
            onClick={() => setActiveType(type)}
            className={`px-4 py-1.5 rounded-full text-sm font-medium transition
              ${
                activeType === type
                  ? type === "premium"
                    ? "bg-slate-800 text-white"
                    : "bg-blue-600 text-white"
                  : "bg-slate-900/50 text-slate-400"
              }`}
          >
            {type.charAt(0).toUpperCase() + type.slice(1)}
          </button>
        ))}
      </div>

      {/* Video Grid */}
      <div className="flex flex-wrap gap-6">
        {videos.map((video) => {
          const isReel = video.size === "reel";

          return (
            <div
              key={video.id}
              className={`relative rounded-2xl overflow-hidden bg-black shadow-lg
                ${VIDEO_SIZES[video.size] || VIDEO_SIZES.reel}
              `}
            >
              <video
                src={video.src}
                poster={video.poster}
                controls
                className={`w-full h-full ${
                  isReel ? "object-cover" : "object-contain"
                }`}
              />

              {activeType === "premium" && (
                <span className="absolute top-3 left-3 bg-yellow-400 text-black text-xs font-semibold px-2 py-0.5 rounded-full">
                  Premium
                </span>
              )}
            </div>
          );
        })}

        {videos.length === 0 && (
          <p className="text-slate-400 text-sm">No videos available.</p>
        )}
      </div>
    </section>
  );
};
