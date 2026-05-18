import { FadeIn } from "@/components/ui/FadeIn";
import { servicesSection } from "@/lib/content";
import { CheckCircle2 } from "lucide-react";

export function Services() {
  return (
    <section
      id="services"
      className="bg-brand-white py-section md:py-section-lg"
      aria-labelledby="services-heading"
    >
      <div className="mx-auto max-w-6xl px-4 md:px-6">
        <FadeIn>
          <h2
            id="services-heading"
            className="text-3xl font-bold text-brand-primary md:text-4xl"
          >
            {servicesSection.title}
          </h2>
          <p className="mt-2 text-xl font-semibold text-brand-secondary">
            {servicesSection.subtitle}
          </p>
          <p className="mt-4 max-w-2xl text-brand-primary/75">
            {servicesSection.intro}
          </p>
        </FadeIn>

        <FadeIn delay={0.1}>
          <p className="mt-8 text-sm font-semibold uppercase tracking-wider text-brand-primary/60">
            {servicesSection.listLabel}
          </p>
          <ul className="mt-4 grid gap-4 sm:grid-cols-2">
            {servicesSection.items.map((service) => (
              <li
                key={service}
                className="flex items-start gap-3 rounded-brand border border-brand-primary/8 bg-brand-primary/[0.02] px-5 py-4"
              >
                <CheckCircle2
                  className="mt-0.5 h-5 w-5 shrink-0 text-brand-secondary"
                  aria-hidden
                />
                <span className="font-medium text-brand-primary">{service}</span>
              </li>
            ))}
          </ul>
        </FadeIn>
      </div>
    </section>
  );
}
