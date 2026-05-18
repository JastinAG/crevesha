import { TestimonialCarousel } from "@/components/ui/TestimonialCarousel";
import { FadeIn } from "@/components/ui/FadeIn";
import { testimonials } from "@/lib/content";

export function Testimonials() {
  return (
    <section
      className="bg-brand-primary/[0.03] py-section md:py-section-lg"
      aria-labelledby="testimonials-heading"
    >
      <div className="mx-auto max-w-6xl px-4 md:px-6">
        <FadeIn>
          <h2
            id="testimonials-heading"
            className="text-center text-3xl font-bold text-brand-primary md:text-4xl"
          >
            Testimonials
          </h2>
        </FadeIn>

        <div className="mt-12">
          <TestimonialCarousel testimonials={testimonials} />
        </div>
      </div>
    </section>
  );
}
