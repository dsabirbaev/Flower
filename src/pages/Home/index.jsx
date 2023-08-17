
import "./style.scss";

import Intro from "./Intro";
import NewFlower from "../../components/NewFlower";
import Relevant from "../../components/Relevant";

const index = () => {
    return (
        <div>
            <Intro/>
            <NewFlower/>
            <Relevant/>
        </div>
    );
};

export default index;