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
                               
                                    <img src="data:image/png;base64,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" className='mt-5 mb-3rem h-[5rem] w-[3rem] mr-5'/>

                                <div class="flex-grow">
                                    <h2 class="text-gray-900 text-lg title-font font-medium mt-5  mb-3">Java with Data Stracture and Algorithms</h2>
                                    <p class="leading-relaxed text-base">In this course I am going to learn 
                                        <ul>
                                            <li>1.Core Java</li>
                                            <li>2.Object Oriented Programing </li>
                                            <li>3.Data stractures and algorithms</li>
                                        </ul>
                                    </p>
                                    <a class="mt-3 bg-blue-500 text-black py-2 px-5 rounded inline-flex items-center" href='./src/assets/java.pdf' target="_blank">
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
