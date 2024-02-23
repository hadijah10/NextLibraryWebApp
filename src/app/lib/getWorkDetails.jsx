import React from 'react'
import axios from 'axios';

export default async function getWorkDetails(workKey) {
    try{
        const response = await axios.get(`https://openlibrary.org/${workKey}.json`)
        return (await response.data);
    }catch(error){
        return(
            {
                "description":'None',
                "subjects":["None"],
                "subject_places":["None"]
            }
        )
    }
}
