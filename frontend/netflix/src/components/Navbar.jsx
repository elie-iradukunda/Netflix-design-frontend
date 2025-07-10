import React from 'react'
import netflixlogo from '../assets/images/netflixlogo.svg'
import language from '../assets/images/A+plus.svg'
import arrow from '../assets/images/righticon.svg'
import '../styles/landingpage.css'

import suid1 from '../assets/images/suid1.webp'
import suid2 from '../assets/images/suid2.webp'
import ginya from '../assets/images/ginya.webp'
import ginya2 from '../assets/images/ginya2.webp'
import giny3 from '../assets/images/kaujiz.webp'

const Navbar = () => {
    return (
        <>
            <div className='navbar'>
                <div className='navs'>
                    <div className='logo'>
                        <img src={netflixlogo} alt="logos" />
                    </div>

                    <div className='nav2'>

                        <select name="language" id="language" >

                            <option value="english" > <img src={language} />English</option>

                            <option value="french"> <img src={language} />French</option>
                        </select>

                        <button>Sign In</button>
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

        </>
    )
}

export default Navbar
