import React, { useState, useEffect } from "react";

/* ================= VIDEO SIZE PRESETS ================= */
const VIDEO_SIZES = {
  reel: "w-[320px] aspect-[9/16]",
  square: "w-[320px] aspect-square",
  wide: "w-[500px] aspect-video",
  rectangle: "w-full max-w-[500px]",
};

/* ================= VIDEO DATA ================= */
const PROJECTS = {
  reels: {
    label: "Reels",
    standard: [
      { id: 1, src: "https://ik.imagekit.io/4cwhcp14y/Reel%20standard%202.0.mp4", size: "reel" },
      { id: 2, src: "https://ik.imagekit.io/vrtvn2jyq/Reel%20standard.mp4", size: "rectangle" },
    ],
    premium: [
      { id: 1, src: "https://ik.imagekit.io/4cwhcp14y/Before%20After%202.0.mp4", size: "rectangle" },
      { id: 2, src: "https://ik.imagekit.io/4cwhcp14y/Before%20After%20Reel%202.0.mp4", size: "rectangle" },
      { id: 3, src: "https://ik.imagekit.io/4cwhcp14y/WhatsApp%20Video%202025-12-29%20at%201.26.34%20AM.mp4", size: "reel" },
      { id: 4, src: "https://ik.imagekit.io/vrtvn2jyq/reel%20pre.mp4", size: "rectangle" },
    ],
  },
  faceless_video: {
    label: "Faceless Video",
    standard: [],
    premium: [{ id: 1, src: "https://ik.imagekit.io/4cwhcp14y/Reel%202.0.mp4", size: "reel" }],
  },
  long: {
    label: "Long Video",
    standard: [],
    premium: [{ id: 1, src: "https://ik.imagekit.io/vrtvn2jyq/Long%20Video%20Premium%203.0.mp4", size: "wide" }],
  },
  documentary: {
    label: "Documentary",
    standard: [{ id: 1, src: "https://ik.imagekit.io/vrtvn2jyq/documentary%20standard.mp4", size: "wide" }],
    premium: [{ id: 1, src: "https://ik.imagekit.io/vrtvn2jyq/Documentary%20-%20Map%20Animation%202.0.mp4", size: "wide" }],
  },
};

export const Portfolio = () => {
  const [activeType, setActiveType] = useState("premium");
  const [openedCategoriesMobile, setOpenedCategoriesMobile] = useState(["reels"]);
  const [activeCategoryDesktop, setActiveCategoryDesktop] = useState("reels");
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  // Handle resize to switch between mobile/desktop behavior
  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  /* ---------------- SECONDARY CATEGORY BUTTONS ---------------- */
  const SecondaryCategories = ({ isMobileView }) => (
    <div className={`${isMobileView ? "flex flex-col md:hidden mt-8" : "hidden md:flex"} gap-3`}>
      {[
        { key: "faceless_video", label: "Faceless Video" },
        { key: "long", label: "Long Video" },
        { key: "documentary", label: "Documentary" },
      ].map((cat) => (
        <button
          key={cat.key}
          onClick={() => {
            if (isMobileView) {
              if (!openedCategoriesMobile.includes(cat.key)) {
                setOpenedCategoriesMobile([...openedCategoriesMobile, cat.key]);
              }
              window.scrollTo({ top: 0, behavior: "smooth" });
            } else {
              setActiveCategoryDesktop(cat.key);
              setActiveType("premium"); // reset type on desktop
            }
          }}
          className={`px-4 py-1.5 rounded-full text-sm font-medium transition whitespace-nowrap
            ${isMobileView
              ? openedCategoriesMobile.includes(cat.key)
                ? "bg-slate-700 text-white"
                : "text-slate-400 hover:text-white"
              : activeCategoryDesktop === cat.key
              ? "bg-slate-700 text-white"
              : "text-slate-400 hover:text-white"
            }`}
        >
          {cat.label}
        </button>
      ))}
    </div>
  );

  /* ---------------- RENDER VIDEOS ---------------- */
  const renderVideos = (category, showTitle = false) => {
    const videos = PROJECTS[category]?.[activeType] || [];
    return (
      <div key={category} className="mb-6">
        {/* Mobile: Show category title above each section */}
        {showTitle && (
          <h3 className="text-xl text-blue-400 font-bold mb-2">
            {PROJECTS[category]?.label}
          </h3>
        )}

        {/* Premium / Standard Toggles */}
        <div className="flex gap-3 mb-6">
          {["premium", "standard"].map((type) => (
            <button
              key={type}
              onClick={() => setActiveType(type)}
              className={`px-4 py-1.5 rounded-full text-sm font-medium transition
                ${activeType === type ? "bg-slate-800 text-white border border-slate-600" : "text-slate-500"}`}
            >
              {type.charAt(0).toUpperCase() + type.slice(1)}
            </button>
          ))}
        </div>

        {/* Video Grid */}
        <div className="flex flex-wrap gap-6 justify-center md:justify-start">
          {videos.map((video) => (
            <div
              key={video.id}
              className={`relative rounded-2xl overflow-hidden bg-black shadow-xl border border-slate-900
                ${VIDEO_SIZES[video.size] || VIDEO_SIZES.reel}`}
            >
              <video
                src={video.src}
                controls
                preload="metadata"
                className={`w-full h-full ${video.size === "reel" ? "object-cover" : "object-contain"}`}
              />
              {activeType === "premium" && PROJECTS[category]?.premium.includes(video) && (
                <span className="absolute top-3 left-3 bg-yellow-400 text-black text-[10px] font-bold uppercase px-2 py-0.5 rounded">
                  Premium
                </span>
              )}
            </div>
          ))}

          {videos.length === 0 && (
            <div className="w-full py-12 text-center border border-dashed border-slate-800 rounded-2xl">
              <p className="text-slate-500 text-sm">No {activeType} videos found in this category.</p>
            </div>
          )}
        </div>
      </div>
    );
  };

  return (
    <section id="portfolio" className="py-12 px-4 max-w-7xl mx-auto">
      <h2 className="text-2xl sm:text-3xl font-semibold mb-6 text-slate-50">Portfolio</h2>

      {/* ---------------- TOP ROW NAVIGATION ---------------- */}
      <div className="flex flex-wrap items-center gap-3 mb-4">
        <button
          onClick={() => {
            if (!isMobile) {
              setActiveCategoryDesktop("reels");
              setActiveType("premium");
            } else {
              if (!openedCategoriesMobile.includes("reels")) {
                setOpenedCategoriesMobile(["reels", ...openedCategoriesMobile]);
              }
            }
          }}
          className={`px-6 py-2 rounded-full text-sm font-medium transition
            ${!isMobile
              ? activeCategoryDesktop === "reels"
                ? "bg-blue-600 text-white"
                : "bg-slate-900/50 text-slate-400"
              : openedCategoriesMobile.includes("reels")
              ? "bg-blue-600 text-white"
              : "bg-slate-900/50 text-slate-400"
            }`}
        >
          Reels
        </button>

        {/* Desktop secondary nav */}
        <SecondaryCategories isMobileView={false} />
      </div>

      {/* ---------------- VIDEO GRID ---------------- */}
      {isMobile
        ? openedCategoriesMobile.map((cat) => renderVideos(cat, true)) // mobile: cumulative + titles
        : renderVideos(activeCategoryDesktop, false) // desktop: only active category
      }

      {/* ---------------- MOBILE SECONDARY NAV ---------------- */}
      <SecondaryCategories isMobileView={true} />
    </section>
  );
};
