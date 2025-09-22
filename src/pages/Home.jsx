import ContactSection from "../components/ContactSection";
import ExperiencesSection from "../components/ExperiencesSection";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Hero from "../components/Hero";
import ProjectsSection from "../components/ProjectsSection";
import ServicesSection from "../components/ServicesSection";
import SkillsSection from "../components/SkillsSection";

export default function Home() {
  return (
    <>
      <Header />
      <main className="content">
        <Hero />
        <ServicesSection />
        <ProjectsSection />
        <ExperiencesSection />
        <SkillsSection />
        {/* <AboutSection /> */}
        {/* <EducationSection /> */}
        <ContactSection />
      </main>
      <Footer />
    </>
  );
}
