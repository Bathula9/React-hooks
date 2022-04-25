import React, { useEffect, useState } from 'react';

// by default runs after every re-render

const UseEffectBasics = () => {

    const [value,setValue]= useState(0);

    useEffect(()=>{
        // if(value>=1)
        console.log('call useeffect');
        document.title = `New Message ${value}`;
    },[value])


    return(
        <>
            <h1>{value}</h1>
            <button className='btn' onClick = {()=>setValue(value+1)}>click me</button>
        </>
    )
}

export default UseEffectBasics;
