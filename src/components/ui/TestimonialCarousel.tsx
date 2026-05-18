"use client";

import { cn } from "@/lib/utils";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";
import { useCallback, useEffect, useState } from "react";

interface Testimonial {
  quote: string;
  name: string;
  title: string;
}

interface TestimonialCarouselProps {
  testimonials: Testimonial[];
}

export function TestimonialCarousel({
  testimonials,
}: TestimonialCarouselProps) {
  const [index, setIndex] = useState(0);
  const prefersReducedMotion = useReducedMotion();

  const next = useCallback(() => {
    setIndex((i) => (i + 1) % testimonials.length);
  }, [testimonials.length]);

  const prev = useCallback(() => {
    setIndex((i) => (i - 1 + testimonials.length) % testimonials.length);
  }, [testimonials.length]);

  useEffect(() => {
    if (prefersReducedMotion) return;
    const timer = setInterval(next, 6000);
    return () => clearInterval(timer);
  }, [next, prefersReducedMotion]);

  const current = testimonials[index];

  return (
    <motion.div
      className="relative mx-auto max-w-3xl"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      <div
        className="relative overflow-hidden rounded-brand bg-brand-white p-8 shadow-card md:p-12"
        aria-live="polite"
        aria-atomic="true"
      >
        <Quote
          className="absolute left-6 top-6 h-10 w-10 text-brand-secondary/30"
          aria-hidden
        />
        <AnimatePresence mode="wait">
          <motion.blockquote
            key={index}
            initial={prefersReducedMotion ? false : { opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={prefersReducedMotion ? undefined : { opacity: 0, x: -20 }}
            transition={{ duration: 0.35 }}
            className="relative z-10 pt-6"
          >
            <p className="text-lg leading-relaxed text-brand-primary md:text-xl">
              &ldquo;{current.quote}&rdquo;
            </p>
            <footer className="mt-6 border-t border-brand-primary/10 pt-6">
              <cite className="not-italic">
                <span className="block font-semibold text-brand-primary">
                  {current.name}
                </span>
                <span className="text-sm text-brand-primary/70">
                  {current.title}
                </span>
              </cite>
            </footer>
          </motion.blockquote>
        </AnimatePresence>
      </div>

      <motion.div
        className="mt-6 flex items-center justify-center gap-4"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.2 }}
      >
        <button
          type="button"
          onClick={prev}
          aria-label="Previous testimonial"
          className="flex h-11 w-11 items-center justify-center rounded-full border border-brand-primary/15 text-brand-primary transition-all hover:border-brand-secondary hover:bg-brand-secondary hover:text-brand-white"
        >
          <ChevronLeft className="h-5 w-5" aria-hidden />
        </button>
        <motion.div className="flex gap-2" aria-label="Testimonial slides">
          {testimonials.map((_, i) => (
            <button
              key={i}
              type="button"
              onClick={() => setIndex(i)}
              aria-label={`Go to testimonial ${i + 1}`}
              aria-current={i === index ? "true" : undefined}
              className={cn(
                "h-2.5 rounded-full transition-all duration-300",
                i === index
                  ? "w-8 bg-brand-secondary"
                  : "w-2.5 bg-brand-primary/20 hover:bg-brand-primary/40"
              )}
            />
          ))}
        </motion.div>
        <button
          type="button"
          onClick={next}
          aria-label="Next testimonial"
          className="flex h-11 w-11 items-center justify-center rounded-full border border-brand-primary/15 text-brand-primary transition-all hover:border-brand-secondary hover:bg-brand-secondary hover:text-brand-white"
        >
          <ChevronRight className="h-5 w-5" aria-hidden />
        </button>
      </motion.div>
    </motion.div>
  );
}
