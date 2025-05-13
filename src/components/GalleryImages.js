import GL1 from "../assets/image/GL1.png";
import GL2 from "../assets/image/GL2.png";
import GL3 from "../assets/image/GL3.png";
import telemark1 from "../assets/image/telemark1.png";
import telemark2 from "../assets/image/dreamvac.png";
import telemark3 from "../assets/image/telemark3.png";
import telemarkCanalboats from "../assets/image/telemarkCanalboats.png";
import telemarkcanalboats2 from "../assets/image/telemarkcanalboats2.png";
import telemarkcanalboats3 from "../assets/image/telemarkcanalboats3.png";
import telemarkcanalboats4 from "../assets/image/telemarkcanalboats4.png";


const GalleryImages = () => {
  const galleryImg = [
    { img: telemark1 },
    { img: telemark2 },
    { img: telemark3 },
    { img: telemarkCanalboats },
    { img: telemarkcanalboats2 },
    { img: telemarkcanalboats3 },
    { img: telemarkcanalboats4 },
    { img: GL1 },
    { img: GL2 },
    { img: GL3 },
    { img: telemarkcanalboats4 },
    { img: telemarkCanalboats },

  ];
  return (
    <>
      <section className="container text-center py-5" style={{background: '#F4FAFB'}}>
        <h2 className="section-title heading-text-css">Gallery</h2>
        <p className="mb-5 text-content-css">
          Quiet holiday along Telemark canal and Telemark coast
        </p>
        <div className="row">
          {galleryImg.map((boat, index) => (
            <div className="col-md-3 col-6 mb-4" key={index}>
              <img
                src={boat.img}
                className="gallery-img"
                alt={`Gallery Imag ${index + 1}`}
              />
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default GalleryImages;
