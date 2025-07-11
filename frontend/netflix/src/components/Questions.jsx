import React, { useState } from 'react';
import '../styles/landingpage.css'
import arrow from '../assets/images/righticon.svg'
import plus from '../assets/images/+plus.svg'
import minus from '../assets/images/+plus.svg'
const Question = ({ title, answer }) => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleAnswer = () => {
        setIsOpen(!isOpen);
    };

    return (
        <>
            <div className="questions">



                <div className="images">
                    <h2 onClick={toggleAnswer}>{title}</h2>
                    <img
                        src={isOpen ? minus : plus}
                        alt="toggle icon"
                        onClick={toggleAnswer}
                        style={{ cursor: 'pointer' }}
                    />
                </div>


                <div>
                    {isOpen && (
                        <p>
                            {answer}
                        </p>
                    )}

                </div>



            </div>



        </>



    );
};






const questionsData = [
    {
        title: "What is Netflix?",
        answer: `Netflix is a streaming service that offers a wide variety of award-winning 
TV shows, movies, anime, documentaries, and more on thousands of internet-connected devices.
You can watch as much as you want, whenever you want without a single commercial – all for one low monthly price.
There's always something new to discover and new TV shows and movies are added every week!`
    },
    {
        title: "How much does Netflix cost?",
        answer: `Watch Netflix on your smartphone, tablet, smart TV, laptop, or streaming device,
all for one fixed monthly fee. Plans range from $6.99 to $19.99 a month. No extra costs, no contracts.`
    },
    {
        title: "Where can I watch?",
        answer: `Watch anywhere, anytime. Sign in with your Netflix account to watch instantly on the web 
at netflix.com from your personal computer or on any internet-connected device.`
    },

];

const Asked = () => {
    return (

        <>
            <div className="asked">
                <h1>Frequently Asked Questions</h1>
                {questionsData.map((item, index) => (
                    <Question key={index} title={item.title} answer={item.answer} />
                ))}
            </div>


            <div className='welcome'>
                <h1>
                    Unlimited movies, TV <br />
                    shows, and more
                </h1>

                <p>Starts at US$2.99. Cancel anytime.</p>
                <p className='getready'>Ready to watch? Enter your email to create or restart your <br />
                    <br /> membership.</p>

                <div className='forms'>
                    <input type="email" name="email" id="email" placeholder='Email address' />
                    <button>Get Started <img src={arrow} alt="" /></button>
                </div>
            </div>



            

            <footer>
              
                
                   
                  

              
            

            <div className='foo'>
                
             <ul>
                        <li>Questions? Contact us</li>
                        <li>FAQ</li>
                        <li>Investor Relations</li>
                        <li>Privacy</li>
                        <li>Speed Test</li>
                        <li>only on Netflix</li>
                    </ul>

                      <div className='footer2'>
                        <ul>
                            <li>
                                Help Center</li>
                            <li>
                                Jobs</li>
                            <li>
                                Cookie Preferences</li>
                            <li>
                                Legal Notices</li>

                        </ul>
                    </div>
            </div>
            </footer>
        </>
    );
};

export default Asked;
