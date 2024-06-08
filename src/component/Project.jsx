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
                                <img class="lg:h-48 md:h-36 w-full object-cover object-center" src="https://www.google.com/imgres?q=spotify%20logo&imgurl=https%3A%2F%2Fupload.wikimedia.org%2Fwikipedia%2Fcommons%2Fthumb%2F2%2F26%2FSpotify_logo_with_text.svg%2F1200px-Spotify_logo_with_text.svg.png&imgrefurl=https%3A%2F%2Fcommons.wikimedia.org%2Fwiki%2FFile%3ASpotify_logo_with_text.svg&docid=uI-tqBZKehx4cM&tbnid=e-7qbTn4IE-JNM&vet=12ahUKEwiz8fDqpMuGAxXfrlYBHSa6BnQQM3oECGMQAA..i&w=1200&h=361&hcb=2&ved=2ahUKEwiz8fDqpMuGAxXfrlYBHSa6BnQQM3oECGMQAA   " alt="blog" />
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
                                <img class="lg:h-48 md:h-36 w-full object-cover object-center" src="https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.pinterest.com%2Fpin%2F311381761734387299%2F&psig=AOvVaw3PusMAynnT6fQgbnWheqnm&ust=1717911499218000&source=images&cd=vfe&opi=89978449&ved=0CBIQjRxqFwoTCJiXuJely4YDFQAAAAAdAAAAABAE" alt="blog" />
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
