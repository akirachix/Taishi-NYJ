import './index.css'
import Article from '../Article';

import { useState } from 'react';

import bornAcrimeBlog from '../Assets/bornAcrimeBlog.jpg';



function Blogs(){
    const [showModal,setShowModal]=useState(false)
    
    return(
    <div className="articles-container">
   
        <div className='modal' style={{display:showModal ? 'block':'none'}}>
            <div className='modal-content'>
          
        <div className='cardsContainer'>

            
        
        <div className="theme-one-text" >
            <h1 className="h1Tag">Identity, Belonging, and Community</h1>
            <p>
            Each character in the book must confront both personal and societal ideas regarding
             their identity and how their community views them. Traditional ideas about a woman’s
              place in South African society and in her family predated apartheid, but apartheid exacerbated 
              these circumstances by enforcing racial segregation. Because their options for residing and 
              working were restricted, all Black people suffered a loss of opportunity that persisted even 
              after apartheid ended. Most men were too poor or uneducated to leave their villages or townships 
              in search of better work. Whether their men provided or not, women bore the brunt of raising a 
              family and running a household on limited money. Racial segregation ensured that everyone lacked 
              perspective on how people other than themselves lived.
             Trevor grows up in a world of strong women whom society views as less than their male counterparts. 
             Even though Patricia has a career and a home of her own, she is still identified as Abel’s wife.
              Abel’s traditional family expects her to defer to him in all things, and while Patricia rejects 
              outward displays of respect, she does support Abel financially even as his business fails.


            </p>
        </div>


      <div className='article-cards'>

        <div className='theme-two'>
            <h1 className="h1Tag">Political Relevance</h1>
            <p>
            Apartheid itself is a system that relies on power imbalances to function.
            All caste systems are dependent on the ability of the ruling class—in this case, white people—to keep the lower classes in a position of powerlessness
            Like South Africa under apartheid, Kenya has grappled with a history of racial discrimination and the marginalization of certain ethnic groups. 
            "Born a Crime" provides a personal perspective on navigating identity and belonging in a society divided by race
            Kenya, like South Africa, has had to grapple with the lingering effects of colonialism and the transition to a more equitable democratic system. 
            "Born a Crime" provides a contemporary perspective on these sociopolitical transformations.



            </p>

        </div>

        <div className='theme-three'>
        <h1 className="h1Tag">Economic Relevance</h1>
            <p>
            The theme of poverty in Trevor Noah's memoir "Born a Crime" is 
            central to understanding the societal and personal struggles during apartheid in South Africa. 
            Poverty was systematically imposed on non-whites through laws and policies 
            designed to maintain racial segregation and economic inequality. 
            Noah's family, particularly his mother Patricia, faced constant 
            financial struggles and uncertainty due to their lack of resources and the economic 
            disadvantages imposed by apartheid.
          In the Kenyan context, poverty remains a significant issue, 
          particularly for marginalized communities. Kenya's history of colonialism and post-colonial 
          governance has led to persistent economic disparities, similar to those experienced under apartheid. 
          The legacy of colonialism and the challenges of transitioning to a more equitable society have 
          left many Kenyans vulnerable to poverty and economic instability

          </p> 
        </div>

        {/* <div className='review-questions'>
        <h1 className="h1Tag">Review Questions</h1>
            <p>
           1. Did you know who Trevor Noah was before reading his memoir? If yes, what did you expect from the book? Did the book live up to your expectations, or not?
           2.Noah begins the book about being thrown from a moving car. Why do you think he chose to begin his narrative with this anecdote?


          </p> 
        </div> */}

        
            <button className='cancel-btn' onClick={()=>setShowModal (false)}>
            Cancel</button>



        </div>

        

        </div>
        </div>
        </div>


        <div className='BookArticle'>   
          
         
        <div className='blog-container'> 

          <div >
            {/* <img className='book-cover' src="Assets/bornAcrimeBlog.jpg" alt='Born A Crime book Cover'/> */}
            <img className='book-cover' src={bornAcrimeBlog} alt='Born A Crime book Cover'/>
          </div>

          <div className='blog'>

            <h1 className='blog-heading'>Born A Crime</h1>
           <p className="about-book-text">
            Born a Crime is the story of a mischievous young boy who grows into a restless 
            young man as he struggles to find himself in a world where he was never supposed to exist. 
            It is also the story of that young man’s relationship with his fearless, 
            rebellious, and fervently religious mother—his teammate, 
            a woman determined to save her son from the cycle of poverty, violence, 
            and abuse that would ultimately threaten her own life.
            {/* The stories collected here are by turns hilarious, dramatic, and deeply affecting. 
            Whether subsisting on caterpillars for dinner during hard times,
            being thrown from a moving car during an attempted kidnapping,
            or just trying to survive the lifeand- death pitfalls of dating in high school,
            Trevor illuminates his curious world with an incisive wit and unflinching honesty. 
            His stories weave together to form a moving and searingly funny portrait of a boy making
            his way through a damaged world in a dangerous time, armed only with a keen 
            sense of humor and a mother’s unconventional, unconditional love. */}
            </p>

            <button className='read-more-btn' onClick={()=> setShowModal(true)}>
            Read More</button>
          </div>
           

           


          </div> 

      </div>





      <Article/>
     
            
    </div>
    )
}
export default Blogs;
