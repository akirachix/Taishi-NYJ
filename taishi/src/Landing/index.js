import "./index.css";
import multimedia from "../LandingImages/multimedia.png"
import Navbar from "../Navbar";
import { Link } from "react-router-dom";

const Landingpage = () =>{
  return (
    <div className="landingpagecontent">
      <Navbar/> 
        <div className="wezeshawelcometext">
            <div className="landing-left">
          
              <div className="landing-text-heading">
                <h1>Taishi</h1>
              </div>

              <div className="landing-text-paragraph">
                <p>Blending Technology, art and innovation for a captivating experience</p>
              </div>
          
         
            <button className="downloadButton"><Link to="/Videos" className="button-link">Get Started</Link></button>
          </div>
        
          <img src={multimedia} alt="code-tiashi-image" className="landingpic"/>
          
        </div>
      </div>
  );
}
export default Landingpage;