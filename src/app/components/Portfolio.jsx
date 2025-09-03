import React from 'react'
import Image from 'next/image'
const Portfolio = () => {
  return (
    <div className='mx-auto py-16 text-center max-w-[1240px]'>
          <h1 className='font-bold text-2xl p-4'>Travel Photo</h1>
          <div className='grid grid-rows-none md:grid-cols-5 p-4 gap-4'>

            <div className='w-full h-full col-span-2 md:col-span-4 row-span-2'>
               <Image
               width='677'
               height='450'
               layout='responsive'
                alt='/' src="https://media.istockphoto.com/id/1054454402/fr/photo/ensemble-tricot.jpg?s=2048x2048&w=is&k=20&c=MSZRdGwiWgXZdN35mqzGlV4KIx2WjDQ81q6dPykVs6o="/>
            </div>

             <div className='w-full h-full'>
       <Image
               width='215'
               height='217'
               layout='responsive'
                alt='/' src="https://media.istockphoto.com/id/1054454402/fr/photo/ensemble-tricot.jpg?s=2048x2048&w=is&k=20&c=MSZRdGwiWgXZdN35mqzGlV4KIx2WjDQ81q6dPykVs6o="/>
             </div>
   

             <div className='w-full h-full'>
       <Image
               width='215'
               height='217'
               layout='responsive'
                alt='/' src="https://media.istockphoto.com/id/1054454402/fr/photo/ensemble-tricot.jpg?s=2048x2048&w=is&k=20&c=MSZRdGwiWgXZdN35mqzGlV4KIx2WjDQ81q6dPykVs6o="/>
             </div>
   

             <div className='w-full h-full'>
       <Image
               width='215'
               height='217'
               layout='responsive'
                alt='/' src="https://media.istockphoto.com/id/1054454402/fr/photo/ensemble-tricot.jpg?s=2048x2048&w=is&k=20&c=MSZRdGwiWgXZdN35mqzGlV4KIx2WjDQ81q6dPykVs6o="/>
             </div>
             <div className='w-full h-full'>
       <Image
               width='215'
               height='217'
               layout='responsive'
                alt='/' src="https://media.istockphoto.com/id/1054454402/fr/photo/ensemble-tricot.jpg?s=2048x2048&w=is&k=20&c=MSZRdGwiWgXZdN35mqzGlV4KIx2WjDQ81q6dPykVs6o="/>
             </div>
   
          </div>
    </div>
  )
}

export default Portfolio
    