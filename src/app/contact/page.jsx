import React from 'react'
import Hero from '../components/Hero'
import Contact from '../components/Contact'

const contact = ({heading,message}) => {
  return (
    <div>
       <Hero heading="This is my contacts" message="Get in touch" />
       <Contact/>
    </div>
  )
}

export default contact
