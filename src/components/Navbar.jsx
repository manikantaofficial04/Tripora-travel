import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { Menu, X, Compass } from "lucide-react";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <header className="navbar">
      <div className="container navbar-inner">
        {/* Logo */}
        <Link to="/" className="navbar-brand" onClick={closeMenu}>
          <Compass size={27} />
         <span>Stackly Escape</span>
        </Link>

        {/* Mobile menu button */}
        <button
          type="button"
          className="menu-toggle"
          onClick={() => setMenuOpen((previous) => !previous)}
          aria-label={menuOpen ? "Close navigation" : "Open navigation"}
          aria-expanded={menuOpen}
        >
          {menuOpen ? <X size={25} /> : <Menu size={25} />}
        </button>

        {/* Navigation links */}
        <nav
          className={`navbar-links ${menuOpen ? "open" : ""}`}
          aria-label="Main navigation"
        >
          <NavLink to="/" end onClick={closeMenu}>
            Home
          </NavLink>

          <NavLink to="/destinations" onClick={closeMenu}>
            Destinations
          </NavLink>

          <NavLink to="/my-bookings" onClick={closeMenu}>
            My Bookings
          </NavLink>
        </nav>

        {/* Explore button */}
        <div className="navbar-actions">
          <Link
            to="/destinations"
            className="btn btn-primary"
            onClick={closeMenu}
          >
            Explore Trips <span>↗</span>
          </Link>
        </div>
      </div>
    </header>
  );
}

export default Navbar;