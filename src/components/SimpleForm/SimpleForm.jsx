

const SimpleForm = () => {

    const handleSubmit = e => {
        e.preventDefault();
        console.log('hi');
        console.log(e);
        
        
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input type="text" name="name" />
                <br/>
                <br/>
                <input type="email" name="email" />
                <br/>
                <br/>
                <input type="submit" value="submit"/>
                <br/>
            </form>
        </div>
    );
};

export default SimpleForm;