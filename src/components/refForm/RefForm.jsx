import React, { Children } from 'react';

const RefForm = ({formTitle, submitBtn, handleSubmit, children }) => {
    
    const handelLocalSubmit = e =>{
        e.preventDefault();
        const data = {
            name: e.target.name.value,
            email: e.target.email.value,
            password: e.target.password.value
        }
        handleSubmit(data)
    }


    return (
        <div>
            {children}
            <form onSubmit={handelLocalSubmit}>
                <input type="text" name="name" />
                <br/>
                <input type="email" name="email" />
                <br/>
                <input type="password" name="password" />
                <br/>
                <input type="submit" value={submitBtn}/>

            </form>
        </div>
    );
};

export default RefForm;