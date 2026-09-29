"use client";

import { motion } from "framer-motion";
import { ArrowUp } from "lucide-react";
import { siteConfig } from "@/data/content";

export default function Footer() {
  return (
    <footer className="relative border-t border-bone/10 py-10 md:py-12">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-8 px-5 md:flex-row md:items-end md:justify-between md:px-12 lg:px-20">
        <div>
          <h3 className="font-display text-2xl font-medium tracking-tight text-bone md:text-3xl">
            SACHIN DHOTE
          </h3>
          <p className="mt-1 font-mono text-xs uppercase tracking-[0.15em] text-bone/40">
            Creative Web Developer
          </p>
        </div>

        <div className="flex flex-col gap-1 font-mono text-xs uppercase tracking-[0.15em] text-bone/40 md:text-right">
          <span>{siteConfig.location}</span>
          <span>© 2026 Sachin Dhote</span>
        </div>

        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="group flex items-center gap-2 self-start font-mono text-xs uppercase tracking-[0.15em] text-bone/50 transition-colors hover:text-bone md:self-auto"
        >
          Back to top
          <span className="flex h-8 w-8 items-center justify-center rounded-full border border-bone/15 transition-all duration-300 group-hover:-translate-y-1 group-hover:border-accent">
            <ArrowUp size={14} />
          </span>
        </button>
      </div>
    </footer>
  );
}