import React from 'react'
import getTrending from './lib/getTrending'
import {books} from './trendingBooks'
import TrendingBook from './components/trendingBook';
import Link from 'next/link';

export default async function TrendingList() {
  /*  const trendingbook1 = await getTrending(books[0]);
    const trendingbook2 = await getTrending(books[1]);
    const trendingbook3 = await getTrending(books[2]);
    const trendingbook4 = await getTrending(books[3]);
    const trendingbook5 = await getTrending(books[4]);
    const trendingbook6 = await getTrending(books[5]);
    const trendingbook7 = await getTrending(books[6]);
    const trendingbook8 = await getTrending(books[7]);
    const trendingbook9 = await getTrending(books[8]);
    const trendingbook10 = await getTrending(books[9]);
    const trendingbook11 = await getTrending(books[10]);
    const trendingbook12 = await getTrending(books[11]);
    const trendingbook13 = await getTrending(books[12]);

    const allBooks = [...trendingbook1,...trendingbook2,...trendingbook3,...trendingbook4,...trendingbook5,...trendingbook6,...trendingbook7,
    ...trendingbook8,...trendingbook9,...trendingbook10,...trendingbook11,...trendingbook12,...trendingbook13]
    console.log(allBooks)*/
    const allBooks = [];
    for (let i in books){
      const book = await getTrending(books[i]);
      allBooks.push(...book);
    }
  return (
    <div className='grid grid-cols-1 mx-2 md:mx-0 gap-6 md:grid-cols-4 md:gap-9 '>
        {allBooks?.map((book,index) => {
        // console.log(typeof(book?.author_key))
              return(                
               <Link href = {{
                pathname: "/bookdetails",
                query: {
                  work:book.key,
                  edition:book.editions.docs[0].key,
                  author_key:book.author_key[0]
                }}} key={index} className='h-47 drop-shadow-2xl flex justify-center place-items-center bg-slate-60 rounded-md'>
                  <TrendingBook imageId={book.cover_i} author_name={book.author_name[0]} title={book.title}/>
               </Link>

            )
            
        })}
    </div>
  )
}
