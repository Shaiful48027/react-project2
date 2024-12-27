import { useContext } from "react";
import { AssetContext } from "../grandpa/Grandpa";


const Sister = () => {
    const gift = useContext(AssetContext);
    return (
        <div>
            <h2>Sister</h2>
            <p>have: {gift}</p>
        </div>
    );
};

export default Sister;