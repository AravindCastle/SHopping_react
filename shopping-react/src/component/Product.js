import React from "react";

const Product = ({ product }) => {
    let imageRatio = "mb-2 image is-square";
    return (<div className="product-slide column is-one-quarter" key={product.id} >
        <div className="product-mask">
            <div className="bottom-right">Best Sellers</div>
            <div className="top-right">30% Off</div>
            <figure className={imageRatio} >
                <img src={product.image} alt={product.title} className="product-image" loading="lazy" />
            </figure>

        </div>
        <p className="product-name">{product.title}</p>

        <span className="price-detail">
            <span className="og-price">{product.price}</span>
            <span className="sell-price">{(product.price * .7).toFixed(2)}</span>
        </span>

        <div className="primary-button">ADD TO CART</div>
    </div >);
}

export default Product;