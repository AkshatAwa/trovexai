import React from 'react'
import './Slider.css'
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import i1 from './Frame 1000004606.png'
import i2 from './Frame 1000004623.png'
import i3 from './Frame 1000004624.png'

const CustomSlider = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 900,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
      };
    
      const slides = [
        {
          img: i1,
        },
        {
          img: i2,
        },
        {
            img: i3,
        },
      ];
  return (
    <>
    <div className="shead">
    <div className="contentheading">
        <p className="feature">Features</p>
        <div className="ch1">Create Sales Excellence That <br/>Builds Success</div>
        <div className="ch2">Rise above the ordinary and watch our AI-powered platform groom your sales team into a smart, well-versed,<br/> and confident sales force to ace any real-life sales challenge.</div>
    </div>
    <div className="carousel-containers">
          <Slider {...settings}>
            {slides.map((slide, index) => (
              <div className="carousel-slides" key={index}>
                <div className="suggestionbox2">
                    <img src={slide.img} alt={slide.title} className="carousel-images" />
                </div>
              </div>
            ))}
          </Slider>
        </div>
    </div>
    </>
  )
}

export default CustomSlider
