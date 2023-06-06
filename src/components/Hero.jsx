import React from 'react';
import styled from 'styled-components';

import Logo from '../assets/img/Logo.svg';
import Tagline from '../assets/img/Tagline.svg';
import JimnyCar from '../assets/img/JimnyCarTransparent.png'

export default function Hero() {
    return (
        <Container>
            <TopCont>
                <HeroText data-aos="fade-up" data-aos-delay="1000">
                    <img src={Logo} alt="Jimny" />
                    <img src={Tagline} alt="" />
                </HeroText>
                <HeroImg src={JimnyCar} alt="" />
            </TopCont>
            <BottomCont>
                <div data-aos="fade-up" data-aos-delay="100">
                    <p>1462 cc</p>
                    <p>Engine Capacity</p>
                </div>
                <div data-aos="fade-up" data-aos-delay="150">
                    <p>103.39 bph</p>
                    <p>Max Power</p>
                </div>
                <div data-aos="fade-up" data-aos-delay="200">
                    <p>134.2Nm</p>
                    <p>Max Torque</p>
                </div>
                <div data-aos="fade-up" data-aos-delay="250">
                    <p>AWD</p>
                    <p>Drive type</p>
                </div>
                <div data-aos="fade-up" data-aos-delay="300">
                    <p>Petrol</p>
                    <p>Fuel Type</p>
                </div>
            </BottomCont>
        </Container>
    )
}

const Container = styled.div`
    width: 100%;
    height: calc(120vh - 100px);
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 0px 50px;

    & *{
        max-width: 100% !important;
    }
    
    @media only screen and (max-width: 400px) {
        padding: 0px 30px;
        height: calc(100vh - 100px);
    }
`
const TopCont = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    position: relative;
    height: 80vh;
    gap: 7.5%;

    @media only screen and (max-width: 480px) {
        gap: 0;
    }
    @media only screen and (max-width: 400px) {
        height: 50vh;
    }
`
const HeroText = styled.div`

    position: relative;
    height: 30%;

    & > img:nth-child(1){
        height: 100%;
    }

    &::before{
        content: "";
        position: absolute;
        top: 0px;
        left: 0px;
        width: 100%;
        height: 100%;
        background: url(${Logo});
        background-position: center;
        background-size: contain;
        background-repeat: no-repeat;
        filter: blur(25px) opacity(0.5);
    }

    & > img:nth-child(2) {
        margin: 0px;
        padding: 0px;
        position: absolute;
        top: 85%;
        left: 46%;
        transform: translateX(-50%);
        width: 60%;

        @media only screen and (max-width: 600px) {
            top: 75%;
        }
        @media only screen and (max-width: 480px) {
            top: 70%;
        }
        @media only screen and (max-width: 400px) {
            top: 75%;
        }
    }
`
const HeroImg = styled.img`
    height: 62.5%;
    object-fit: contain;
    object-position: top;
`

const BottomCont = styled.div`
    margin-top: 100px;
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    gap: 75px;

    & > div {
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    & > div > p:nth-child(1) {
        font-weight: 600;
        font-size: 22px;
        line-height: 125%;
        color: rgba(255, 255, 255, 0.9);
    }
    & > div > p:nth-child(2) {
        font-weight: 300;
        font-size: 12px;
        line-height: 125%;
        color: rgba(255, 255, 255, 0.66);
    }

    @media only screen and (max-width: 800px) {
        gap: 33px;
    }
    @media only screen and (max-width: 600px) {
        gap: 15px;
        flex-wrap: wrap;

        & > div > p:nth-child(1) {
            font-size: 18px;
            font-weight: 500;
        }
        & > div > p:nth-child(2) {
            font-size: 10px;
        }
    }
`