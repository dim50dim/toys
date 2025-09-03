import React from 'react'


import InstagramImg from './InstagramImg';
import IdImag1 from "../../app/../../public/images/slider/p_2.jpg"
const Instagram = () => {
  return (
    <div>
         <p>Follow me on Instagram</p>
         <p>@Knitting Toys</p>
           <div>
               <InstagramImg socialImg={IdImag1}/>
           </div>
    </div>
  )
}

export default Instagram
