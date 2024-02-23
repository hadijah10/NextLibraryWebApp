import React from 'react'
import axios from 'axios';

export default async function getAuthorDetails(authorKey) {
    try{
        const response = await axios.get(`https://openlibrary.org/authors/${authorKey}.json`)
        return (await response.data);
    }catch(error){
        return(
            {
                "bio":'None',
                "personal_name":'None',
                "photo":'None'
            }
        )
    }

}
