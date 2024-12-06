import { React, useEffect, useState } from "react";

import prod4 from "../assets/prod4.png";
import prod5 from "../assets/prod5.png";
import prod2 from "../assets/prod2.webp";
import prod3 from "../assets/prod3.png";
import { Link } from "react-router-dom"; // Import Link
import ProductGroup from "./ProductGroup";


const HomeProduct = () => {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    // Fetch data from API on component mount
    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const response = await fetch("https://fakestoreapi.com/products"); // Replace with your API URL
                const data = await response.json();
                setProducts(data); // Store data in state
                setLoading(false);
            } catch (error) {
                setError("Error fetching data");
                setLoading(false);
            }
        };

        fetchProducts(); // Trigger the fetch function
    }, []); // Empty dependency array means this runs once when the component mounts

    if (loading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>{error}</div>;
    }
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
