import { FadeIn } from "@/components/ui/FadeIn";
import { missionVision } from "@/lib/content";
import { Eye, Target } from "lucide-react";

export function MissionVision() {
  const cards = [
    {
      ...missionVision.mission,
      icon: Target,
    },
    {
      ...missionVision.vision,
      icon: Eye,
    },
  ];

  return (
    <section
      className="bg-brand-primary py-section text-brand-white md:py-section-lg"
      aria-labelledby="mission-vision-heading"
    >
      <div className="mx-auto max-w-6xl px-4 md:px-6">
        <FadeIn>
          <h2 id="mission-vision-heading" className="sr-only">
            Mission and Vision
          </h2>
        </FadeIn>

        <div className="grid gap-8 md:grid-cols-2">
          {cards.map((card, i) => (
            <FadeIn key={card.title} delay={i * 0.1}>
              <article className="rounded-brand border border-brand-white/10 bg-brand-white/5 p-8 backdrop-blur-sm transition-shadow hover:shadow-lift md:p-10">
                <card.icon
                  className="h-10 w-10 text-brand-secondary"
                  strokeWidth={1.5}
                  aria-hidden
                />
                <h3 className="mt-5 text-2xl font-bold">{card.title}</h3>
                <p className="mt-4 leading-relaxed text-brand-white/85">
                  {card.statement}
                </p>
              </article>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
