"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, MapPin, Calendar, Clock, Award } from "lucide-react";
import { experience } from "@/data/content";
import RevealText from "./RevealText";

export default function Experience() {
  return (
    <section
      id="experience"
      className="relative border-t border-bone/5 py-20 md:py-28"
    >
      <div className="mx-auto w-full max-w-6xl px-5 md:px-12 lg:px-20">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
          className="mb-6 flex items-center gap-3 font-mono text-xs uppercase tracking-[0.2em] text-bone/40 md:mb-8"
        >
          <span className="h-px w-8 bg-bone/20" />
          05 — Experience
        </motion.div>

        <h2 className="mb-10 font-display text-5xl font-medium leading-[0.95] tracking-tight text-bone md:mb-14 md:text-7xl lg:text-8xl">
          <RevealText as="span" className="block">
            EXPERIENCE.
          </RevealText>
        </h2>

        <div className="space-y-0">
          {experience.map((item, i) => (
            <motion.div
              key={item.company}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ duration: 0.8, delay: i * 0.1 }}
              className="relative border-t border-bone/10 py-10 md:py-14"
            >
              <div className="grid grid-cols-1 gap-8 md:grid-cols-12 md:gap-10">
                {/* LEFT — Meta info */}
                <div className="md:col-span-4">
                  <div className="mb-4 flex flex-wrap items-center gap-2">
                    <span className="inline-flex items-center gap-1.5 rounded-full border border-accent/30 bg-accent/5 px-3 py-1 font-mono text-[10px] uppercase tracking-[0.15em] text-accent">
                      <Clock size={10} />
                      {item.duration}
                    </span>
                    {item.certificate && (
                      <span className="inline-flex items-center gap-1.5 rounded-full border border-bone/15 px-3 py-1 font-mono text-[10px] uppercase tracking-[0.15em] text-bone/60">
                        <Award size={10} />
                        Certificate
                      </span>
                    )}
                  </div>

                  <div className="space-y-2 font-mono text-xs uppercase tracking-[0.15em] text-bone/50">
                    <div className="flex items-center gap-2">
                      <Calendar size={12} className="text-bone/40" />
                      {item.period}
                    </div>
                    <div className="flex items-center gap-2">
                      <MapPin size={12} className="text-bone/40" />
                      {item.location}
                    </div>
                  </div>
                </div>

                {/* RIGHT — Role + description */}
                <div className="md:col-span-8">
                  <div className="flex flex-wrap items-baseline gap-x-4 gap-y-1">
                    <h3 className="font-display text-3xl font-medium tracking-tight text-bone md:text-4xl">
                      {item.company}
                    </h3>
                    <span className="font-mono text-xs uppercase tracking-[0.15em] text-bone/40">
                      —
                    </span>
                    <span className="font-mono text-xs uppercase tracking-[0.15em] text-bone/60">
                      {item.role}
                    </span>
                  </div>

                  <p className="mt-5 max-w-2xl text-sm leading-relaxed text-bone/65 md:text-base">
                    {item.description}
                  </p>

                  {/* Highlights */}
                  {item.highlights && (
                    <ul className="mt-6 space-y-2">
                      {item.highlights.map((point) => (
                        <li
                          key={point}
                          className="flex items-start gap-3 text-sm text-bone/55"
                        >
                          <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-accent" />
                          {point}
                        </li>
                      ))}
                    </ul>
                  )}

                  {/* View site link */}
                  {item.url && (
                    <a
                      href={item.url}
                      target="_blank"
                      rel="noreferrer"
                      className="group mt-8 inline-flex items-center gap-3"
                      data-cursor="button"
                    >
                      <span className="flex h-10 w-10 items-center justify-center rounded-full border border-bone/20 transition-colors duration-300 group-hover:border-transparent group-hover:bg-accent">
                        <ArrowUpRight
                          size={16}
                          className="text-bone transition-colors duration-300 group-hover:text-ink"
                        />
                      </span>
                      <span className="font-display text-xs font-medium uppercase tracking-[0.15em] text-bone">
                        View Company Website
                      </span>
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}