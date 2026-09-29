"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

interface RevealTextProps {
  children: ReactNode;
  delay?: number;
  className?: string;
  as?: "h1" | "h2" | "h3" | "p" | "span" | "div";
}

export default function RevealText({
  children,
  delay = 0,
  className = "",
  as = "div",
}: RevealTextProps) {
  const Tag = motion[as] as any;
  return (
    <Tag
      className={className}
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{
        duration: 0.7,
        delay,
        ease: [0.76, 0, 0.24, 1],
      }}
    >
      {children}
    </Tag>
  );
}