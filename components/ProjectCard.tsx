"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";
import { Project } from "@/data/content";
import { ArrowUpRight } from "lucide-react";

export default function ProjectCard({
  project,
  index,
}: {
  project: Project;
  index: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["-6%", "6%"]);
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [1.03, 1, 1.03]);

  return (
    <article
      ref={ref}
      className="relative border-t border-bone/10 py-20 md:py-32"
    >
      {/* Project number watermark */}
      <div className="pointer-events-none absolute -top-4 right-4 select-none font-display text-[20vw] font-medium leading-none text-bone/[0.03] md:text-[14vw]">
        {project.number}
      </div>

      <div className="relative mx-auto w-full max-w-6xl px-5 md:px-12 lg:px-20">
        {/* Header row */}
        <div className="mb-10 flex flex-col gap-4 md:mb-16 md:flex-row md:items-end md:justify-between">
          <div>
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="mb-3 flex items-center gap-3 font-mono text-xs uppercase tracking-[0.2em] text-bone/40"
            >
              <span style={{ color: project.accent }}>
                Project {project.number}
              </span>
              <span className="h-px w-6 bg-bone/20" />
              <span>{project.year}</span>
            </motion.div>

            <h3 className="overflow-hidden font-display text-5xl font-medium leading-[0.95] tracking-tight text-bone md:text-7xl lg:text-8xl">
              <motion.span
                className="block"
                initial={{ y: "110%" }}
                whileInView={{ y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.9, ease: [0.76, 0, 0.24, 1] }}
              >
                {project.title}
              </motion.span>
            </h3>

            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="mt-4 max-w-xl font-mono text-xs uppercase tracking-[0.15em] text-bone/50 md:text-sm"
            >
              {project.subtitle}
            </motion.p>
          </div>
        </div>

        {/* Clickable visual mockup — opens the live project */}
        <motion.a
          href={project.url}
          target="_blank"
          rel="noreferrer"
          data-cursor="image"
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-10%" }}
          transition={{ duration: 0.9, ease: [0.76, 0, 0.24, 1] }}
          className="group relative block aspect-[16/10] w-full overflow-hidden rounded-lg border border-bone/10 bg-muted md:aspect-[16/9]"
        >
          {/* Parallax inner */}
          <motion.div style={{ y, scale }} className="absolute inset-0">
            {project.image ? (
              <Image
                src={project.image}
                alt={`${project.title} preview`}
                fill
                sizes="(max-width: 768px) 100vw, 80vw"
                className="object-cover object-top transition-transform duration-700 group-hover:scale-[1.04]"
              />
            ) : (
              <ProjectVisualFallback project={project} />
            )}
          </motion.div>

          {/* Hover overlay */}
          <div className="absolute inset-0 flex items-end justify-between bg-gradient-to-t from-ink/90 via-ink/10 to-transparent p-6 opacity-0 transition-opacity duration-500 group-hover:opacity-100 md:p-10">
            <span className="font-mono text-xs uppercase tracking-[0.2em] text-bone/70">
              Visit live site
            </span>
            <span
              className="flex h-12 w-12 items-center justify-center rounded-full text-ink transition-transform duration-500 group-hover:rotate-45"
              style={{ backgroundColor: project.accent }}
            >
              <ArrowUpRight size={20} />
            </span>
          </div>

          {/* Top browser bar */}
          <div className="absolute left-0 right-0 top-0 flex items-center gap-2 border-b border-bone/10 bg-ink/60 px-4 py-3 backdrop-blur-sm">
            <span className="h-2.5 w-2.5 rounded-full bg-bone/20" />
            <span className="h-2.5 w-2.5 rounded-full bg-bone/20" />
            <span className="h-2.5 w-2.5 rounded-full bg-bone/20" />
            <span className="ml-4 font-mono text-[10px] text-bone/40">
              {project.url.replace("https://", "")}
            </span>
          </div>
        </motion.a>

        {/* Info grid */}
        <div className="mt-12 grid grid-cols-1 gap-10 md:mt-16 md:grid-cols-12 md:gap-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="md:col-span-5"
          >
            <h4 className="mb-4 font-mono text-[10px] uppercase tracking-[0.2em] text-bone/40">
              About the project
            </h4>
            <p className="text-sm leading-relaxed text-bone/70 md:text-base">
              {project.description}
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="md:col-span-4"
          >
            <h4 className="mb-4 font-mono text-[10px] uppercase tracking-[0.2em] text-bone/40">
              {project.features ? "Key features" : "What I worked on"}
            </h4>
            <ul className="space-y-2">
              {(project.features || project.experience)?.map((item) => (
                <li
                  key={item}
                  className="flex items-start gap-2 text-sm text-bone/60"
                >
                  <span
                    className="mt-2 h-1 w-1 shrink-0 rounded-full"
                    style={{ backgroundColor: project.accent }}
                  />
                  {item}
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="md:col-span-3"
          >
            <h4 className="mb-4 font-mono text-[10px] uppercase tracking-[0.2em] text-bone/40">
              Technology
            </h4>
            <div className="flex flex-wrap gap-2">
              {project.tech.map((t) => (
                <span
                  key={t}
                  className="rounded-full border border-bone/10 px-2.5 py-1 font-mono text-[10px] uppercase tracking-wider text-bone/60"
                >
                  {t}
                </span>
              ))}
            </div>

            <a
              href={project.url}
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
                View Project
              </span>
            </a>
          </motion.div>
        </div>
      </div>
    </article>
  );
}

/* Fallback visual for projects that don't have a screenshot yet */
function ProjectVisualFallback({ project }: { project: Project }) {
  return (
    <div
      className="relative h-full w-full overflow-hidden"
      style={{
        background: `radial-gradient(circle at 30% 20%, ${project.accent}22, transparent 55%), radial-gradient(circle at 80% 80%, ${project.accent}11, transparent 50%), #111`,
      }}
    >
      <svg
        className="absolute inset-0 h-full w-full opacity-[0.15]"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <pattern
            id={`grid-${project.id}`}
            width="40"
            height="40"
            patternUnits="userSpaceOnUse"
          >
            <path
              d="M 40 0 L 0 0 0 40"
              fill="none"
              stroke="#f5f3ef"
              strokeWidth="0.5"
            />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill={`url(#grid-${project.id})`} />
      </svg>

      <motion.div
        animate={{ y: [0, -20, 0], rotate: [0, 8, 0] }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
        className="absolute left-[15%] top-[25%] h-32 w-32 rounded-full border md:h-48 md:w-48"
        style={{ borderColor: `${project.accent}44` }}
      />

      <div className="absolute inset-0 flex items-center justify-center">
        <span className="font-display text-[15vw] font-medium leading-none tracking-tighter text-bone/[0.07] md:text-[10vw]">
          {project.title.split(" ")[0].toUpperCase()}
        </span>
      </div>
    </div>
  );
}