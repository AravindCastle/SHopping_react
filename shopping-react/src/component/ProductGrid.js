import React from "react";
import prod4 from "../assets/prod4.png";
import prod5 from "../assets/prod5.png";
import prod2 from "../assets/prod2.webp";
import prod3 from "../assets/prod3.png";

import Product from "./Product";
const ProductGrid = () => {
    const products = [
        { name: "Digi Print Multi Color T-shirt", ogPrice: 499, sellPrice: 299, img: prod4 },
        { name: "Digi Print Black", ogPrice: 1499, sellPrice: 899, img: prod5 },
        { name: "Motto Edition 2.0 T-shirt Red", ogPrice: 2499, sellPrice: 999, img: prod2 },
        { name: "Motto Edition 2.0 T-shirt Orange", ogPrice: 2499, sellPrice: 999, img: prod3 },
        { name: "Digi Print Black", ogPrice: 1499, sellPrice: 899, img: prod5 },
        { name: "Motto Edition 2.0 T-shirt Red", ogPrice: 2499, sellPrice: 999, img: prod2 },
        { name: "Motto Edition 2.0 T-shirt Orange", ogPrice: 2499, sellPrice: 999, img: prod3 },
    ];

    return (
        <div className="column is-three-quarters">
            <div className="product-container">
                <div className="product-slider columns">
                    {products.map((product, index) => (
                        <Product product={product} ></Product>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default ProductGrid;
