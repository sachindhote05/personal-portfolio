"use client";

import { motion } from "framer-motion";
import { Github, Linkedin, Instagram, Mail, Phone, Link2 } from "lucide-react";
import MagneticButton from "./MagneticButton";
import RevealText from "./RevealText";
import { siteConfig } from "@/data/content";

const socials = [
  { icon: Github, label: "GitHub", href: siteConfig.socials.github },
  { icon: Linkedin, label: "LinkedIn", href: siteConfig.socials.linkedin },
  { icon: Instagram, label: "Instagram", href: siteConfig.socials.instagram },
];

export default function Contact() {
  return (
    <section
      id="contact"
      className="relative border-t border-bone/5 py-24 md:py-40"
    >
      <div className="mx-auto w-full max-w-6xl px-5 md:px-12 lg:px-20">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12 flex items-center gap-3 font-mono text-xs uppercase tracking-[0.2em] text-bone/40 md:mb-20"
        >
          <span className="h-px w-8 bg-bone/20" />
          07 — Contact
        </motion.div>

        <h2 className="font-display text-[13vw] font-medium leading-[0.9] tracking-[-0.04em] text-bone md:text-[9vw] lg:text-[8rem]">
          <RevealText as="span" className="block">
            LET'S BUILD
          </RevealText>
          <RevealText as="span" className="block" delay={0.1}>
            SOMETHING
          </RevealText>
          <RevealText as="span" className="block text-accent" delay={0.2}>
            GREAT.
          </RevealText>
        </h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="mt-8 max-w-xl text-balance text-sm leading-relaxed text-bone/60 md:mt-12 md:text-base"
        >
          Have an idea, project or collaboration in mind? Let's turn it into
          something people remember.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="mt-10 flex flex-wrap gap-3 md:mt-12"
        >
          <MagneticButton href={`mailto:${siteConfig.email}`} variant="primary">
            Start a Project
          </MagneticButton>
          <MagneticButton href={`mailto:${siteConfig.email}`} variant="outline">
            Email Me
          </MagneticButton>
        </motion.div>

        {/* Contact details */}
        <div className="mt-16 grid grid-cols-1 gap-8 border-t border-bone/10 pt-10 md:mt-24 md:grid-cols-12 md:pt-14">
          {/* Email */}
          <motion.a
            href={`mailto:${siteConfig.email}`}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="group md:col-span-5"
            data-cursor="button"
          >
            <div className="mb-3 flex items-center gap-3">
              <span className="flex h-10 w-10 items-center justify-center rounded-full border border-bone/15 bg-ink/60 text-bone/70 transition-all duration-300 group-hover:-translate-y-1 group-hover:border-accent group-hover:bg-accent group-hover:text-ink">
                <Mail size={16} />
              </span>
              <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-bone/40">
                Email
              </span>
            </div>
            <span className="block break-all font-display text-base text-bone transition-colors group-hover:text-accent md:text-xl lg:text-2xl">
              {siteConfig.email}
            </span>
          </motion.a>

          {/* Phone */}
          <motion.a
            href={`tel:${siteConfig.phone.replace(/\s/g, "")}`}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="group md:col-span-4"
            data-cursor="button"
          >
            <div className="mb-3 flex items-center gap-3">
              <span className="flex h-10 w-10 items-center justify-center rounded-full border border-bone/15 bg-ink/60 text-bone/70 transition-all duration-300 group-hover:-translate-y-1 group-hover:border-accent group-hover:bg-accent group-hover:text-ink">
                <Phone size={16} />
              </span>
              <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-bone/40">
                Phone
              </span>
            </div>
            <span className="block font-display text-base text-bone transition-colors group-hover:text-accent md:text-xl lg:text-2xl">
              {siteConfig.phone}
            </span>
          </motion.a>

          {/* Social */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="md:col-span-3"
          >
            <div className="mb-3 flex items-center gap-3">
              <span className="flex h-10 w-10 items-center justify-center rounded-full border border-bone/15 bg-ink/60 text-bone/70">
                <Link2 size={16} />
              </span>
              <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-bone/40">
                Social
              </span>
            </div>
            <div className="flex gap-2">
              {socials.map(({ icon: Icon, label, href }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={label}
                  data-cursor="button"
                  className="group flex h-11 w-11 items-center justify-center rounded-full border border-bone/15 text-bone/70 transition-all duration-300 hover:-translate-y-1 hover:border-accent hover:bg-accent hover:text-ink"
                >
                  <Icon size={16} />
                </a>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}