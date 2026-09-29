"use client";

import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { useEffect, useRef } from "react";
import RevealText from "./RevealText";

export default function CreativeSection() {
  const ref = useRef<HTMLDivElement>(null);
  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const smx = useSpring(mx, { damping: 40, stiffness: 150 });
  const smy = useSpring(my, { damping: 40, stiffness: 150 });

  const rotateX = useTransform(smy, [-0.5, 0.5], [8, -8]);
  const rotateY = useTransform(smx, [-0.5, 0.5], [-8, 8]);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const onMove = (e: MouseEvent) => {
      const rect = el.getBoundingClientRect();
      const x = (e.clientX - rect.left) / rect.width - 0.5;
      const y = (e.clientY - rect.top) / rect.height - 0.5;
      mx.set(x);
      my.set(y);
    };
    el.addEventListener("mousemove", onMove);
    return () => el.removeEventListener("mousemove", onMove);
  }, [mx, my]);

  return (
    <section className="relative border-t border-bone/5 py-24 md:py-40">
      <div className="mx-auto w-full max-w-6xl px-5 md:px-12 lg:px-20">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12 flex items-center gap-3 font-mono text-xs uppercase tracking-[0.2em] text-bone/40 md:mb-20"
        >
          <span className="h-px w-8 bg-bone/20" />
          06 — Beyond Code
        </motion.div>

        <div className="grid grid-cols-1 gap-16 lg:grid-cols-2 lg:items-center lg:gap-20">
          <div>
            <h2 className="font-display text-5xl font-medium leading-[0.95] tracking-tight text-bone md:text-7xl lg:text-8xl">
              <RevealText as="span" className="block">
                BEYOND
              </RevealText>
              <RevealText as="span" className="block" delay={0.1}>
                CODE.
              </RevealText>
            </h2>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="mt-10 space-y-2 font-display text-xl leading-snug text-bone/70 md:text-2xl"
            >
              <p>Code is what I build.</p>
              <p className="text-bone/40">Creativity is how I see.</p>
            </motion.div>

            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.5 }}
              className="mt-8 max-w-md text-sm leading-relaxed text-bone/50"
            >
              Outside of development, I paint, draw and explore visual
              creativity — which quietly shapes how I approach interfaces,
              composition and detail in everything I design.
            </motion.p>
          </div>

          {/* Interactive abstract canvas */}
          <motion.div
            ref={ref}
            style={{ rotateX, rotateY, transformPerspective: 1000 }}
            className="relative aspect-square w-full"
          >
            <div className="absolute inset-0 rounded-2xl border border-bone/10" />

            {/* Layered abstract sketch shapes */}
            <motion.svg
              viewBox="0 0 400 400"
              className="absolute inset-0 h-full w-full"
              fill="none"
            >
              {/* Rotating dashed circle */}
              <motion.circle
                cx="200"
                cy="200"
                r="150"
                stroke="rgba(245,243,239,0.15)"
                strokeWidth="1"
                strokeDasharray="4 8"
                animate={{ rotate: 360 }}
                transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
                style={{ originX: "200px", originY: "200px" }}
              />
              <circle cx="200" cy="200" r="100" stroke="rgba(245,243,239,0.1)" strokeWidth="1" />

              {/* Accent arc */}
              <motion.path
                d="M 100 200 A 100 100 0 0 1 300 200"
                stroke="#ff5b1f"
                strokeWidth="2"
                strokeLinecap="round"
                initial={{ pathLength: 0 }}
                whileInView={{ pathLength: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1.5, ease: "easeInOut" }}
              />

              {/* Hand-drawn squiggle */}
              <motion.path
                d="M 120 260 Q 160 220 200 260 T 280 260"
                stroke="rgba(245,243,239,0.3)"
                strokeWidth="1.5"
                strokeLinecap="round"
                initial={{ pathLength: 0 }}
                whileInView={{ pathLength: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 2, delay: 0.3, ease: "easeInOut" }}
              />

              {/* Small brush dots */}
              {[
                [140, 140],
                [260, 150],
                [180, 300],
                [280, 280],
              ].map(([cx, cy], i) => (
                <motion.circle
                  key={i}
                  cx={cx}
                  cy={cy}
                  r="3"
                  fill="#ff5b1f"
                  animate={{ r: [3, 5, 3], opacity: [0.5, 1, 0.5] }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    delay: i * 0.4,
                    ease: "easeInOut",
                  }}
                />
              ))}
            </motion.svg>

            {/* Center brush stroke */}
            <motion.div
              className="absolute left-1/2 top-1/2 h-40 w-1.5 -translate-x-1/2 -translate-y-1/2 rounded-full bg-gradient-to-b from-accent to-transparent"
              animate={{ rotate: [0, 8, -8, 0], scaleY: [1, 1.1, 1] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}