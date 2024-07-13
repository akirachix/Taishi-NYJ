import podcast from '../Assets/podcast.png';
import microphone from '../Assets/microphone.jpg'
import './index.css';
// import Navbar from "../Navbar";

const Podcast = function (){
    return(
       <>
       {/* <Navbar/> */}
        <section className="banner" style={{ backgroundImage: `url(${podcast})` }}>
        <div className="image-container">
          <div className="overlay">
            <div className="content">
              <h3 className="body-text">Taishi Podcasts</h3>
              <div className="coming-soon">
              <img src={microphone} alt="Coming Soon" />
                
               <div>
               <h3 className="body-text">Coming Soon</h3>
               <button className="get-started-btn">All Episodes</button>

               </div>
              </div>
            
              
            </div>
          </div>
        </div>
      </section>
       </>
    )
}

export default Podcast;