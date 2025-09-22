import { Link } from "react-router-dom";
import PrimaryButton from "./PrimaryButton";

export default function ProjectCard() {
  return (
    <div className="project-card">
      <div className="project-info">
        <Link to="/projects/1">
          <h3 className="card-title text-light">Web Application</h3>
        </Link>
        <h4 className="card-subtitle text-primary">
          Beauty Women Nepal Pvt. Ltd.
        </h4>
        <p className="card-desc">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid ullam
          dignissimos commodi quod libero beatae, itaque eveniet perspiciatis
          nam repellat dicta laboriosam fugit.
        </p>
        <PrimaryButton buttonText="Live Preview" />
      </div>
      <div className="project-image">
        <img src="/images/projects/project-1.png" alt="project-1 thumbnail" />
      </div>
    </div>
  );
}
