import Image from 'next/image';
import React from 'react';

const Portfolio = () => {
  return (
    <div className='max-w-[1240px] mx-auto py-16 text-center'>
      <h1 className='font-bold text-2xl p-4'>Small pieces</h1>
      <div className='grid grid-rows-none md:grid-cols-5 p-4 gap-4'>
        <div className='w-full h-full col-span-2 md:col-span-3 row-span-2'>
          <Image
            src='./images/slider/work_1.jpg'
            alt='/'
            width='215'
            height='217'
               layout='responsive'
            objectFit='cover'
          />
        </div>
        <div className='w-full h-full'>
          <Image
            src='./images/slider/work_2.jpg'
            alt='/'
            width='215'
            height='217'
            layout='responsive'
            objectFit='cover'
          />
        </div>
        <div className='w-full h-full'>
          <Image
            src='./images/slider/work_3.jpg'
            alt='/'
            width='215'
            height='217'
            layout='responsive'
            objectFit='cover'
          />
        </div>
        <div className='w-full h-full'>
          <Image
            src='./images/slider/work_4.jpg'
            alt='/'
            width='215'
            height='217'
            layout='responsive'
            objectFit='cover'
          />
        </div>
        <div className='w-full h-full'>
          <Image
            src='./images/slider/work_5.jpg'
            alt='/'
            width='215'
            height='217'
            layout='responsive'
            objectFit='cover'
          />
        </div>

      <div className='w-full h-full'>
          <Image
            src='./images/slider/work_6.jpg'
            alt='/'
            width='215'
            height='217'
            layout='responsive'
            objectFit='cover'
          />
        </div>

 

              <div className='w-full h-full'>
          <Image
            src='./images/slider/work_8.jpg'
            alt='/'
            width='215'
            height='217'
            layout='responsive'
            objectFit='cover'
          />
        </div>

              <div className='w-full h-full'>
          <Image
            src='./images/slider/work_9.jpg'
            alt='/'
            width='215'
            height='217'
            layout='responsive'
            objectFit='cover'
          />
        </div>

              <div className='w-full h-full'>
          <Image
            src='./images/slider/work_10.jpg'
            alt='/'
            width='215'
            height='217'
            layout='responsive'
            objectFit='cover'
          />
        </div>

      </div>
    </div>
  );
};

export default Portfolio;