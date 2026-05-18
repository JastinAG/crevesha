"use client";

import { FadeIn } from "@/components/ui/FadeIn";
import { whyChoose } from "@/lib/content";
import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";

export function WhyChoose() {
  return (
    <section
      className="bg-brand-primary py-section text-brand-white md:py-section-lg"
      aria-labelledby="why-choose-heading"
    >
      <div className="mx-auto max-w-6xl px-4 md:px-6">
        <FadeIn>
          <h2
            id="why-choose-heading"
            className="text-3xl font-bold md:text-4xl"
          >
            Why Choose Crevesha
          </h2>
        </FadeIn>

        <ul className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {whyChoose.map((item, i) => (
            <FadeIn key={item.title} delay={i * 0.05}>
              <motion.li
                className="flex items-start gap-3 rounded-brand border border-brand-white/10 bg-brand-white/5 p-5"
                whileHover={{ y: -2 }}
              >
                <CheckCircle2
                  className="mt-0.5 h-5 w-5 shrink-0 text-brand-secondary"
                  aria-hidden
                />
                <span className="text-sm font-medium leading-snug">
                  {item.title}
                </span>
              </motion.li>
            </FadeIn>
          ))}
        </ul>
      </div>
    </section>
  );
}
