import React from 'react';
import styled from 'styled-components';
import LogoImg from "../assets/img/Logo.svg";

export default function Header() {

    const goTo = (id) => {
        const element = document.getElementById(id);
        element.scrollIntoView({
            block: 'start',
            behavior: 'smooth'
        })
    }

    return (
        <Container>
            <Logo src={LogoImg} alt="Jimny" />

            <Links>
                <Link data-aos="fade-down" data-aos-delay="300" onClick={() => goTo('specs')}>Specifications</Link>
                <Link data-aos="fade-down" data-aos-delay="450" onClick={() => goTo('features')}>Features</Link>
                <Link data-aos="fade-down" data-aos-delay="600">
                    <a href="https://www.nexaexperience.com/e-booking#element_submenu" target='_blank'>E-Book</a>
                </Link>
            </Links>
        </Container>
    )
}

const Container = styled.div`
    padding: 30px 75px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    
    @media only screen and (max-width: 600px) {
        flex-direction: column;
        gap: 30px;
        padding: 20px 75px;
    }
    @media only screen and (max-width: 480px) {
        padding: 20px 30px;
    }
`
const Logo = styled.img`
    height: 35px;
    
    @media only screen and (max-width: 400px) {
        height: 25px;
    }
`
const Links = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    gap: 50px;

    @media only screen and (max-width: 400px) {
        gap: 20px;
    }
`
const Link = styled.p`
    font-size: 12px;
    font-weight: 200;
    line-height: 125%;
    color: rgba(255, 255, 255, 0.5);
    position: relative;
    cursor: pointer;
    transition: all 0.2s linear;
    
    &::after{
        content: "";
        width: 0px;
        height: 1.5px;
        background-color: white;
        position: absolute;
        top: 110%;
        left: 0px;
        transition: all 0.2s linear;
    }
    
    &:hover{
        color: #fff;
    }
    &:hover::after{
        width: 100%;
    }
    
    @media only screen and (max-width: 400px) {
        font-size: 10px;
    }

    a{text-decoration: none; color: rgba(255, 255, 255, 0.5);}
`