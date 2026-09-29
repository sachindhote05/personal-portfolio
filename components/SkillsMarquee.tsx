"use client";

import { skills } from "@/data/content";
import { motion } from "framer-motion";

export default function SkillsMarquee() {
  // Duplicate for seamless loop
  const row1 = [...skills];
  const row2 = [...skills].reverse();

  return (
    <section className="relative overflow-hidden border-y border-bone/5 py-16 md:py-24">
      <div className="mb-8 flex items-center justify-center gap-3 font-mono text-xs uppercase tracking-[0.2em] text-bone/40">
        <span className="h-px w-8 bg-bone/20" />
        03 — Tools & Technologies
      </div>

      {/* Row 1 */}
      <div className="group flex overflow-hidden">
        <div className="flex shrink-0 animate-marquee items-center gap-8 pr-8 group-hover:[animation-play-state:paused] md:gap-16 md:pr-16">
          {row1.map((skill, i) => (
            <SkillItem key={`r1-${skill}-${i}`} skill={skill} />
          ))}
        </div>
        <div
          className="flex shrink-0 animate-marquee items-center gap-8 pr-8 group-hover:[animation-play-state:paused] md:gap-16 md:pr-16"
          aria-hidden
        >
          {row1.map((skill, i) => (
            <SkillItem key={`r1b-${skill}-${i}`} skill={skill} />
          ))}
        </div>
      </div>

      {/* Row 2 — reverse */}
      <div className="group mt-6 flex overflow-hidden md:mt-10">
        <div className="flex shrink-0 animate-marquee-reverse items-center gap-8 pr-8 group-hover:[animation-play-state:paused] md:gap-16 md:pr-16">
          {row2.map((skill, i) => (
            <SkillItem key={`r2-${skill}-${i}`} skill={skill} outline />
          ))}
        </div>
        <div
          className="flex shrink-0 animate-marquee-reverse items-center gap-8 pr-8 group-hover:[animation-play-state:paused] md:gap-16 md:pr-16"
          aria-hidden
        >
          {row2.map((skill, i) => (
            <SkillItem key={`r2b-${skill}-${i}`} skill={skill} outline />
          ))}
        </div>
      </div>
    </section>
  );
}

function SkillItem({
  skill,
  outline = false,
}: {
  skill: string;
  outline?: boolean;
}) {
  return (
    <span
      className={`shrink-0 font-display text-3xl font-medium tracking-tight transition-colors duration-300 md:text-5xl lg:text-6xl ${
        outline
          ? "text-transparent [-webkit-text-stroke:1px_rgba(245,243,239,0.25)] hover:[-webkit-text-stroke:1px_rgba(255,91,31,0.8)]"
          : "text-bone/80 hover:text-accent"
      }`}
    >
      {skill}
    </span>
  );
}