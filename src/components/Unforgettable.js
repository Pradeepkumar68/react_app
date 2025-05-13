const Unforgettable = () => {

    const features = [
  {
    icon: "bi bi-compass-fill",
    text: "Explore one of the most stunning regions in Scandinavia",
  },
  {
    icon: "bi bi-lightning-charge-fill",
    text: "Feel the tranquility of electric yachting",
  },
  {
    icon: "bi bi-box-seam",
    text: "Explore hidden treasures of Telemark region",
  },
  {
    icon: "bi bi-sun",
    text: "Sink into deep relaxation in a luxurious yacht",
  },
  {
    icon: "bi bi-recycle",
    text: "Meet sustainable ways of traveling",
  },
  {
    icon: "bi bi-tree",
    text: "Admire a harmony between humans and nature",
  },
  {
    icon: "bi bi-clouds",
    text: "Breathe fresh air around breath-taking landscapes",
  },
  {
    icon: "bi bi-sun",
    text: "Enjoy the mild but not cold summer of southern Norway with lots of sun",
  },
  {
    icon: "bi bi-globe2",
    text: "Discover the new experience of traveling in a cooler climate in spring and autumn",
  },  
];

  return (
    <>
     <section className="py-5 bg-white text-dark text-center">
        <div className="container">
          <h2 className="mb-5 heading-text-css" style={{ fontSize: "2.5rem", fontWeight: 500 }}>
            Create unforgettable memories!
          </h2>
          <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-4">
            {features.map((feature, index) => (
              <div className="col d-flex flex-column align-items-center" key={index}>
                <div
                  className="text-white d-flex justify-content-center align-items-center mb-3"
                  style={{ width: 40, height: 40, borderRadius: 12, background: '#ECC974'}}
                >
                  <i className={`${feature.icon} fs-4`}></i>
                </div>
                <p className="mb-0 text-content-css" style={{ maxWidth: 250 }}>{feature.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section> 
    </>
  )
}

export default Unforgettable
