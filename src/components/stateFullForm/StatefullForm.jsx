import React, { useState } from 'react';

const StatefullForm = () => {
    const [email, setEmail] = useState(null);
    const [password, setPassword] = useState(null);
    const [name, setName] = useState(null);

    const handleSubmit = e => {
        e.preventDefault();
        console.log(name, email, password);
        
        
    }
    const nameChange = e => {
        setName(e.target.value);
    };

    const emailChange = e => {
        setEmail(e.target.value);
    };

    const passwordChange = e => {
        setPassword(e.target.value);
    };



    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input onChange={nameChange} type="text" name='name' />
                <br />
                <br />
                <input onChange={emailChange} type="email" name='email' />
                <br />
                <br />
                <input onChange={passwordChange} type="password" name='password' />
                <br />
                <br />
                <input type="submit" value='Submit' />
            </form>
        </div>
    );
};

export default StatefullForm;