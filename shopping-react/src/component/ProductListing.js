import React, { useRef } from "react";

import FilterDrawer from "./FilterDrawer";
import ProductGrid from "./ProductGrid";

const ProductListing = () => {
    const filterDrawerRef = useRef(null);
    const toggleFilter = () => {
        if (filterDrawerRef.current) {
            filterDrawerRef.current.toggleFilter();  // Trigger the child's method
        }
    };

    return (
        <div className="container nav-bar-next-item">
            <div className="columns">
                <button id="filterIcon" onClick={toggleFilter} className="button is-primary is-hidden-desktop">
                    <span className="material-icons">filter_list</span>
                </button>
                <FilterDrawer ref={filterDrawerRef} />
                <ProductGrid />
            </div>
        </div>
    );
}

export default ProductListing;