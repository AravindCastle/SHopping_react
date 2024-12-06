import React from "react";
import cat1 from "../assets/cat1.png";
import cat3 from "../assets/cat3.png";
import cat2 from "../assets/cat2.png";
import cat4 from "../assets/cat4.png";

const Categories = () => {
    const categories = [
        { img: cat1, name: "Category 1" },
        { img: cat2, name: "Category 2" },
        { img: cat3, name: "Category 3" },
        { img: cat4, name: "Category 4" },
    ];

    return (
        <section className="section">
            <div className="is-size-1	is-centered pb-5" style={{ textAlign: "center" }}>Our Category</div>
            <div className="columns is-multiline">
                {categories.map((category, index) => (
                    <div className="column is-one-third" key={index}>
                        <div className="card category-card">
                            <div className="card-image">
                                <figure className="image  is-2by3">
                                    <img src={category.img} alt={category.name} />
                                </figure>
                            </div>
                            <div className="card-overlay">
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section >
    );
};


export default Categories;
