import HeroSection from "../components/HeroSection";
import AboutSection from "../components/AboutSection";
import CareerSection from "../components/CareerSection";
import LicenseSection from "../components/LicenseSection";
import ProjectsSection from "../components/ProjectsSection";

export default function Home() {
  return (
    <main className="home-main">
      <HeroSection />
      <AboutSection />
      <CareerSection />
      <LicenseSection />
      <ProjectsSection />
    </main>
  );
}