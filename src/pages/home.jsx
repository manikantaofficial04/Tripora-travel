import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  ArrowRight,
  MapPin,
  CalendarDays,
  Users,
  Phone,
  Mail,
  Menu,
  X,
  ChevronLeft,
  ChevronRight,
  MessageCircle,
} from "lucide-react";

import PackageCard from "../components/Packagecard.jsx";
import { travelPackages } from "../data/packages.js";

function Home() {
  const navigate = useNavigate();

  const [destination, setDestination] = useState("");
  const [arrivalDate, setArrivalDate] = useState("");
  const [departureDate, setDepartureDate] = useState("");
  const [travelers, setTravelers] = useState("2");
  const [menuOpen, setMenuOpen] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [searchError, setSearchError] = useState("");

  const today = new Date().toLocaleDateString("en-CA");

  const slides = [
    {
      eyebrow: "OCEAN / SERENITY / EXTRAORDINARY PLACES",
      title: "Escape the ordinary.",
      description:
        "Discover extraordinary destinations, beautiful coastlines, and unforgettable experiences made for you.",
      image:
        "https://images.unsplash.com/photo-1500375592092-40eb2168fd21?auto=format&fit=crop&w=2200&q=90",
      location: "Tropical Ocean Escape",
    },
    {
      eyebrow: "ISLANDS / LUXURY / SERENITY",
      title: "Find your own paradise.",
      description:
        "Wake up to endless blue horizons, peaceful beaches, and moments that stay with you long after the journey.",
      image:
        "https://images.unsplash.com/photo-1514282401047-d79a71a590e8?auto=format&fit=crop&w=2200&q=90",
      location: "Maldives",
    },
    {
      eyebrow: "MOUNTAINS / NATURE / ADVENTURE",
      title: "Somewhere beyond the usual.",
      description:
        "Explore breathtaking landscapes, charming hideaways, and remarkable journeys beyond the everyday.",
      image:
        "https://images.unsplash.com/photo-1519681393784-d120267933ba?auto=format&fit=crop&w=2200&q=90",
      location: "Mountain Escape",
    },
  ];

  const current = slides[currentSlide];

  const featuredPackages = travelPackages.filter((item) => item.featured);

  const packagesToShow =
    featuredPackages.length > 0
      ? featuredPackages.slice(0, 3)
      : travelPackages.slice(0, 3);

  function handleSearch(event) {
    event.preventDefault();
    setSearchError("");

    if (arrivalDate && departureDate && departureDate <= arrivalDate) {
      setSearchError("Departure date must be after your arrival date.");
      return;
    }

    const params = new URLSearchParams();

    if (destination.trim()) {
      params.set("search", destination.trim());
    }

    if (arrivalDate) {
      params.set("arrival", arrivalDate);
      params.set("date", arrivalDate);
    }

    if (departureDate) {
      params.set("departure", departureDate);
    }

    params.set("travelers", travelers);

    navigate(`/destinations?${params.toString()}`);
  }

  function nextSlide() {
    setCurrentSlide((previous) => (previous + 1) % slides.length);
  }

  function previousSlide() {
    setCurrentSlide(
      (previous) => (previous - 1 + slides.length) % slides.length
    );
  }

  return (
    <>
      {/* HERO SECTION */}
      <section className="luxury-hero ocean-hero">
        {slides.map((slide, index) => (
          <div
            key={slide.location}
            className={`luxury-hero-background ${
              currentSlide === index ? "active" : ""
            }`}
            style={{ backgroundImage: `url("${slide.image}")` }}
            aria-hidden={currentSlide !== index}
          />
        ))}

        <div className="luxury-hero-shade" />

        {/* HEADER */}
        <header className="luxury-header">
          <div className="luxury-topbar">
            <button
              type="button"
              className="luxury-menu-button"
              aria-label={menuOpen ? "Close menu" : "Open menu"}
              aria-expanded={menuOpen}
              onClick={() => setMenuOpen((open) => !open)}
            >
              {menuOpen ? <X size={25} /> : <Menu size={25} />}
            </button>

            <Link to="/destinations" className="luxury-back-link">
              <ChevronLeft size={15} />
              <span>EXPLORE OUR COLLECTION</span>
            </Link>

            <Link to="/" className="luxury-brand">
              <span className="luxury-brand-symbol">S</span>
              <span className="luxury-brand-name">STACKLY</span>
              <span className="luxury-brand-subtitle">E S C A P E</span>
            </Link>

            <div className="luxury-header-actions">
              <a href="tel:+910000000000" aria-label="Call us">
                <Phone size={16} />
              </a>

              <a
                href="mailto:hello@stacklyescape.example"
                aria-label="Email us"
              >
                <Mail size={16} />
              </a>

              <Link to="/destinations" className="luxury-outline-button">
                EXPLORE
              </Link>
            </div>
          </div>

          <nav
            className={`luxury-navigation ${menuOpen ? "open" : ""}`}
            aria-label="Main navigation"
          >
            <Link to="/" onClick={() => setMenuOpen(false)}>
              HOME
            </Link>

            <Link to="/destinations" onClick={() => setMenuOpen(false)}>
              DESTINATIONS
            </Link>

            <a
              href="#featured-packages"
              onClick={() => setMenuOpen(false)}
            >
              EXPERIENCES
            </a>

            <Link to="/destinations" onClick={() => setMenuOpen(false)}>
              ABOUT
            </Link>

            <Link to="/my-bookings" onClick={() => setMenuOpen(false)}>
              MY BOOKINGS
            </Link>

            <a href="#contact-stackly" onClick={() => setMenuOpen(false)}>
              CONTACT
            </a>
          </nav>
        </header>

        {/* HERO TEXT */}
        <div className="luxury-hero-content" key={currentSlide}>
          <span className="luxury-eyebrow">{current.eyebrow}</span>

          <h1>{current.title}</h1>

          <p>{current.description}</p>

          <div className="luxury-hero-actions">
            <Link to="/destinations" className="luxury-gold-button">
              DISCOVER OUR TRIPS <ArrowRight size={16} />
            </Link>

            <a href="#featured-packages" className="luxury-text-button">
              EXPLORE EXPERIENCES
            </a>
          </div>

          <div className="luxury-location">
            <MapPin size={16} />
            <span>{current.location}</span>
            <span className="luxury-location-divider" />
            <span>CURATED JOURNEYS</span>
          </div>
        </div>

        {/* SLIDER CONTROLS */}
        <div className="luxury-slider-controls">
          <button
            type="button"
            aria-label="Previous slide"
            onClick={previousSlide}
          >
            <ChevronLeft size={25} />
          </button>

          <div className="luxury-slider-dots">
            {slides.map((slide, index) => (
              <button
                type="button"
                key={slide.location}
                className={currentSlide === index ? "active" : ""}
                aria-label={`Show slide ${index + 1}`}
                aria-pressed={currentSlide === index}
                onClick={() => setCurrentSlide(index)}
              />
            ))}
          </div>

          <button
            type="button"
            aria-label="Next slide"
            onClick={nextSlide}
          >
            <ChevronRight size={25} />
          </button>
        </div>

        {/* TRAVEL SEARCH */}
        <div className="luxury-booking-wrapper">
          <form className="luxury-booking-bar" onSubmit={handleSearch}>
            <div className="luxury-booking-field luxury-destination-field">
              <MapPin size={20} />

              <div>
                <label htmlFor="luxury-destination">DESTINATION</label>
                <input
                  id="luxury-destination"
                  type="text"
                  placeholder="Where would you like to go?"
                  value={destination}
                  onChange={(event) => setDestination(event.target.value)}
                />
              </div>
            </div>

            <div className="luxury-booking-field">
              <CalendarDays size={20} />

              <div>
                <label htmlFor="luxury-arrival">ARRIVAL</label>
                <input
                  id="luxury-arrival"
                  type="date"
                  min={today}
                  value={arrivalDate}
                  onChange={(event) => {
                    const nextArrival = event.target.value;
                    setArrivalDate(nextArrival);
                    setSearchError("");

                    if (departureDate && departureDate <= nextArrival) {
                      setDepartureDate("");
                    }
                  }}
                />
              </div>
            </div>

            <div className="luxury-booking-field">
              <CalendarDays size={20} />

              <div>
                <label htmlFor="luxury-departure">DEPARTURE</label>
                <input
                  id="luxury-departure"
                  type="date"
                  min={arrivalDate || today}
                  value={departureDate}
                  onChange={(event) => {
                    setDepartureDate(event.target.value);
                    setSearchError("");
                  }}
                />
              </div>
            </div>

            <div className="luxury-booking-field luxury-guests-field">
              <Users size={20} />

              <div>
                <label htmlFor="luxury-travelers">GUESTS</label>
                <select
                  id="luxury-travelers"
                  value={travelers}
                  onChange={(event) => setTravelers(event.target.value)}
                >
                  <option value="1">1 Guest</option>
                  <option value="2">2 Guests</option>
                  <option value="3">3 Guests</option>
                  <option value="4">4 Guests</option>
                  <option value="5">5 Guests</option>
                  <option value="6">6+ Guests</option>
                </select>
              </div>
            </div>

            <button type="submit" className="luxury-booking-submit">
              SEARCH <ArrowRight size={16} />
            </button>
          </form>

          {searchError && (
            <p
              role="alert"
              style={{
                marginTop: "12px",
                padding: "10px 14px",
                background: "#fff",
                color: "#c62828",
                borderRadius: "6px",
                boxShadow: "0 4px 14px rgba(0,0,0,0.12)",
              }}
            >
              {searchError}
            </p>
          )}
        </div>
      </section>

      {/* DESTINATIONS */}
      <section className="luxury-destinations section" id="destinations">
        <div className="container">
          <div className="luxury-section-heading">
            <div>
              <span className="luxury-section-label">
                PLACES WORTH DISCOVERING
              </span>

              <h2>Somewhere extraordinary.</h2>
              <p>From tropical islands to breathtaking mountain escapes.</p>
            </div>

            <Link to="/destinations" className="luxury-underlined-link">
              VIEW ALL DESTINATIONS <ArrowRight size={15} />
            </Link>
          </div>

          <div className="luxury-destination-grid">
            <Link
              to="/destinations?search=Maldives"
              className="luxury-destination-card luxury-destination-large"
            >
              <img
                src="https://images.unsplash.com/photo-1514282401047-d79a71a590e8?auto=format&fit=crop&w=1200&q=85"
                alt="Turquoise lagoon and tropical islands in the Maldives"
                loading="lazy"
              />

              <div className="luxury-destination-overlay">
                <span>01 / ISLAND LIFE</span>
                <h3>The Maldives</h3>
                <p>Discover the extraordinary</p>
              </div>
            </Link>

            <Link
              to="/destinations?search=Bali"
              className="luxury-destination-card"
            >
              <img
                src="https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&w=900&q=85"
                alt="Tropical Bali landscape"
                loading="lazy"
              />

              <div className="luxury-destination-overlay">
                <span>02 / CULTURE & CALM</span>
                <h3>Bali, Indonesia</h3>
                <p>Find your balance</p>
              </div>
            </Link>

            <Link
              to="/destinations?search=Swiss"
              className="luxury-destination-card"
            >
              <img
                src="https://images.unsplash.com/photo-1531366936337-7c912a4589a7?auto=format&fit=crop&w=900&q=85"
                alt="Mountain scenery in Switzerland"
                loading="lazy"
              />

              <div className="luxury-destination-overlay">
                <span>03 / ALPINE ESCAPES</span>
                <h3>The Swiss Alps</h3>
                <p>Find your next adventure</p>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* FEATURED PACKAGES */}
      <section
        className="luxury-packages section"
        id="featured-packages"
      >
        <div className="container">
          <div className="luxury-section-heading">
            <div>
              <span className="luxury-section-label">SELECTED FOR YOU</span>
              <h2>Journeys to remember.</h2>
              <p>
                Thoughtfully selected escapes for the moments that matter.
              </p>
            </div>

            <Link to="/destinations" className="luxury-underlined-link">
              ALL JOURNEYS <ArrowRight size={15} />
            </Link>
          </div>

          <div className="packages-grid luxury-packages-grid">
            {packagesToShow.map((item) => (
              <PackageCard key={item.id} item={item} />
            ))}
          </div>
        </div>
      </section>

      {/* CALL TO ACTION */}
      <section className="luxury-cta">
        <div className="luxury-cta-background" />

        <div className="luxury-cta-content">
          <span className="luxury-section-label">
            YOUR NEXT CHAPTER BEGINS HERE
          </span>

          <h2>The world is waiting.</h2>

          <p>
            Let the ordinary wait. Your next extraordinary escape starts here.
          </p>

          <Link to="/destinations" className="luxury-gold-button">
            FIND YOUR ESCAPE <ArrowRight size={16} />
          </Link>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="luxury-footer" id="contact-stackly">
        <div className="container luxury-footer-inner">
          <Link to="/" className="luxury-brand luxury-footer-brand">
            <span className="luxury-brand-symbol">S</span>

            <span className="luxury-footer-brand-copy">
              <span className="luxury-brand-name">STACKLY</span>
              <span className="luxury-brand-subtitle">E S C A P E</span>
            </span>
          </Link>

          <p>Extraordinary journeys. Unforgettable memories.</p>

          <div className="luxury-footer-links">
            <a
              href="mailto:hello@stacklyescape.example"
              aria-label="Email"
            >
              <Mail size={17} />
            </a>

            <a href="tel:+910000000000" aria-label="Phone">
              <Phone size={17} />
            </a>

            <Link to="/my-bookings" aria-label="My bookings">
              <MessageCircle size={17} />
            </Link>
          </div>

          <span className="luxury-copyright">
            © {new Date().getFullYear()} Stackly Escape
          </span>
        </div>
      </footer>
    </>
  );
}

export default Home;