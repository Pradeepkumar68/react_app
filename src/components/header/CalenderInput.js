import '../../assets/css/calenderInput.css'
import calendar from "../../assets/image/calendar.png";

const CalenderInput = () => {
  return (
    <>
      <section className="container mt-3">
          <div className="search-form d-flex flex-column flex-md-row gap-3">
            <div className="flex-grow-1 w-100">
              <label className="d-block small fw-semibold mb-1" style={{ color: "#D3d3d3" }}>
                CHECK IN
              </label>
              <div className="input-group">
                <input
                  type="text"
                  placeholder="Select Pickup Date"
                  className="form-control"
                  style={{ maxWidth: "470px"}}
                  onFocus={(e) => (e.target.type = 'date')}
                  onBlur={(e) => (e.target.type = 'text')}
                />
                <span className="input-group-text">
                  <img src={calendar} alt='calender' />
                </span>
              </div>
            </div>
            <div className="flex-grow-1 w-100">
              <label className="d-block small fw-semibold mb-1" style={{ color: "#D3d3d3" }}>
                CHECK OUT
              </label>
              <div className="input-group">
                <input
                  type="text"
                  placeholder="Select Drop off Date"
                  className="form-control"
                  style={{ maxWidth: "470px"}}
                  onFocus={(e) => (e.target.type = 'date')}
                  onBlur={(e) => (e.target.type = 'text')}
                />
                <span className="input-group-text">
                    <img src={calendar} alt='calender' />
                </span>
              </div>
            </div>
            <div
              className="d-flex align-items-center p-2 text-white search-btn"
              style={{
                borderRadius: "8px",
                background: '#2B3F4D'}}>
              <i className="bi bi-search me-2 text-secondary text-white"></i>
              Search
            </div>
          </div>
        </section>
    </>
  )
}

export default CalenderInput
