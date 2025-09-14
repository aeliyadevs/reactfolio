import PrimaryButton from "./PrimaryButton";

export default function Hero() {
  return (
    <section
      className="hero-section"
      style={{
        background:
          "linear-gradient(180deg, #000000ee, #000000ee), url('/public/bg.jpg')",
        backgroundSize: "cover",
        backgroundAttachment: "fixed",
      }}
    >
      <div className="container">
        <div>
          <span className="greeting">Hi there! I am</span>
          <h1 className="name">Aeliya Tamang</h1>
          <p className="tagline">Fullstack Developer</p>
          <PrimaryButton buttonText="View my works" />
        </div>
      </div>
    </section>
  );
}
