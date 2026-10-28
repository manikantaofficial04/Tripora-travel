import { Link } from "react-router-dom";
import { MapPin, CalendarDays, Users, Ticket } from "lucide-react";

function MyBookings() {
  let bookings = [];

  try {
    bookings = JSON.parse(
      localStorage.getItem("triporaBookings") || "[]"
    );
  } catch {
    bookings = [];
  }

  return (
    <>
      <section className="page-header">
        <div className="container">
          <span className="eyebrow">Your travel plans</span>
          <h1>My Bookings</h1>
          <p>
            View and manage your upcoming adventures with Tripora.
          </p>
        </div>
      </section>

      <section className="page-content">
        <div className="container">
          {bookings.length === 0 ? (
            <div className="empty-state">
              <Ticket size={42} />

              <h2>No bookings yet</h2>

              <p>
                Your next adventure is waiting! Explore our travel
                packages and book your first trip.
              </p>

              <Link to="/destinations" className="btn btn-primary">
                Explore Destinations
              </Link>
            </div>
          ) : (
            <>
              <h2 style={{ marginBottom: "25px" }}>
                Your Trips ({bookings.length})
              </h2>

              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
                  gap: "24px",
                }}
              >
                {bookings.map((booking) => (
                  <article
                    key={booking.id}
                    className="package-card"
                    style={{ padding: "24px" }}
                  >
                    <h3>{booking.packageName}</h3>

                    <p className="package-location">
                      <MapPin size={16} />
                      {booking.destination}
                    </p>

                    <div style={{ margin: "18px 0", lineHeight: 2 }}>
                      <p>
                        <strong>Traveler:</strong> {booking.name}
                      </p>

                      <p>
                        <strong>Email:</strong> {booking.email}
                      </p>

                      <p>
                        <CalendarDays
                          size={15}
                          style={{
                            display: "inline",
                            verticalAlign: "middle",
                          }}
                        />{" "}
                        <strong>Travel date:</strong> {booking.date}
                      </p>

                      <p>
                        <Users
                          size={15}
                          style={{
                            display: "inline",
                            verticalAlign: "middle",
                          }}
                        />{" "}
                        <strong>Travelers:</strong> {booking.travelers}
                      </p>

                      <p>
                        <strong>Total price:</strong>{" "}
                        ₹{Number(booking.totalPrice).toLocaleString("en-IN")}
                      </p>

                      <p>
                        <strong>Status:</strong>{" "}
                        <span style={{ color: "#0d9488" }}>
                          {booking.status || "Confirmed"}
                        </span>
                      </p>
                    </div>

                    <button
                      type="button"
                      className="btn btn-outline btn-full"
                      onClick={() => {
                        const updatedBookings = bookings.filter(
                          (item) => item.id !== booking.id
                        );

                        localStorage.setItem(
                          "triporaBookings",
                          JSON.stringify(updatedBookings)
                        );

                        window.location.reload();
                      }}
                    >
                      Cancel Booking
                    </button>
                  </article>
                ))}
              </div>
            </>
          )}
        </div>
      </section>
    </>
  );
}

export default MyBookings;