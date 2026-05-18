import { assets, siteConfig } from "@/lib/content";
import Image from "next/image";
import Link from "next/link";

interface LogoProps {
  variant?: "light" | "dark";
  className?: string;
}

export function Logo({ variant = "dark", className }: LogoProps) {
  return (
    <Link
      href="/"
      className={`inline-flex shrink-0 items-center ${className ?? ""}`}
      aria-label={`${siteConfig.name} home`}
    >
      <Image
        src={assets.logo}
        alt={`${siteConfig.name} logo`}
        width={220}
        height={220}
        priority
        className={`h-16 w-auto sm:h-[4.5rem] md:h-20 ${variant === "light" ? "brightness-0 invert" : ""}`}
      />
    </Link>
  );
}
