"use client";

import { motion } from "framer-motion";
import { useRef, useState } from "react";
import { services } from "@/data/content";
import RevealText from "./RevealText";
import { ArrowUpRight } from "lucide-react";

function ServiceCard({
  service,
  index,
}: {
  service: (typeof services)[0];
  index: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [mouse, setMouse] = useState({ x: 0, y: 0 });
  const [hover, setHover] = useState(false);

  const onMove = (e: React.MouseEvent) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    setMouse({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-10%" }}
      transition={{ duration: 0.7, delay: index * 0.12, ease: [0.76, 0, 0.24, 1] }}
      onMouseMove={onMove}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      className="group relative overflow-hidden border-t border-bone/10 py-10 md:py-14"
    >
      {/* Hover glow following cursor */}
      <div
        className="pointer-events-none absolute -inset-px opacity-0 transition-opacity duration-500 group-hover:opacity-100"
        style={{
          background: hover
            ? `radial-gradient(400px circle at ${mouse.x}px ${mouse.y}px, rgba(255,91,31,0.08), transparent 60%)`
            : "none",
        }}
      />

      <div className="relative grid grid-cols-1 gap-6 md:grid-cols-12 md:items-start md:gap-8">
        <div className="md:col-span-1">
          <span className="font-mono text-xs text-accent">{service.number}</span>
        </div>

        <div className="md:col-span-5">
          <h3 className="font-display text-3xl font-medium tracking-tight text-bone transition-transform duration-500 group-hover:translate-x-1 md:text-4xl">
            {service.title}
          </h3>
        </div>

        <div className="md:col-span-4">
          <p className="max-w-sm text-sm leading-relaxed text-bone/60">
            {service.description}
          </p>
        </div>

        <div className="md:col-span-2 md:text-right">
          <ArrowUpRight
            className="ml-auto text-bone/30 transition-all duration-500 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-accent"
            size={24}
          />
        </div>
      </div>

      {/* Tags */}
      <div className="relative mt-6 flex flex-wrap gap-2 pl-0 md:pl-[8.33%]">
        {service.tags.map((tag) => (
          <span
            key={tag}
            className="rounded-full border border-bone/10 px-3 py-1 font-mono text-[10px] uppercase tracking-wider text-bone/50 transition-colors group-hover:border-bone/25 group-hover:text-bone/70"
          >
            {tag}
          </span>
        ))}
      </div>
    </motion.div>
  );
}

export default function Services() {
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
          02 — Services
        </motion.div>
<h1 className="mb-6 font-display text-5xl font-medium leading-[0.95] tracking-tight text-bone md:mb-10 md:text-5xl lg:text-6xl">
  WHAT I DO
</h1>
        <div className="border-b border-bone/10">
          {services.map((service, i) => (
            <ServiceCard key={service.number} service={service} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}