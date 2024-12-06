import React from "react";
import Product from "./Product";

const ProductGroup = ({ products }) => {


    return (<div className="product-container">
        <div className="product-slider columns">
            {products.map((product, index) => (
                <Product product={product} />
            ))}
        </div>
    </div>);
}

export default ProductGroup;