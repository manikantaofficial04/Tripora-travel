import { Link } from "react-router-dom";
import { MapPin, Star, Clock, ArrowUpRight } from "lucide-react";

function PackageCard({ item }) {
  const formattedPrice = new Intl.NumberFormat("en-IN", {
    style: "currency",
    currency: "INR",
    maximumFractionDigits: 0,
  }).format(item.price);

  return (
    <article className="package-card">
      <div className="package-image">
        <img
          src={item.image}
          alt={item.destination}
          loading="lazy"
        />

        <span className="package-badge">
          {item.category}
        </span>

        <span className="package-rating">
          <Star size={14} fill="currentColor" />
          {item.rating}
        </span>
      </div>

      <div className="package-content">
        <p className="package-location">
          <MapPin size={15} />
          {item.destination}
        </p>

        <h3>{item.name}</h3>

        <div className="package-duration">
          <Clock size={15} />
          <span>
            {item.duration} days / {item.nights} nights
          </span>
        </div>

        <div className="package-divider"></div>

        <div className="package-bottom">
          <div className="package-price">
            <small>Starting from</small>
            <strong>{formattedPrice}</strong>
            <small>per person</small>
          </div>

          <Link
            to={`/package/${item.id}`}
            className="btn btn-primary"
            aria-label={`View ${item.name}`}
          >
            View Trip
            <ArrowUpRight size={17} />
          </Link>
        </div>
      </div>
    </article>
  );
}

export default PackageCard;