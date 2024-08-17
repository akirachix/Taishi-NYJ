import podcast from '../Assets/podcast.png';
import microphone from '../Assets/microphone.jpg';
import './index.css';
import podcastAudio from '../Assets/UnchainedHeartsEP1.mp3';


const Podcast = function () {
  return (
    <>
      <section className="banner" style={{ backgroundImage: `url(${podcast})` }}>
        <div className="image-container">
          <div className="overlay">
            <div className="content">
              <h3 className="body-text">Taishi Podcasts</h3>
              <div className="coming-soon">
                <img src={microphone} alt="Coming Soon" />
                <div>
                <div className="podcast-container">
      <div className="podcast-player">
      
        <audio controls>
          <source src={podcastAudio} type="audio/mpeg" />
          Your browser does not support the audio element.
        </audio>
      </div>
    </div>
                  <button className="get-started-btn">All Episodes</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Podcast;
