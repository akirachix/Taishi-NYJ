import './index.css'
import { useState } from 'react';
import trashion from '../Assets/trashion.jpeg'

function Article(){
    const [showModal,setShowModal]=useState(false)
    return(
    <div className="div-container">
        <div className='modal' style={{display:showModal ? 'block':'none'}}>
            <div className='modal-content'>
            <h1 className='article-heading'>Trashion Menace in Kenya</h1>
        <div className='cardsContainer'>
        <div className="cardsText" id='delivery-card'>
            {/* <h1 className="h1Tag">Bridging the Gap: Addressing Kenya's Second-Hand Clothing Waste Crisis</h1> */}
            <p className='summary'>
<h2 className='sub-title'>The Hidden Cost of Kenya's Second-Hand Clothing Trade</h2>

<br></br>
<br></br>

The Mitumba trade, originating from the Kiswahili term for "bundle," refers to the importation 
and resale of second-hand clothing in Kenya. This trade has grown exponentially, offering 
affordable fashion alternatives to many Kenyans. However, the rapid growth of this sector 
has led to an alarming increase in waste, with unsold clothes often ending up in landfills 
or being incinerated, contributing to environmental pollution and health hazards.

<br></br>

<p className='point'>The Environmental Impact of Mitumba</p>

The environmental implications of the Mitumba trade are profound. 
Approximately 20% to 50% of imported Mitumba clothing is deemed unusable upon arrival, 
contributing significantly to landfill waste. The remainder, despite being sold, often 
ends up in dumps or is burned, releasing harmful pollutants into the atmosphere. Synthetic 
materials prevalent in these clothes do not biodegrade easily, exacerbating the pollution problem. 
This situation underscores the urgent need for sustainable practices in the second-hand clothing industry.

<br></br>

<p className='point'>The Economic Perspective</p>

Economically, the Mitumba trade has been beneficial, generating revenue for the government through 
taxes and creating jobs for traders and retailers. However, the reliance on second-hand clothing has 
stifled the local textile industry, affecting job opportunities and export earnings. The trade's 
economic benefits must be balanced against its environmental costs, necessitating a shift towards 
more sustainable practices. Addressing the environmental concerns associated with the Mitumba 
trade requires fostering stronger ties between traders and recycling companies. Our research 
identified a significant disconnect between these parties, hindering efficient waste management. 
Proposed solutions include establishing clear communication channels, facilitating training 
programs for traders on proper waste disposal, and encouraging collaborations between traders 
and recyclers to divert waste from landfills.

<br></br>
<p className='point'>Reflections and Future Directions</p>

Reflecting on our project, we recognize the complex interplay between economic development and 
environmental preservation in the context of the Mitumba trade. Our research highlights the 
importance of sustainable practices and the necessity of fostering partnerships between traders 
and recyclers to mitigate the environmental impact of second-hand clothing in Kenya. Moving forward, 
we advocate for policy interventions that support the transition towards a more circular economy, 
where waste is minimized, and resources are reused and recycled efficiently.
The Mitumba trade in Kenya presents a paradoxical scenario of economic prosperity versus 
environmental degradation. Addressing this challenge requires concerted efforts from all 
stakeholders, including traders, recyclers, policymakers, and the public. By adopting sustainable 
practices and fostering collaboration, we can ensure that the Mitumba trade continues to offer 
economic benefits while minimizing its environmental footprint.

            </p>
        </div>
        </div>
       </div>
    </div>
        <div className='full-article'>
          <div className='article-div'>
          <div >
            {/* <img className='image' src="/home/studen/Documents/NYJ-Multmedia/Code-Taishi/code-taishi/src/Assets/trashion.jpeg" alt='Trashion Menace in Kenya'/> */}
            <img className='image' src={trashion}  alt='Trashion Menace in Kenya' />
          </div>
            <div className='article'>
            <h1 className='article-heading'>Bridging the Gap: Enhancing Collaboration Between Traders and Recyclers</h1>
           <p className="about-article-text">
            
           Kenya's booming second-hand clothing trade, colloquially known as "Mitumba," has become a significant contributor to the country's environmental and economic landscape. While providing affordable fashion options for many Kenyans, the influx of second-hand clothing, particularly from developed nations, has led to a surge in waste and environmental degradation. This article delves into the complexities of the Mitumba trade, exploring its environmental impacts, the challenges faced by traders, and potential solutions to mitigate the adverse effects of this trade on Kenya's environment.

            </p>
            <button className='read-more-btn' onClick={()=> setShowModal(true)}>
            Read More</button>
           </div>
          </div>
         </div>
    </div>
    )
}
export default Article;