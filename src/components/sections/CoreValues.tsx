"use client";

import { FadeIn } from "@/components/ui/FadeIn";
import { coreValues, whyCrevesha } from "@/lib/content";
import { motion } from "framer-motion";
import { Check } from "lucide-react";

export function CoreValues() {
  return (
    <section
      className="bg-brand-white py-section md:py-section-lg"
      aria-labelledby="why-crevesha-heading"
    >
      <div className="mx-auto max-w-6xl px-4 md:px-6">
        <FadeIn>
          <h2
            id="why-crevesha-heading"
            className="text-3xl font-bold text-brand-primary md:text-4xl"
          >
            {whyCrevesha.title}
          </h2>
          <p className="mt-4 max-w-3xl text-brand-primary/80">
            {whyCrevesha.intro}
          </p>
        </FadeIn>

        <FadeIn delay={0.08}>
          <h3 className="mt-10 text-lg font-bold text-brand-primary">
            {whyCrevesha.differentiatorsTitle}
          </h3>
          <ul className="mt-4 grid gap-3 sm:grid-cols-2">
            {whyCrevesha.differentiators.map((item) => (
              <li
                key={item}
                className="flex items-start gap-2.5 text-brand-primary/85"
              >
                <Check
                  className="mt-1 h-4 w-4 shrink-0 text-brand-secondary"
                  aria-hidden
                />
                <span className="text-sm">{item}</span>
              </li>
            ))}
          </ul>
        </FadeIn>

        <FadeIn delay={0.12}>
          <h3
            id="values-heading"
            className="mt-14 text-2xl font-bold text-brand-primary"
          >
            Core Values
          </h3>
        </FadeIn>

        <div className="mt-6 flex flex-wrap gap-3">
          {coreValues.map((value, i) => (
            <FadeIn key={value} delay={i * 0.04}>
              <motion.span
                className="inline-block rounded-brand border border-brand-primary/10 bg-brand-primary/[0.03] px-5 py-2.5 text-sm font-semibold text-brand-primary transition-colors hover:border-brand-secondary hover:bg-brand-secondary/10"
                whileHover={{ y: -2 }}
              >
                {value}
              </motion.span>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
