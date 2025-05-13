import "../../assets/css/footer.css";
import LogoImg from "../../assets/image/transparant-gold.png";
import Phone from "../../assets/image/phone.png";
import MailIcon from "../../assets/image/mail.png";
import MapIcon from "../../assets/image/map-pin.png";
import Instagram from "../../assets/image/instagram.png";
import Youtube from "../../assets/image/youtube.png";
import Linkedin from "../../assets/image/Linkedin.png";
import Facebook from "../../assets/image/facebook.png";
import Send from "../../assets/image/send.png";

const Footer = () => {
  return (
    <>
     <footer className="text-white pt-5" style={{background: '#112442'}}>
        <div className="container rounded-4 py-4 px-3 mb-5" style={{background: '#2B3F4D'}}>
          <div className="row text-center text-md-start">
            <div
              className="col-md-4 mb-3 d-flex align-items-center gap-3" style={{ borderRight: "1px solid" }}>
               <img src={Phone} alt="mail icon" />
              <div>
                <p className="mb-0 fw-bold small">Call us</p>
                <p className="mb-0">+47 47250053</p>
              </div>
            </div>
            <div className="col-md-4 mb-3 d-flex align-items-center gap-3" style={{ borderRight: "1px solid" }}>
                <img src={MailIcon} alt="mail icon" />
              <div>
                <p className="mb-0 fw-bold small">Write to us</p>
                <p className="mb-0">post@canalboats.no</p>
              </div>
            </div>
            <div className="col-md-4 mb-3 d-flex align-items-center gap-3">
              <img src={MapIcon} alt="map icon" />
              <div>
                <p className="mb-0 fw-bold small">Address</p>
                <p className="mb-0">Stangsgate 1, 3915 Porsgrunn</p>
              </div>
            </div>
          </div>
        </div>

        <div className="container pb-5">
          <div className="row">
            <div className="col-md-4 mb-4 ">
              <img
                src={LogoImg}
                alt="Canal Boats Logo"
                height={50}
                className="mb-3"
              />
              <p>Silently changing the world</p>
              <div className="d-flex gap-3">
                {[Facebook, Linkedin, Instagram, Youtube].map(
                  (Icon, i) => (
                    <div 
                      key={i}
                      className="bg-warning text-white rounded-circle d-flex align-items-center justify-content-center"
                      style={{ width: 40, height: 40 }}
                    >
                      <img src={Icon} alt="Social icon" />
                    </div>
                  )
                )}
              </div>
            </div>
            <div className="col-md-4 mb-4">
              <h5 className="mb-3">Useful Links</h5>
              <ul className="list-unstyled small">
                <li style={{ marginBottom: '8px' }} className="useful-link-li-text">About us</li>
                <li style={{ marginBottom: '8px' }} className="useful-link-li-text">Price list</li>
                <li style={{ marginBottom: '8px' }} className="useful-link-li-text">Company trips and Day trips</li>
                <li style={{ marginBottom: '8px' }} className="useful-link-li-text">Privacy Policy</li>
                <li style={{ marginBottom: '8px' }} className="useful-link-li-text"> Agreement Policy</li>
                <li style={{ marginBottom: '8px' }} className="useful-link-li-text">News</li>
              </ul>
            </div>

            <div className="col-md-4 mb-4 newsletter-section">
              <h5 className="mb-3">Are you curious to know more?</h5>
              <p className="newsletter-text footer-para-text">
                Sign up for our newsletter and receive inspiring content
                straight to your mailbox about all the wonderful things you can
                experience in Telemark, what it’s like to holiday with a 100%
                electric cabin cruiser and much more.
              </p>
              <div className="newsletter-input-group">
                <input
                  type="email"
                  className="newsletter-input"
                  placeholder="Email Address"
                />
                <button className="newsletter-button">
                  <img src={Send} alt="send" />
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="row justify-content-center">
          <div className="col-md-11">
            <div className="text-center py-3 border-top border-secondary small mx-3 bottom-text-size">
             &copy; Copyright 2024 Canal Boats | Telemark AS (Org nr 925 305 804)
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
