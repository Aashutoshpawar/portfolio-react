import React from 'react'
import Exp from './Exp'
import Certifications from './Certifications'
import Project from './Project'




function About() {
    //bg-gradient-to-r from-sky-500 to-indigo-500
    return (
        <>
        <div className='pb-[1rem]  lg:h-screen mt-[2rem] lg:mt-[1rem] lg:flex lg:justify-center lg:flex-col overflow-hidden  '> 
       
            <h1 className='text-2xl font-bold text-blue-500 flex justify-center mt-[5rem] mb-5'>About me</h1>
                <p className=' text-center text-[1.5rem] ml-[2rem] font-bold lg:flex lg:justify-center text-wrap'>
                        A Dedicated Front-End Developer based in Pune,Maharashtra
                </p>
            <div id='aboutcontainer' className='w-screen mt-[2rem]  lg:flex lg:justify-center '>
                <div id='left1' className=' mb-[1rem] flex justify-center '>
                    <img src="./assets/laptopimg.jpg" className='reletive h-[15rem] w-[15rem] rounded-lg lg:h-[25rem] lg:w-[25rem]' />
                </div>
                <div id='right' className=' '>
                    <p className=' ml-5 mr-5 text-[1.5rem] text-slate-600 border-4 rounded-lg p-[1rem]  lg:h-[25rem] lg:w-[40rem]'>
                        As a Junior Front End Developer, I have an impressive arsenal of skills in HTML, CSS, JavaScript, React, Tailwind. I excel in designing and maintaining responsive websites that offer a smooth user experience. My expertise lies in crafting dynamic. engaging interfaces through writing clean and optimized code and utilizing cutting-edge development tools and techniques. I am also a team player who thrives in collaborating with cross-functional teams to produce outstanding web applications
                    </p>
                </div>
            </div>
        </div>
        <hr />
        <Exp/>     
        <hr />
        <Project/>
        <hr />
        <Certifications/>   
        <hr />
        </>
    )
}

export default About
