import { FadeIn } from "@/components/ui/FadeIn";
import { about, assets } from "@/lib/content";
import Image from "next/image";

export function About() {
  return (
    <section
      id="about"
      className="bg-brand-white py-section md:py-section-lg"
      aria-labelledby="about-heading"
    >
      <div className="mx-auto max-w-site px-md md:px-6">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <FadeIn>
            <h2
              id="about-heading"
              className="text-3xl font-bold text-brand-primary md:text-4xl"
            >
              {about.title}
            </h2>
            <div className="mt-6 space-y-4 text-brand-primary/85">
              {about.paragraphs.map((paragraph) => (
                <p key={paragraph.slice(0, 48)}>{paragraph}</p>
              ))}
            </div>
          </FadeIn>

          <FadeIn delay={0.15}>
            <div className="relative aspect-[16/10] overflow-hidden rounded-brand shadow-card">
              <Image
                src={assets.heroImage}
                alt="Crevesha team at work in Nairobi"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover object-[50%_42%]"
              />
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
