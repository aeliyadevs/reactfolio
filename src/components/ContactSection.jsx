export default function ContactSection() {
  return (
    <section className="contact">
      <div className="container grid cols-3">
        <div className="col-span-2">
          <h2 className="heading text-light">
            If you have any project,{" "}
            <span className="text-primary">Let's Talk.</span>
          </h2>
          <div className="cta mt-large">
            <div className="cta-item">
              <span>Call me</span>
              <a href="#" className="cta-link">
                +977 9803079279
              </a>
            </div>
            <div className="cta-item">
              <span>E-mail me at</span>
              <a href="#" className="cta-link">
                aeliyadevs@gmail.com
              </a>
            </div>
          </div>
        </div>
        <div className="social-links text-light">
          <a href="#" className="social-link">
            {/* Facebook */}
            <i className="fa-brands fa-facebook-f"></i>
          </a>
          <a href="#" className="social-link">
            {/* Instagram */}
            <i className="fa-brands fa-instagram"></i>
          </a>
          <a href="#" className="social-link">
            {/* WhatsApp */}
            <i className="fa-brands fa-whatsapp"></i>
          </a>
          <a href="#" className="social-link">
            {/* TikTok */}
            <i className="fa-brands fa-tiktok"></i>
          </a>
          <a href="#" className="social-link">
            {/* YouTube */}
            <i className="fa-brands fa-youtube"></i>
          </a>
        </div>
      </div>
    </section>
  );
}
