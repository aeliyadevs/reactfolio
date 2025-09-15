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
