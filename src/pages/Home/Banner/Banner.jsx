import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import img1 from './../../../assets/home/01.webp';
import img2 from './../../../assets/home/02.jpeg';
import img3 from './../../../assets/home/03.jpeg';
import img4 from './../../../assets/home/04.jpeg';
import img5 from './../../../assets/home/05.jpeg';

const Banner = () => {
    return (
        <Carousel>
            <div>
                <img src={img1} />
            </div>
            <div>
                <img src={img2} />
            </div>
            <div>
                <img src={img3} />
            </div>
            <div>
                <img src={img4} />
            </div>
            <div>
                <img src={img5} />
            </div>
        </Carousel>
    );
};

export default Banner;