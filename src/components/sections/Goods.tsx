"use client";

import { FadeIn } from "@/components/ui/FadeIn";
import { goodsCategories } from "@/lib/content";
import { motion } from "framer-motion";
import {
  Coffee,
  Package,
  School,
  ShieldCheck,
  SprayCan,
} from "lucide-react";

const icons = [School, SprayCan, Package, Coffee, ShieldCheck];

export function Goods() {
  return (
    <section
      id="goods"
      className="bg-brand-primary/[0.03] py-section md:py-section-lg"
      aria-labelledby="goods-heading"
    >
      <div className="mx-auto max-w-6xl px-4 md:px-6">
        <FadeIn>
          <h2
            id="goods-heading"
            className="text-3xl font-bold text-brand-primary md:text-4xl"
          >
            Goods we Supply
          </h2>
        </FadeIn>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {goodsCategories.map((category, i) => {
            const Icon = icons[i] ?? Package;
            return (
              <FadeIn key={category.title} delay={i * 0.06}>
                <motion.article
                  className="group h-full rounded-brand border border-brand-primary/10 bg-brand-white p-6 shadow-card transition-all duration-300 hover:-translate-y-1 hover:border-brand-secondary hover:shadow-lift"
                  whileHover={{ y: -4 }}
                >
                  <Icon
                    className="h-9 w-9 text-brand-secondary"
                    strokeWidth={1.5}
                    aria-hidden
                  />
                  <h3 className="mt-4 text-lg font-bold text-brand-primary">
                    {category.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-brand-primary/75">
                    {category.description}
                  </p>
                </motion.article>
              </FadeIn>
            );
          })}
        </div>
      </div>
    </section>
  );
}
