import React from 'react'
import CustomerFeedback from './CustomerFeedback'
import ItinerariesSection from './ItinerariesSection'
import OurBoatsSection from './OurBoatsSection'
import VacationSection from './VacationSection'
import Unforgettable from './Unforgettable'
import GalleryImages from './GalleryImages'
import CanalExperienceSection from './AboutTelemark'
import AllYearOffers from './AllYearOffers'
import LeisureSection from './LeisureSection'
import bgFooter from "../assets/image/bg-footer.png";
import Rectangle42 from "../assets/image/Rectangle42.png";
import Frame from "../assets/image/Frame.png";
import ShipIcon from "../assets/image/ship.png";
import Volumemute from "../assets/image/Frame2.png";
import lightbulb from "../assets/image/lightbulb.png";
import Line2 from "../assets/image/Line2.png";
import ElectricYachts from './ElectricYachts'

const HomePage = () => {
  return (
    <>
    <section className="text-center py-5 mt-5">
    <h2 className="section-title heading-text-css">Welcome to Canal Boats Telemark!</h2>
    <p className="mb-5 text-content-css">Meet the world’s first fully electric yacht fleet. High-end motor boats use 100% renewable electric energy. We <br />
     guarantee you a green holiday along one of Norway’s most beautiful waterways.</p>
    <div className="row justify-content-center align-item-center">
      <div className="col-md-3 mb-4">
        <div className="feature-card">
          <img src={ShipIcon} alt='book now' className='img-fluid'/>
          <h3 className="telemark-sub-heading">Eco-Friendly Motor Boats</h3>
          <img src={Line2} alt='bottom line' />
          <p className="telemark-sub-para">The silent and emission-free propulsion makes the boats friendly to the surrounding flora and fauna, creating a balance between nature and man.</p>
        </div>
      </div>
      <div className="col-md-3 mb-4">
        <div className="feature-card">
           <img src={Volumemute} alt='book now' className='img-fluid'/>
          <h3 className="telemark-sub-heading">No Engine Noise</h3>
             <img src={Line2} alt='bottom line' />
          <p className="telemark-sub-para">Soak up the sounds and smells of nature, finally using all your senses to explore the amazing surroundings around you!</p>
        </div>
      </div>
      <div className="col-md-3 mb-4">
        <div className="feature-card">
           <img src={lightbulb} alt='book now' className='img-fluid'/>
          <h3 className="telemark-sub-heading">No Diesel Fumes</h3>
             <img src={Line2} alt='bottom line' />
          <p className="telemark-sub-para">Immerse yourself in the feeling of comfort and pleasure from driving the electric yacht.</p>
        </div>
      </div>
     <div className="mt-4">
            <a className="btn text-white me-3" href='/' style={{background: '#2B3F4D'}}>
              Read More <i className="bi bi-arrow-right ms-2"></i>
            </a>
            <a className="btn btn-outline-dark" href='/'>
              Talk to our Consultant <i className="bi bi-headset ms-2"></i>
            </a>
          </div>
    </div>
  </section>


   <ElectricYachts />

  <CanalExperienceSection />
 
    <AllYearOffers />


    <VacationSection />

   <LeisureSection />

   <ItinerariesSection />

   <OurBoatsSection />

   <Unforgettable />

   <GalleryImages />

<section className="container py-5">
  <div className="bg-dark text-white rounded-4 p-5 text-left mx-4"
    style={{ backgroundImage: `url(${Rectangle42})`, backgroundSize: 'cover',backgroundPosition: 'center'}}>
    <h2 className="heading-text-css text-start">Do You Need help with planning? <br /> or getting Started </h2>
    <a href="/" className="btn common_color mt-4 rounded-pill px-4 py-2 fw-semibold text-white text-center">
      Talk to our Consultant <i className="bi bi-arrow-right"></i>
    </a>
  </div>
</section>

  <CustomerFeedback />

    <section className="py-5 text-center text-white" style={{ backgroundImage: `url(${bgFooter})`, backgroundSize: 'cover', backgroundPosition: 'center',height: '50%' }}>
        <div className="container">
          <h2 className="heading-text-css">Book your dream vacations now or<br />contact us to find out more!</h2>
          <a href="/" className="btn mt-4 rounded-pill px-4 py-2 fw-semibold">
             <img src={Frame} alt='book now' className='img-fluid'/>
          </a>
        </div>
   </section>
    </>
  )
}

export default HomePage
