import "./App.css";
import AboutSection from "./components/AboutSection";
import ContactSection from "./components/ContactSection";
import EducationSection from "./components/EducationSection";
import ExperiencesSection from "./components/ExperiencesSection";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Hero from "./components/Hero";
import ProjectsSection from "./components/ProjectsSection";
import ServicesSection from "./components/ServicesSection";
import SkillsSection from "./components/SkillsSection";

function App() {
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

export default App;
