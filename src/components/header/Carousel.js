import React from 'react';
import Slider from "react-slick";

const Carousel = () => {

    let settings = {
        dots: true,
        infinite: true,
        speed: 500,
        arrows: false,
        slidesToShow: 1,
        slidesToScroll: 1
    };

    return (
        <Slider {...settings} className="carousel">
            <div className="carousel__item">
                <picture className="carousel__item__img">
                    <img src="./home-ville-slide-01.jpg" alt="Slide" />
                </picture>
            </div>
            <div className="carousel__item">
                <picture className="carousel__item__img">
                <img src="./home-ville-slide-02.jpg" alt="Slide 2" />
                </picture>
            </div>
            <div className="carousel__item">
                <picture className="carousel__item__img">
                <img src="./home-ville-slide-03.jpg" alt="Slide 3" className="" />
                </picture>
            </div>
        </Slider>
    );
};

export default Carousel;