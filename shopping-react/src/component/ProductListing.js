import React from "react";

import FilterDrawer from "./FilterDrawer";
import ProductGrid from "./ProductGrid";

const ProductListing = () => {


    return (
        <div className="container nav-bar-next-item">
            <div className="columns">
                <FilterDrawer />
                <ProductGrid />
            </div>
        </div>
    );
}

export default ProductListing;