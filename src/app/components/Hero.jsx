import React from 'react'

const Hero = ({heading,message}) => {
  return (
    <>
    <div className='flex items-center justify-center h-screen mb-12 bg-fixed bg-cover custom-image'>
       <div className='z-[2] absolute top-0  left-0 right-0 bottom-0 bg-black/70'>
        {/* overlay  */}
    </div>
    <div  className='p-5 text-white z-[2] ml-[-10] mt-[-10]'> 
        <h2 className='text-5xl  font-bold'> {heading} </h2>
        <p className='text-xl py-5'>  {message} </p>
        <button className='px-8 border py-2'>Book</button>
    </div>
     </div>
    </>
 
  )
}

export default Hero
 