import PrimaryButton from "./PrimaryButton";

export default function Hero() {
  return (
    <section
      className="hero-section"
      style={{
        background: "url('/bg.jpg')",
        backgroundSize: "cover",
        backgroundAttachment: "fixed",
      }}
    >
      <div
        style={{
          background: "linear-gradient(180deg, #000000de, #000000de)",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
        }}
      >
        <div className="container grid items-center cols-3">
          <div className="col-span-2">
            <span className="greeting">Hi there! I am</span>
            <h1 className="name">Aeliya Tamang</h1>
            <p className="tagline">Fullstack Developer</p>
            <PrimaryButton buttonText="View my works" />
          </div>
          <div>
            <img src="./images/character.png" alt="hero section image" />
          </div>
        </div>
      </div>
    </section>
  );
}
