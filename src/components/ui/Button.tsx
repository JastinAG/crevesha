"use client";

import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import Link from "next/link";
import type { ReactNode } from "react";

type ButtonVariant = "primary" | "outline" | "ghost";

interface ButtonProps {
  children: ReactNode;
  href?: string;
  variant?: ButtonVariant;
  className?: string;
  type?: "button" | "submit";
  onClick?: () => void;
  disabled?: boolean;
  ariaLabel?: string;
}

const variants: Record<ButtonVariant, string> = {
  primary:
    "bg-brand-secondary text-brand-white hover:bg-[#a67a24] shadow-md hover:shadow-lift",
  outline:
    "border-2 border-brand-white text-brand-white bg-transparent hover:bg-brand-white/10",
  ghost:
    "text-brand-primary hover:bg-brand-primary/5 border border-brand-primary/10",
};

export function Button({
  children,
  href,
  variant = "primary",
  className,
  type = "button",
  onClick,
  disabled,
  ariaLabel,
}: ButtonProps) {
  const classes = cn(
    "inline-flex items-center justify-center rounded-brand px-6 py-3 text-sm font-semibold transition-all duration-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-secondary",
    variants[variant],
    disabled && "opacity-60 cursor-not-allowed pointer-events-none",
    className
  );

  const motionProps = {
    whileHover: disabled ? undefined : { y: -2 },
    whileTap: disabled ? undefined : { scale: 0.98 },
    transition: { type: "spring" as const, stiffness: 400, damping: 20 },
  };

  if (href) {
    return (
      <motion.div {...motionProps} className="inline-block">
        <Link href={href} className={classes} aria-label={ariaLabel}>
          {children}
        </Link>
      </motion.div>
    );
  }

  return (
    <motion.button
      type={type}
      onClick={onClick}
      disabled={disabled}
      aria-label={ariaLabel}
      className={classes}
      {...motionProps}
    >
      {children}
    </motion.button>
  );
}
