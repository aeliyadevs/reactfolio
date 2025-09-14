function Header() {
  return (
    <header>
      <div className="container flex-between">
        <div style={{ display: "flex", gap: "15px", alignItems: "center" }}>
          <img src="./logo.png" alt="aeliyadevs-logo" className="logo" />
          <div style={{ color: "white" }}>Aeliyadevs</div>
        </div>
        <button className="primary-btn">Download Resume</button>
      </div>
    </header>
  );
}
export default Header;
