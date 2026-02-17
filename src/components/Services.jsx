import React from 'react'
import assets from '../assets/assets';
import Title from './Title';
import ServiceCard from './ServiceCard';

const Services = () => {
    const servicesData = [
  {
    title: 'Advertising',
    description: 'We turn bold ideas into powerful digital solutions that connect, engage, and convert audiences effectively.',
    icon: assets.ads_icon
  },
  {
    title: 'Content Marketing',
    description: 'We help you execute your content strategy with high-quality campaigns that build trust and drive growth.',
    icon: assets.marketing_icon
  },
  {
    title: 'Content Writing',
    description: 'Our skilled writers create compelling content that resonates with your audience and enhances your brand presence.',
    icon: assets.content_icon
  },
  {
    title: 'Social Media Management',
    description: 'We manage and grow your social presence with engaging content, analytics, and targeted strategies.',
    icon: assets.social_icon
  }
];

  return (
    <div id='services' className='relative flex flex-col items-center gap-7 px-4 sm:px-12 lg:px-24 xl:px-40 pt-30 text-gray-700 dark:text-white'>
        <img src={assets.bgImage2} alt="bgimage2" className='absolute -top-110 -left-70 -z-1 dark:hidden' />

        <Title title= 'How can we help ?' desc='From strategy to execution, we craft digital solutions that moveyour business forward'/>

       <div className='flex flex-col md:grid grid-cols-2'>
        {servicesData.map((service, index) => (
            <ServiceCard key={index} service={service} index={index}/>
        ))}
        </div> 
    </div>
  )
}

export default Services