"use client";

import { motion, useMotionValue, useSpring } from "framer-motion";
import { useEffect } from "react";
import Image from "next/image";
import { ArrowDown, Github, Linkedin, Mail } from "lucide-react";
import MagneticButton from "./MagneticButton";
import { siteConfig } from "@/data/content";

export default function Hero() {
  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const px = useSpring(mx, { damping: 30, stiffness: 100 });
  const py = useSpring(my, { damping: 30, stiffness: 100 });

  useEffect(() => {
    const onMove = (e: MouseEvent) => {
      const x = (e.clientX / window.innerWidth - 0.5) * 2;
      const y = (e.clientY / window.innerHeight - 0.5) * 2;
      mx.set(x * 20);
      my.set(y * 20);
    };
    window.addEventListener("mousemove", onMove);
    return () => window.removeEventListener("mousemove", onMove);
  }, [mx, my]);

  const heroSocials = [
    { icon: Github, label: "GitHub", href: siteConfig.socials.github },
    { icon: Linkedin, label: "LinkedIn", href: siteConfig.socials.linkedin },
    { icon: Mail, label: "Email", href: `mailto:${siteConfig.email}` },
  ];

  return (
    <section className="relative flex min-h-[100svh] flex-col justify-center overflow-hidden px-5 pb-16 pt-32 md:px-12 lg:px-20">
      {/* Ambient gradient */}
      <motion.div
        style={{ x: px, y: py }}
        className="pointer-events-none absolute right-[-20%] top-[10%] h-[60vh] w-[60vh] rounded-full opacity-[0.15] blur-[100px]"
      >
        <div className="h-full w-full rounded-full bg-accent" />
      </motion.div>

      {/* Floating shapes */}
      <motion.div
        animate={{ y: [0, -20, 0], rotate: [0, 10, 0] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        className="pointer-events-none absolute right-[10%] top-[20%] hidden h-24 w-24 rounded-full border border-bone/10 lg:block"
      />
      <motion.div
        animate={{ y: [0, 20, 0], rotate: [0, -10, 0] }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1,
        }}
        className="pointer-events-none absolute bottom-[20%] right-[20%] hidden h-16 w-16 rounded-full border border-accent/30 lg:block"
      />

      <div className="relative z-10 mx-auto w-full max-w-6xl">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12 lg:gap-10">
          {/* LEFT — Text */}
          <div className="lg:col-span-8">
            {/* Social icons + label row */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="mb-6 flex flex-wrap items-center gap-4"
            >
              {/* Social icons */}
              <div className="flex gap-2">
                {heroSocials.map(({ icon: Icon, label, href }) => (
                  <a
                    key={label}
                    href={href}
                    target={href.startsWith("http") ? "_blank" : undefined}
                    rel={href.startsWith("http") ? "noreferrer" : undefined}
                    aria-label={label}
                    data-cursor="button"
                    className="group flex h-9 w-9 items-center justify-center rounded-full border border-bone/15 bg-ink/60 text-bone/70 backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:border-accent hover:bg-accent hover:text-ink"
                  >
                    <Icon size={15} />
                  </a>
                ))}
              </div>

              {/* Divider */}
              <span className="h-4 w-px bg-bone/20" />

              {/* Label */}
              <span className="font-mono text-xs uppercase tracking-[0.2em] text-bone/50">
                Creative Web Developer — India
              </span>
            </motion.div>

            <h1 className="font-display text-[14vw] font-medium leading-[0.9] tracking-[-0.04em] text-bone md:text-[9vw] lg:text-[7rem] xl:text-[8rem]">
              <span className="block overflow-hidden">
                <motion.span
                  className="block"
                  initial={{ y: "110%" }}
                  animate={{ y: 0 }}
                  transition={{ duration: 1, delay: 0.5, ease: [0.76, 0, 0.24, 1] }}
                >
                  HELLO,
                </motion.span>
              </span>
              <span className="block overflow-hidden">
                <motion.span
                  className="block"
                  initial={{ y: "110%" }}
                  animate={{ y: 0 }}
                  transition={{ duration: 1, delay: 0.65, ease: [0.76, 0, 0.24, 1] }}
                >
                  I'M SACHIN.
                </motion.span>
              </span>
            </h1>

            <div className="mt-8 flex flex-col gap-8 md:mt-12">
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1, duration: 0.6 }}
                className="max-w-md text-balance text-sm leading-relaxed text-bone/60 md:text-base"
              >
                I build modern digital experiences that combine clean
                development, thoughtful design and engaging interactions.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.15, duration: 0.6 }}
                className="flex flex-wrap gap-3"
              >
                <MagneticButton href="#work" variant="primary">
                  View My Work
                </MagneticButton>
                <MagneticButton href="#contact" variant="outline">
                  Let's Work Together
                </MagneticButton>
              </motion.div>
            </div>
          </div>

          {/* RIGHT — Photo */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 30 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.9, ease: [0.76, 0, 0.24, 1] }}
            className="relative mx-auto w-full max-w-sm lg:col-span-4 lg:mx-0 lg:max-w-none"
          >
            {/* Decorative ring behind photo */}
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
              className="pointer-events-none absolute -inset-4 rounded-full border border-dashed border-bone/15 md:-inset-6"
            />

            {/* Accent glow */}
            <div className="pointer-events-none absolute inset-0 -z-10 rounded-full bg-accent/20 blur-[60px]" />

            {/* Photo container */}
            <div className="relative aspect-[4/5] overflow-hidden rounded-2xl border border-bone/10 bg-muted">
              <Image
                src="/sachin.png"
                alt="Sachin Dhote"
                fill
                priority
                sizes="(max-width: 1024px) 80vw, 30vw"
                className="object-cover object-center transition-transform duration-700 hover:scale-105"
              />
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-ink/40 via-transparent to-transparent" />
            </div>

            {/* Open to work badge */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.6, duration: 0.6 }}
              className="absolute -bottom-4 left-4 flex items-center gap-2 rounded-full border border-bone/15 bg-ink/80 px-3 py-2 backdrop-blur-md md:left-6"
            >
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-accent" />
              </span>
              <span className="font-mono text-[10px] uppercase tracking-wider text-bone/80">
                Open to work
              </span>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 0.6 }}
        className="absolute bottom-8 left-1/2 flex -translate-x-1/2 items-center gap-2 font-mono text-[10px] uppercase tracking-[0.2em] text-bone/40"
      >
        <motion.span
          animate={{ y: [0, 4, 0] }}
          transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
        >
          <ArrowDown size={12} />
        </motion.span>
        Scroll
      </motion.div>
    </section>
  );
}