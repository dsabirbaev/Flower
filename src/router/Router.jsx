

import { Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import Flowers from "../pages/Flowers";
import AllPlants from "../pages/AllPlants";
import Gifts from "../pages/Gifts"
import Discounts from "../pages/Discounts";
import About from "../pages/About";
import NotFound from "../pages/NotFound";

import SingleItem from "../pages/SingleItem";

const Router = () => {
    return (
        <div>
            <Routes>
                <Route path="/"  element={<Home/>}/>
                <Route path="flowers"  element={<Flowers/>}/>
                <Route path="flowers/:id"  element={<SingleItem/>}/>
                
                <Route path="plants"  element={<AllPlants/>}/>
                <Route path="plants/:id"  element={<SingleItem/>}/>
                
                <Route path="gifts"  element={<Gifts/>}/>
                <Route path="discounts"  element={<Discounts/>}/>
                <Route path="about"  element={<About/>}/>
                <Route path="*"  element={<NotFound/>}/>
            </Routes>
        </div>
    );
};

export default Router;