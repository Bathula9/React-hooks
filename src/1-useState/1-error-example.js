import React from 'react';


const ErrorExample = () =>{

    let title = 'random title';

    const handleClick = ()=>{
        title = 'hello people';
        console.log(title);  //This can be seen in console, but doesn't work on the screen
    }


    return (
        <React.Fragment>   // <> These are called empty fragments
            <h2>{title}</h2>
            <button type="button" onClick={handleClick}>change title</button>
        </React.Fragment>  // </>
    )
}

export default ErrorExample;

//React doesn't let you change the title or number just like that, by creating a function. We have to use useState hook
