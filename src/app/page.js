import Image from 'next/image'
import Link from 'next/link';
import { Suspense } from 'react';
import {books} from './trending'
import TrendingList from './trendingList';
export default function Home() {


  return (
    <div className='w-screen flex flex-col md:px-10 mt-2 gap-4 '>
      <div className='max-h-[70vh] mb-7 mx-0 px-4 md:mt-20 flex flex-col md:flex-row flex-wrap  gap-10 justify-between align-center md:gap-20'>
        <div className='md:flex-1 justify-center items-center md:my-10'>
          <h2 className='text-3xl my-4 text-blue-950 md:my-0 pb:12 md:text-left tracking-wide md:tracking-normal md:text-[50px] md:mb-12 font-light'>Online Library</h2>
          <p className='text-gray-500 leading-loose text-wrap mb-10 text-md md:text-[25px] md:mt-[2.5em] md:mb-[4em] w-full'>A digital library, also called an online library, an internet librsry, a digital collection is an online database of digital objects.</p>
          <Link href='/search' className='bg-sky-600  p-3 rounded-md active:text-gray-200 text-white md:text-xl md:my-8 text-md'>Click here to search for a book</Link>
       </div>
        <div className='md:flex-1 h-[20em] md:h-auto relative mx-1 md:mx-6 p-4' >
          <Image src='https://cdn.pixabay.com/photo/2016/08/29/21/54/george-peabody-bucherei-1629308_1280.jpg' fill priority
       className='rounded-md' alt = "Image here" />
        </div>
      </div>
     <Suspense fallback={
     <div><svg className="animate-spin h-5 w-5 mr-3 ..." viewBox="0 0 24 24">
   </svg>
   <p>Loading Trending books</p>
   </div>
    }>
      <p className='text-center text-xl underline underline-offset-8'>Trending</p>
      <TrendingList/>
     </Suspense>
    </div>
  )
}
