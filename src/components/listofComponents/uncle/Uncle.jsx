import Cousin from "../cousin/Cousin";


const Uncle = () => {
    return (
        <div>
            <h2>Uncle</h2>
            <section className="flex">
                <Cousin name={'shipon'}></Cousin>
                <Cousin name={'shona'}></Cousin>
            </section>
            
        </div>
    );
};

export default Uncle;