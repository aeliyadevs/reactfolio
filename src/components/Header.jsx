import PrimaryButton from "./PrimaryButton";

function Header() {
  return (
    <header>
      <div className="container flex-between">
        <div style={{ display: "flex", gap: "15px", alignItems: "center" }}>
          <img src="./logo.png" alt="aeliyadevs-logo" className="logo" />
          <div style={{ color: "var(--light-color)" }}>Aeliyadevs</div>
        </div>
        <PrimaryButton buttonText="Download CV" />
      </div>
    </header>
  );
}
export default Header;
