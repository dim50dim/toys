import React from 'react'
import { SliderData } from './SliderData'
import Image from 'next/image'
const Slider = ({slides}) => {
  return (
    <div>
         <div id='gallery'>
               <h1>Gallery</h1>
               <div>
                  {SliderData.map((slide,index) => {
                    return (
                        <Image  key={index} src={slide.image} alt="/" width='1440' height='600'objectFit='cover'/>
                    )
                  })}
               </div>
         </div>
    </div>
  )
}

export default Slider
