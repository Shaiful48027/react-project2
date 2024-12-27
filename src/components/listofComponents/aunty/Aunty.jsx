import Cousin from "../cousin/Cousin";


const Aunty = () => {
    return (
        <div>
            <h2>Aunty</h2>
            <section className="flex">
                <Cousin name={'rubaiya'}></Cousin>
                <Cousin name={'rubella'}></Cousin>

            </section>
        </div>
    );
};

export default Aunty;