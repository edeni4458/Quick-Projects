import React, { useRef } from 'react'

const FourthPract = () => {
    const inputRef = useRef(null);
    const inputRefB = useRef(null);

    const onClick = () => {
        inputRef.current.value = "";
        inputRef.current.focus();
    }
    const onClickB = () => {
        inputRefB.current.value = "";
        inputRefB.current.focus();
    }
    return (
        <div>
            <h1>Soliduz</h1>
            <input type="text"  placeholder='Ex...' ref={inputRef}/>
            <button onClick={onClick}>Change Name</button>
            <hr />
            <input type="text" placeholder='Ex...' ref={inputRefB}/>
            <button onClick={onClickB}>Change Name</button>

        </div>
    )
}

export default FourthPract
