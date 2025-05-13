import telemark1 from "../assets/image/telemark1.png";
import telemark2 from "../assets/image/dreamvac.png";
import telemark3 from "../assets/image/telemark3.png";

const vacations = [
  { title: "Friends Getaway", img: telemark3 },
  { title: "Family Vacation", img: telemark1 },
  { title: "Couples Retreat", img: telemark2 },
];

const VacationSection = () => {
  return (
    <section className="py-5 text-center bg-white">
      <div className="container">
        <h3 className="mb-3 heading-text-css">
          Dream vacation in harmony with you
        </h3>
        <p className="mb-5 text-content-css">
          Dream vacation in harmony with you. Set your own course and spend unforgettable time with <br /> your beloved ones!
        </p>
        <div className="row g-4">
          {vacations && vacations.map((item, idx) => (
              <div className="col-md-4" key={idx} >
                <div className="rounded-4 p-3 h-100 d-flex flex-column align-items-center " style={{background: '#F3F9FB'}}>
                  <img
                    src={item.img}
                    alt={item.title}
                    className="rounded-4 mb-3"
                    style={{
                      width: "100%",
                      height: "250px",
                      objectFit: "cover",
                    }}
                  />
                  <h5 className="mb-3 vacation-title-text">{item.title}</h5>
                  <button className="btn rounded-pill px-4 py-2 d-flex align-items-center gap-2 common_btn_color vacation-button-text" style={{background: '#2B3F4D'}}>
                    Book Now <i className="bi bi-arrow-right"></i>
                  </button>
                </div>
              </div>
            ))}
        </div>
      </div>
    </section>
  );
};

export default VacationSection;
