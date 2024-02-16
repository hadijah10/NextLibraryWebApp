import React from 'react'
import Image from 'next/image'

function page() {
  return (
    <section className='w-screen mt-12'>
        <div className='flex  justify-start flex-col gap-6 items-center'>
            <h5 className='font-bold text-4xl'>Activities</h5>
            <p className='text-[12px] md:text-[20px] uppercase font-light font-cursive text-center'>Eduhub Institute of Technology</p>
            <p className='w-3/5 text-center text-md md:text-2xl'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente rerum debitis necessitatibus! Odit excepturi, minus tempore nostrum accusantium quis molestiae error deleniti! Recusandae maxime id soluta minima ab ea reiciendis.</p>
        <div className='flex flex-col md:flex-row justify-center items-center gap-6'>
            <img className='w-3/4 md:w-1/4 shadow-lg hover:shadow-2xl rounded-md'
            src="https://cdn.pixabay.com/photo/2024/01/03/03/21/train-8484518_1280.jpg"
            alt="Img1"
            />
            <img className='w-3/4 md:w-1/4 shadow-lg hover:shadow-2xl rounded-md'
            src="https://cdn.pixabay.com/photo/2024/01/03/03/21/train-8484518_1280.jpg"
            alt="Img2"
            />
            <img className='w-3/4 md:w-1/4 shadow-lg hover:shadow-2xl rounded-md'
            src="https://cdn.pixabay.com/photo/2024/01/03/03/21/train-8484518_1280.jpg"
            alt="Img3"
            />
        </div>
        <button className='border-red-400 py-2 px-1 border 2 rounded-md'>View More</button>
        
       </div>
    </section>
  )
}

export default page