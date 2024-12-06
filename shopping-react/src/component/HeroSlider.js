import React from "react";
import slide1 from "../assets/s1.png";
import slide2 from "../assets/s2.png";
import slide3 from "../assets/s3.png";
import slide4 from "../assets/load.webp";

const HeroSlider = () => {
    const slides = [slide1, slide2, slide3, slide4];

    return (
        <section className="hero is-large is-fullheight-mobile" id="hero-slider">
            <div className="hero-body">
                <div className="container has-text-centered">
                    <h1 className="title" id="slider-title">
                        Slide 1
                    </h1>
                    <h2 className="subtitle" id="slider-subtitle">
                        Welcome to the first slide!
                    </h2>
                    <button className="button is-primary">Next Slide</button>
                </div>
                <div className="slider-images">
                    {slides.map((src, index) => (
                        <img
                            src={src}
                            key={index}
                            className={`slide ${index === 0 ? "active" : ""}`}
                            alt={`Slide ${index + 1}`}
                            loading="lazy"
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default HeroSlider;
