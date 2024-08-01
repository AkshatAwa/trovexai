import React from 'react'
import './Why.css'
import styled from 'styled-components';
import leftCardIcon from './left.svg';
import rightCardIcon from './right.svg'
import centerCardIcon from './center.svg'
import img1 from './image 1805.png';
import img2 from './image 1803.png';
import img3 from './Frame 1000004618.png';
import company1 from './Group 1000004538.png';
import company2 from './Group 1000004539.png';
import company3 from './onejam_-_Dark-removebg-preview 1.png';
import company4 from './RentoMojo-768x436-removebg-preview 1.png';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const Why = () => {
    const CardContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    perspective: 1000px; 
  `;
  
  const Card = styled.div`
    width: 335px;
    height: 388px;
    background-color: #f0f0f0;
    margin:  5rem 50px;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align:center;
    font-family: 'Montserrat','sans-serif';
    font-size: 20px;
    font-weight: 500;
    border-radius: 40px; 
    color: #333;
    transition: transform 0.6s;
    transform-style: preserve-3d;
    position: relative;

  &:hover {
    transform: rotateY(180deg);
  }
  
    &.left {
      transform: rotate(-10deg);
      margin-top: 3rem;
    background-image: url(${leftCardIcon});
    background-size: cover;
    background-position: center;
        transition: transform 0.6s;
    transform-style: preserve-3d;
    }

    &.left:hover{
        transform: rotateY(180deg);
    }

    &.right {
      transform: rotate(10deg);
    background-image: url(${rightCardIcon});
      margin-top: 3rem;
    }
    &.right:hover{
        transform: rotateY(180deg);
    }
    &.center {
      margin-top: 0;
     background-image: url(${centerCardIcon});
    }
  `;


    const settings = {
      dots: false,
      infinite: true,
      speed: 500,
      slidesToShow: 4,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 2000,
      pauseOnHover: true,
      responsive: [
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
          },
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
          },
        },
      ],
    };

  return (
    <>
      <div className="mainwhy">
        <CardContainer>
          <Card className="left">
            <span>Encourage Mastery</span>
          </Card>
          <Card className="center">
            Gain Actionable <br />
            Insights
          </Card>
          <Card className="right">Inspire Growth</Card>
        </CardContainer>

        <div className="whycontent">
          <h1 className="heading">Why Trovex?</h1>
          <p className="hp">Flip to find out</p>
          <h2 className="hp2">Don’t just take our word for it!</h2>
        </div>
        <div className="flex-container">
          <div className="flex-box">
            <span className="logo">
              <img className="logos" src={img2} alt="Delhi" />
            </span>
            <span className="content">
            "Trovex has revolutionized our sales training. Its AI-powered simulator, realistic scenarios, and personalized feedback have boosted our skills, confidence, and effectiveness. Highly recommended for noticeable performance improvements and increased revenue!"
            </span>

            <div className="commaimage">
                <img src={img3} alt="Image not loaded" />
            </div>
            <div className="namep">
            <p className="name">Avinash Saurabh</p>
            <p className="prof">Serial Enterpreneur</p>
          </div>
          </div>

          <div className="flex-box">
            <span className="logo">
              <img className="logos" src={img1} alt="Mumbai" />
            </span>
            <span className="content">
            "Trovex has transformed our sales team's performance with its AI-based simulator, realistic scenarios, and valuable feedback. Its customizable platform integrates seamlessly, providing game-changing insights and boosting our team's confidence and success."
            </span>

            <div className="commaimage">
                <img src={img3} alt="Image not loaded" />
            </div>
            <div className="namep">
            <p className="name">Amar Krishna</p>
            <p className="prof"> Founder, Matrice.ai</p>
          </div>
          </div>
        </div>
        <div className="carousel-container">
            <div className="cchead">
                <h1 className="cchead1">Trusted by Top brands</h1>
            </div>
            <Slider {...settings} className='display'>
                <div className="company-slide">
                    <img src={company1} alt="Company 1" />
                </div>
                <div className="company-slide">
                    <img src={company2} alt="Company 2" />
                </div>
                <div className="company-slide">
                    <img src={company3} alt="Company 3" />
                </div>
                <div className="company-slide">
                    <img src={company4} alt="Company 3" />
                </div>
            </Slider>
        </div>
      </div>
    </>
  )
}

export default Why
