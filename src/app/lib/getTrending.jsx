import React from 'react'
import axios from 'axios';

export default async function getTrending(bookTitle) {
   /*const response = await fetch(`https://openlibrary.org/search.json?title=${bookTitle}&fields=title,author_name,cover_i&limit=1`)
    if(!response.ok){
        throw new Error('Failed to fetch');
    }

  return response.json().docs;*/
  try{
    const res = await axios.get(`https://openlibrary.org/search.json?title=${bookTitle}&fields=title,author_name,cover_i&limit=1&origin=*`);
    return (await res.data.docs)
  }catch(e){
   // throw new Error('Failed to fetch');
   return ([
    {
        "title": "The Psychology of Money",
        "cover_i": 10389354,
        "author_name": [
            "Morgan Housel"
        ]
    }
])
  }
}
