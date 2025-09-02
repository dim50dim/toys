 "use client"

import  { useState } from 'react'
import { SliderData } from './SliderData'
import Image from 'next/image'


const Slider = ({slides}) => {
    const [current,setCurrent] = useState(0);
    const length = slides.length;
    const nextSlide = () => {
        setCurrent(current === length - 1 ? 0 : current + 1)
    }
    const prevSlide = () => {
        setCurrent(current === 0 ?length - 1  : current - 1)
    }
  return (
    <div>
         <div id='gallery'>
               <h1>Gallery</h1>
               <div>
                  {SliderData.map((slide,index) => {
                    return (

                   <div  className=''>
                         <Image 
                         style={{objectFit:'cover'}} 
                          key={index} 
                          src={slide.image} 
                          alt="/slide"
                           width='1440'
                            height='600'
                          />
                   </div>
                    )
                  })}
               </div>
         </div>
    </div>
  )
}

export default Slider
