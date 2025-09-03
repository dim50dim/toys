import React from 'react'


import InstagramImg from './InstagramImg';
import IdImag2 from "../../app/../../public/images/slider/p_2.jpg"
import IdImag1 from "../../app/../../public/images/slider/p_1.jpg"
import IdImag3 from "../../app/../../public/images/slider/p_3.jpg"
import IdImag4 from "../../app/../../public/images/slider/p_4.jpg"
import IdImag5 from "../../app/../../public/images/slider/p_5.jpg"
import IdImag6 from "../../app/../../public/images/slider/p_6.jpg"
const Instagram = () => {
  return (
    <div className='max-w-[1240px] mx-auto text-center py-24'>
         <p className='text-2xl font-bold'>Follow me on Instagram</p>
         <p className='pb-4'>@Knitting Toys</p>
           <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-2 p-4'>
               <InstagramImg socialImg={IdImag1}/>
               <InstagramImg socialImg={IdImag2}/>
               <InstagramImg socialImg={IdImag3}/>
               <InstagramImg socialImg={IdImag4}/>
               <InstagramImg socialImg={IdImag5}/>
               <InstagramImg socialImg={IdImag6}/>
 

           </div>
    </div>
  )
}

export default Instagram
