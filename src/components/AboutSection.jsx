import ExperienceCard from "./ExperienceCard";
import PrimaryButton from "./PrimaryButton";

export default function AboutSection() {
  return (
    <section
      className="about"
      style={{
        background:
          "linear-gradient(180deg, #000000ee, #000000ee), url('/public/bg.jpg')",
        backgroundSize: "cover",
        backgroundAttachment: "fixed",
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
          <ExperienceCard />
          <ExperienceCard />
        </div>
      </div>
    </section>
  );
}
