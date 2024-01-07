import React, { useState } from 'react'
import {Link} from 'react-router-dom'

const Pract = () => {

    const [counter, setCounter] = useState(1000)
    const [input, setInput] = useState("Soliduz");



    const goUp = () => {
        setCounter(counter + 1)
    };

    const nameChg = (e) => {
        const newValue = e.target.value;
        setInput(newValue)
    }



    return (

        <div>
            <div>
                <h2>{counter}</h2>
                <button onClick={goUp}>GoUp</button>
            </div>
            <div>
                <input onChange={nameChg} placeholder='change name' type="text" />
                <h4>{input}</h4>
                <button><Link to={'/secondPract'}>Learn useReducer</Link></button>
            </div>
        </div>
    )
}

export default Pract