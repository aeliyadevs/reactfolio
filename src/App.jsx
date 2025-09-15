import "./App.css";
import AboutSection from "./components/AboutSection";
import EducationSection from "./components/EducationSection";
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
        {/* <AboutSection /> */}
        <EducationSection />
      </main>
      <Footer />
    </>
  );
}

export default App;
