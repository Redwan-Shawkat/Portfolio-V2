"use client";

import { useEffect, useRef } from "react";

// Replaces the template's scrollCue dependency. One observer, one class.
export default function Reveal({ children, delay = 0, className = "" }) {
  const el = useRef(null);

  useEffect(() => {
    const node = el.current;
    if (!node) return;

    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          node.classList.add("is-shown");
          io.disconnect();
        }
      },
      { threshold: 0.12, rootMargin: "0px 0px -40px" },
    );

    io.observe(node);
    return () => io.disconnect();
  }, []);

  return (
    <div
      ref={el}
      className={`reveal ${className}`}
      style={delay ? { transitionDelay: `${delay}ms` } : undefined}
    >
      {children}
    </div>
  );
}
