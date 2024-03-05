import React from 'react'
import getAuthorDetails from '../lib/getAuthorDetails';
import getEditionDetails from '../lib/getEditionDetails';
import getWorkDetails from '../lib/getWorkDetails';
import Image from 'next/image'

async function BookDetailsPage({searchParams}) {
  const workData = await getWorkDetails(searchParams.work)
  const editionData = await getEditionDetails(searchParams.edition);
  const authorData = await getAuthorDetails(searchParams.author_key);

  return (
   <div className='flex flex-col mx-auto'>
       <div className='flex flex-col md:flex-row md:mt-3 justify-center items-center'>
      <div className='w-4/5 mx-auto md:mx-5 relative md:w-2/5 h-56'>
        <Image src={`https://covers.openlibrary.org/b/id/${editionData.covers[0]}-M.jpg`} alt = "Cover Photo here" fill priority/>
      </div>
      <div className='mx-4 mt-4 md:mx-0'>
          <h2 className='text-xl'>Title : {editionData["title"]}</h2>
          <p className='text-lg'>Author : {authorData?.personal_name}</p>

          <div className='text-md md:text-lg flex flex-row gap-2 flex-wrap justify-start items-center'> Subjects :
          {workData.subjects?.slice(0,6)?.map(
            (topic,index) => (
              <p key={index} className='mr-2 bg-slate-400 p-2 rounded-xl text-white'>{topic}</p>
            )
          )}
          </div>
         <div className='text-lg flex flex-row gap-2 flex-wrap'>{workData.subject_places && <span>Subject Places : </span>}
            {workData.subject_places?.slice(0,5)?.map(
                (place,index) => (
                  <p key={index}>
                  {index==4?(
                    <div>{place}.</div>
                  ):(<div>{place},</div>)}
                  </p>
                )
              )}
         </div>
         <div className='text-lg flex flex-row gap-2 flex-wrap'>
            Publishers :
              {editionData.publishers?.map((data,index) => {
                return (
                  <p key={index}>{data}</p>
                )
              })}
         </div>
         <div className='text-lg flex flex-row gap-2 flex-wrap'>
           {editionData?.publish_places && (
            <>
             Publish Places :
              {editionData.publish_places?.map((data,index) => {
                return (
                  <p key={index}>{data}</p>
                )
              })}
            </>
           )}
         </div>
         <p className='text-lg'>Publish Date : {editionData?.publish_date}</p>
         <p className='text-lg'> <span>Number of pages : </span>{editionData?.number_of_pages}</p>
        <div>
       
        </div>
       
      </div>
     
    </div>
  <div className='mx-3 md:mx-4'>
  {workData.description?.value && (<>
    <h2 className='text-lg'>Book Description</h2>
     <p className='mb-5 md:mb-7'>{workData.description?.value}</p>
   </>
   )}
    {authorData?.bio && (
      <>
         <h3 className='text-lg'>Author Bio</h3>
       <p>{authorData?.bio}</p>
      </>
    )}
  </div>
   </div>
  )
}
export default BookDetailsPage