import React, { useState, useEffect } from "react";
import Profile from "../assets/image/Ellipse.png";

const CustomerFeedback = () => {
  const feedbacks = [
   {
      text: `Fantastisk opplevelse Tusen takk for en minnerik tur med god service og komfort.`,
      authorName: "Erik K",
      authorImage: Profile,
      date: "2023-08-02",
    },
    {
      text: `Fantastisk opplevelse Tusen takk for en minnerik tur med god service og komfort.`,
      authorName: "Ana P",
      authorImage: Profile,
      date: "2023-08-02",
    },
    {
      text: `Fantastisk opplevelse Tusen takk for en minnerik tur med god service og komfort.`,
      authorName: "Erik S",
      authorImage: Profile,
      date: "2023-09-15",
    },
    {
     text: `Fantastisk opplevelse Tusen takk for en minnerik tur med god service og komfort.`,
      authorName: "Lise T",
      authorImage: Profile,
      date: "2023-07-22",
    },
    {
      text: `Fantastisk opplevelse Tusen takk for en minnerik tur med god service og komfort.`,
      authorName: "Anni K",
      authorImage: Profile,
      date: "2023-08-02",
    },
   {
      text: `Fantastisk opplevelse Tusen takk for en minnerik tur med god service og komfort.`,
      authorName: "Anny P",
      authorImage: Profile,
      date: "2023-08-02",
    },
    {
      text: `Fantastisk opplevelse Tusen takk for en minnerik tur med god service og komfort.`,
      authorName: "Annaya S",
      authorImage: Profile,
      date: "2023-08-02",
    },
    {
      text: `God oppfølging fra start til slutt Alt gikk etter planen og båten var lett å bruke.`,
      authorName: "Erik S",
      authorImage: Profile,
      date: "2023-09-15",
    },
   {
      text: `Fantastisk opplevelse Tusen takk for en minnerik tur med god service og komfort.`,
      authorName: "Anna M",
      authorImage: Profile,
      date: "2023-08-02",
    },
  ];

  const [activeIndex, setActiveIndex] = useState(0);

  const itemPerSlide = (arr, size) =>
    Array.from({ length: Math.ceil(arr.length / size) }, (_, i) =>
      arr.slice(i * size, i * size + size)
    );

  const slides = itemPerSlide(feedbacks, 3);

  useEffect(() => {
    const carousel = document.getElementById("feedbackCarousel");
    const handler = (e) => setActiveIndex(e.to);
    carousel?.addEventListener("slide.bs.carousel", handler);
    return () => carousel?.removeEventListener("slide.bs.carousel", handler);
  }, []);

  return (
    <div className="container my-5">
      <div className="text-center mb-4">
        <h2 className="heading-text-css">Customers Feedback</h2>
        <p className="text-content-css">
          This is what our customers have to say
        </p>
      </div>

      <div id="feedbackCarousel" className="carousel slide" data-bs-ride="carousel">
        <div className="carousel-inner">
          {slides && slides.map((group, groupIndex) => (
            <div className={`carousel-item ${groupIndex === 0 ? "active" : ""}`} key={groupIndex}>
              <div className="row">
                {group.map((feedback, index) => (
                  <div className="col-md-4 mb-4" key={index}>
                    <div className="card h-100 border-0 shadow-sm rounded-4 p-3">
                      <div className="mb-2 text-warning">
                        {[...Array(5)].map((_, i) => (
                          <i key={i} className="bi bi-star-fill me-1"></i>
                        ))}
                      </div>
                      <p style={{ whiteSpace: "pre-wrap" }} className="text-content-css text-start">{feedback.text}</p>
                      <div className="d-flex justify-content-between align-items-center mt-3">
                        <div className="d-flex align-items-center">
                          <img
                            src={feedback.authorImage}
                            alt="author"
                            className="rounded-circle me-3"
                            style={{ width: "40px", height: "40px" }}
                          />
                          <div>
                            <strong>{feedback.authorName}</strong>
                            <br />
                            <small className="text-muted">{feedback.date}
                            </small>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="d-flex justify-content-center mt-3 gap-2">
          {slides.map((_, index) => (
            <span
              key={index}
              data-bs-target="#feedbackCarousel"
              data-bs-slide-to={index}
              className="rounded-circle"
              style={{
                width: "10px",
                height: "10px",
                backgroundColor: index === activeIndex ? "#000" : "#ccc",
                display: "inline-block",
                cursor: "pointer",
              }}
            ></span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CustomerFeedback;
