export default function Footer() {
  return (
    <footer className="footer">
      {/* Main Footer */}
      <div className="footer-main">
        {/* Brand Section */}
        <div className="footer-brand">
          <div className="footer-logo">
            TANISHQ
          </div>

          <div className="footer-brand-line"></div>

          <p>
            Inspired by nature.
            <br />
            Crafted for generations.
          </p>

          <div className="social">
            <a
              href="#top"
              aria-label="Instagram"
              className="social-link"
            >
              <span>◎</span>
            </a>

            <a
              href="#top"
              aria-label="Facebook"
              className="social-link"
            >
              <span>f</span>
            </a>

            <a
              href="#top"
              aria-label="YouTube"
              className="social-link"
            >
              <span>▶</span>
            </a>

            <a
              href="#top"
              aria-label="Twitter"
              className="social-link"
            >
              <span>𝕏</span>
            </a>
          </div>
        </div>

        {/* Navigation */}
        <div className="footer-links">

          <div className="footer-column">
            <span className="footer-heading">
              QUICK LINKS
            </span>

            <a href="#collection">
              All Jewellery
            </a>

            <a href="#highlights">
              Highlights
            </a>

            <a href="#shop">
              Shop the Look
            </a>

            <a href="#catalogue">
              Catalogue
            </a>
          </div>

          <div className="footer-column">
            <span className="footer-heading">
              HELP & SUPPORT
            </span>

            <a href="#top">
              Contact Us
            </a>

            <a href="#top">
              Book an Appointment
            </a>

            <a href="#top">
              Store Locator
            </a>

            <a href="#top">
              Shipping & Returns
            </a>
          </div>

          <div className="footer-column">
            <span className="footer-heading">
              EXPERIENCE
            </span>

            <a href="#top">
              Tanishq Stories
            </a>

            <a href="#top">
              Our Craft
            </a>

            <a href="#top">
              Care Guide
            </a>

            <a href="#top">
              FAQs
            </a>
          </div>

        </div>
      </div>

      {/* Appointment Banner */}
      <div className="appointment">
        <div className="location-icon">
          ⌖
        </div>

        <div className="appointment-content">
          <small>
            VISIT A TANISHQ STORE
          </small>

          <b>
            Book an appointment with our
            jewellery experts
          </b>
        </div>

        <a
          href="#top"
          className="appointment-btn"
        >
          Book Now
          <span>↗</span>
        </a>
      </div>

      {/* Bottom Footer */}
      <div className="footer-bottom">
        <span>
          © 2026 Tanishq. All rights reserved.
        </span>

        <div className="footer-legal">
          <a href="#top">
            Privacy Policy
          </a>

          <span>·</span>

          <a href="#top">
            Terms & Conditions
          </a>
        </div>
      </div>
    </footer>
  );
}