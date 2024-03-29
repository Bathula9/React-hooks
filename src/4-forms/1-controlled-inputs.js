import React,{useState} from 'react';

// JS
// const input = document.getELementById('myText');
// const inputValue = input.value;

// React
// value, onChange

const ControlledInputs = () =>{

    const [firstName, setFirstName] = useState('');
    const [email, setEmail] = useState('');
    const [people,setPeople] = useState([]);

    const handleSubmit = (e) =>{
        e.preventDefault();
        if(firstName && email){
            const person = { id: new Date().getTime().toString(), firstName, email };
            console.log(person);

            setPeople((people) =>{
                return [...people, person]
            })
            setFirstName(''); // so that we can directly enter a new name instead of erasing the previous one every time
            setEmail('');
        }
        else{
            console.log('empty value(s)');
        }

    }

    return (
        <article>
            <form className='form' onSubmit={handleSubmit}>
                <div className="form-control">
                    <label htmlFor="firstName">Name :</label>
                    <input type="text" id="firstName" name='name' value = {firstName} onChange={(e) => setFirstName(e.target.value)} />
                </div>
                <div className="form-control">
                    <label htmlFor="email">Email :</label>
                    <input type="text" id="email" name="email" value = {email} onChange={(e) => setEmail(e.target.value)} />
                </div>
                <button type="submit">add person</button>
            </form>
            {people.map((person)=>{
                const {id, firstName, email} = person;
                return (
                    <div className="item" key={id}>
                        <h4>{firstName}</h4>
                        <p>{email}</p>
                    </div>
                )
            })}
        </article>
    )
}

export default ControlledInputs
