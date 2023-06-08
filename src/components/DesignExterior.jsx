import React, { useEffect } from 'react';
import styled from 'styled-components';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

import Ext_1 from "../assets/img/ext_1.webp"
import Ext_2 from "../assets/img/ext_2.webp"
import Ext_3 from "../assets/img/ext_3.webp"
import Ext_4 from "../assets/img/ext_4.webp"
import Ext_5 from "../assets/img/ext_5.webp"
import Ext_6 from "../assets/img/ext_6.webp"

export default function DesignExterior() {

    gsap.registerPlugin(ScrollTrigger);

    useEffect(() => {
        let ctx = gsap.context(() => {

            let sections = gsap.utils.toArray(".extImg");

            gsap.to(sections, {
                xPercent: -100 * (sections.length - 1),
                ease: "none",
                scrollTrigger: {
                    trigger: "#designExt",
                    pin: true,
                    scrub: 1,
                    end: "+=3500"
                }
            });

        });

        return () => ctx.revert();
    }, [])

    return (
        <Container id='designExt'>
            <div className="extImg">
                <img src={Ext_1} alt="" />
                <TextCont>
                    <h6>Gunmetal Grey Grille with Chrome Plating</h6>
                    <p>The Jimny’s rich off-roading legacy ensures the adventure goes on. Its iconic vertical slit grille, now a gunmetal shade with 5-slot chrome plated openings, is a testament to the fact.</p>
                </TextCont>
            </div>
            <div className="extImg">
                <img src={Ext_2} alt="" />
                <TextCont>
                    <h6>LED Headlamps with Washer</h6>
                    <p>Sand, mud, dirt, snow - add a new thrilling chapter to every adventure. The Jimny's iconic LED Headlamps come equipped with washers, to give you a clear view of the path ahead.</p>
                </TextCont>
            </div>
            <div className="extImg">
                <img src={Ext_3} alt="" />
                <TextCont>
                    <h6>Practical Drip Rail</h6>
                    <p>Finding the perfect ending to your adventure could take days. The Jimny's drip rail, running along the side and rear edges, lets you install roof carriers flexibly, while keeping your head dry when entering and exiting the vehicle.</p>
                </TextCont>
            </div>
            <div className="extImg">
                <img src={Ext_4} alt="" />
                <TextCont>
                    <h6>Optimized Bumpers</h6>
                    <p>Obstacles turn adventures into hardcore thrillers. Navigate through them, with the Jimny's angled bumper edges that increase clearance at the wheels.</p>
                </TextCont>
            </div>
            <div className="extImg">
                <img src={Ext_5} alt="" />
                <TextCont>
                    <h6>Alloy Wheels</h6>
                    <p>While donning the hat of an off-roader, you want to get in character. The Jimny's bold gun-metal alloys and robust design give it the rugged look, making you feel one with the terrain.</p>
                </TextCont>
            </div>
            <div className="extImg">
                <img src={Ext_6} alt="" />
                <TextCont>
                    <h6>Clamshell Bonnet</h6>
                    <p>Be ready for every twist in the trail. Get a wide-angle view of what lies ahead with the Jimny's upright A-pillars and a flat clamshell bonnet structure.</p>
                </TextCont>
            </div>
        </Container>
    )
}

const Container = styled.div`
    overscroll-behavior: none;
    width: 600%;
    height: 100%;
    display: flex;
    flex-wrap: nowrap;

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