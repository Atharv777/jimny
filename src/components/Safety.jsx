import React from 'react';
import styled from 'styled-components';

import IMG1 from "../assets/img/HILL_DESCENT_1.png";
import IMG2 from "../assets/img/HILL_DESCENT_2.png";
import IMG3 from "../assets/img/LSD.png";
import IMG4 from "../assets/img/AIRBAGS.png";

export default function Safety() {

    return (
        <Container id='features'>
            <Slide>
                <div>
                    <h6 data-aos="fade-up" data-aos-delay="50">Hill Hold Assist</h6>
                    <p data-aos="fade-up" data-aos-delay="100">Experience the confidence of a mountain goat as you conquer the steepest roads effortlessly. With the Hill Hold Assist feature, the Jimny ensures that you stay in control even on the most challenging inclines. Say goodbye to rolling back and hello to seamless uphill adventures.</p>
                </div>
                <img src={IMG1} alt="Hill Hold Assist" />
            </Slide>
            <Slide>
                <div>
                    <h6 data-aos="fade-up" data-aos-delay="200">Hill Descent Control</h6>
                    <p data-aos="fade-up" data-aos-delay="300">Take charge of your descent with just the push of a button. Whether you're navigating steep slopes or rugged off-road terrains, the Jimny's Hill Descent Control feature empowers you with exceptional control and stability.</p>
                </div>
                <img src={IMG2} alt="Hill Descent Control" />
            </Slide>
            <Slide>
                <div>
                    <h6 data-aos="fade-up" data-aos-delay="200">Brake LSD</h6>
                    <p data-aos="fade-up" data-aos-delay="300">Unleash your inner adventurer and conquer the most stubborn terrains with confidence. Equipped with Brake LSD, the Jimny ensures that power is distributed evenly to all wheels, even in challenging off-road conditions.</p>
                </div>
                <img src={IMG3} alt="Brake LSD" />
            </Slide>
            <Slide>
                <div>
                    <h6 data-aos="fade-up" data-aos-delay="200">6 Airbags</h6>
                    <p data-aos="fade-up" data-aos-delay="300">Safety is paramount, even on the wildest adventures. With the Jimny's advanced safety features, including six airbags strategically placed throughout the cabin, you can embark on your journey with peace of mind.</p>
                </div>
                <img src={IMG4} alt="6 Airbags" />
            </Slide>
        </Container>
    )
}

const Container = styled.div`
    max-width: 1800px;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    padding: 0px 100px;
    gap: 50px;
    
    @media only screen and (max-width: 1024px) {
        padding: 0px 30px;
    }
`
const Slide = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    width: 100%;

    &:nth-child(2), 
    &:nth-child(4) {
        flex-direction: row-reverse;
    }

    div {
        width: 40%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        padding: 0px;
        gap: 25px;

        h6 {
            font-weight: 500;
            font-size: 35px;
            line-height: 125%;
            color: #FFFFFF;
        }

        p {
            font-weight: 300;
            font-size: 15px;
            line-height: 130%;
            text-align: center;
            color: rgba(255, 255, 255, 0.66);
        }

        @media only screen and (max-width: 800px) {
            width: 100%;
        }
    }

    img {
        width: 50%;
        height: 400px;
        border-radius: 20px;
        object-fit: cover;

        @media only screen and (max-width: 800px) {
            width: 100%;
        }
    }

    @media only screen and (max-width: 800px) {
        flex-direction: column-reverse !important;
        gap: 50px;
    }
`