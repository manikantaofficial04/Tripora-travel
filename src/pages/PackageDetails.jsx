import { Link, useParams } from "react-router-dom";
import {
  MapPin,
  Star,
  Clock,
  CheckCircle,
  ArrowLeft,
  CalendarDays,
} from "lucide-react";

import { travelPackages } from "../data/packages.js";

function PackageDetails() {
  const { id } = useParams();

  const item = travelPackages.find(
    (trip) => trip.id === Number(id)
  );

  if (!item) {
    return (
      <section className="placeholder-page">
        <h1>Package Not Found</h1>
        <p>Sorry, we couldn't find that travel package.</p>

        <Link to="/destinations" className="btn btn-primary">
          Explore Destinations
        </Link>
      </section>
    );
  }

  return (
    <>
      {/* Package Hero */}
      <section
        style={{
          position: "relative",
          minHeight: "380px",
          display: "flex",
          alignItems: "flex-end",
          padding: "60px 0",
          color: "#fff",
          backgroundImage: `linear-gradient(90deg, rgba(5, 28, 45, 0.85), rgba(5, 28, 45, 0.2)), url("${item.image}")`,
          backgroundPosition: "center",
          backgroundSize: "cover",
        }}
      >
        <div className="container">
          <Link
            to="/destinations"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "8px",
              marginBottom: "25px",
              color: "#fff",
            }}
          >
            <ArrowLeft size={18} />
            Back to Destinations
          </Link>

          <div>
            <span className="eyebrow" style={{ color: "#5eead4" }}>
              {item.category} Experience
            </span>

            <h1
              style={{
                color: "#fff",
                fontSize: "clamp(32px, 5vw, 52px)",
                marginBottom: "15px",
              }}
            >
              {item.name}
            </h1>

            <p
              style={{
                display: "flex",
                alignItems: "center",
                gap: "8px",
                marginBottom: "12px",
              }}
            >
              <MapPin size={18} />
              {item.destination}
            </p>

            <p style={{ display: "flex", alignItems: "center", gap: "7px" }}>
              <Star size={17} fill="#f5ad27" color="#f5ad27" />
              <strong>{item.rating}</strong>
              <span>({item.reviews} reviews)</span>
            </p>
          </div>
        </div>
      </section>

      {/* Package Information */}
      <section className="page-content">
        <div className="container">
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
              gap: "40px",
              alignItems: "start",
            }}
          >
            {/* Description */}
            <div>
              <span className="eyebrow">About this experience</span>

              <h2>Discover your next adventure</h2>

              <p style={{ color: "#718096", lineHeight: 1.9 }}>
                {item.description}
              </p>

              <div style={{ marginTop: "30px" }}>
                <h3>Trip Overview</h3>

                <div
                  style={{
                    display: "flex",
                    flexWrap: "wrap",
                    gap: "25px",
                    margin: "20px 0 30px",
                  }}
                >
                  <div>
                    <Clock size={22} color="#0d9488" />
                    <p style={{ margin: "8px 0 3px", fontWeight: 700 }}>
                      Duration
                    </p>
                    <span style={{ color: "#718096" }}>
                      {item.duration} days / {item.nights} nights
                    </span>
                  </div>

                  <div>
                    <MapPin size={22} color="#0d9488" />
                    <p style={{ margin: "8px 0 3px", fontWeight: 700 }}>
                      Destination
                    </p>
                    <span style={{ color: "#718096" }}>
                      {item.country}
                    </span>
                  </div>
                </div>
              </div>

              <h3>Package Highlights</h3>

              <div
                style={{
                  display: "grid",
                  gap: "15px",
                  marginTop: "20px",
                }}
              >
                {item.highlights.map((highlight, index) => (
                  <div
                    key={index}
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "12px",
                    }}
                  >
                    <CheckCircle size={19} color="#0d9488" />
                    <span>{highlight}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Booking Card */}
            <aside
              className="form-card"
              style={{ position: "sticky", top: "100px" }}
            >
              <span className="eyebrow">Your journey awaits</span>

              <h2>
                ₹{item.price.toLocaleString("en-IN")}
              </h2>

              <p>per person</p>

              <hr
                style={{
                  border: 0,
                  borderTop: "1px solid #e6edf2",
                  margin: "22px 0",
                }}
              />

              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "12px",
                  marginBottom: "22px",
                }}
              >
                <CalendarDays size={21} color="#0d9488" />

                <div>
                  <strong>Flexible travel planning</strong>
                  <p style={{ margin: "5px 0 0", color: "#718096" }}>
                    Choose your travel date during booking.
                  </p>
                </div>
              </div>

              <Link
                to={`/booking/${item.id}`}
                className="btn btn-primary btn-full"
              >
                Book This Trip
              </Link>

              <p
                style={{
                  marginTop: "15px",
                  marginBottom: 0,
                  fontSize: "12px",
                  textAlign: "center",
                  color: "#718096",
                }}
              >
                Your booking details will be saved on this device.
              </p>
            </aside>
          </div>
        </div>
      </section>
    </>
  );
}

export default PackageDetails;