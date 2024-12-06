import React, { useState } from "react";

const FilterDrawer = () => {
    const [filterVisible, setFilterVisible] = useState(false);

    const toggleFilter = () => {
        setFilterVisible(!filterVisible);
    };

    return (
        <div className={`column is-one-quarter filter-drawer ${filterVisible ? "active" : ""}`}>
            <div className="box">
                <div className="filter-top-action">
                    <button className="delete" id="closeFilterDrawer" onClick={toggleFilter}></button>
                    <h3 className="title is-5">Filters</h3>
                </div>
                <div className="filter-content">
                    {/* Filter Sections */}
                    {Array.from({ length: 6 }, (_, index) => (
                        <div className="filter-section" key={index}>
                            <div className="filter-header">
                                <button className="button is-link is-light toggle-section" data-target={`categoryFilter${index}`}>
                                    <span>Category {index + 1}</span>
                                </button>
                            </div>
                            <div id={`categoryFilter${index}`} className="filter-content is-hidden">
                                <ul className="checkbox-list">
                                    {["Shirts", "Pants", "Accessories"].map((item, idx) => (
                                        <li key={idx}>
                                            <label className="checkbox">
                                                <input type="checkbox" value={item} /> {item}
                                            </label>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    ))}
                </div>
                <div className="filter-actions">
                    <button className="button is-primary is-fullwidth">Apply Filters</button>
                </div>
            </div>
        </div>
    );
};

export default FilterDrawer;
