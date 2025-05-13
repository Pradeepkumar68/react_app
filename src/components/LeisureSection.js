import icebergImg from "../assets/image/iceberg.jpg";
import UserRating from "../assets/image/UserRating.png";
import Ship2 from "../assets/image/Ship2.png";
import Crown from "../assets/image/Crown.png";
import BeachChair from "../assets/image/BeachChair.png";
import Coffee from "../assets/image/Coffee.png";
import Binocular from "../assets/image/Binocular.png";
import Frame6 from "../assets/image/Frame6.png";

const leisure = [
  { icon: UserRating, title: "Unique yachting experience" },
  { icon: Ship2, title: "Sustainable travel" },
  { icon:  Crown, title: "Luxurious pleasure" },
  { icon: BeachChair, title: "Deep relaxation" },
  { icon: Coffee, title: "Outdoor adventures" },
  { icon: Binocular, title: "Sightseeing and exploring" },
];

const LeisureSection = () => {
  return (
    <section
      className="py-5 text-center text-white"
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${icebergImg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="container">
        <h2 className="fw-bold mb-3" style={{ fontSize: "2rem" }}>
          Find your way here!
        </h2>
        <p className="mb-5" style={{ fontSize: "1.1rem" }}>
          Meet the leisure that fulfills various needs and preferences:
        </p>

        <div className="row g-0">
          {leisure.map((item, index) => (
            <div
              className="col-md-4"
              key={index}
              style={{
                borderRight: index % 3 !== 2 ? "1px solid rgba(255, 255, 255, 0.3)" : "none",
                borderBottom: index < 3 ? "1px solid rgba(255, 255, 255, 0.3)" : "none",
                padding: "1.5rem",
              }}
            >
              <div className="text-start h-100">
               <img src={item.icon} alt="Icon" />
                <h6 className="mt-2 fw-semibold" style={{ fontSize: "1.25rem" }}>
                  {item.title}
                </h6>
                <p
                  className="mb-2"
                  style={{ fontSize: "0.9rem", opacity: 0.8 }}
                >
                  Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                </p>
                <a
                  href="/"
                  className="text-warning text-decoration-none fw-semibold"
                  style={{ fontSize: "0.9rem" }}
                >
                  <img src={Frame6} alt="Icon" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LeisureSection;
