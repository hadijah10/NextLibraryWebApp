'use client'
import React, { useState } from 'react'
import Link from 'next/link'
import {clsx }from 'clsx';
import {usePathname} from 'next/navigation'

const links = [
  { name: 'Home', href: '/',id:1},
  { name: 'Search', href: '/search',id:2},
  { name: 'About', href: '/about',id:3},
  { name: 'Contact', href: '/contact',id:4}
  ]
function NavBar() {
  const [isClicked,setIsClicked] = useState(false);
  const pathname = usePathname();
  const toggle =() => {
    setIsClicked(prev => !prev);
  }
  return (
    <div>
        <nav className='bg-gray-800  flex justify-between items-center h-20 p-4'>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6 text-white">
  <path strokeLinecap="round" strokeLinejoin="round" d="M4.26 10.147a60.438 60.438 0 0 0-.491 6.347A48.62 48.62 0 0 1 12 20.904a48.62 48.62 0 0 1 8.232-4.41 60.46 60.46 0 0 0-.491-6.347m-15.482 0a50.636 50.636 0 0 0-2.658-.813A59.906 59.906 0 0 1 12 3.493a59.903 59.903 0 0 1 10.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.717 50.717 0 0 1 12 13.489a50.702 50.702 0 0 1 7.74-3.342M6.75 15a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Zm0 0v-3.675A55.378 55.378 0 0 1 12 8.443m-7.007 11.55A5.981 5.981 0 0 0 6.75 15.75v-1.5" />
</svg>
<p className='text-yellow-50 ml-4 font-semibold text-2xl mr-auto'>Eduhub</p>
            <ul className='hidden  md:flex gap-6 list-none text-white font-semibold'>
                {links.map(lnk => (
                <li key={`${lnk.id}`}>
                  <Link href={`${lnk.href}`} className={clsx(
                    'p-2 hover:text-slate-400 hover:rounded-md ',
                    { 
                      'text-cyan-200 border-b-2 text-[15px] border-zinc-300 ': pathname == lnk.href
                    }
                  )}>{lnk.name}</Link>
                </li>))}
            </ul>
            <button className='md:hidden' onClick={toggle}>
            {!isClicked ? (
               <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="text-white w-6 h-6">
               <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
             </svg>
            ):
            (
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className=" text-white w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
            </svg>
            )
            }
            </button>
        
        </nav>
        {isClicked && (
          <div>
               <ul className='flex-col absolute z-10 right-0 w-1/2 px-4 py-1 h-25 gap-1 list-none mt-0.2 rounded-md mr-1 bg-slate-800 text-white font-medium'>
            {links.map(lnk => (
            <li key={lnk.id} className='mt-3 mr-2 p-2 mb-3 w-full active:rounded-sm active:bg-blue-500'>
              <Link href={lnk.href} className='p-2 ' onClick={toggle}>{lnk.name}</Link>
            </li>))}
        </ul>
          </div>
        )}
    </div>
  )
}

export default NavBar