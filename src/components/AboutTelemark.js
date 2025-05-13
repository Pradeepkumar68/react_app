import telemark1 from "../assets/image/telemark1.png";
import telemark2 from "../assets/image/telemark2.png";
import telemark3 from "../assets/image/telemark3.png";
import arrowUp from "../assets/image/arrow-up-right.png";

const sections = [
  { title: "Telemark Canal", img: telemark1 },
  { title: "Fjords", img: telemark2 },
  { title: "Coastline", img: telemark3 },
];

const CanalExperienceSection = () => {
  return (
    <section className="py-5 text-center">
      <div className="container">
        <h2 className="section-title heading-text-css">About Telemark</h2>
        <p className="mx-auto mb-5 text-content-css">
           Explore Norway in miniature! Telemark is the only region in Norway where you can see the historic canal, <br />
            the inland fjords and the coast in one trip. Breathtaking nature and a diverse landscape await you here.
        </p>
        <div className="row justify-content-center g-4">
          {sections && sections.map((item, index) => (
              <div className="col-12 col-md-6 col-lg-4" key={index}>
                <div className="d-flex flex-column align-items-center">
                  <img
                    src={item.img}
                    alt={item.title}
                    className="img-fluid rounded-4 shadow-sm"
                    style={{
                      width: "100%",
                      height: "auto",
                      aspectRatio: "4/3",
                      objectFit: "cover",
                    }}
                  />
                  <h5 className="mt-3 fw-bold">{item.title}</h5>
                  <div className="d-flex justify-content-center align-items-center mt-2">
                    <img src={arrowUp} alt="arrow up" className="img-fluid"/>
                  </div>
                </div>
              </div>
            ))}
        </div>
        <div className="mt-5">
          <button className="btn text-white rounded-pill px-4 py-2 d-flex align-items-center gap-2 mx-auto" style={{background: '#2B3F4D'}}>
            Book Appointment <i className="bi bi-arrow-right"></i>
          </button>
        </div>
      </div>
    </section>
  );
};

export default CanalExperienceSection;
