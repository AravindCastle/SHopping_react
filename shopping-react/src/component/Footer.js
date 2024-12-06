import React from 'react';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="container">
                <div className="columns is-multiline">

                    {/* Explore Section */}
                    <div className="column is-one-quarter">
                        <h3 className="title is-6">Explore</h3>
                        <ul>
                            <li><a href="#">About us</a></li>
                            <li><a href="#">Job Opportunities</a></li>
                            <li><a href="#">FAQs</a></li>
                            <li><a href="#">Contact us</a></li>
                            <li><a href="#">Blogs</a></li>
                            <li><a href="#">Store Locator</a></li>
                        </ul>
                    </div>

                    {/* Policies Section */}
                    <div className="column is-one-quarter">
                        <h3 className="title is-6">Policies & Terms</h3>
                        <ul>
                            <li><a href="#">Privacy Policy</a></li>
                            <li><a href="#">Return & Exchange Policy</a></li>
                            <li><a href="#">Terms of Service</a></li>
                            <li><a href="#">Shipping Policy</a></li>
                            <li><a href="#">Gift Card</a></li>
                        </ul>
                    </div>

                    {/* Reach Us Section */}
                    <div className="column is-one-quarter">
                        <h3 className="title is-6">Reach us at</h3>
                        <p>No - 4/3, 1st floor, Valluvar Salai, Chellammal Nagar, Ramapuram. Chennai, 600089, Tamil Nadu, India</p>
                        <p><strong>Email:</strong> <a href="mailto:contact@cavaathleisure.com">contact@strech.in</a></p>
                        <p><strong>Contact:</strong> +91 9940114240</p>
                        <div className="social-icons">
                            <a href="#" className="icon is-medium">
                                <i className="fab fa-instagram"></i>
                            </a>
                            <a href="#" className="icon is-medium">
                                <i className="fab fa-facebook"></i>
                            </a>
                            <a href="#" className="icon is-medium">
                                <i className="fab fa-youtube"></i>
                            </a>
                            <a href="#" className="icon is-medium">
                                <i className="fab fa-pinterest"></i>
                            </a>
                            <a href="#" className="icon is-medium">
                                <i className="fab fa-linkedin"></i>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
