"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, Github } from "lucide-react";
import { githubProjects, siteConfig } from "@/data/content";
import RevealText from "./RevealText";

export default function GithubProjects() {
  return (
    <section className="relative border-t border-bone/5 py-20 md:py-28">
      <div className="mx-auto w-full max-w-6xl px-5 md:px-12 lg:px-20">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
          className="mb-6 flex items-center gap-3 font-mono text-xs uppercase tracking-[0.2em] text-bone/40 md:mb-8"
        >
          <span className="h-px w-8 bg-bone/20" />
          06 — More Projects
        </motion.div>

        <div className="mb-10 flex flex-col gap-4 md:mb-14 md:flex-row md:items-end md:justify-between">
          <h2 className="font-display text-5xl font-medium leading-[0.95] tracking-tight text-bone md:text-7xl lg:text-8xl">
            <RevealText as="span" className="block">
              ON GITHUB.
            </RevealText>
          </h2>

          <a
            href={siteConfig.socials.github}
            target="_blank"
            rel="noreferrer"
            className="group inline-flex items-center gap-3 self-start md:self-end"
            data-cursor="button"
          >
            <span className="flex h-10 w-10 items-center justify-center rounded-full border border-bone/20 transition-colors duration-300 group-hover:border-transparent group-hover:bg-accent">
              <Github
                size={16}
                className="text-bone transition-colors duration-300 group-hover:text-ink"
              />
            </span>
            <span className="font-display text-xs font-medium uppercase tracking-[0.15em] text-bone">
              View Full Profile
            </span>
          </a>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          {githubProjects.map((project, i) => (
            <motion.a
              key={project.id}
              href={project.url}
              target="_blank"
              rel="noreferrer"
              data-cursor="button"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{
                duration: 0.7,
                delay: i * 0.1,
                ease: [0.76, 0, 0.24, 1],
              }}
              className="group relative flex flex-col justify-between overflow-hidden rounded-2xl border border-bone/10 bg-muted/20 p-6 transition-all duration-500 hover:border-bone/25 hover:bg-muted/40 md:p-8"
            >
              {/* Accent glow on hover */}
              <div className="pointer-events-none absolute -right-20 -top-20 h-40 w-40 rounded-full bg-accent/0 blur-[60px] transition-all duration-500 group-hover:bg-accent/20" />

              <div className="relative">
                <div className="mb-4 flex items-start justify-between gap-4">
                  <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-bone/40">
                    {String(i + 1).padStart(2, "0")} / {project.language}
                  </span>
                  <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-bone/15 text-bone/60 transition-all duration-500 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:border-accent group-hover:bg-accent group-hover:text-ink">
                    <ArrowUpRight size={14} />
                  </span>
                </div>

                <h3 className="font-display text-2xl font-medium tracking-tight text-bone transition-transform duration-500 group-hover:translate-x-1 md:text-3xl">
                  {project.title}
                </h3>

                <p className="mt-3 max-w-md text-sm leading-relaxed text-bone/55">
                  {project.description}
                </p>
              </div>

              <div className="relative mt-6 flex flex-wrap gap-2">
                {project.tech.map((t) => (
                  <span
                    key={t}
                    className="rounded-full border border-bone/10 px-2.5 py-1 font-mono text-[10px] uppercase tracking-wider text-bone/50 transition-colors group-hover:border-bone/25 group-hover:text-bone/75"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}