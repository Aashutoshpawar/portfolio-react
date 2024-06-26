import React from 'react'

function Project() {
    return (
        <div className='font-sans select-none mt-[5rem]'>
            <p className='text-2xl flex justify-center text-blue-500'>Projects</p>
            <section class="text-gray-600 body-font">
                <div class="container px-5 py-12 mx-auto">
                    <div class="flex flex-wrap -m-4">
                        <div class="p-4 md:w-1/3">
                            <div class="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
                                <img class="lg:h-48 md:h-36 w-full object-cover object-center" src="https://i.pinimg.com/564x/0f/30/0d/0f300da5c3b0cce0718db1590342f6ee.jpg"   />
                                <div class="p-6">
                                    <h2 class="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">HTML | CSS | JS</h2>
                                    <h1 class="title-font text-lg font-medium text-gray-900 mb-3">Search N Play</h1>
                                    <p class="leading-relaxed mb-3">
                                        About Search n Play: it is a mini project which is inspired by Spotify this project uses the Api of iTunes to fetch the searched music and play it on web browser this project showcases my JavaScript skills</p>
                                    <div class="flex items-center flex-wrap ">
                                        <a class="text-indigo-500 inline-flex items-center md:mb-2 lg:mb-0" href='https://aashutoshpawar.github.io/Search-N-Play/' target="_blank"  >live preview
                                            <svg class="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round">
                                                <path d="M5 12h14"></path>
                                                <path d="M12 5l7 7-7 7"></path>
                                            </svg>
                                        </a>

                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="p-4 md:w-1/3">
                            <div class="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
                                <img class="lg:h-48 md:h-36 w-full object-cover object-center" src="https://i.pinimg.com/564x/94/76/5c/94765cc674ee3688fb3fa6478dc435aa.jpg" alt="blog" />
                                <div class="p-6">
                                    <h2 class="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">HTML | CSS | JS | REACT</h2>
                                    <h1 class="title-font text-lg font-medium text-gray-900 mb-3">Weather App</h1>
                                    <p class="leading-relaxed mb-3">About Weather-App: it is a basic weather app which uses the open weather API to fetch the weather data from it and fetch the Json data of the API to show the result on home screen</p>
                                    <div class="flex items-center flex-wrap">
                                        <a class="text-indigo-500 inline-flex items-center md:mb-2 lg:mb-0" href='https://aashutoshpawar.github.io/WeatherApp/' target="_blank">live preview
                                            <svg class="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round">
                                                <path d="M5 12h14"></path>
                                                <path d="M12 5l7 7-7 7"></path>
                                            </svg>
                                        </a>

                                    </div>
                                </div>
                            </div>
                        </div>


                    </div>
                </div>
            </section>
        </div>
    )
}

export default Project
