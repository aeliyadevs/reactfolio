export default function ContactSection() {
  return (
    <section className="contact">
      <div className="container grid cols-3">
        <div className="col-span-2">
          <h2 className="heading text-light">
            If you have any project, <br />
            <span className="text-primary">Let's Talk</span>
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
        <div className="col-span-2 flex text-light">
          <div>Facebook</div>
          <div>Instagram</div>
          <div>Tiktok</div>
          <div>LinkedIn</div>
        </div>
      </div>
    </section>
  );
}
