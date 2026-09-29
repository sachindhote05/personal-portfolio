"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function Loader({ onComplete }: { onComplete: () => void }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const start = Date.now();
    const duration = 1400;
    const tick = () => {
      const elapsed = Date.now() - start;
      const progress = Math.min(elapsed / duration, 1);
      // easeOutExpo
      const eased = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress);
      setCount(Math.floor(eased * 100));
      if (progress < 1) {
        requestAnimationFrame(tick);
      } else {
        setTimeout(onComplete, 400);
      }
    };
    requestAnimationFrame(tick);
  }, [onComplete]);

  return (
    <motion.div
      className="fixed inset-0 z-[10000] flex flex-col items-center justify-center bg-ink"
      initial={{ opacity: 1 }}
      exit={{ y: "-100%" }}
      transition={{ duration: 0.9, ease: [0.76, 0, 0.24, 1] }}
    >
      <div className="overflow-hidden">
        <motion.h1
          className="font-display text-[14vw] font-medium leading-none tracking-tighter text-bone md:text-[10vw]"
          initial={{ y: "110%" }}
          animate={{ y: 0 }}
          transition={{ duration: 0.9, ease: [0.76, 0, 0.24, 1] }}
        >
          SACHIN
        </motion.h1>
      </div>

      <div className="mt-8 flex w-[60vw] max-w-md items-center gap-4 md:w-64">
        <div className="h-px flex-1 bg-bone/20">
          <motion.div
            className="h-full bg-accent"
            initial={{ width: "0%" }}
            animate={{ width: `${count}%` }}
            transition={{ duration: 0.1, ease: "linear" }}
          />
        </div>
        <span className="font-mono text-xs tabular-nums text-bone/60">
          {String(count).padStart(3, "0")}
        </span>
      </div>
    </motion.div>
  );
}