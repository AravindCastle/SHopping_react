import React from "react";
import itemImage from "../assets/item.png";

const BreadSlider = () => {
    const items = Array(8).fill("Jeans"); // Repeat Jeans 8 times
    return (
        <section className="bread-slider is-centered card-item-image">
            <div className="slider-container pb-2 pt-2">
                {items.map((item, index) => (
                    <div className="slider-item" key={index}>
                        <figure className="mb-2 image is-128x128 is-1by1">
                            <img src={itemImage} alt={`Bread Image ${index + 1}`} />
                        </figure>
                        <div className="is-size-7 has-text-centered has-text-weight-semibold">
                            {item}
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default BreadSlider;
