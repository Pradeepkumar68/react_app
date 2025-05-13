const Header = () => {
  return (
    <>
      <header  className="header text-white py-2 position-relative z-10" style={{ borderBottom: "1px solid gray" }}>
        <div className="container d-flex justify-content-between align-items-center">
          <div className="contact-info d-flex gap-5">
            <span className="me-3">
              <i className="bi bi-geo-alt me-1 text-warning"></i> Stangsgate 1,
              3915 Porsgrunn
            </span>
            <span className="me-3">
              <i className="bi bi-envelope me-1 text-warning"></i>{" "}
              post@canalboats.no
            </span>
            <span className="me-3">
              <i className="bi bi-telephone me-1 text-warning"></i> +47 47250053
            </span>
          </div>
          <div className="d-flex align-items-center gap-3">
            <div className="social-icons d-flex gap-4 ">
              <i className="bi bi-facebook text-warning"></i>
              <i className="bi bi-linkedin text-warning"></i>
              <i className="bi bi-instagram text-warning"></i>
              <i className="bi bi-youtube text-warning"></i>
            </div>
            <div className="language d-flex align-items-center px-5">
              <i className="bi bi-globe me-2 text-warning"></i> ENG{" "}
              <i className="bi bi-caret-down-fill"></i>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
