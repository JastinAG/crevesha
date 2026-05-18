import { About } from "@/components/sections/About";
import { Contact } from "@/components/sections/Contact";
import { CoreValues } from "@/components/sections/CoreValues";
import { FAQs } from "@/components/sections/FAQs";
import { Goods } from "@/components/sections/Goods";
import { Hero } from "@/components/sections/Hero";
import { MissionVision } from "@/components/sections/MissionVision";
import { Services } from "@/components/sections/Services";
import { Testimonials } from "@/components/sections/Testimonials";
import { WhyChoose } from "@/components/sections/WhyChoose";

export default function HomePage() {
  return (
    <>
      <Hero />
      <About />
      <MissionVision />
      <CoreValues />
      <Goods />
      <Services />
      <WhyChoose />
      <Testimonials />
      <FAQs />
      <Contact />
    </>
  );
}
