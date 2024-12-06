import React from "react";
import prod4 from "../assets/prod4.png";
import prod5 from "../assets/prod5.png";
import prod2 from "../assets/prod2.webp";
import prod3 from "../assets/prod3.png";
import { Link } from "react-router-dom"; // Import Link
import ProductGroup from "./ProductGroup";

const products = [
    { name: "Digi Print Multi Color T-shirt", ogPrice: 499, sellPrice: 299, img: prod4 },
    { name: "Digi Print Black", ogPrice: 1499, sellPrice: 899, img: prod5 },
    { name: "Motto Edition 2.0 T-shirt Red", ogPrice: 2499, sellPrice: 999, img: prod2 },
    { name: "Motto Edition 2.0 T-shirt Orange", ogPrice: 2499, sellPrice: 999, img: prod3 },
];

const HomeProduct = () => {
    return (
        <section className="section">
            <div className="is-size-1 is-centered pb-5" style={{ textAlign: "center" }}>
                Our BestSellers
            </div>
            <ProductGroup products={products} />
            <div className="view-all">
                <Link to="/products" className="primary-button"> VIEW ALL</Link>
            </div>
        </section>
    );
};

export default HomeProduct;
