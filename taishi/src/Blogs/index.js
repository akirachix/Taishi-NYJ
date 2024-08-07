

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
                        <p className='theme-three'>
                                <strong>Title:</strong> Important themes in the book<br/> 
                                <strong>Written By:</strong> Taishi on August 9th 2024
                              </p>
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


                            <div className='theme-three'>
                              <hr/>
                              <br/>
                              <p className='theme-three'>
                                <strong>Title:</strong> The Role of Humor in Noah's Life<br/> 
                                <strong>Written By:</strong> Taishi on August 5th 2024
                              </p>
                              <p>
                                Trevor Noah's use of humor throughout his memoir serves as a powerful tool for navigating various life experiences, 
                                fostering friendships, and diffusing challenging situations. His comedic style not only entertains but also 
                                provides insight into the complexities of his upbringing in South Africa during apartheid and his subsequent rise to fame as a global comedian.
                              </p>

                              <h1 className="h1Tag"></h1>
                              <h3>Making Friends</h3>

                              <p>
                                Humor is a central theme in Noah's interactions, allowing him to connect with others in a meaningful way. He often recounts how laughter served as a bridge between himself and his peers, 
                                particularly in a racially divided society. By using humor, he could break down barriers and foster relationships across cultural lines. 
                                For instance, he reflects on how his mixed-race background often led to awkward situations, 
                                but his ability to make light of these experiences helped him gain acceptance among diverse groups.<br/>
                                As a 22-year-old girl in a tech bootcamp, I can relate to the power of humor in making friends. 
                                The intense and challenging nature of the program can create stress and tension, 
                                but using humor to diffuse these situations has helped me bond with my classmates. 
                                Sharing a laugh over a coding error or a funny meme has brought us closer together and made the experience more enjoyable.
                              </p>

                              <h3>Navigating Difficult Situations</h3>

                              <p>
                                Noah's humor also acts as a coping mechanism in the face of adversity. 
                                He shares anecdotes where humor helped him deal with the harsh realities of life, 
                                such as poverty and discrimination. By framing his struggles with a comedic lens, he transforms potentially traumatic experiences into relatable stories that resonate with readers. 
                                This approach not only lightens the mood but also invites empathy and understanding from his audience.
                                In my own life, humor has been a valuable tool for navigating difficult situations. When faced with challenges, I often try to find the humor in the absurdity of the situation. 
                                For example, during a particularly stressful coding project, my team and I started joking about the bugs in our code, creating silly names for them and laughing at our own mistakes. This helped us stay positive and motivated, 
                                even when the going got tough.
                              </p>

                              <h3>Key Phrases and Words</h3>
                              <p>
                              Throughout his narrative, Noah employs specific phrases that underscore his comedic approach. For example, 
                              he often uses playful language and puns to illustrate his points, such as referring to his childhood experiences with phrases like "I was the only kid who could get away with being both black and white."
                              This clever wordplay not only showcases his wit but also highlights the absurdity of the societal norms he navigated.<br/>

                              In the tech bootcamp, I've noticed that using humor often involves playing with language and creating inside jokes. 
                              My classmates and I frequently make puns related to coding terms or reference funny moments from our classes. 
                              For instance, we might joke about "debugging our social skills" or refer to a particularly challenging assignment as "the final boss." 
                              These shared references create a sense of camaraderie and help us navigate the intense learning environment with a lighter touch.                
                              </p>

                              <h3>The Impact of Humor</h3>
                              <p>The overall impact of Noah's humor is multifaceted. It serves to:</p>

                              <h5>1.Humanize Experiences</h5>
                              <p>
                                By using humor, Noah makes his life experiences more accessible and relatable to a broader audience.               
                              </p>

                              <h5>2.Encourage Reflection:</h5>
                              <p>
                                His comedic storytelling invites readers to reflect on serious issues 
                                like race and identity while maintaining a light-hearted tone.                
                              </p>

                              <h5>3.Build Resilience:</h5>
                              <p>
                                Humor becomes a tool for resilience, 
                                allowing Noah to face challenges with a positive attitude and encouraging others to do the same.
                                At AkiraChix, humor has had a similar impact on my experience. 
                                By using humor to navigate challenges, I've been able to maintain a positive attitude and build resilience. 
                                Sharing laughs with my classmates has helped us bond as a community and made the intense learning process more enjoyable. 
                                Additionally, the ability to find humor in difficult situations has encouraged me to reflect on my own growth and development as a programmer.
                              </p>

                              <h3>Reflections on Humor</h3>
                              <p>
                                
                                From my own experiences, humor has often played a vital role in navigating social dynamics and overcoming difficult moments. 
                                Like Noah, I have found that laughter can ease tension in challenging situations, whether it's diffusing an argument with a joke or 
                                making a new acquaintance feel comfortable. Humor fosters a sense of camaraderie and connection, reminding us that we all share the human experience, 
                                complete with its ups and downs.
                              </p>
                              <br/>
                              <p>
                                In conclusion, Trevor Noah's use of humor is not just a stylistic choice but a fundamental aspect of his life narrative. 
                                It enables him to forge connections, cope with adversity, and engage readers in a dialogue about important social issues, all while keeping the tone light and approachable. 
                                As 22-year-old girls in a tech bootcamp, we've found that incorporating humor into my own life has had a similar impact, helping me navigate challenges, build relationships, and maintain a positive outlook in the face of adversity.
                              </p>

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