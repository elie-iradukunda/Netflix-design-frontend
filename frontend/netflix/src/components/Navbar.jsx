
import { useState } from 'react'
import netflixlogo from '../assets/images/netflixlogo.svg'
import language from '../assets/images/A+plus.svg'
import arrow from '../assets/images/righticon.svg'
import '../styles/landingpage.css'

import suid1 from '../assets/images/suid1.webp'
import suid2 from '../assets/images/suid2.webp'
import ginya from '../assets/images/ginya.webp'
import ginya2 from '../assets/images/ginya2.webp'
import giny3 from '../assets/images/kaujiz.webp'
import tv from '../assets/images/tvicon.svg'
import dounicon from '../assets/images/dounicon.svg'
import starticon from '../assets/images/startsicon.svg'
import agapupe from '../assets/images/agapupeicon.svg'
import plus from '../assets/images/+plus.svg'
import minus from'../assets/images/+plus.svg'
import Asked from './Questions'
import { Link} from 'react-router-dom'





const Navbar = () => {

   
     const [isOpen, setIsOpen] = useState(false);

  const toggleAnswer = () => {
    setIsOpen(!isOpen);
  };

    
    return (
        <>
            <div className='navbar'>
                <div className='navs'>
                    <div className='logo'>
                        <img src={netflixlogo} alt="logos" />
                    </div>

                    <div className='nav2'>

                        <select name="language" id="language" >

                            <option value="english" >English</option>

                            <option value="french">French</option>
                        </select>
<Link to="/getstarted" className="btn">
        Sign In
      </Link>
                        
                    </div>
                </div>
            </div>

            <div className='main'>
                <div className='welcome'>
                    <h1>
                        Unlimited movies, TV <br />
                        shows, and more
                    </h1>

                    <p>Starts at US$2.99. Cancel anytime.</p>
                    <p>Ready to watch? Enter your email to create or restart your <br />
                        <br /> membership.</p>

                    <div className='forms'>
                        <input type="email" name="email" id="email" placeholder='Email address' />
                        <button>Get Started <img src={arrow} alt="" /></button>
                    </div>
                </div>
            </div>


            <div className='films'>
                <div className='cars'>

                    <img src={suid1} alt="" />
                </div>


                <div className='cars'>
                    <img src={suid2} alt="" />
                </div>



                <div className='cars'>
                    <img src={ginya2} alt="" />
                </div>


                <div className='cars'>
                    <img src={ginya} alt="" />
                </div>


                <div className='cars'>
                    <img src={giny3} alt="" />
                </div>
            </div>

<div className='all'>
            <div className='more'>

                <h1>More Reasons to Join</h1>
                <div className='tv'>
                    <h1>Enjoy on your TV</h1>
                    <p>Watch on Smart TVs, Playstation, Xbox, Chromecast, Apple TV, Blu-ray players, and more.</p>
                    <img src={tv} alt="" />


                </div>


                <div className='tv'>
                    <h1>Download your shows to watch offline</h1>
                    <p>Save your favorites easily and always have something to watch.</p>
                    <img src={dounicon} alt="" />


                </div>


                <div className='tv'>
                    <h1>Watch everywhere</h1>
                    <p>Stream unlimited movies and TV shows on your phone, tablet, laptop, and TV.</p>
                    <img src={starticon} alt="" />


                </div>



                <div className='tv'>
                    <h1>Create profiles for kids</h1>
                    <p>Send kids on adventures with their favorite characters in a space made just for them —  <br />
                        free with your membership.</p>
                    <img src={agapupe} alt="" />


                </div>
            </div>

            <div className='asked'>
    
               <Asked/>
            </div>

            </div>


        </>
    )
}

export default Navbar
