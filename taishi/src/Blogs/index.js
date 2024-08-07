

import './index.css';
import Article from '../Article';
import { useState, useEffect, useRef } from 'react';
import bornAcrimeBlog from '../Assets/bornAcrimeBlog.jpg';

function Blogs() {
    const [showModal, setShowModal] = useState(false);
    const modalRef = useRef(null);

  
    const handleClickOutside = (event) => {
        if (modalRef.current && !modalRef.current.contains(event.target)) {
            setShowModal(false);
        }
    };

    useEffect(() => {
       
        if (showModal) {
            document.addEventListener('mousedown', handleClickOutside);
        } else {
            document.removeEventListener('mousedown', handleClickOutside);
        }

        
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [showModal]);

    return (
        <div className="articles-container">
            <div className='modal' style={{ display: showModal ? 'block' : 'none' }}>
                <div className='modal-content' ref={modalRef}>
                    <div className='cardsContainer'>
                        <div className="theme-one-text">
                            <h3 className="h1Tag">Identity, Belonging, and Community</h3>
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
                                <h3 className="h1Tag">Political Relevance</h3>
                                <p>
                                    Apartheid itself is a system that relies on power imbalances to function.
                                    All caste systems are dependent on the ability of the ruling class—in this case, white people—to keep the lower classes in a position of powerlessness.
                                    Like South Africa under apartheid, Kenya has grappled with a history of racial discrimination and the marginalization of certain ethnic groups.
                                    "Born a Crime" provides a personal perspective on navigating identity and belonging in a society divided by race.
                                    Kenya, like South Africa, has had to grapple with the lingering effects of colonialism and the transition to a more equitable democratic system.
                                    "Born a Crime" provides a contemporary perspective on these sociopolitical transformations.
                                </p>
                            </div>

                            <div className='theme-three'>
                                <h3 className="h1Tag">Economic Relevance</h3>
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
                                    left many Kenyans vulnerable to poverty and economic instability.
                                </p>
                            </div>


                            <div className='theme-four'>

                            </div>

                           
                        </div>
                    </div>
                </div>
            </div>

            <div className='BookArticle'>
                <div className='blog-container'>
                    <div>
                        <img className='book-cover' src={bornAcrimeBlog} alt='Born A Crime book Cover' />
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
                        </p>
                        <button className='read-more-btn' onClick={()=> setShowModal(true)}>
                             Read More</button>

                    </div>
                </div>
            </div>

            <Article />
        </div>
    );
}

export default Blogs;