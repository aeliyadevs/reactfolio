import PrimaryButton from "./PrimaryButton";
import SecondaryButton from "./SecondaryButton";
import ServiceCard from "./ServiceCard";

export default function ServicesSection() {
  return (
    <section
      className="about"
      style={{
        background: "url('/public/bg.jpg')",
        backgroundSize: "cover",
        backgroundAttachment: "fixed",
      }}
    >
      <div
        style={{
          background: "linear-gradient(180deg, #000000de, #000000ff)",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "75px 0",
        }}
      >
        <div className="container grid cols-3">
          <div className="intro">
            <h2 className="quote">Design is thinking made visual.</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident
              inventore sunt quos fuga aperiam culpa rem, nesciunt, in, natus
              illo voluptates! Repellat dolore qui, placeat, aspernatur at, cum
              quasi aliquid distinctio nemo perspiciatis officia laboriosam
              ducimus eos obcaecati dolorem facere suscipit et fuga. Cumque sunt
              sint minus sit facere explicabo.
            </p>
            <SecondaryButton buttonText="My Services" />
          </div>
          <div className="col-span-2 grid cols-2">
            <ServiceCard />
            <ServiceCard />
            <ServiceCard />
            <ServiceCard />
          </div>
        </div>
      </div>
    </section>
  );
}
