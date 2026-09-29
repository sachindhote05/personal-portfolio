"use client";

import { useRef, useState, ReactNode } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface MagneticButtonProps {
  children: ReactNode;
  href?: string;
  variant?: "primary" | "outline";
  className?: string;
  onClick?: () => void;
}

export default function MagneticButton({
  children,
  href,
  variant = "primary",
  className,
  onClick,
}: MagneticButtonProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [pos, setPos] = useState({ x: 0, y: 0 });

  const handleMove = (e: React.MouseEvent) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const relX = e.clientX - rect.left - rect.width / 2;
    const relY = e.clientY - rect.top - rect.height / 2;
    setPos({ x: relX * 0.3, y: relY * 0.3 });
  };

  const reset = () => setPos({ x: 0, y: 0 });

  const base =
    "relative inline-flex items-center justify-center gap-2 overflow-hidden rounded-full px-7 py-3.5 font-display text-xs font-medium uppercase tracking-[0.15em] transition-colors duration-300";

  const variants = {
    primary: "bg-accent text-ink hover:bg-bone",
    outline: "border border-bone/20 text-bone hover:border-bone/60",
  };

  const content = (
    <motion.div
      ref={ref}
      onMouseMove={handleMove}
      onMouseLeave={reset}
      animate={{ x: pos.x, y: pos.y }}
      transition={{ type: "spring", damping: 15, stiffness: 200, mass: 0.5 }}
      className={cn(base, variants[variant], className)}
      data-cursor="button"
    >
      <span className="relative z-10">{children}</span>
    </motion.div>
  );

  if (href) {
    return (
      <a
        href={href}
        target={href.startsWith("http") ? "_blank" : undefined}
        rel={href.startsWith("http") ? "noreferrer" : undefined}
        className="inline-block"
      >
        {content}
      </a>
    );
  }

  return (
    <button onClick={onClick} className="inline-block">
      {content}
    </button>
  );
}