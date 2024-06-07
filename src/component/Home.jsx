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
                    <img src="data:image/jpeg;base64,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" className='h-[26rem] w-[19rem] border-2 ' />
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
