import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

export default function ContactUs() {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs
            .sendForm('service_1eo04su', 'template_d2bk10a', form.current, {
                publicKey: '_JgFqaPw9fKBLLwcB',
            })
            .then(
                (result) => {
                    console.log(result.text);
                    alert(result.text,"your email have been sent to aashutosh, thank you !");
                },
                (error) => {
                    console.log('FAILED...', error.text);
                    alert(error.text,"oops might be an error dont worry here is the email you can contact on -> aashutoshpawar123@gmail.com");
                },
            );
    };

    return (
        <div className='  h-full w-full mb-[5rem] '>
            <div class="container px-5 py-24 mx-auto">
                <div class="flex flex-col text-center w-full ">
                    <h1 class="sm:text-3xl text-2xl font-medium title-font text-gray-900">Contact Me</h1>
                   
                    <span className='flex-col md:flex md:justify-between w-full '>
                        <p>HAVE A PROJECT IN MIND ?</p>
                    </span>

                    <p className='text-[10vw] opacity-25 -mb-[5rem]'>LET'S TALK</p>
                </div>
            </div>
            <form ref={form} onSubmit={sendEmail} className='flex flex-col items-center  w-auto ml-5 mr-5'>
                <label>Name</label>
                <input type="text" name="user_name" className='text-center bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-[5rem]  leading-8 transition-colors duration-200 ease-in-out' />
                <label>Email</label>
                <input type="email" name="user_email" className='text-center bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-[5rem]  leading-8 transition-colors duration-200 ease-in-out' />
                <label>Message</label>
                <input type='text' name="message" className='h-[10rem] bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-[5rem]  leading-8 transition-colors duration-200 ease-in-out' />
                <input type="submit" value="Send" className='flex mt-5 mb-[5rem] mx-auto text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg' />
            </form>
        </div>
    );
};