"use client";

import { assets, headerNav, siteConfig } from "@/lib/content";
import { cn } from "@/lib/utils";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

export function Navbar() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <nav
      className="sticky top-0 z-50 border-b border-brand-primary/8 bg-[#f3eff8] shadow-sm backdrop-blur-md"
      aria-label="Main navigation"
    >
      <div className="mx-auto flex max-w-site items-center justify-between px-md py-sm">
        <Link
          href="/"
          className="inline-flex shrink-0 items-center"
          aria-label={`${siteConfig.name} home`}
        >
          <Image
            src={assets.logo}
            alt={`${siteConfig.name} logo`}
            width={220}
            height={220}
            className="h-16 w-auto sm:h-[4.5rem] md:h-20"
            priority
          />
        </Link>

        <ul className="hidden items-center gap-md md:flex">
          {headerNav.map((link) => {
            const isHome = link.href === "#home";
            return (
              <li key={link.label}>
                <Link
                  href={link.href}
                  className={cn(
                    "py-1 text-label-md font-medium transition-colors",
                    isHome
                      ? "border-b-2 border-brand-secondary font-bold text-brand-primary"
                      : "text-on-surface-variant hover:text-brand-primary"
                  )}
                >
                  {link.label}
                </Link>
              </li>
            );
          })}
        </ul>

        <Link
          href="#contact"
          className="hidden rounded-lg bg-brand-primary px-md py-sm text-label-md font-bold text-white transition-all hover:opacity-90 md:inline-block"
        >
          Contact Us
        </Link>

        <button
          type="button"
          className="flex h-11 w-11 items-center justify-center rounded-lg text-brand-primary hover:bg-brand-primary/5 md:hidden"
          onClick={() => setOpen(!open)}
          aria-expanded={open}
          aria-controls="mobile-menu"
          aria-label={open ? "Close menu" : "Open menu"}
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            id="mobile-menu"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="border-t border-brand-primary/8 bg-[#f3eff8] md:hidden"
          >
            <ul className="flex flex-col gap-1 px-md py-4">
              {headerNav.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    onClick={() => setOpen(false)}
                    className="block rounded-lg px-4 py-3 font-medium text-brand-primary hover:bg-brand-primary/5"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
              <li className="pt-2">
                <Link
                  href="#contact"
                  onClick={() => setOpen(false)}
                  className="block rounded-lg bg-brand-primary px-md py-3 text-center text-label-md font-bold text-white"
                >
                  Contact Us
                </Link>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
