"use client";

import { motion } from "framer-motion";
import RevealText from "./RevealText";

const education = [
  {
    label: "Degree",
    value: "B.Tech — Computer Science Engineering",
  },
  {
    label: "Institute",
    value: "Lakshmi Narain College of Technology Excellence, Bhopal",
  },
  { label: "Graduation", value: "2027" },
  { label: "CGPA", value: "7.00" },
];

const stats = [
  { value: "2+", label: "Live Projects" },
  { value: "2027", label: "Graduating" },
  { value: "7.0", label: "CGPA" },
];

export default function About() {
  return (
    <section
      id="about"
      className="relative border-t border-bone/5 py-20 md:py-28"
    >
      <div className="mx-auto w-full max-w-6xl px-5 md:px-12 lg:px-20">
        {/* Section label */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
          className="mb-6 flex items-center gap-3 font-mono text-xs uppercase tracking-[0.2em] text-bone/40 md:mb-8"
        >
          <span className="h-px w-8 bg-bone/20" />
          01 — About
        </motion.div>

        <div className="grid grid-cols-1 gap-14 lg:grid-cols-12 lg:gap-20">
          {/* LEFT — Heading + intro + stats */}
          <div className="lg:col-span-7">
            <h2 className="font-display text-5xl font-medium leading-[0.95] tracking-tight text-bone md:text-5xl lg:text-6xl">
              <RevealText as="span" className="block">
                A LITTLE
              </RevealText>
              <RevealText as="span" className="block" delay={0.1}>
                ABOUT ME.
              </RevealText>
            </h2>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="mt-6 space-y-4 md:mt-8 md:space-y-5"
            >
              {/* Intro paragraph — highlighted */}
              <p className="max-w-2xl font-display text-xl leading-snug text-bone/90 md:text-2xl">
                I'm <span className="text-accent">Sachin Dhote</span>, a Computer
                Science Engineering student and creative web developer based in
                India.
              </p>

              <p className="max-w-2xl text-base leading-relaxed text-bone/60 md:text-lg">
                I'm currently pursuing my B.Tech at{" "}
                <span className="text-bone/85">
                  Lakshmi Narain College of Technology Excellence, Bhopal
                </span>
                . I enjoy turning ideas into modern, responsive and interactive
                digital experiences — combining clean development with
                thoughtful design.
              </p>

              <p className="max-w-2xl text-base leading-relaxed text-bone/50 md:text-lg">
                I work with modern frontend technologies like{" "}
                <span className="text-bone/80">React</span>,{" "}
                <span className="text-bone/80">Next.js</span>,{" "}
                <span className="text-bone/80">TypeScript</span> and{" "}
                <span className="text-bone/80">Tailwind CSS</span> — and I love
                building websites that feel both functional and memorable.
              </p>
            </motion.div>

            {/* Stats row */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.7, delay: 0.4 }}
              className="mt-10 grid grid-cols-3 gap-6 border-t border-bone/10 pt-8 md:mt-12"
            >
              {stats.map((stat) => (
                <div key={stat.label} className="group">
                  <div className="font-display text-3xl font-medium tracking-tight text-bone md:text-4xl">
                    {stat.value}
                  </div>
                  <div className="mt-1 font-mono text-[10px] uppercase tracking-[0.15em] text-bone/40 md:text-xs">
                    {stat.label}
                  </div>
                </div>
              ))}
            </motion.div>
          </div>

          {/* RIGHT — Education card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="lg:col-span-5 lg:pt-8"
          >
            <div className="relative rounded-2xl border border-bone/10 bg-muted/30 p-6 backdrop-blur-sm md:p-8">
              {/* Corner accent */}
              <div className="absolute -left-px -top-px h-12 w-12 rounded-tl-2xl border-l border-t border-accent/60" />
              <div className="absolute -bottom-px -right-px h-12 w-12 rounded-br-2xl border-b border-r border-accent/60" />

              <div className="mb-6 flex items-center justify-between">
                <h3 className="font-mono text-xs uppercase tracking-[0.2em] text-bone/50">
                  Education
                </h3>
                <span className="h-2 w-2 rounded-full bg-accent" />
              </div>

              <div className="space-y-5">
                {education.map((item, i) => (
                  <motion.div
                    key={item.label}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, amount: 0.2 }}
                    transition={{ duration: 0.5, delay: 0.4 + i * 0.08 }}
                    className="border-b border-bone/5 pb-4 last:border-b-0 last:pb-0"
                  >
                    <div className="mb-1 font-mono text-[10px] uppercase tracking-[0.2em] text-bone/40">
                      {item.label}
                    </div>
                    <div className="text-sm leading-snug text-bone/85 md:text-base">
                      {item.value}
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Small note under card */}
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.7, delay: 0.9 }}
              className="mt-6 font-mono text-[10px] uppercase tracking-[0.15em] text-bone/30 md:text-xs"
            >
              → Currently open for internships & freelance
            </motion.p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}