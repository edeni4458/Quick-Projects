import React, {useState, useEffect} from 'react'
import {Link} from 'react-router-dom';

import axios from 'axios';

const ThirdPract = () => {
    const [data, setData] = useState("");
    

useEffect(() =>{
        axios.get("https://jsonplaceholder.typicode.com/comments")
        .then((response) => {
            setData(response.data[0].email)
            console.log("API called");
        })
}, [])

    return (
        <div>
            <h3>Hey, {data}</h3>
            <button><Link to={'/fourthPract'}>Learn useRef</Link></button>
        </div>
    )
}

export default ThirdPract