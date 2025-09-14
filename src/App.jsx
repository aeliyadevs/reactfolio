import "./App.css";
import AboutSection from "./components/AboutSection";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Hero from "./components/Hero";

function App() {
  return (
    <>
      <Header />
      <main className="content">
        <Hero />
        <AboutSection />
      </main>
      <Footer />
    </>
  );
}

export default App;
