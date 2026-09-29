"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { navLinks, siteConfig } from "@/data/content";
import { cn } from "@/lib/utils";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const handleNav = (href: string) => {
    setOpen(false);
    setTimeout(() => {
      const el = document.querySelector(href);
      el?.scrollIntoView({ behavior: "smooth" });
    }, 300);
  };

  return (
    <>
      <motion.header
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.2, ease: [0.76, 0, 0.24, 1] }}
        className="fixed left-0 right-0 top-0 z-[100] flex justify-center px-4 pt-4 md:pt-6"
      >
        <nav
          className={cn(
            "flex w-full max-w-6xl items-center justify-between rounded-full border border-bone/10 bg-ink/60 backdrop-blur-xl transition-all duration-500",
            scrolled
              ? "px-5 py-2.5 md:px-6 md:py-2.5"
              : "px-6 py-3.5 md:px-8 md:py-4"
          )}
        >
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="font-display text-sm font-semibold tracking-[0.2em] text-bone transition-opacity hover:opacity-70"
          >
            SACHIN
          </button>

          {/* Desktop links */}
          <div className="hidden items-center gap-8 md:flex">
            {navLinks.map((link) => (
              <button
                key={link.label}
                onClick={() => handleNav(link.href)}
                className="group relative font-display text-xs font-medium uppercase tracking-[0.15em] text-bone/70 transition-colors hover:text-bone"
              >
                {link.label}
                <span className="absolute -bottom-1 left-0 h-px w-0 bg-accent transition-all duration-300 group-hover:w-full" />
              </button>
            ))}
            <div className="flex items-center gap-2 rounded-full border border-bone/10 px-3 py-1.5">
              <span className="relative flex h-1.5 w-1.5">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-75" />
                <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-accent" />
              </span>
              <span className="font-mono text-[10px] uppercase tracking-wider text-bone/60">
                Available
              </span>
            </div>
          </div>

          {/* Mobile toggle */}
          <button
            onClick={() => setOpen(!open)}
            className="flex h-8 w-8 items-center justify-center text-bone md:hidden"
            aria-label="Toggle menu"
          >
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
        </nav>
      </motion.header>

      {/* Mobile menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-[99] bg-ink md:hidden"
          >
            <div className="flex h-full flex-col items-start justify-center gap-2 px-8">
              {navLinks.map((link, i) => (
                <motion.button
                  key={link.label}
                  initial={{ y: 40, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  exit={{ y: 20, opacity: 0 }}
                  transition={{
                    delay: 0.1 + i * 0.08,
                    duration: 0.5,
                    ease: [0.76, 0, 0.24, 1],
                  }}
                  onClick={() => handleNav(link.href)}
                  className="font-display text-5xl font-medium tracking-tight text-bone"
                >
                  {link.label}
                </motion.button>
              ))}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
                className="mt-12 flex flex-col gap-2 font-mono text-xs uppercase tracking-wider text-bone/40"
              >
                <span>{siteConfig.email}</span>
                <span>{siteConfig.phone}</span>
                <span className="mt-2 flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-accent" />
                  {siteConfig.availability}
                </span>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}