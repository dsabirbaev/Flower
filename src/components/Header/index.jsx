
import "./style.scss";
import HeaderTop from "./HeaderTop";
import Navbar from "./Navbar";
const index = () => {
    return (
        <header className="fixed top-0 left-0 z-30 w-full bg-white">
            <div className="container">
                <HeaderTop/>
                <Navbar/>
            </div>
        </header>
    );
};

export default index;