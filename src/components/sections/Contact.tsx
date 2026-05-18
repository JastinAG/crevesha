import { ContactForm } from "@/components/ContactForm";
import { ContactMap } from "@/components/ContactMap";
import { FadeIn } from "@/components/ui/FadeIn";
import { contact, siteConfig } from "@/lib/content";
import { Globe, Mail, MapPin, Phone } from "lucide-react";

export function Contact() {
  const contactItems = [
    {
      icon: Mail,
      label: "Email",
      value: siteConfig.email,
      href: `mailto:${siteConfig.email}`,
    },
    { icon: MapPin, label: "Location", value: siteConfig.location },
    {
      icon: Globe,
      label: "Website",
      value: "crevesha.co.ke",
      href: siteConfig.url,
    },
    ...(siteConfig.phone
      ? [
          {
            icon: Phone,
            label: "Phone",
            value: siteConfig.phone,
            href: `tel:${siteConfig.phone.replace(/\s/g, "")}`,
          },
        ]
      : []),
  ];

  return (
    <section
      id="contact"
      className="py-section md:py-section-lg"
      aria-labelledby="contact-heading"
    >
      <div className="bg-brand-secondary/10 py-section md:py-section-lg">
        <div className="mx-auto max-w-site px-md md:px-6">
          <FadeIn>
            <h2
              id="contact-heading"
              className="text-3xl font-bold text-brand-primary md:text-4xl"
            >
              {contact.title}
            </h2>
            <p className="mt-4 max-w-xl text-brand-primary/75">
              {contact.intro}
            </p>
          </FadeIn>

          <div className="mt-12 grid gap-12 lg:grid-cols-2">
            <FadeIn>
              <div className="space-y-8">
                <div className="space-y-6">
                  {contactItems.map((item) => (
                    <div key={item.label} className="flex items-start gap-4">
                      <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-brand bg-brand-secondary text-brand-white">
                        <item.icon className="h-5 w-5" aria-hidden />
                      </div>
                      <div>
                        <p className="text-sm font-semibold text-brand-primary/60">
                          {item.label}
                        </p>
                        {"href" in item && item.href ? (
                          <a
                            href={item.href}
                            className="font-medium text-brand-primary transition-colors hover:text-brand-secondary"
                          >
                            {item.value}
                          </a>
                        ) : (
                          <p className="font-medium text-brand-primary">
                            {item.value}
                          </p>
                        )}
                      </div>
                    </div>
                  ))}
                </div>

                <div>
                  <h3 className="mb-3 text-sm font-semibold uppercase tracking-wider text-brand-primary/60">
                    Find us
                  </h3>
                  <ContactMap />
                </div>
              </div>
            </FadeIn>

            <FadeIn delay={0.1}>
              <div className="rounded-brand bg-brand-white p-6 shadow-card md:p-8">
                <ContactForm />
              </div>
            </FadeIn>
          </div>
        </div>
      </div>
    </section>
  );
}
