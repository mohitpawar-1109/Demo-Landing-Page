import React from 'react'
import assets from '../assets/assets'
import { motion } from 'motion/react'

const Footer = ({ theme }) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className='bg-slate-50 dark:bg-gray-900 pt-10 sm:pt-10 mt-20 sm:mt-40 px-4 sm:px-10 lg:px-24 xl:px-40'>
            <div className='flex justify-between lg:items-center max-lg:flex-col gap-10'>
                <motion.div
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.2 }}

                    className='space-y-5 text-sm text-gray-700 dark:text-gray-400'>
                    <img src={theme === 'dark' ? assets.logo_dark : assets.logo} alt="logo" className='w-32 sm:w-44' />
                    <p className='max-w-md'>From strategy to execution , we craft digital experiences that drive results.</p>
                    <ul className='flex gap-8'>
                        <li><a className='hover:text-primary' href="#hero">Home</a></li>
                        <li><a className='hover:text-primary' href="#services">Services</a></li>
                        <li><a className='hover:text-primary' href="#our-work">Our Work</a></li>
                        <li><a className='hover:text-primary' href="#contact-us">Contact Us</a></li>
                    </ul>
                </motion.div>
                <motion.div
                    initial={{ opacity: 0, x: 30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                    className='text-gray-600 dark:text-gray-400'>
                    <h3 className='font-semibold'>Subscribe to our Newsletter</h3>
                    <p className='text-sm mt-2 mb-6'>The latest updates and news delivered straight to your inbox.</p>
                    <div className='flex gap-2 text-sm'>
                        <input type="email" placeholder="Enter your email" className='border border-gray-300 dark:border-gray-700 rounded-md px-4 py-2 w-full sm:w-80 focus:outline-none focus:ring-2 focus:ring-primary dark:bg-gray-800' />
                        <button className='bg-primary text-white rounded px-6'>Subscribe</button>
                    </div>

                </motion.div>
            </div>
            <hr className='border-gray-300 dark:border-gray-600 my-6' />
            <motion.div

                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className='pb-6 text-sm text-gray-500 flex justify-center sm:justify-between gap-4 flex-wrap'>
                <p>Copyright © 2024 Agecy AI. All rights reserved.</p>
                <div className='flex items-center justify-between gap-4'>
                    <img src={assets.facebook_icon} alt="facebook icon" />
                    <img src={assets.instagram_icon} alt="instagram icon" />
                    <img src={assets.twitter_icon} alt="twitter icon" />
                    <img src={assets.linkedin_icon} alt="linkedin icon" />
                </div>
            </motion.div>
        </motion.div>
    )
}

export default Footer