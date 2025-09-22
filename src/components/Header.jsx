import { Link } from "react-router-dom";
import PrimaryButton from "./PrimaryButton";

function Header() {
  return (
    <header>
      <div className="container flex-between">
        <div style={{ display: "flex", gap: "15px", alignItems: "center" }}>
          <img src="/logo.svg" alt="aeliyadevs-logo" className="logo" />
          <Link to="/">
            <div style={{ color: "var(--light-color)" }}>Aeliyadevs</div>
          </Link>
        </div>
        <PrimaryButton buttonText="Download CV" />
      </div>
    </header>
  );
}
export default Header;
