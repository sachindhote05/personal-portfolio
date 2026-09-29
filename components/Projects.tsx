"use client";

import { projects } from "@/data/content";
import ProjectCard from "./ProjectCard";
import RevealText from "./RevealText";
import { motion } from "framer-motion";

export default function Projects() {
  return (
    <section id="work" className="relative border-t border-bone/5 pt-24 md:pt-40">
      <div className="mx-auto mb-8 w-full max-w-6xl px-5 md:px-12 lg:px-20">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-8 flex items-center gap-3 font-mono text-xs uppercase tracking-[0.2em] text-bone/40"
        >
          <span className="h-px w-8 bg-bone/20" />
          04 — Selected Work
        </motion.div>

        <h2 className="font-display text-5xl font-medium leading-[0.95] tracking-tight text-bone md:text-7xl lg:text-8xl">
          <RevealText as="span" className="block">
            SELECTED
          </RevealText>
          <RevealText as="span" className="block" delay={0.1}>
            WORK.
          </RevealText>
        </h2>
      </div>

      <div className="border-b border-bone/10">
        {projects.map((project, i) => (
          <ProjectCard key={project.id} project={project} index={i} />
        ))}
      </div>
    </section>
  );
}