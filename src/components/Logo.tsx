import { assets, siteConfig } from "@/lib/content";
import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";

interface LogoProps {
  /** dark = full-color on light backgrounds; footer = full-color on white pad */
  variant?: "dark" | "footer";
  className?: string;
}

const sizeClasses = {
  dark: "h-[4.75rem] w-auto sm:h-24 md:h-28",
  footer: "h-20 w-auto sm:h-24",
};

export function Logo({ variant = "dark", className }: LogoProps) {
  const image = (
    <Image
      src={assets.logo}
      alt={`${siteConfig.name} logo`}
      width={280}
      height={280}
      priority={variant === "dark"}
      className={cn(sizeClasses[variant], className)}
    />
  );

  if (variant === "footer") {
    return (
      <div className="inline-flex rounded-xl bg-white p-3 shadow-md ring-1 ring-white/20">
        <Link href="/" aria-label={`${siteConfig.name} home`}>
          {image}
        </Link>
      </div>
    );
  }

  return (
    <Link
      href="/"
      className="inline-flex shrink-0 items-center"
      aria-label={`${siteConfig.name} home`}
    >
      {image}
    </Link>
  );
}
