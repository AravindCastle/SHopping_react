import React from "react";
import BreadSlider from "./BreadSlider";
import HeroSlider from "./HeroSlider";
import HomeProduct from "./HomeProduct";
import Categories from "./Category";

const HomePage = () => {
    return (
        <div >
            <BreadSlider />
            <HeroSlider />
            <HomeProduct />
            <Categories />
        </div>
    );
};

export default HomePage;
