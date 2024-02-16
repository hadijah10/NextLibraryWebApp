import Image from 'next/image';
import axios from 'axios'

async function getData(title) {
   try{
    const res = await axios.get(`https://openlibrary.org/search.json?title=${title}&fields=title,author_name,cover_i&limit=4`)
    return res.data;
   }catch(err){
    throw new Error('Failed to fetch data')
   }
 
  }

  export default async function Search(props){
        const data = await getData(props.title.toLowerCase())
   
    return(
        <div className=' grid grid-cols-1 gap-5 w-3/4 mx-auto md:grid-cols-3 md:gap-6  justify-items-center mt-12 place-items-center  md:w-4/5'>
        {data.docs?.map((rdata,index) => (
            (index < 20) && 
            <div className='rounded-md shadow-lg shadow-gray-500/50 flex h-[22rem] w-full flex-col gap-2 p-2' key ={index}>
                <div className='h-[20rem] w-full relative '>
                    <Image src= {`https://covers.openlibrary.org/b/id/${rdata.cover_i}-M.jpg`} alt="Search Image" className='rounded-md' fill priority/>
                </div>
                <p className='text-center'>{rdata.title}</p>
                {rdata.author_name?.map((element,index) => (
                    <p key = {index} className='text-center'>By {element }</p>
                )
                )}
            </div>
        ))}
        </div>
    );
}


