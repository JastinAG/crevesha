import { Accordion } from "@/components/ui/Accordion";
import { FadeIn } from "@/components/ui/FadeIn";
import { faqs } from "@/lib/content";

export function FAQs() {
  return (
    <section
      id="faqs"
      className="bg-brand-white py-section md:py-section-lg"
      aria-labelledby="faqs-heading"
    >
      <div className="mx-auto max-w-3xl px-4 md:px-6">
        <FadeIn>
          <h2
            id="faqs-heading"
            className="text-center text-3xl font-bold text-brand-primary md:text-4xl"
          >
            FAQs
          </h2>
        </FadeIn>

        <div className="mt-12">
          <Accordion items={faqs} />
        </div>
      </div>
    </section>
  );
}
