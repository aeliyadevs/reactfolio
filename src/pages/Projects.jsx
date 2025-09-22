import Footer from "../components/Footer";
import Header from "../components/Header";
import ProjectCard from "../components/ProjectCard";

export default function Projects() {
  return (
    <>
      <Header />
      <main className="content bg-black py-large">
        <div className="container">
          <div>
            <h2 className="heading text-light">Featured Projects</h2>
            <p className="text-light">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident
              inventore sunt quos fuga aperiam.
            </p>
          </div>
          <div className="grid cols-2 mt-large">
            <ProjectCard />
            <ProjectCard />
            <ProjectCard />
            <ProjectCard />
            <ProjectCard />
            <ProjectCard />
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
