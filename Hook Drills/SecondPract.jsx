import React, {useReducer} from 'react';
import {Link} from 'react-router-dom';


const SecondPract = () => {
    const reducer = (state, action) => {
        switch (action.type) {
            case "INCREMENT":
                return {count: state.count + 1, showText: state.showText}
            case "toggleShowText":
                return {count: state.count, showText: !state.showText}
                default:
                    return state;
        }
    }

    const [state, dispatch] = useReducer(reducer,
        {count: 0, showText: true})

    return (
        <div>
            <div className="useReducer">
                <h3>{state.count}</h3>
                <button
                    onClick={() => {
                        dispatch({type: "INCREMENT"})
                        dispatch({type: "toggleShowText"})
                    }}>Click here
                </button>
                {state.showText && <h4>Here is a text</h4> }
            </div>
            <button><Link to={'/thirdPract'}>Learn useEffect</Link></button>
        </div>
    )
}

export default SecondPract