import React from 'react';
import styled from 'styled-components';
import LogoImg from "../assets/img/Logo.svg";

export default function Footer() {

    return (
        <Container data-aos="fade" data-aos-delay="50" data-aos-duration="500" data-aos-offset="0">
            <Text>Designed & Developed by <a target="_blank" href='https://twitter.com/Atharvvarshney7'>Atharv Varshney</a> | Copyright &copy; 2023</Text>
        </Container>
    )
}

const Container = styled.div`
    padding: 20px 50px;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;

    background-color: rgba(255, 255, 255, 0.05);
    border: 1px solid rgba(255, 255, 255, 0.1);
    border-bottom: none;
    border-radius: 20px 20px 0px 0px;
`
const Text = styled.p`
    font-size: 12px;
    font-weight: 200;
    line-height: 125%;
    letter-spacing: 0.07em;
    color: rgba(255, 255, 255, 0.5);
    position: relative;
    transition: all 0.2s linear;

    a{text-decoration: none; color: rgba(255, 255, 255, 0.8);}
`