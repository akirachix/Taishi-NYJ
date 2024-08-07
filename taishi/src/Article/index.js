import "./index.css";
import { useState, useEffect, useRef } from "react";
import trashion from "../Assets/trashion.jpeg";

function Article() {
  const [showModal, setShowModal] = useState(false);
  const modalRef = useRef(null);

  const handleClickOutside = (event) => {
    if (modalRef.current && !modalRef.current.contains(event.target)) {
      setShowModal(false);
    }
  };

  useEffect(() => {
    if (showModal) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [showModal]);

  return (
    <div className="div-container">
      <div className="modal" style={{ display: showModal ? "block" : "none" }}>
        <div className="modal-content" ref={modalRef}>
          <div className="cardsContainer">
            <div className="cardsText" id="delivery-card">
              <p className="theme-one-text">
                <h3 className="h1Tag">The Environmental Impact of Mitumba</h3>
                The environmental implications of the Mitumba trade are profound. Approximately 20% to 50% of imported Mitumba clothing is deemed unusable upon arrival, contributing significantly to landfill waste. The remainder, despite being sold, often ends up in dumps or is burned, releasing harmful pollutants into the atmosphere. Synthetic materials prevalent in these clothes do not biodegrade easily, exacerbating the pollution problem. This situation underscores the urgent need for sustainable practices in the second-hand clothing industry.
              </p>
              <br />

              <p className="theme-two">
                <h3 className="h1Tag">The Economic Perspective</h3>
                Economically, the Mitumba trade has been beneficial, generating revenue for the government through taxes and creating jobs for traders and retailers. However, the reliance on second-hand clothing has stifled the local textile industry, affecting job opportunities and export earnings. The trade's economic benefits must be balanced against its environmental costs, necessitating a shift towards more sustainable practices. Addressing the environmental concerns associated with the Mitumba trade requires fostering stronger ties between traders and recycling companies. Our research identified a significant disconnect between these parties, hindering efficient waste management. Proposed solutions include establishing clear communication channels, facilitating training programs for traders on proper waste disposal, and encouraging collaborations between traders and recyclers to divert waste from landfills.
              </p>

              <p className="theme-three">
                <h3 className="h1Tag">Reflections and Future Directions</h3>
                Reflecting on our project, we recognize the complex interplay between economic development and environmental preservation in the context of the Mitumba trade. Our research highlights the importance of sustainable practices and the necessity of fostering partnerships between traders and recyclers to mitigate the environmental impact of second-hand clothing in Kenya. Moving forward, we advocate for policy interventions that support the transition towards a more circular economy, where waste is minimized, and resources are reused and recycled efficiently. The Mitumba trade in Kenya presents a paradoxical scenario of economic prosperity versus environmental degradation. Addressing this challenge requires concerted efforts from all stakeholders, including traders, recyclers, policymakers, and the public. By adopting sustainable practices and fostering collaboration, we can ensure that the Mitumba trade continues to offer economic benefits while minimizing its environmental footprint.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="BookArticle">
        <div className="blog-container">
          <div>
            <img
              className="article-cover"
              src={trashion}
              alt="Trashion Menace in Kenya"
            />
          </div>
          <div className="blog">
            <h1 className="blog-heading">
              Bridging the Gap: Enhancing Collaboration Between Traders and Recyclers
            </h1>
            <p className="about-book-text">
              Kenya's booming second-hand clothing trade, colloquially known as "Mitumba," has become a significant contributor to the country's environmental and economic landscape. While providing affordable fashion options for many Kenyans, the influx of second-hand clothing, particularly from developed nations, has led to a surge in waste and environmental degradation. This article delves into the complexities of the Mitumba trade, exploring its environmental impacts, the challenges faced by traders, and potential solutions to mitigate the adverse effects of this trade on Kenya's environment.
            </p>
            <button
              className="read-more-btn"
              onClick={() => setShowModal(true)}
            >
              Read More
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Article;