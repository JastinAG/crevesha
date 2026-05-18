"use client";

import { assets, hero } from "@/lib/content";
import { motion, useReducedMotion } from "framer-motion";
import { BadgeCheck } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const fadeUp = (reduced: boolean | null, delay = 0) =>
  reduced
    ? {}
    : {
        initial: { opacity: 0, y: 24 },
        animate: { opacity: 1, y: 0 },
        transition: { duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] },
      };

export function Hero() {
  const prefersReducedMotion = useReducedMotion();

  return (
    <header
      id="home"
      className="hero-gradient hero-pattern overflow-hidden text-white"
      aria-labelledby="hero-heading"
    >
      {/* Ambient orbs + diagonal accent lines */}
      <div className="pointer-events-none absolute inset-0 z-0" aria-hidden>
        <div className="absolute -right-24 top-0 h-[420px] w-[420px] rounded-full bg-brand-secondary/12 blur-[120px]" />
        <div className="absolute -bottom-32 left-[-10%] h-80 w-80 rounded-full bg-brand-secondary/8 blur-[100px]" />
        <div className="absolute right-[15%] top-[35%] h-56 w-56 rounded-full bg-white/5 blur-[80px]" />
        <svg
          className="absolute inset-0 h-full w-full opacity-[0.14]"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="none"
        >
          <defs>
            <pattern
              id="hero-diagonal-lines"
              width="48"
              height="48"
              patternUnits="userSpaceOnUse"
              patternTransform="rotate(-35)"
            >
              <line
                x1="0"
                y1="0"
                x2="0"
                y2="48"
                stroke="rgba(255,255,255,0.35)"
                strokeWidth="1"
              />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#hero-diagonal-lines)" />
        </svg>
      </div>

      <motion.div
        className="relative z-10 mx-auto max-w-site px-md pb-16 pt-4 md:pb-20 md:pt-6 lg:pb-24"
        {...fadeUp(prefersReducedMotion)}
      >
        <div className="grid items-start gap-8 lg:grid-cols-12 lg:gap-10">
          {/* Left column */}
          <div className="z-10 space-y-6 lg:col-span-6 lg:space-y-lg lg:pt-2">
            <motion.div
              className="inline-flex items-center gap-xs rounded-full border border-white/20 bg-white/10 px-sm py-xs backdrop-blur-md"
              {...fadeUp(prefersReducedMotion, 0.1)}
            >
              <span
                className="h-2 w-2 animate-pulse rounded-full bg-brand-secondary"
                aria-hidden
              />
              <span className="text-label-sm uppercase tracking-widest text-surface-bright/80">
                {hero.badge}
              </span>
            </motion.div>

            <motion.h1
              id="hero-heading"
              className="max-w-2xl text-display-lg-mobile font-bold leading-[1.1] tracking-[-0.02em] text-surface-bright lg:text-[56px]"
              {...fadeUp(prefersReducedMotion, 0.15)}
            >
              {hero.heading}
            </motion.h1>

            <motion.p
              className="max-w-xl text-body-lg leading-relaxed text-on-primary-container opacity-90"
              {...fadeUp(prefersReducedMotion, 0.2)}
            >
              {hero.subheading}
            </motion.p>

            <motion.div
              className="flex w-full max-w-full flex-col gap-3 pt-sm md:flex-row md:flex-nowrap md:items-center md:gap-4"
              {...fadeUp(prefersReducedMotion, 0.25)}
            >
              <Link
                href={hero.primaryCta.href}
                className="inline-flex shrink-0 items-center justify-center whitespace-nowrap rounded-xl bg-brand-secondary px-4 py-3 text-sm font-bold text-white shadow-lg shadow-black/20 transition-all hover:brightness-110 sm:px-5 sm:py-3.5 sm:text-label-md"
              >
                {hero.primaryCta.label}
              </Link>
              <Link
                href={hero.secondaryCta.href}
                className="inline-flex shrink-0 items-center justify-center whitespace-nowrap rounded-xl border border-white/20 bg-white/5 px-4 py-3 text-sm font-bold text-white backdrop-blur-sm transition-all hover:bg-white/10 sm:px-5 sm:py-3.5 sm:text-label-md"
              >
                {hero.secondaryCta.label}
              </Link>
            </motion.div>

            <motion.div
              className="flex items-center gap-lg border-t border-white/10 pt-lg"
              {...fadeUp(prefersReducedMotion, 0.3)}
            >
              <div className="flex -space-x-3" aria-hidden>
                {hero.trust.avatars.map((avatar) => (
                  <div
                    key={avatar.initials}
                    className={`flex h-10 w-10 items-center justify-center rounded-full border-2 border-brand-primary text-[10px] font-bold ${avatar.className}`}
                  >
                    {avatar.initials}
                  </div>
                ))}
              </div>
              <p className="text-label-sm text-surface-variant/70">
                Trusted by{" "}
                <span className="font-bold text-white">
                  {hero.trust.highlight}
                </span>{" "}
                {hero.trust.suffix}
              </p>
            </motion.div>
          </div>

          {/* Right column — image + floating badge */}
          <motion.div
            className="relative w-full lg:col-span-6 lg:col-start-7"
            {...fadeUp(prefersReducedMotion, 0.2)}
          >
            <div className="group relative z-10 ml-auto w-full">
              <div className="relative aspect-[16/9] w-full overflow-hidden rounded-[1.25rem] border-4 border-white/10 shadow-2xl ring-1 ring-white/10 lg:rounded-[2rem]">
                <Image
                  src={assets.heroImage}
                  alt={hero.imageAlt}
                  fill
                  priority
                  quality={90}
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover object-[52%_38%] transition-transform duration-700 group-hover:scale-[1.02]"
                />
              </div>

              <div className="ambient-shadow absolute -bottom-8 right-2 flex items-center gap-md rounded-2xl border border-outline-variant/30 bg-surface p-4 shadow-lg md:p-lg lg:-right-6">
                <div className="flex h-14 w-14 items-center justify-center rounded-full bg-brand-secondary/10">
                  <BadgeCheck
                    className="h-8 w-8 text-brand-secondary"
                    strokeWidth={1.5}
                    aria-hidden
                  />
                </div>
                <div>
                  <p className="text-headline-md font-semibold leading-none text-brand-primary">
                    {hero.qualityBadge.value}
                  </p>
                  <p className="mt-1 text-label-sm text-on-surface-variant">
                    {hero.qualityBadge.label}
                  </p>
                </div>
              </div>
            </div>

            <div
              className="pointer-events-none absolute -right-8 top-6 h-32 w-32 rounded-full bg-brand-secondary/10 blur-[80px] lg:-right-12"
              aria-hidden
            />
          </motion.div>
        </div>
      </motion.div>
    </header>
  );
}
