import ExperienceCard from "./ExperienceCard";

export default function EducationSection() {
  return (
    <section
      className="education"
      style={{
        background: "#000000",
      }}
    >
      <div className="container grid cols-3">
        <div className="intro">
          <h2 className="quote">Design is thinking made visual.</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident
            inventore sunt quos fuga aperiam culpa rem, nesciunt, in, natus illo
            voluptates! Repellat dolore qui, placeat, aspernatur at, cum quasi
            aliquid distinctio nemo perspiciatis officia laboriosam ducimus eos
            obcaecati dolorem facere suscipit et fuga. Cumque sunt sint minus
            sit facere explicabo.
          </p>
        </div>
        <div className="col-span-2 grid cols-2">
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
