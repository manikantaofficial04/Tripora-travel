import { useState } from "react";
import { Link, useParams } from "react-router-dom";
import { CalendarDays, Users, ArrowLeft } from "lucide-react";
import { travelPackages } from "../data/packages.js";

function Booking() {
  const { id } = useParams();

  const selectedPackage = travelPackages.find(
    (item) => item.id === Number(id)
  );

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    date: "",
    travelers: "1",
  });

  const [message, setMessage] = useState("");

  if (!selectedPackage) {
    return (
      <section className="placeholder-page">
        <h1>Travel package not found</h1>
        <p>Please select a valid travel package.</p>
        <Link to="/destinations" className="btn btn-primary">
          Explore Destinations
        </Link>
      </section>
    );
  }

  const totalPrice =
    selectedPackage.price * Number(formData.travelers);

  function handleChange(event) {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  }

  function handleSubmit(event) {
    event.preventDefault();

    const booking = {
      id: Date.now(),
      packageId: selectedPackage.id,
      packageName: selectedPackage.name,
      destination: selectedPackage.destination,
      price: selectedPackage.price,
      totalPrice,
      ...formData,
      status: "Confirmed",
      bookedAt: new Date().toISOString(),
    };

    const existingBookings = JSON.parse(
      localStorage.getItem("triporaBookings") || "[]"
    );

    existingBookings.push(booking);

    localStorage.setItem(
      "triporaBookings",
      JSON.stringify(existingBookings)
    );

    setMessage("Your trip has been booked successfully!");

    setFormData({
      name: "",
      email: "",
      phone: "",
      date: "",
      travelers: "1",
    });
  }

  return (
    <>
      <section className="page-header">
        <div className="container">
          <span className="eyebrow">Your adventure starts here</span>
          <h1>Book Your Trip</h1>
          <p>
            Complete your details to reserve your next adventure.
          </p>
        </div>
      </section>

      <section className="page-content">
        <div className="container">
          <Link
            to={`/package/${selectedPackage.id}`}
            className="btn btn-outline"
            style={{ marginBottom: "25px" }}
          >
            <ArrowLeft size={17} /> Back to Package
          </Link>

          <div className="form-card">
            <h2>{selectedPackage.name}</h2>

            <p>
              {selectedPackage.destination} ·{" "}
              {selectedPackage.duration} days /{" "}
              {selectedPackage.nights} nights
            </p>

            {message && (
              <div
                role="status"
                style={{
                  padding: "14px",
                  marginBottom: "20px",
                  color: "#087f5b",
                  background: "#e6fcf5",
                  borderRadius: "8px",
                }}
              >
                {message}
                <br />
                <Link to="/my-bookings">
                  View My Bookings
                </Link>
              </div>
            )}

            <form onSubmit={handleSubmit}>
              <div className="form-grid">
                <div className="form-group">
                  <label htmlFor="name">Full Name</label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Enter your full name"
                    required
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="email">Email Address</label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="you@example.com"
                    required
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="phone">Phone Number</label>
                  <input
                    id="phone"
                    name="phone"
                    type="tel"
                    pattern="[0-9]{10}"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="10-digit phone number"
                    title="Enter a 10-digit phone number"
                    required
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="date">Travel Date</label>
                  <input
                    id="date"
                    name="date"
                    type="date"
                    min={new Date().toISOString().split("T")[0]}
                    value={formData.date}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="form-group full-width">
                  <label htmlFor="travelers">
                    <Users size={15} /> Number of Travelers
                  </label>

                  <select
                    id="travelers"
                    name="travelers"
                    value={formData.travelers}
                    onChange={handleChange}
                  >
                    <option value="1">1 Traveler</option>
                    <option value="2">2 Travelers</option>
                    <option value="3">3 Travelers</option>
                    <option value="4">4 Travelers</option>
                    <option value="5">5 Travelers</option>
                    <option value="6">6 Travelers</option>
                  </select>
                </div>
              </div>

              <div
                style={{
                  padding: "20px",
                  margin: "25px 0",
                  background: "#f0faf8",
                  borderRadius: "10px",
                }}
              >
                <p style={{ marginBottom: "8px" }}>
                  Price per person: ₹
                  {selectedPackage.price.toLocaleString("en-IN")}
                </p>

                <p style={{ marginBottom: "8px" }}>
                  <CalendarDays
                    size={15}
                    style={{
                      display: "inline",
                      verticalAlign: "middle",
                    }}
                  />{" "}
                  Duration: {selectedPackage.duration} days
                </p>

                <h3 style={{ marginBottom: 0 }}>
                  Total: ₹{totalPrice.toLocaleString("en-IN")}
                </h3>
              </div>

              <button
                type="submit"
                className="btn btn-primary btn-full"
              >
                Confirm Booking
              </button>
            </form>
          </div>
        </div>
      </section>
    </>
  );
}

export default Booking;