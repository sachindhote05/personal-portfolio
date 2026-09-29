"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Award, ExternalLink } from "lucide-react";
import { certificates } from "@/data/content";
import RevealText from "./RevealText";

export default function Certificate() {
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
          06 — Certificate
        </motion.div>

        <div className="mb-10 flex flex-col gap-4 md:mb-14 md:flex-row md:items-end md:justify-between">
          <h2 className="font-display text-5xl font-medium leading-[0.95] tracking-tight text-bone md:text-7xl lg:text-8xl">
            <RevealText as="span" className="block">
              CERTIFIED.
            </RevealText>
          </h2>
          <p className="max-w-xs font-mono text-[10px] uppercase tracking-[0.2em] text-bone/40 md:text-right">
            {certificates.length} certificates & credentials
          </p>
        </div>

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {certificates.map((cert, i) => (
            <motion.a
              key={cert.id}
              href={cert.credentialUrl}
              target="_blank"
              rel="noreferrer"
              data-cursor="button"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{
                duration: 0.6,
                delay: i * 0.05,
                ease: [0.76, 0, 0.24, 1],
              }}
              className="group relative flex flex-col overflow-hidden rounded-2xl border border-bone/10 bg-muted/20 transition-all duration-500 hover:-translate-y-1 hover:border-bone/25 hover:bg-muted/40"
            >
              <div className="relative aspect-[4/3] w-full overflow-hidden border-b border-bone/10 bg-ink/40">
                <Image
                  src={cert.image}
                  alt={`${cert.title} certificate`}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-cover object-top transition-transform duration-700 group-hover:scale-105"
                />

                <div className="absolute left-3 top-3 inline-flex items-center gap-1.5 rounded-full border border-accent/40 bg-ink/80 px-2.5 py-1 font-mono text-[10px] uppercase tracking-[0.15em] text-accent backdrop-blur-md">
                  <Award size={10} />
                  {cert.date}
                </div>

                <div className="absolute inset-0 flex items-center justify-center bg-ink/70 opacity-0 backdrop-blur-sm transition-opacity duration-500 group-hover:opacity-100">
                  <span className="flex items-center gap-2 font-mono text-xs uppercase tracking-[0.2em] text-bone">
                    View Credential
                    <ExternalLink size={14} />
                  </span>
                </div>
              </div>

              <div className="flex flex-1 flex-col p-5">
                <h3 className="font-display text-lg font-medium leading-tight tracking-tight text-bone transition-colors group-hover:text-accent md:text-xl">
                  {cert.title}
                </h3>
                <p className="mt-1.5 font-mono text-[10px] uppercase tracking-[0.15em] text-bone/50">
                  {cert.issuer}
                </p>
                <p className="mt-3 line-clamp-3 text-xs leading-relaxed text-bone/55 md:text-sm">
                  {cert.description}
                </p>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}