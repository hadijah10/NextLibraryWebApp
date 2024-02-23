import React from 'react'
import getAuthorDetails from '../lib/getAuthorDetails';
import getEditionDetails from '../lib/getEditionDetails';
import getWorkDetails from '../lib/getWorkDetails';
import Image from 'next/image'

async function BookDetailsPage({searchParams}) {
  const workData = await getWorkDetails(searchParams.work)
  const editionData = await getEditionDetails(searchParams.edition);
  const authorData = await getAuthorDetails(searchParams.author_key);
console.log(typeof(workData.subject_places))
  return (
   <div>
       <div className='flex flex-row'>
      <div className='w-2/5 relative h-48'>
        <Image src={`https://covers.openlibrary.org/b/id/${editionData.covers[0]}-M.jpg`} alt = "Cover Photo here" fill priority/>
      </div>
      <div>
          <p> {editionData["title"]}</p>
          <p>{authorData.personal_name}</p>

          <div>
          {workData.subjects?.slice(0,6)?.map(
            (topic,index) => (
              <p key={index}>{topic}</p>
            )
          )}
          </div>
        <div>
        {workData.subject_places?.slice(0,5)?.map(
            (place,index) => (
              <p key={index}>{place}</p>
            )
          )}
        </div>
      </div>
    </div>
  
   </div>
  )
}
export default BookDetailsPage