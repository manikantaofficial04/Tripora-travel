import { useMemo, useState } from "react";
import { Link, useSearchParams } from "react-router-dom";
import { Search, MapPin, SlidersHorizontal } from "lucide-react";
import PackageCard from "../components/Packagecard.jsx";
import { travelPackages } from "../data/packages.js";

function Destinations() {
  const [searchParams, setSearchParams] = useSearchParams();

  const [search, setSearch] = useState(
    searchParams.get("search") || ""
  );

  const [category, setCategory] = useState("All");

  const categories = [
    "All",
    "Beach",
    "Adventure",
    "City",
    "Mountain",
  ];

  const filteredPackages = useMemo(() => {
    return travelPackages.filter((item) => {
      const searchText = search.toLowerCase();

      const matchesSearch =
        item.name.toLowerCase().includes(searchText) ||
        item.destination.toLowerCase().includes(searchText) ||
        item.country.toLowerCase().includes(searchText);

      const matchesCategory =
        category === "All" || item.category === category;

      return matchesSearch && matchesCategory;
    });
  }, [search, category]);

  function handleSearch(event) {
    event.preventDefault();

    if (search.trim()) {
      setSearchParams({ search: search.trim() });
    } else {
      setSearchParams({});
    }
  }

  return (
    <>
      <section className="page-header">
        <div className="container">
          <span className="eyebrow">Find your next adventure</span>
          <h1>Explore Destinations</h1>
          <p>
            Discover beautiful destinations and find the perfect
            holiday package for your next trip.
          </p>
        </div>
      </section>

      <section className="page-content">
        <div className="container">
          <form
            onSubmit={handleSearch}
            className="search-panel"
            style={{ marginBottom: "30px" }}
          >
            <div className="form-group">
              <label htmlFor="destination-search">
                <Search size={15} /> Search destinations
              </label>

              <input
                id="destination-search"
                type="search"
                placeholder="Search Bali, Dubai, India..."
                value={search}
                onChange={(event) => setSearch(event.target.value)}
              />
            </div>

            <button type="submit" className="btn btn-primary">
              Search
            </button>
          </form>

          <div
            style={{
              display: "flex",
              alignItems: "center",
              flexWrap: "wrap",
              gap: "12px",
              marginBottom: "30px",
            }}
          >
            <SlidersHorizontal size={19} />

            <strong>Filter by:</strong>

            {categories.map((item) => (
              <button
                key={item}
                type="button"
                className={
                  category === item
                    ? "btn btn-primary"
                    : "btn btn-outline"
                }
                onClick={() => setCategory(item)}
                style={{
                  minHeight: "38px",
                  padding: "9px 15px",
                }}
              >
                {item}
              </button>
            ))}
          </div>

          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              gap: "15px",
              marginBottom: "25px",
            }}
          >
            <h2 style={{ marginBottom: 0 }}>
              Available Packages
            </h2>

            <span style={{ color: "#718096" }}>
              {filteredPackages.length} packages found
            </span>
          </div>

          {filteredPackages.length > 0 ? (
            <div className="packages-grid">
              {filteredPackages.map((item) => (
                <PackageCard key={item.id} item={item} />
              ))}
            </div>
          ) : (
            <div className="empty-state">
              <MapPin size={38} />
              <h2>No destinations found</h2>
              <p>
                Try another search term or choose a different category.
              </p>

              <button
                type="button"
                className="btn btn-primary"
                onClick={() => {
                  setSearch("");
                  setCategory("All");
                  setSearchParams({});
                }}
              >
                Clear Filters
              </button>
            </div>
          )}

          <div style={{ marginTop: "35px" }}>
            <Link to="/" className="btn btn-outline">
              Back to Home
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

export default Destinations;