import React from 'react'
import Nav from './Nav'

function Exp() {
    return (
        <>
        <h1 className='mt-[6rem] text-2xl flex justify-center font-bold text-blue-500   '>Experience</h1>
            <section class="text-gray-600 body-font">
                <div class="container px-5 py-10 mx-auto flex flex-col">
                    <div class="lg:w-3/6 mx-auto">
                        <div class="rounded-lg h-32 overflow-hidden">
                            <img alt="content" class="object-cover object-center h-full w-full" src="../src/assets/cloudinfotech.jpg" />
                        </div>
                        <div class="flex flex-col sm:flex-row mt-10">
                            <div class="sm:w-1/3 text-center sm:pr-8 sm:py-8">
                               
                                <div class="flex flex-col items-center text-center justify-center">
                                    <h2 class="font-bold title-font mt-4 text-gray-900 text-lg">Front End Developer & Research Trainee</h2>
                                    <div class="w-12 h-1 bg-indigo-500 rounded mt-2 mb-4"></div>
                                    <span className='font-bold text-black'>Feb,2024 - Present</span>
                                    <p class="text-base">Cloud infotechs Pune, Maharashtra.</p>
                                </div>
                            </div>
                            <div class="sm:w-2/3 sm:pl-8 sm:py-8 sm:border-l border-gray-200 sm:border-t-0 border-t mt-4 pt-4 sm:mt-0  sm:text-left">
                                <p class="leading-relaxed text-lg mb-4">
                                    <ul>
                                        <li> </li>
                                        <li>1.Developed Foundational skills in front-end web development technologies including HTML, CSS, JavaScript, React, Bootstrap, GitHub</li>
                                        <br />
                                        <li>2.Collaborated with senior developers to troubleshoot issues and optimize code for improved performance</li>
                                        <br />
                                        <li>3.Demonstrated adaptability and a willingness to learn by quickly grasping new concepts and technologies</li>
                                        <br />
                                        <li>4.Although no official tasks were assigned, proacticely sought opportunities to contribute and learn within the development enviornment</li> 
                                    </ul>
                                </p>
                                <a class="text-zinc-900 hover:text-sky-400 font-bold inline-flex items-center" href='https://www.linkedin.com/company/cloud-infotechs/?originalSubdomain=in' target="_blank" >Linkedin
                                    <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-4 h-4 ml-2" viewBox="0 0 24 24">
                                        <path d="M5 12h14M12 5l7 7-7 7"></path>
                                    </svg>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Exp
