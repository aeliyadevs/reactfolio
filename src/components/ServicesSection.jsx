import SecondaryButton from "./SecondaryButton";
import ServiceCard from "./ServiceCard";

export default function ServicesSection() {
  return (
    <section
      className="services"
      style={{
        background: "url('/bg.jpg')",
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
              I love to create beautiful and efficient websites for my
              customers. I love going through the entire process with the
              customer from concept, to design and then development and launch.
            </p>
            <SecondaryButton className="text-light" buttonText="My Services" />
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
