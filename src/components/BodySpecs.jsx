import React, { useEffect } from 'react';
import styled from 'styled-components';
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";


import Chassis from "../assets/img/JimnyChassis.png"
import Suspension from "../assets/img/JimnySuspension.png"
import Engine from "../assets/img/JimnyEngine.png"

export default function BodySpecs() {

    gsap.registerPlugin(ScrollTrigger);

    useEffect(() => {
        let ctx = gsap.context(() => {

            gsap.set(".slide1", { opacity: 1, y: 50 });

            gsap.timeline({
                scrollTrigger: {
                    trigger: "#specs",
                    start: "top top",
                    scrub: true,
                    pin: true,
                    end: "bottom+=2000px",
                }
            })
                .to(".slide1", { opacity: 0 })
                .to(".slide2", { opacity: 1, y: 0 })
                .to(".slide2", { opacity: 0, y: -75 })
                .to(".slide3", { opacity: 1, y: 0 })
                .to(".slide3", { opacity: 0, y: -75 });

        });

        return () => ctx.revert();
    }, [])

    return (
        <Container id='specs'>
            <Slide className='slide1'>
                <div>
                    <h4 data-aos="fade-up" data-aos-delay="100">Ladder Frame Chassis</h4>
                    <p data-aos="fade-up" data-aos-delay="300">Every Jimny owes its off-roading prowess to the Ladder Frame structure. Now, it’s your turn to put it to the test. Pick your terrain. A thoroughbred off-roader, the torsional rigidity of this chassis instils confidence in the driver to master the toughest of topographies. While the full-width rigid axles in both the front and the rear, keeps you going like a mountain goat on the most impassable roads</p>
                </div>
                <img draggable={false} src={Chassis} alt="" />
            </Slide>
            <Slide className='slide2'>
                <div>
                    <h4>3-link Rigid Axle Suspension With Coil Spring</h4>
                    <p>The long-stroke 3-link suspension is teamed with full-width rigid axles in both the front and rear. This coupled with less variation in ground clearance and high tyre grounding force enables you to conquer the toughest of terrains. With the rigid axle suspension, when an obstacle pushes one wheel up, the axle presses the other down, to increase tyre contact in rough road conditions.</p>
                </div>
                <img draggable={false} src={Suspension} alt="" />
            </Slide>
            <Slide className='slide3'>
                <div>
                    <h4>Engine Performance</h4>
                    <p>When you are setting forth into the unknown, the responsive 1.5L K15B engine powers you through. Built for off-roading, it generates strong torque throughout a wide RPM range for unstoppable performance.</p>
                </div>
                <img draggable={false} src={Engine} alt="" />
            </Slide>
        </Container>
    )
}

const Container = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    max-width: 1300px;
    margin: 0 auto;
    padding-top: 200px;
    padding-bottom: 100px;
    gap: 150px;

    @media only screen and (max-width: 480px) {
        padding-top: 75px;
    }
    @media only screen and (max-width: 400px) {
        padding-top: 30px;
    }
`
const Slide = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding: 0px 50px;

    position: absolute;
    opacity: 0;
    transform: translateY(75px);
    
    @media only screen and (max-width: 1024px) {
        flex-direction: column;
        gap: 100px;
    }
    @media only screen and (max-width: 400px) {
        padding: 0px 30px;
        gap: 50px;
    }

    & > div{
        width: 50%;
        display: flex;
        flex-direction: column;
        gap: 50px;
        
        @media only screen and (max-width: 1024px) {
            width: 100%;
        }
        @media only screen and (max-width: 400px) {
            gap: 30px;
        }
    }

    h4 {
        text-transform: uppercase;
        font-weight: 500;
        font-size: 35px;
        line-height: 125%;
        color: #FFFFFF;

        @media only screen and (max-width: 400px) {
            font-size: 27px;
        }
    }

    p {
        font-weight: 300;
        font-size: 15px;
        line-height: 125%;
        color: rgba(255, 255, 255, 0.5);

        @media only screen and (max-width: 400px) {
            font-size: 12px;
        }
    }

    img {
        width: 50%;
        padding-left: min(15vw, 300px);
        box-sizing: border-box;
        
        @media only screen and (max-width: 1024px) {
            width: 50%;
            padding-left: 0;
        }
        @media only screen and (max-width: 800px) {
            width: 60%;
            padding-left: 0;
        }
        @media only screen and (max-width: 600px) {
            width: 80%;
            padding-left: 0;
        }
        @media only screen and (max-width: 480px) {
            width: 95%;
            padding-left: 0;
        }
    }
`