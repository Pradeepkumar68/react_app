import boat1 from "../assets/image/GL1.png";
import boat2 from "../assets/image/GL2.png";
import river from "../assets/image/GL3.png";
import ArrowLeft from "../assets/image/arrow-left.png";
import ArrowRight from "../assets/image/arrow-right.png";
import FrameArrow from "../assets/image/FrameArrow.png";

function OurBoatsSection() {
  const boats = [
    { img: boat1, name: "Kragero", price: "395€", beds: 2, members: 6 },
    { img: boat2 },
    { img: river },
  ];

  return (
    <section
      className="container py-4 py-md-5 position-relative"
      style={{ background: "#F4FAFB" }}
    >
      <div className="d-flex justify-content-between align-items-center flex-wrap mb-3 mb-md-4 px-2 px-md-3">
        <h2 className="section-heading mb-3 mb-md-0 heading-text-css">
          Our Boats
        </h2>
        <button
          className="btn text-white px-4 py-2"
          style={{ backgroundColor: "#2B3F4D", borderRadius: "8px" }}
        >
          View All <i className="bi bi-arrow-right ms-2"></i>
        </button>
      </div>
      <div className="row g-3 g-md-4 px-2 px-md-3">
        {boats &&
          boats.map((boat, index) => (
            <div key={index} className="col-12 col-md-4">
              <div className="overflow-hidden rounded-3 position-relative">
                <img
                  src={boat.img}
                  alt={`Boat ${index + 1}`}
                  className="w-100 d-block"
                  style={{
                    objectFit: "cover",
                    height: "100%",
                    display: "block",
                    borderRadius: "10px",
                  }}
                />
                {index === 0 && (
                  <div className="position-absolute bottom-0 start-0 end-0 bg-black bg-opacity-50 text-white p-2 p-md-3 d-flex justify-content-between align-items-center">
                    <div>
                      <div
                        className="d-flex align-items-right justify-content-center"
                        style={{
                          width: "50px",
                          height: "50px",
                          backgroundColor: "#ffc107",
                          borderRadius: "50%",
                        }}
                      >
                        <img src={FrameArrow} alt="frame arrow" />
                      </div>
                      <h3 className="fs-6 fs-md-5 mb-1">
                        "{boat.name}" E-Drive 33
                      </h3>
                      <div className="d-flex gap-2 gap-md-3">
                        <span>{boat.price}</span>
                        <span>Beds: {boat.beds}</span>
                        <span>Members: {boat.members}</span>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          ))}
      </div>
      <div className="text-center mt-5">
        <button className="btn">
          <img src={ArrowLeft} alt="arrow left" className="img-fluid" />
        </button>
        <button className="btn">
          <img src={ArrowRight} alt="arrow right" className="img-fluid" />
        </button>
      </div>
    </section>
  );
}

export default OurBoatsSection;
