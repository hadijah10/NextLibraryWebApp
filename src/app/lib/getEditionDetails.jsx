import React from 'react'
import axios from 'axios';

export default async function getEditionDetails(editionKey) {
    try{
        const response = await axios.get(`https://openlibrary.org${editionKey}.json`)
        return (await response.data);
    }catch(error){
        return(
            {
                "title":'None',
                "publishers":['None'],
                "publish_date":'None',
                "covers":[12390254],
                "number_of_pages": 256,
                 "publish_places": ["New York,USA"],
                "copyright_date": "2016",
            }
        )
    }
}
