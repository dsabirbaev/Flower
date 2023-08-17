

import "./style.scss";
import { NavLink } from "react-router-dom";
const Card = ({case:{id, title, price, img, path}}) => {
    
    return (
        <NavLink to={`/${path}/${id}`}>
            <div className="card hover:shadow-lg w-[260px] rounded-md cursor-pointer">
                <img src={img} alt={title} />
                <div className="text-center pt-[20px] pb-[38px]">
                        <h2 className="font-['InterMedium'] text-[18px]">{title}</h2>
                        <p className="font-['InterMedium'] text-[14px]">{price}</p>
                </div>
            </div>
        </NavLink>
    );
};

export default Card;