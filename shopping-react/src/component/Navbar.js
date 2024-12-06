import React from "react";
import logo from "../assets/logo.png";

const Navbar = () => {
    return (
        <nav className="navbar has-background-white is-fixed-top">
            <div className="navbar-brand">
                <a className="navbar-item is-128x128" href="#">
                    <img src={logo} alt="Product Logo" />
                </a>
                <a
                    role="button"
                    className="navbar-burger burger"
                    aria-label="menu"
                    aria-expanded="false"
                    id="navbar-burger"
                >
                    <span aria-hidden="true"></span>
                    <span aria-hidden="true"></span>
                    <span aria-hidden="true"></span>
                </a>
            </div>
            <div className="navbar-menu">
                <div className="navbar-start">
                    {["Bottom Wear", "Top Wear", "Mens Wear", "Girls Wear"].map((item) => (
                        <div className="navbar-item has-dropdown is-hoverable" key={item}>
                            <a className="navbar-link">{item}</a>
                            <div className="navbar-dropdown">
                                {["Option 1", "Option 2", "Option 3"].map((option) => (
                                    <a className="navbar-item" key={option}>
                                        {option}
                                    </a>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
                <div className="navbar-end">
                    <div className="navbar-item has-text-centered">
                        <span className="material-icons">shopping_cart</span>
                    </div>
                    <div className="navbar-item has-text-centered">
                        <span className="material-icons">person</span>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
