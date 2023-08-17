
import { NavLink } from "react-router-dom";


const Navbar = () => {
    return (
        <nav className="nav flex justify-center h-[80px]">
            <ul className="flex items-center gap-x-[67px] text-[16px]">
                <li className="list-item">
                    <NavLink to="/flowers" className="hover:opacity-[0.8]">Flowers</NavLink>
                </li>
                <li className="list-item">
                    <NavLink to="/plants" className="hover:opacity-[0.8]">Plants</NavLink>
                </li>
                <li className="list-item">
                    <NavLink to="/gifts" className="hover:opacity-[0.8]">Gifts</NavLink>
                </li>
                <li className="list-item">
                    <NavLink to="/discounts" className="hover:opacity-[0.8]">Discounts</NavLink>
                </li>
                <li className="list-item">
                    <NavLink to="/about" className="hover:opacity-[0.8]">About us</NavLink>
                </li>
            </ul>
        </nav>
    );
};

export default Navbar;