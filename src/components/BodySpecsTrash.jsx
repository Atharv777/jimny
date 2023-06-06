import React, { useEffect, useRef } from 'react';
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

            const textElements = gsap.utils.toArray(".textelements");
            const imgElements = gsap.utils.toArray(".imgelements");

            const toggleRevealText = (index) => {
                const next = textElements[index];
                const prev = textElements[index - 1];
                next && next.classList.toggle("revealed");
                prev && prev.classList.toggle("revealed");
            };

            const toggleRevealImg = (index) => {
                const next = imgElements[index];
                const prev = imgElements[index - 1];
                next && next.classList.toggle("revealed");
                prev && prev.classList.toggle("revealed");
            };

            gsap.set(imgElements, {
                yPercent: (i) => (i ? 100 : 0)
            });

            const tl = gsap.timeline({
                scrollTrigger: {
                    trigger: ".container",
                    start: "top top",
                    end: () => "+=" + 100 * imgElements.length + "%",
                    markers: true,
                    pin: true,
                    scrub: 1
                }
            });

            imgElements.forEach((panel, index) => {
                if (index) {
                    tl.to(
                        panel,
                        {
                            yPercent: 0,
                            ease: "none"
                        },
                        "+=0.25"
                    );
                    if (textElements[index]) {
                        tl.call(toggleRevealText, [index], "<+=0.125");
                    }
                } else {
                    tl.call(toggleRevealText, [index], 0.125);
                }
            });

            textElements.forEach((panel, index) => {
                if (index) {
                    tl.to(
                        panel,
                        {
                            yPercent: 0,
                            ease: "none"
                        },
                        "+=0.25"
                    );
                    if (imgElements[index]) {
                        tl.call(toggleRevealImg, [index], "<+=0.125");
                    }
                } else {
                    tl.call(toggleRevealImg, [index], 0.125);
                }
            });


        });

        return () => ctx.revert();
    }, [])



    return (
        <Container className='container'>

            <TextContainer>
                <div className='textelements'>
                    <h4>Ladder Frame Chassis</h4>
                    <p>Every Jimny owes its off-roading prowess to the Ladder Frame structure. Now, it’s your turn to put it to the test. Pick your terrain. A thoroughbred off-roader, the torsional rigidity of this chassis instils confidence in the driver to master the toughest of topographies. While the full-width rigid axles in both the front and the rear, keeps you going like a mountain goat on the most impassable roads</p>
                </div>
                <div className='textelements'>
                    <h4>3-link Rigid Axle Suspension With Coil Spring</h4>
                    <p>The long-stroke 3-link suspension is teamed with full-width rigid axles in both the front and rear. This coupled with less variation in ground clearance and high tyre grounding force enables you to conquer the toughest of terrains. With the rigid axle suspension, when an obstacle pushes one wheel up, the axle presses the other down, to increase tyre contact in rough road conditions.</p>
                </div>
                <div className='textelements'>
                    <h4>Engine Performance</h4>
                    <p>When you are setting forth into the unknown, the responsive 1.5L K15B engine powers you through. Built for off-roading, it generates strong torque throughout a wide RPM range for unstoppable performance.</p>
                </div>
            </TextContainer>

            <ImgContainer>
                <div className='imgelements'>
                    <img src={Chassis} alt="" />
                </div>
                <div className='imgelements'>
                    <img src={Suspension} alt="" />
                </div>
                <div className='imgelements'>
                    <img src={Engine} alt="" />
                </div>
            </ImgContainer>
        </Container>
    )
}

const Container = styled.div`
    max-width: 100vw !important;
    height: 100vh;
    position: relative;
    display: flex;
    flex-direction: row;
`
const TextContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    position: relative;
    padding-left: 50px;
    width: 50%;
    height: 100vh;
    box-sizing: border-box;
    
    & > div{
        flex-direction: column;
        justify-content: center;
        gap: 50px;
        width: 100%;
        height: 100%;
        display: none;
    }
    
    h4 {
        text-transform: uppercase;
        font-weight: 500;
        font-size: 35px;
        line-height: 125%;
        color: #FFFFFF
    }
    
    p {
        font-weight: 300;
        font-size: 15px;
        line-height: 125%;
        color: rgba(255, 255, 255, 0.5);
    }
    
    & > div.revealed {
        display: flex;
    }
    & > div.revealed * {
        animation-name: popup;
        animation-duration: 0.5s;
        animation-fill-mode: forwards;
        animation-direction: forwards;
        animation-timing-function: linear;
        animation-iteration-count: 1;
    }
`

const ImgContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding-right: 50px;
    width: 50%;
    height: 100vh;
    position: relative;
    box-sizing: border-box;

    & > div{
        flex-direction: column;
        justify-content: center;
        align-items: center;
        
        height: 100vh;
        width: 100%;
        margin-left: auto;
        position: absolute;
        top: 0;
        left: 0;

        display: none;
    }
    
    & > div > img {
        width: 100%;
        padding-left: 15vw;
        box-sizing: border-box;
    }

    & > div.revealed {
        display: flex;
    }
    & > div.revealed * {
        animation-name: popup;
        animation-duration: 0.5s;
        animation-fill-mode: forwards;
        animation-direction: forwards;
        animation-timing-function: linear;
        animation-iteration-count: 1;
    }
`