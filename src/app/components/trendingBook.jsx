import Link from 'next/link'
import React from 'react'
import Image from 'next/image'

export default function TrendingBook({imageId,author_name,title}) {
  return (
  
    < div
    className='shadow-lg shadow-gray-500/50 h-full p-3 w-full flex flex-col justify-center 
    '>
     <div className='h-52 w-full relative rounded-md'>
     <Image
        src={`https://covers.openlibrary.org/b/id/${imageId}-M.jpg`}
        alt="Cover Image"
        fill
        priority
        />
       </div>
        <p className='text-center text-md my-1 text-slate-700'>By {author_name}</p>
        <p className='text-center text-lg my-1 text-slate-700'>{title}</p>
     
        </div>
  )
}
