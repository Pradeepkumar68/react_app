import CallIcon from "../../assets/image/Call.png";
import BookNow from "../../assets/image/Frame.png";
import CalenderInput from "./CalenderInput";

const HeroSection = () => {
  return (
    <>
    <section className="d-flex align-items-center position-relative z-10">
            <div className="container text-white">
              <h1 className="display-1s banner-img-heading-text">EXPERIENCE NORWAY <br /> IN MINIATURE</h1>
              <p className="mt-3 telemark-sub-heading text-start">From the historic telemark canal to the beautiful coastline in just a few hours</p>
              <button className="btn  px-5 py-3 mt-4"> 
                <img src={BookNow} alt='book now' className='img-fluid'/>
              </button>
              <p className="my-5 text-center mb-5">Find certified boats in Norway, available for bareboat or skippered charters.</p>
            </div>
          </section>
        <CalenderInput />
        <div className="position-fixed bottom-0 end-0  mb-5" style={{ zIndex: 9999 }}>
        <button className="chat-icon">
          <img src={CallIcon}  alt="Call Icon" />
        </button>
      </div>
    </>
  )
}

export default HeroSection
