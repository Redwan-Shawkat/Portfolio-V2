"use client";

import { useEffect, useRef } from "react";

// Ring follows the pointer and swells red over anything clickable.
// Mutates style directly rather than going through state — a re-render
// per mousemove is not worth it.
export default function Cursor() {
  const ring = useRef(null);

  useEffect(() => {
    function onMove(e) {
      const el = ring.current;
      if (!el) return;
      const hot = e.target.closest?.("a, button") ? 1.9 : 1;
      el.style.opacity = "1";
      el.style.transform = `translate(${e.clientX}px, ${e.clientY}px) scale(${hot})`;
      el.style.backgroundColor = hot > 1 ? "rgba(240,66,66,0.16)" : "transparent";
      el.style.borderColor = hot > 1 ? "#f04242" : "rgba(249,230,184,0.45)";
    }

    document.addEventListener("mousemove", onMove);
    return () => document.removeEventListener("mousemove", onMove);
  }, []);

  return <div ref={ring} className="cursor-ring" aria-hidden="true" />;
}
