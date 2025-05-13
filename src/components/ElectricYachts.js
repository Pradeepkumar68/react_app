import '../assets/css/electricYachts.css';
import checkIcon from '../assets/image/check-square.png';

  const YachtSection = () => {
      return (
        <section className="yacht-section">
          <div className="content-overlay">
            <h1 className="yacht-heading">Electric Yachts</h1>
            <p className="yacht-description">
              Captain! Take the helm of one of Greenline's yacht models and lead your own journey.
              Experience the effortless pleasure of steering as you glide smoothly across the water.
            </p>
            <p className="yacht-description">Step aboard an exceptional pleasure craft with:</p>
            <ul className="list-unstyled feature-list">
              <li><img src={checkIcon} alt='check'  className='img-fluid' style={{marginRight: "10px",  verticalAlign: "middle"}}/>Comfortable steering</li>
              <li><img src={checkIcon} alt='check'  className='img-fluid'  style={{marginRight: "10px",  verticalAlign: "middle"}}/>Elegant scandinavian design</li>
              <li><img src={checkIcon} alt='check'  className='img-fluid'  style={{marginRight: "10px",  verticalAlign: "middle"}}/>High-quality equipment</li>
            </ul>
          </div>
       
        </section>
      );
    };
export default YachtSection