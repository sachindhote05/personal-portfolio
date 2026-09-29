"use client";

import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export default function CustomCursor() {
  const [enabled, setEnabled] = useState(false);
  const [hoverType, setHoverType] = useState<"default" | "button" | "image">(
    "default"
  );
  const [clicking, setClicking] = useState(false);

  const x = useMotionValue(-100);
  const y = useMotionValue(-100);

  // Dot follows instantly
  const dotX = useSpring(x, { damping: 40, stiffness: 900, mass: 0.3 });
  const dotY = useSpring(y, { damping: 40, stiffness: 900, mass: 0.3 });

  // Ring trails smoothly
  const ringX = useSpring(x, { damping: 25, stiffness: 300, mass: 0.6 });
  const ringY = useSpring(y, { damping: 25, stiffness: 300, mass: 0.6 });

  useEffect(() => {
    const isFinePointer = window.matchMedia("(pointer: fine)").matches;
    if (!isFinePointer) return;

    setEnabled(true);
    document.body.classList.add("custom-cursor");

    const move = (e: MouseEvent) => {
      x.set(e.clientX);
      y.set(e.clientY);
    };

    const over = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (target.closest("a, button, [data-cursor='button']")) {
        setHoverType("button");
      } else if (target.closest("[data-cursor='image']")) {
        setHoverType("image");
      } else {
        setHoverType("default");
      }
    };

    const down = () => setClicking(true);
    const up = () => setClicking(false);

    window.addEventListener("mousemove", move);
    window.addEventListener("mouseover", over);
    window.addEventListener("mousedown", down);
    window.addEventListener("mouseup", up);

    return () => {
      window.removeEventListener("mousemove", move);
      window.removeEventListener("mouseover", over);
      window.removeEventListener("mousedown", down);
      window.removeEventListener("mouseup", up);
      document.body.classList.remove("custom-cursor");
    };
  }, [x, y]);

  if (!enabled) return null;

  // Outer ring sizing
  const ringSize =
    hoverType === "button"
      ? 48
      : hoverType === "image"
      ? 64
      : clicking
      ? 22
      : 30;

  const ringBorderColor =
    hoverType === "button"
      ? "rgba(255,91,31,0.9)"
      : hoverType === "image"
      ? "rgba(245,243,239,0.8)"
      : "rgba(245,243,239,0.35)";

  const ringBg =
    hoverType === "button"
      ? "rgba(255,91,31,0.12)"
      : hoverType === "image"
      ? "rgba(245,243,239,0.08)"
      : "transparent";

  return (
    <>
      {/* Outer ring — smooth trailing */}
      <motion.div
        className="pointer-events-none fixed left-0 top-0 z-[9998] hidden md:block"
        style={{
          x: ringX,
          y: ringY,
          translateX: "-50%",
          translateY: "-50%",
        }}
      >
        <motion.div
          animate={{
            width: ringSize,
            height: ringSize,
            borderColor: ringBorderColor,
            backgroundColor: ringBg,
            borderWidth: hoverType === "default" && !clicking ? 1 : 1.5,
          }}
          transition={{ type: "spring", damping: 20, stiffness: 400, mass: 0.4 }}
          className="rounded-full border"
        />
      </motion.div>

      {/* Inner dot — instant follow */}
      <motion.div
        className="pointer-events-none fixed left-0 top-0 z-[9999] hidden md:block"
        style={{
          x: dotX,
          y: dotY,
          translateX: "-50%",
          translateY: "-50%",
        }}
      >
        <motion.div
          animate={{
            width: hoverType === "default" ? 4 : 0,
            height: hoverType === "default" ? 4 : 0,
            backgroundColor: "#ff5b1f",
          }}
          transition={{ type: "spring", damping: 25, stiffness: 500 }}
          className="rounded-full"
        />
      </motion.div>
    </>
  );
}