import telemarkCanalboats from "../assets/image/telemarkCanalboats.png";
import telemarkcanalboats2 from "../assets/image/telemarkcanalboats2.png";
import telemarkcanalboats3 from "../assets/image/telemarkcanalboats3.png";
import telemarkcanalboats4 from "../assets/image/telemarkcanalboats4.png";
import Frame4 from "../assets/image/Frame4.png";

const yearOffers = [
  {
    title: "Top season fun – high season",
    text: "The best time to explore all the travel secrets here. Entertainment for everyone is guaranteed!",
    img: telemarkcanalboats2,
  },
  {
    title: "Outdoor paradise – late spring",
    text: "Mild weather creates fantastic conditions for all kinds of activities. Choose the way that suits you best!",
    img: telemarkcanalboats4,
  },
  {
    title: "Coolcation mode – autumn",
    text: "Do you fancy relaxing in a cooler climate? Norwegian Telemark is the perfect destination.",
    img: telemarkCanalboats,
  },
  {
    title: "Nordic adventure – winter",
    text: "Discover a paradise for winter enthusiasts, with all the sports available here.",
    img: telemarkcanalboats3,
  },
];

const HeroSection = () => {
  return (
    <>
      <section
        className="season-cards-section py-5 "
        style={{ background: "#F4FAFB" }}
      >
        <div className="container">
          <h3 className="section-heading text-center">All-year-long offer</h3>
          <p className="section-subheading text-center text-content-css">
            The yacht’s design and equipment, combined with a wide range of
            possibilities for <br /> spending time here, ensure you’ll have a
            great time here, all year round!
          </p>
          <div className="row g-4">
            {yearOffers &&
              yearOffers.map((item, index) => (
                <div key={index} className="col-md-6">
                  <div className="card border-0 shadow-sm h-100 rounded-4">
                    <div className="row g-0">
                      <div className="col-md-5" style={{ padding: "15px" }}>
                        <img
                          src={item.img}
                          alt={item.title}
                          className="img-fluid rounded-4 h-100 object-fit-cover"
                        />
                      </div>
                      <div className="col-md-7">
                        <div className="card-body">
                          <h5 className="card-title m-1 all-year-heading">
                            {item.title}
                          </h5>
                          <p className="card-text all-year-para">{item.text}</p>
                          <a href="/" className="text-warning fw-semibold">
                            <img src={Frame4} alt="Read more" />
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default HeroSection;
