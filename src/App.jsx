import "./App.css";
import AboutSection from "./components/AboutSection";
import EducationSection from "./components/EducationSection";
import ExperiencesSection from "./components/ExperiencesSection";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Hero from "./components/Hero";
import ServicesSection from "./components/ServicesSection";

function App() {
  return (
    <>
      <Header />
      <main className="content">
        <Hero />
        <ServicesSection />
        <ExperiencesSection />
        {/* <AboutSection /> */}
        {/* <EducationSection /> */}
      </main>
      <Footer />
    </>
  );
}

export default App;
