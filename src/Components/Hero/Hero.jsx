import React, { useEffect } from 'react';
import './Hero.css';
import bg from '../../assets/icon.svg';
import HeroBgAnimation from '../HeroBgAnimation/index.jsx';
import main from './Group 1000004518.png';
import styled from 'styled-components';

export const HeroBg = styled.div`
  position: absolute;
  display: flex;
  justify-content: end;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 100%;
  max-width: 1360px;
  overflow: hidden;
  padding: 0 30px;
  top: 50%;
  left: 50%;
  -webkit-transform: translateX(-50%) translateY(-50%);
  transform: translateX(-50%) translateY(-50%);

  @media (max-width: 960px) {
    justify-content: center;
    padding: 0 0px;
  }
`;

export const HeroInnerContainer = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between; /* Increased space between left and right containers */
  align-items: center;
  gap: 50px;
  width: 100%;
  max-width: 1100px;
  margin: auto;
  @media (max-width: 960px) {
    flex-direction: column;
  }
`;

export const HeroLeftContainer = styled.div`
  width: 60%; /* Make the left container bigger */
  order: 1;
  @media (max-width: 960px) {
    order: 2;
    margin-bottom: 30px;
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  @media (max-width: 640px) {
    order: 2;
    margin-bottom: 30px;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;

export const HeroRightContainer = styled.div`
  width: 65%; /* Adjust the width of the right container */
  display: flex;
  order: 2;
  justify-content: end;
  gap: 10px;
  @media (max-width: 960px) {
    order: 1;
    justify-content: center;
    align-items: center;
    margin-bottom: 80px;
  }

  @media (max-width: 640px) {
    margin-bottom: 30px;
  }
`;

export const Img = styled.img`
  position: relative;
  width: 100%; /* Adjust the width */
  height: auto; /* Maintain aspect ratio */
  flex-shrink: 0;

  @media (max-width: 768px) {
    max-width: 400px;
    max-height: 400px;
  }

  @media (max-width: 640px) {
    max-width: 280px;
    max-height: 280px;
  }
`;

const Hero = () => {
  useEffect(() => {
  }, []);

  const handleDownloadResume = () => {
    const url = 'src/components/Hero/AkshatAwasthiResume.pdf';
    const link = document.createElement('a');
    link.href = url;
    link.setAttribute('download', 'Akshat resume.pdf');
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const handlelinkedin = ()=>{
    <link rel="stylesheet" href="https://www.linkedin.com/in/akshatawasthi25" />
  }

  return (
    <>
      <section id="intro">
        <div className="introContent">
          <HeroBg>
            <HeroBgAnimation/>
          </HeroBg>
          <HeroInnerContainer>
            <HeroLeftContainer id="Left">
              <div className="leftcontainer">
                <span className="introText">
                    <span className="introName">Master the art of sales with realistic AI role-play</span>
                </span>
                <p className="intropara">
                Watch your sales soar to new heights with our AI-driven virtual pitch partner. Build confident and skilled sales teams with realistic and immersive learning.
                </p>
                <div className="hiring">
                  <button className='btn'>Book a Demo</button>
                  <button className='btn2'>Watch Demo</button>
                </div>
              </div>
            </HeroLeftContainer>
            <HeroRightContainer id="Right">
              <div className="rightcontainer">
                <Img src={main} alt="hero-image" className="bg"/>
              </div>
            </HeroRightContainer>
          </HeroInnerContainer>
        </div>
      </section>
    </>
  );
}

export default Hero;
