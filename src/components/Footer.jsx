import { Link } from "react-router-dom";
import { Compass, MapPin, Mail, Phone } from "lucide-react";

function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          {/* Brand */}
          <div>
            <Link to="/" className="navbar-brand">
              <Compass size={27} />
              <span>Stackly Escape</span>
            </Link>

            <p className="footer-description">
              Discover incredible destinations, explore unforgettable
              experiences, and make memories that last a lifetime.
              Your next adventure starts with Tripora.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3>Quick Links</h3>

            <div className="footer-links">
              <Link to="/">Home</Link>
              <Link to="/destinations">Destinations</Link>
              <Link to="/my-bookings">My Bookings</Link>
            </div>
          </div>

          {/* Destinations */}
          <div>
            <h3>Destinations</h3>

            <div className="footer-links">
              <Link to="/destinations?search=Bali">Bali</Link>
              <Link to="/destinations?search=Dubai">Dubai</Link>
              <Link to="/destinations?search=Maldives">
                Maldives
              </Link>
              <Link to="/destinations?search=Manali">Manali</Link>
            </div>
          </div>

          {/* Contact */}
          <div>
            <h3>Contact Us</h3>

            <div className="footer-links">
              <a href="mailto:hello@tripora.example">
                <Mail size={15} />
                hello@tripora.example
              </a>

              <a href="tel:+910000000000">
                <Phone size={15} />
                Contact Support
              </a>

              <span>
                <MapPin
                  size={15}
                  style={{
                    display: "inline",
                    verticalAlign: "middle",
                  }}
                />{" "}
                Your next destination awaits
              </span>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="footer-bottom">
          <p>
            © {new Date().getFullYear()} Tripora. All rights reserved.
          </p>

          <p>Made for travelers, by travelers.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;