import Image from 'next/image'
import React from 'react'
import { FaInstagram } from 'react-icons/fa'

const InstagramImg = ({socialImg} ) => {
  return (
    <div className='relative'>
          <Image src={socialImg} className='w-full h-full'   alt="insta"/>
           {/* overlay  */}
            <div className='group flex justify-center items-center absolute top-0 left-0 right-0 bottom-0 hover:bg-black/70'>
                <p className='hidden text-gray-300 group-hover:block' >
                     <FaInstagram size={30} className='z-10'/></p>
            </div>
    </div>
  )
}

export default InstagramImg
