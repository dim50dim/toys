import Image from 'next/image'
import React from 'react'

const InstagramImg = ({socialImg} ) => {
  return (
    <div>
          <Image src={socialImg}/>
    </div>
  )
}

export default InstagramImg
