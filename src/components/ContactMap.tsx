import { siteConfig } from "@/lib/content";

export function ContactMap() {
  const query = encodeURIComponent(siteConfig.mapQuery);

  return (
    <div className="overflow-hidden rounded-brand border border-brand-primary/10 shadow-card">
      <iframe
        title={`Map showing ${siteConfig.location}`}
        src={`https://maps.google.com/maps?q=${query}&z=12&output=embed`}
        className="h-[280px] w-full border-0 sm:h-[320px]"
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        allowFullScreen
      />
    </div>
  );
}
