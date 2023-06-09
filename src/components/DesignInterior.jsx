import React, { useEffect } from 'react';
import styled from 'styled-components';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

import Int_1 from "../assets/img/int_1.webp"
import Int_2 from "../assets/img/int_2.webp"
import Int_3 from "../assets/img/int_3.webp"
import Int_4 from "../assets/img/int_4.webp"
import Int_5 from "../assets/img/int_5.webp"
import Int_6 from "../assets/img/int_6.webp"

export default function DesignInterior() {

    gsap.registerPlugin(ScrollTrigger);

    useEffect(() => {
        let ctx = gsap.context(() => {

            let sections = gsap.utils.toArray(".intImg");


            gsap.from(sections, {
                xPercent: -500
            })

            gsap.to(sections, {
                xPercent: 0,
                ease: "none",
                scrollTrigger: {
                    trigger: "#designInt",
                    pin: true,
                    scrub: 1,
                    end: "+=3500"
                }
            });

        });

        return () => ctx.revert();
    }, [])

    return (
        <Container id='designInt'>
            <div className="intImg">
                <img src={Int_1} alt="" />
                <TextCont>
                    <h6>Design to Evoke a Sense of Balance</h6>
                    <p>Your quest for work-life balance could leave you perched on a steep curve. The Jimny's dashboard and console design forming a virtual T shape, lets you recognise the vehicle's angle on uneven terrains.</p>
                </TextCont>
            </div>
            <div className="intImg">
                <img src={Int_2} alt="" />
                <TextCont>
                    <h6>Sporty Cabin with Scratch-Resistant Surfaces</h6>
                    <p>Keep your eyes peeled for a bolt from the blue. The Jimny's scratch-resistant interiors absorb reflections and minimise distractions, helping you focus on the road ahead.</p>
                </TextCont>
            </div>
            <div className="intImg">
                <img src={Int_3} alt="" />
                <TextCont>
                    <h6>SmartPlay Pro+</h6>
                    <p>Going off the grid was never more pleasant. With the intuitively designed infrared 9-inch SmartPlay Pro+ or the 7-inch Smart Play Pro, you can create a vibe befitting the terrain.</p>
                </TextCont>
            </div>
            <div className="intImg">
                <img src={Int_4} alt="" />
                <TextCont>
                    <h6>Intuitively Designed Controls</h6>
                    <p>Add a thrilling background score while navigating that hairpin bend. The Jimny's dials and touch-screen controls are designed for easy operation.</p>
                </TextCont>
            </div>
            <div className="intImg">
                <img src={Int_5} alt="" />
                <TextCont>
                    <h6>Professional Utility Kit</h6>
                    <p>Discover a whole new side to you, while exploring the unknown. The Jimny's wide rear opening and accessible tool and luggage box let you pack in all you need to nurture a new persona.</p>
                </TextCont>
            </div>
            <div className="intImg">
                <img src={Int_6} alt="" />
                <TextCont>
                    <h6>Comfortable Seat Design</h6>
                    <p>The adventure will keep you at the edge of your seat - great seats nonetheless. The Jimny's adjustable seating is designed with better shock absorption capacities for your comfort.</p>
                </TextCont>
            </div>
        </Container>
    )
}

const Container = styled.div`
    max-width: 100vw;
    overflow: hidden;
    height: 100vh;
    display: flex;
    flex-wrap: nowrap;
    position: relative;

    & > div {
        position: relative;
        width: 100%;

        &::before {
            content: '';
            position: absolute;
            height: 100%;
            width: 100%;
            z-index: 2;
            background: linear-gradient(0deg, rgba(0, 0, 0, 0.9) 0%, rgba(0, 0, 0, 0) 40%);
            pointer-events: none;
        }

        & > img {
            padding: 20px;
            width: 100vw;
            height: 100vh;
            object-fit: cover;
            object-position: center;
        }
    }
`

const TextCont = styled.div`
    position: absolute;

    width: 50%;
    bottom: 5%;
    left: 50%;
    transform: translateY(0%);
    transform: translateX(-50%);
    
    z-index: 5;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 15px;

    h6 {
        font-size: 25px;
        font-weight: 600;
        line-height: 125%;
        color: #fff;
        text-align: center;
    }

    p {
        font-size: 13px;
        font-weight: 400;
        line-height: 125%;
        color: rgba(255, 255, 255, 0.5);
        text-align: center;
    }

    @media only screen and (max-width: 800px) {
        width: 75%;
    }
`