"use client";

import { Button } from "@/components/ui/Button";
import { siteConfig } from "@/lib/content";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";

const contactSchema = z.object({
  name: z
    .string()
    .min(2, "Name must be at least 2 characters")
    .max(100, "Name is too long"),
  email: z.string().email("Please enter a valid email address"),
  message: z
    .string()
    .min(10, "Message must be at least 10 characters")
    .max(2000, "Message is too long"),
});

type ContactFormData = z.infer<typeof contactSchema>;

const FORMSPREE_ENDPOINT = process.env.NEXT_PUBLIC_FORMSPREE_ID
  ? `https://formspree.io/f/${process.env.NEXT_PUBLIC_FORMSPREE_ID}`
  : null;

function buildMailtoUrl({ name, email, message }: ContactFormData) {
  const subject = encodeURIComponent(`Crevesha inquiry from ${name}`);
  const body = encodeURIComponent(
    `Name: ${name}\nEmail: ${email}\n\n${message}`
  );
  return `mailto:${siteConfig.email}?subject=${subject}&body=${body}`;
}

export function ContactForm() {
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
  });

  const onSubmit = async (data: ContactFormData) => {
    setStatus("idle");

    if (FORMSPREE_ENDPOINT) {
      try {
        const response = await fetch(FORMSPREE_ENDPOINT, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
          body: JSON.stringify(data),
        });

        if (!response.ok) throw new Error("Submission failed");
        setStatus("success");
        reset();
      } catch {
        setStatus("error");
      }
      return;
    }

    window.location.href = buildMailtoUrl(data);
    setStatus("success");
    reset();
  };

  const inputClass =
    "w-full rounded-brand border border-brand-primary/15 bg-brand-white px-4 py-3 text-brand-primary placeholder:text-brand-primary/40 transition-colors focus:border-brand-secondary focus:outline-none focus:ring-2 focus:ring-brand-secondary/20";

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="space-y-5"
      noValidate
      aria-label="Contact form"
    >
      <div>
        <label htmlFor="name" className="mb-1.5 block text-sm font-medium">
          Name
        </label>
        <input
          id="name"
          type="text"
          autoComplete="name"
          aria-invalid={!!errors.name}
          aria-describedby={errors.name ? "name-error" : undefined}
          className={inputClass}
          {...register("name")}
        />
        {errors.name && (
          <p id="name-error" className="mt-1 text-sm text-red-600" role="alert">
            {errors.name.message}
          </p>
        )}
      </div>

      <div>
        <label htmlFor="email" className="mb-1.5 block text-sm font-medium">
          Email
        </label>
        <input
          id="email"
          type="email"
          autoComplete="email"
          aria-invalid={!!errors.email}
          aria-describedby={errors.email ? "email-error" : undefined}
          className={inputClass}
          {...register("email")}
        />
        {errors.email && (
          <p id="email-error" className="mt-1 text-sm text-red-600" role="alert">
            {errors.email.message}
          </p>
        )}
      </div>

      <div>
        <label htmlFor="message" className="mb-1.5 block text-sm font-medium">
          Message
        </label>
        <textarea
          id="message"
          rows={5}
          aria-invalid={!!errors.message}
          aria-describedby={errors.message ? "message-error" : undefined}
          className={`${inputClass} min-h-[120px] resize-y`}
          {...register("message")}
        />
        {errors.message && (
          <p id="message-error" className="mt-1 text-sm text-red-600" role="alert">
            {errors.message.message}
          </p>
        )}
      </div>

      <Button type="submit" variant="primary" disabled={isSubmitting}>
        {isSubmitting ? "Opening email…" : "Send Message"}
      </Button>

      <p className="text-sm text-brand-primary/70">
        Or email us directly at{" "}
        <a
          href={`mailto:${siteConfig.email}`}
          className="font-semibold text-brand-secondary underline-offset-2 hover:underline"
        >
          {siteConfig.email}
        </a>
      </p>

      {status === "success" && (
        <p className="text-sm font-medium text-green-800" role="status">
          Thank you! Your email client should open with your message ready to
          send.
        </p>
      )}
      {status === "error" && (
        <p className="text-sm font-medium text-red-700" role="alert">
          Something went wrong. Please{" "}
          <a
            href={`mailto:${siteConfig.email}`}
            className="underline underline-offset-2"
          >
            email us directly
          </a>
          .
        </p>
      )}
    </form>
  );
}
