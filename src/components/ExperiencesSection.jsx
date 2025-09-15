import ExperienceCard from "./ExperienceCard";

export default function ExperiencesSection() {
  return (
    <section
      className="experiences"
      style={{
        background: "#000000",
      }}
    >
      <div className="container">
        <div>
          <h2 className="heading">Work Experiences</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident
            inventore sunt quos fuga aperiam.
          </p>
        </div>
        <div className="work-timeline">
          <ExperienceCard />
          <ExperienceCard />
          <ExperienceCard />
          <ExperienceCard />
          {/* <ExperienceCard />
          <ExperienceCard /> */}
        </div>
      </div>
    </section>
  );
}
