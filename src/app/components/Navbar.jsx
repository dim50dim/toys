import Link from 'next/link'
import React from 'react'
import {AiOutlineMenu,AiOutlineClose} from 'react-icons/ai';
const Navbar = () => {
  return (
    <div>
        <div>
            <Link href='/'/>
             <h1>Knitting Toys</h1>
             <ul>
                <li>
                    <Link href='/'> Home</Link> 
                </li>
                <li>
                    <Link href='/#gallery'> Gallery</Link>
                </li>
                <li>
                    <Link href='/portfolio'> Work</Link>
                </li>
                <li>
                    <Link href='/contact'>Contact </Link>
                </li>
             </ul>

                     {/* MOBILE BUTTON  */}
  <div>
    <AiOutlineMenu size={20} />
  </div>
        </div>
    </div>
  )
}

export default Navbar
  