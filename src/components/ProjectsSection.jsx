import { Link } from "react-router-dom";
import ProjectCard from "./ProjectCard";

export default function ProjectsSection() {
  return (
    <section className="projects">
      <div className="container">
        <div>
          <h2 className="heading text-light">Featured Projects</h2>
          <p className="text-light">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident
            inventore sunt quos fuga aperiam.
          </p>
        </div>
        <Link to="/projects" className="text-secondary">
          <div className="my-small">
            View All Projects <i className="fa-solid fa-arrow-right-long"></i>
          </div>
        </Link>
        <div className="grid cols-2">
          <ProjectCard />
          <ProjectCard />
          <ProjectCard />
          <ProjectCard />
        </div>
      </div>
    </section>
  );
}
