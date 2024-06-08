import React from 'react'

import { Typewriter } from 'react-simple-typewriter'
import "../css/Home.css";
import About from './About';
import Contact from './Contact';
import { useNavigate } from 'react-router-dom';







function Home() {
    const navigate = useNavigate();
    return (

        <div className='select-none overflow-hidden'>
            <div className='h-full w-full lg:flex mt-[9rem]'>
                <div id='left' className='flex justify-center lg:w-full lg:justify-end lg:pr-[5rem]' >
                    <img src="/assets/myimg.png" className='h-[26rem] w-[19rem] border-2 ' />
                </div>

                <div id='right' className='lg:w-full '>
                    <div className=' flex flex-col '>
                        <h1 className='flex justify-center lg:justify-start text-[3rem] font-extrabold pb-5 text-center '>Front-End React <br />Developer </h1>
                        <div className='ml-[0rem] md:ml:[1rem] lg:flex lg:justify-start '>
                            <p className='flex gap-3 items-center justify-center md:justify-center font-bold'>Tech Stack |
                                <p className='text-orange-500'> <i class="fa-brands fa-html5 fa-2xl"></i> </p>
                                <p className='text-blue-500'> <i class="fa-brands fa-css3-alt fa-2xl"></i> </p>
                                <p className='text-yellow-500'> <i class="fa-brands fa-square-js fa-2xl"></i> </p>
                                <p className='text-sky-500'> <i class="fa-brands fa-react fa-2xl"></i> </p>
                                <p className='text-green-600'> <i class="fa-brands fa-node fa-2xl"></i> </p>
                            </p>

                        </div>
                        <div className='flex justify-center font-bold text-2xl mt-[2rem] mb-[0.5rem] text-blue-500 md:justify-center lg:justify-start lg:ml-[8rem] '>

                            <Typewriter
                                words={['HTML', 'CSS', "TailwindCSS", 'JavaScript', 'ReactJS', 'NodeJS']}
                                loop={5}
                                cursor
                                cursorStyle='_'
                                typeSpeed={70}
                                deleteSpeed={50}
                                delaySpeed={1000}
                            />
                        </div>
                        <span className='flex justify-center pt-[1rem]  flex-col '>
                            <p className='text-center text-2xl lg:-ml-[4rem] md:flex md:justify-start pb-[2rem] pl-[2rem] pr-[3rem] xl:pr-[10rem] flex font-bold w-full lg:justify-start text-wrap'>I am Aashutosh Pawar, A passionate Front-End Developer based in Pune, Maharashtra </p>
                            <span className='flex flex-col items-center md:flex md:flex-row md:gap-11 md:justify-center lg:justify-start   md:mb-[5rem]'>
                                <a href="../src/assets/cv.pdf" target="_blank">
                                <button className='p-[1rem] bg-blue-500 active:bg-indigo-600 text-white w-[10rem] rounded-[5rem] font-bold  mt-[1rem]' >Download Cv</button>

                                </a>
                                <button onClick={()=>navigate("/contact")} className='mb-[1rem] p-[1rem] bg-zinc-900 active:bg-slate-600 text-white w-[10rem] rounded-[5rem] font-bold  mt-[2rem]'>Contact
                                
                                </button>

                            </span>
                        </span>
                    </div>
                </div>



            </div>
            <hr />
            <About />
            
            <Contact />
         

        </div>

    )
}

export default Home
