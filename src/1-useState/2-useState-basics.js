import React,{useState} from 'react';

// starts use
// components must be uppercase
// invoke inside function/component body
// don't call hook conditionally

const UseStateBasics = () =>{

    const [title,setTitle] = useState('random title');
    // title = random title


    const handleClick = () => {
        if(title ==='random title')
            setTitle('hello people');
            // title = hello people
        else{
            setTitle('random title');
        }
        console.log(title);
    }


    return (
        <React.Fragment>
            <h2>{title}</h2>
            <button type="button" onClick={handleClick}>change title</button>
        </React.Fragment>
    )
}

export default UseStateBasics;
