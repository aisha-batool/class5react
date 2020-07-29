import React, {useContext } from 'react'
import CounterContext from './CounterContext'

const Child = () => {
    
    let outerValue = useContext(CounterContext)
    console.log(outerValue)
    return (
        <div>
            <h2>This is first child using Counter Context!</h2>
            <h2>This is {outerValue[0]}</h2>

            <button onClick={()=>outerValue[1](++outerValue[0])}>Increment Context!</button>
        </div>
    )
}

export default Child