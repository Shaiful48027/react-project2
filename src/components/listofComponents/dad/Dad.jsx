
import Brother from '../brother/Brother';
import MySelf from '../mySelf/MySelf';
import Sister from '../sister/Sister';

const Dad = () => {
    return (
        <div>
            <h2>Dad</h2>
            <section className='flex'>
                <MySelf></MySelf>
                <Brother></Brother>
                <Sister></Sister>
            </section>
        </div>
    );
};

export default Dad;