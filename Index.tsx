import { useState, useEffect } from "react";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import InstallationsSection from "@/components/InstallationsSection";
import ServicesSection from "@/components/ServicesSection";
import ScheduleSection from "@/components/ScheduleSection";
import PricingSection from "@/components/PricingSection";
import MonitorsSection from "@/components/MonitorsSection";
import CommunitySection from "@/components/CommunitySection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

export type SectionId = "hero" | "instalaciones" | "servicios" | "horario" | "precios" | "monitores" | "comunidad" | "contacto";

const sections: Record<SectionId, React.ComponentType> = {
  hero: HeroSection,
  instalaciones: InstallationsSection,
  servicios: ServicesSection,
  horario: ScheduleSection,
  precios: PricingSection,
  monitores: MonitorsSection,
  comunidad: CommunitySection,
  contacto: ContactSection,
};

const Index = () => {
  const [activeSection, setActiveSection] = useState<SectionId>("hero");
  const ActiveComponent = sections[activeSection];

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [activeSection]);

  return (
    <>
      <Navbar activeSection={activeSection} onNavigate={setActiveSection} />
      <ActiveComponent />
      <Footer />
    </>
  );
};

export default Index;
