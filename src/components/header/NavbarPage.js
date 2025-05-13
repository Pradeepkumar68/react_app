import "../../assets/css/navbar.css";
import whitelogo from "../../assets/image/whitelogo.png";
import BookNow from "../../assets/image/Frame.png";
import SearchIcon from "../../assets/image/Search.png";
import cartIcon from "../../assets/image/cartIcon.png";

const NavBar = () => {
  return (
    <>
     <nav className="navbar py-3 position-relative z-10">
        <div className="container">
          <div className="d-flex align-items-center">
            <img src={whitelogo} alt="logo" className="img-fluid"/>
          </div>
          <div className="d-flex align-items-center">
            <div className="dropdown me-4">
              <div
                className="btn  text-white dropdown-toggle"
                id="bookingDropdown"
                data-bs-toggle="dropdown"
                role="button"
                tabIndex="0"
              >
                Booking
              </div>
              <ul className="dropdown-menu" aria-labelledby="bookingDropdown">
                <li>
                  <a className="dropdown-item" href="/">
                    Option 1
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="/">
                    Option 2
                  </a>
                </li>
              </ul>
            </div>

            <div className="dropdown me-4">
              <div
                className="btn  text-white dropdown-toggle"
                id="servicesDropdown"
                data-bs-toggle="dropdown"
                role="button"
                tabIndex="0"
              >
                Services
              </div>
              <ul className="dropdown-menu" aria-labelledby="servicesDropdown">
                <li>
                  <a className="dropdown-item" href="/">
                    Option 1
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="/">
                    Option 2
                  </a>
                </li>
              </ul>
            </div>

            <div className="dropdown me-4">
              <div
                className="btn  text-white dropdown-toggle"
                id="infoDropdown"
                data-bs-toggle="dropdown"
                role="button"
                tabIndex="0"
              >
                Info
              </div>
              <ul className="dropdown-menu" aria-labelledby="infoDropdown">
                <li>
                  <a className="dropdown-item" href="/">
                    Option 1
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="/">
                    Option 2
                  </a>
                </li>
              </ul>
            </div>

            <a href="/" style={{ textDecoration: "none" }} className="text-white me-5">Contact Us</a> 
                
            {/* <i className="bi bi-cart text-white me-4 position-relative">
              <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-warning">
                2
              </span>
            </i> */}

            <div className="d-flex align-items-center gap-3">
              <div> <img src={SearchIcon} alt="search icon" className="img-fluid text-white" /></div>
              <div> <img src={cartIcon} alt="cart icon" className="img-fluid text-white position-relative" /> </div>
            </div>

             
             <button className="btn px-4" tabIndex="0" style={{ width: "150px",  height: 'auto'}}> 
                <img src={BookNow} alt='book now' className='img-fluid'/>
              </button>
          </div>
        </div>
      </nav>
    </>
  );
};

export default NavBar;
