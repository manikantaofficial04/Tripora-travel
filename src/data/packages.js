// src/data/packages.js

export const travelPackages = [
  {
    id: 1,
    name: "Bali Tropical Escape",
    destination: "Bali, Indonesia",
    country: "Indonesia",
    category: "Beach",
    duration: 5,
    nights: 4,
    price: 24999,
    rating: 4.9,
    reviews: 248,
    image:
      "https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&w=1200&q=85",
    description:
      "Discover Bali's beautiful beaches, tropical landscapes, ancient temples, and unforgettable sunsets.",
    highlights: [
      "Visit Uluwatu Temple",
      "Explore Ubud",
      "Enjoy tropical beaches",
      "Daily breakfast included",
    ],
    featured: true,
  },
  {
    id: 2,
    name: "Swiss Alps Adventure",
    destination: "Interlaken, Switzerland",
    country: "Switzerland",
    category: "Adventure",
    duration: 6,
    nights: 5,
    price: 45999,
    rating: 4.8,
    reviews: 186,
    image:
      "https://images.unsplash.com/photo-1531366936337-7c912a4589a7?auto=format&fit=crop&w=1200&q=85",
    description:
      "Experience spectacular mountain views, alpine villages, scenic train journeys, and outdoor adventures.",
    highlights: [
      "Explore Interlaken",
      "Enjoy mountain viewpoints",
      "Discover alpine villages",
      "Guided sightseeing tour",
    ],
    featured: true,
  },
  {
    id: 3,
    name: "Dubai City Experience",
    destination: "Dubai, UAE",
    country: "United Arab Emirates",
    category: "City",
    duration: 4,
    nights: 3,
    price: 29999,
    rating: 4.7,
    reviews: 312,
    image:
      "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&w=1200&q=85",
    description:
      "Explore Dubai's impressive skyline, modern architecture, luxury shopping, and desert landscapes.",
    highlights: [
      "Visit Downtown Dubai",
      "Explore Dubai Marina",
      "Desert safari experience",
      "City sightseeing tour",
    ],
    featured: true,
  },
  {
    id: 4,
    name: "Maldives Island Retreat",
    destination: "Malé, Maldives",
    country: "Maldives",
    category: "Beach",
    duration: 5,
    nights: 4,
    price: 38999,
    rating: 4.9,
    reviews: 205,
    image:
      "https://images.unsplash.com/photo-1514282401047-d79a71a590e8?auto=format&fit=crop&w=1200&q=85",
    description:
      "Relax beside crystal-clear waters and white sandy beaches on a memorable tropical island getaway.",
    highlights: [
      "Relax on white sandy beaches",
      "Snorkeling opportunities",
      "Island sightseeing",
      "Sunset photography",
    ],
    featured: true,
  },
  {
    id: 5,
    name: "Manali Mountain Holiday",
    destination: "Manali, India",
    country: "India",
    category: "Mountain",
    duration: 4,
    nights: 3,
    price: 12999,
    rating: 4.6,
    reviews: 174,
    image:
      "https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?auto=format&fit=crop&w=1200&q=85",
    description:
      "Enjoy Himalayan mountain scenery, peaceful valleys, local culture, and refreshing mountain air.",
    highlights: [
      "Explore Old Manali",
      "Visit Solang Valley",
      "Discover local markets",
      "Mountain sightseeing",
    ],
    featured: false,
  },
  {
    id: 6,
    name: "Paris Romantic Getaway",
    destination: "Paris, France",
    country: "France",
    category: "City",
    duration: 5,
    nights: 4,
    price: 52999,
    rating: 4.8,
    reviews: 267,
    image:
      "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?auto=format&fit=crop&w=1200&q=85",
    description:
      "Discover Parisian streets, world-famous landmarks, charming cafés, and beautiful city views.",
    highlights: [
      "Visit the Eiffel Tower area",
      "Explore the Louvre district",
      "Walk along the Seine",
      "Discover French cafés",
    ],
    featured: false,
  },
];

// Format prices in Indian Rupees
export const formatPrice = (price) =>
  new Intl.NumberFormat("en-IN", {
    style: "currency",
    currency: "INR",
    maximumFractionDigits: 0,
  }).format(price);