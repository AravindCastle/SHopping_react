import React from "react";

const Product = ({ product }) => {
    return (<div className="product-slide column is-one-quarter" >
        <div className="product-mask">
            <div className="bottom-right">Best Sellers</div>
            <div className="top-right">30% Off</div>
            <img src={product.img} alt={product.name} className="product-image" />
        </div>
        <p className="product-name">{product.name}</p>
        <span className="price-detail">
            <span className="og-price">{product.price}</span>
        </span>
        <div className="primary-button">ADD TO CART</div>
    </div>);
}

export default Product;