import React,{useState} from 'react'

const ShortCircuit= ()=>{

    const [text,setText] = useState("")
    const [isError,setIsError] = useState(false)

    const firstValue = text || 'hello world';
    const secondValue = text && 'hello world';

    return(
        <>
            {/* <h1>{firstValue}</h1>
            <h1>{secondValue}</h1> */}

            <h1>{text || 'john doe'}</h1>
            <button className='btn' onClick={()=>setIsError(!isError)}>toggle error</button>
            {isError && <h1>Error...</h1>}
            {isError ? (<p>there is an error</p>) :(<div>
                <h2>there is no error</h2>
            </div>)}
        </>
    )
}


export default ShortCircuit

             //Conditional rendering is the ability to render different user interfaces if a condition is true or false. 

//In React, it allows us to render different elements or components based on a condition.

//And also it works the same way conditions work in JavaScript. 
