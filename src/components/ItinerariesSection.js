import itinary1 from "../assets/image/Ellipse-1.png";
import itinary2 from "../assets/image/Ellipse-2.png";
import itinary3 from "../assets/image/Ellipse-3.png";
import ArrowLeft from "../assets/image/arrow-left.png";
import ArrowRight from "../assets/image/arrow-right.png";


const itineraries = [
  {
    title: "Itinerary I",
    description: "The Telemark Canal Explorer",
    days: "2 Days",
    members: 4,
    img: itinary1,
  },
  {
    title: "Itinerary II",
    description: "The Coastline Captain",
    days: "2 Days",
    members: 4,
    img: itinary3,
  },
  {
    title: "Itinerary III",
    description: "Fjords, Canals & Coastline",
    days: "2 Days",
    members: 4,
    img: itinary2,
  },
];

const ItinerariesSection = () => {
  return (
    <>
      <section className="py-5 text-center">
        <div className="container">
          <h2 className="mb-3 heading-text-css">Our itineraries</h2>
          <p className="mb-5 p-3 text-content-css">
            Choose one of our itineraries or contact us for tailored
            recommendations
          </p>
          <div className="row g-4 justify-content-center">
            {itineraries &&
              itineraries.map((item, index) => (
                <div className="col-12 col-md-6 col-lg-4" key={index}>
                  <div className="position-relative border rounded-4 h-100 bg-white shadow-sm px-4 pt-5 pb-5"
                    style={{ paddingTop: "80px" }}>
                    <div className="position-absolute top-0 start-50 translate-middle" style={{ transform: "translate(-50%, -50%)" }}>
                      <img
                        src={item.img}
                        alt={item.title}
                        className="rounded-circle border border-3 border-white"
                        style={{
                          width: "120px",
                          height: "120px",
                          objectFit: "cover",
                        }}
                      />
                    </div>

                    <div className="mt-4 pt-3">
                      <h5 className="text-warning itinary-card-heading-text  mb-2">
                        {item.title}
                      </h5>
                      <p className="mb-3 itinary-card-heading-text">{item.description}</p>
                      <p className="mb-1 text-muted">
                        Days: <strong>{item.days}</strong>
                      </p>
                      <p className="mb-3 text-muted">
                        Members: <strong>{item.members}</strong>
                      </p>
                      <button className="btn text-white rounded-pill px-4 d-flex align-items-center gap-2 mx-auto"
                        style={{ background: "#2B3F4D" }}>
                        View Detail <i className="bi bi-arrow-right"></i>
                      </button>
                    </div>
                  </div>
                </div>
              ))}
          </div>
        </div>
        <div className="text-center mt-4">
          <button className="btn">
            <img src={ArrowLeft} alt="arrow left" className="img-fluid"/>
          </button>
          <button className="btn">
            <img src={ArrowRight} alt="arrow right" className="img-fluid"/>
          </button>
        </div>
      </section>
    </>
  );
};

export default ItinerariesSection;
