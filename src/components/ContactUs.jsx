import React from 'react'
import Title from './Title'
import assets from '../assets/assets'
import toast from 'react-hot-toast';

const ContactUs = () => {

    const onSubmit = async (event) => {
        event.preventDefault();
        const formData = new FormData(event.target);
        formData.append("access_key", "12ab9df6-2275-487c-9362-e3e6e70510df");

        try {
            const response = await fetch("https://api.web3forms.com/submit", {
                method: "POST",
                body: formData
            });

            const data = await response.json();
            if (data.success) {
                toast.success("Message sent successfully!");
                event.target.reset();
            } else {
                toast.error(data.message || "Something went wrong. Please try again later.");
            }

        }

    
        catch (error) {
            toast.error(error.message || "Something went wrong. Please try again later.");
        }
    }

    return (
        <div id='contact-us' className='flex flex-col items-center gap-7 px-4 sm:px-12 lg:px-24 xl:px-40 pt-30 text-gray-700 dark:text-white'>
            <Title title='Reach out to us' desc='Get in touch with us for any inquiries or support.' />

            <form onSubmit={onSubmit} className='grid sm:grid-cols-2 gap-3 sm:gap-5 max-w-2xl w-full' >
                <div>
                    <p className='mb-2 text-sm font-medium'>Your name</p>
                    <div className='flex pl-3 rounded-lg border border-gray-300 dark:border-gray-600'>
                        <img src={assets.person_icon} alt="person-icon" />
                        <input name='name' type="text" required placeholder='Enter your name' className='w-full p-3 text-sm outline-none' />
                    </div>
                </div>

                <div>
                    <p className='mb-2 text-sm font-medium'>Email id</p>
                    <div className='flex pl-3 rounded-lg border border-gray-300 dark:border-gray-600'>
                        <img src={assets.email_icon} alt="email-icon" />
                        <input name='email' type="email" required placeholder='Enter your email' className='w-full p-3 text-sm outline-none' />
                    </div>
                </div>

                <div className='sm:col-span-2'>
                    <p className='mb-2 text-sm font-medium'>Your message</p>
                    <textarea name='message' required rows={8} placeholder='Enter your message' className='w-full p-3 text-sm outline-none rounded-lg border border-gray-300 dark:border-gray-600' />
                </div>

                <button type='submit' className='w-max flex gap-2 bg-primary text-white text-sm px-10 py-3 mb-2 rounded-full cursor-pointer hover:scale-103 transition-all'>
                    Submit <img src={assets.arrow_icon} alt="submit-arrow" className='w-4' />
                </button>
            </form >

        </div>
    )
}

export default ContactUs