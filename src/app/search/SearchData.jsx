"use client"
import React, { Suspense, useState } from 'react'
import Search from '../components/Search';


export default function SearchData() {
    const [bookTitle,setBookTitle] = useState('');
    const [isSearching,setIsSearching] = useState(false)
  
    const handleSearch =(e) => {
  
      e.preventDefault();
      setIsSearching(true);
 
    
    }

  return (
    <div className='flex flex-col my-3 ,x-auto justify-center md:items-center'>
        <form onSubmit={handleSearch}> 
        <input type='text' className='border-solid border-2 border-sky-300 mt-5 rounded-xl text-lg ml:2 p-2 pl-4 ml-0 md:w-[25em]' value={bookTitle} onChange={e => setBookTitle(e.target.value)} required placeholder='Enter book title' />
        <button className='bg-sky-600 ml-2 p-3 rounded-md hover:bg-sky-900 focus:none text-white active:text-gray-200'>Search book</button>
        </form>
        {isSearching ?   
        <Suspense fallback={<>Reveiwing search...</>}>
          <Search title={bookTitle} /> 
        </Suspense>
        : <p className='md:mx-10 mx-4 my-7 text-lg md:text-xl'>Nothing to search at the moment</p>}
    </div>
  )
}
