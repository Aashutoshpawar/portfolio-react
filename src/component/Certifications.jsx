import React from 'react'

function Certifications() {
    return (
        <div className='mt-[5rem] h-full'>
            <h1 className='text-2xl text-blue-500 flex justify-center '>CERTIFICATIONS</h1>
            <section class="text-gray-600 body-font">
                <div class="container px-5 py-10 mx-auto flex flex-wrap">
                    <div class="flex flex-wrap -m-4">
                        <div class="p-4 lg:w-1/2 md:w-full">
                            <div class="flex border-2 rounded-lg border-gray-200 border-opacity-50 p-8 pt-0 sm:flex-row flex-col">
                               
                                    <img src="https://i.pinimg.com/564x/7b/25/56/7b2556503cbd9035d51831afd44bf888.jpg" className='mt-5 mb-3rem h-[5rem] w-[3rem] mr-5'/>

                                <div class="flex-grow">
                                    <h2 class="text-gray-900 text-lg title-font font-medium mt-5  mb-3">Java with Data Stracture and Algorithms</h2>
                                    <p class="leading-relaxed text-base">In this course I am going to learn 
                                        <ul>
                                            <li>1.Core Java</li>
                                            <li>2.Object Oriented Programing </li>
                                            <li>3.Data stractures and algorithms</li>
                                        </ul>
                                    </p>
                                    <a class="mt-3 bg-blue-500 text-black py-2 px-5 rounded inline-flex items-center" href='../src/assets/java.pdf' target="_blank">
                                        <button>Certificate</button>
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div class="p-4 lg:w-1/2 md:w-full">
                            <div class="flex border-2 rounded-lg border-gray-200 border-opacity-50 p-8 sm:flex-row flex-col">
                                <div class="w-25 h-10 sm:mr-8 sm:mb-0 mb-4 inline-flex items-center justify-center  bg-indigo-100 text-indigo-500 flex-shrink-0">
                                <img src="https://i.pinimg.com/564x/c4/14/db/c414dbebbd15f8ce3dc6b01749810ec6.jpg" className='mt-11'/>
                                </div>
                                <div class="flex-grow">
                                    <h2 class="text-gray-900 text-lg title-font font-medium mb-3 mt-3">MERN stack Web-Developer</h2>
                                    <p class="leading-relaxed text-base">In this course I am going to learn 
                                        <ul>
                                            <li>1.foundational skills like HTML, CSS, Javascript, Node etc</li>
                                            <li>2.how to create a React app and how to use API </li>
                                            <li>3.Front end and back end will cover in this course </li>
                                        </ul>
                                    </p>
                                    <a class="mt-3 bg-blue-500 text-black py-2 px-5 rounded inline-flex items-center">
                                        <button>Ongoing</button>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Certifications
