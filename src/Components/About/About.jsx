import React from 'react';
import './About.css';
import styled from 'styled-components';
import aboutcontent from './Frame 1000004647.png';
import bgSvg from './new.svg';

export const HeroBg = styled.div`
  display: flex;
  align-items: center;
  top: -2rem;
  right: 0;
  bottom: 0;
  left: 0;
  width: 70%;
  height: 50%;
  background-image: url(${bgSvg});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;

  @media (max-width: 960px) {
    padding: 0 0px;
  }
`;

const Image = styled.img`
  width: 100%;
  height: auto;
`;

const MainBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 80%;
  margin: 20px;
  margin-left: 9rem;
  padding: 20px; 

  @media (max-width: 960px) {
    width: 70%;
  }

  @media (max-width: 640px) {
    width: 90%;
  }
`;

const About = () => {
  return (
    <>
    <HeroBg/>
    <MainBox>
        <Image src={aboutcontent} alt="Image Not Found" />
    </MainBox>
    </>
  );
}

export default About;
