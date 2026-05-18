import { Logo } from "@/components/Logo";
import { footer, navLinks } from "@/lib/content";
import { Facebook, Instagram, Linkedin, Twitter } from "lucide-react";
import Link from "next/link";

const socialLinks = [
  { icon: Facebook, label: "Facebook", href: "#" },
  { icon: Twitter, label: "Twitter", href: "#" },
  { icon: Instagram, label: "Instagram", href: "#" },
  { icon: Linkedin, label: "LinkedIn", href: "#" },
];

export function Footer() {
  return (
    <footer className="bg-brand-primary text-brand-white" id="privacy">
      <div className="mx-auto max-w-6xl px-4 py-14 md:px-6">
        <div className="flex flex-col gap-10 md:flex-row md:items-start md:justify-between">
          <div className="space-y-4">
            <Logo variant="light" className="[&_img]:h-14" />
            <p className="max-w-md text-sm leading-relaxed text-brand-white/80">
              {footer.tagline}
            </p>
          </div>

          <nav aria-label="Footer navigation">
            <ul className="flex flex-wrap gap-x-8 gap-y-3">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-brand-white/90 transition-colors hover:text-brand-secondary"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div className="flex gap-3" aria-label="Social media links">
            {socialLinks.map(({ icon: Icon, label, href }) => (
              <a
                key={label}
                href={href}
                aria-label={label}
                className="flex h-10 w-10 items-center justify-center rounded-brand border border-brand-white/20 text-brand-white/80 transition-all hover:border-brand-secondary hover:bg-brand-secondary hover:text-brand-white"
              >
                <Icon className="h-4 w-4" aria-hidden />
              </a>
            ))}
          </div>
        </div>

        <div className="mt-10 border-t border-brand-white/10 pt-8 text-center text-xs text-brand-white/60 md:text-left">
          <p>Privacy Policy — placeholder. Update with your legal content.</p>
        </div>
      </div>
    </footer>
  );
}
