import React, { useEffect } from 'react';
import styled from 'styled-components';
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import Video1 from "../assets/img/1ST_GEN_JIMNY.webm";
import Video2 from "../assets/img/2ND_GEN_JIMNY.webm";
import Video3 from "../assets/img/3RD_GEN_JIMNY.webm";
import Video4 from "../assets/img/4TH_GEN_JIMNY.webm";

export default function Legacy() {

    gsap.registerPlugin(ScrollTrigger);

    useEffect(() => {
        let ctx = gsap.context(() => {

            // const video = document.querySelectorAll("video")
            const video = gsap.utils.toArray("video")

            video.forEach((item) => {
                ScrollTrigger.create({
                    trigger: item,
                    start: "top top",
                    end: "+=100",
                    onEnter: () => {
                        item.currentTime = 0;
                        item.play()
                        document.body.classList.add("noScroll")
                    },
                    once: true
                });
                item.addEventListener('ended', (e) => {
                    document.body.classList.remove("noScroll")
                    window.scrollBy({ top: window.innerHeight, behavior: "smooth" })
                })
            })

        });

        return () => ctx.revert();
    }, [])

    return (
        <Cont id='legacy'>
            <div className="legacyPanel">
                <video playsInline={true} preload="auto" muted="muted">
                    <source src={Video1} type="video/mp4" />
                </video>
                <TextCont>
                    <h6>A STORY PASSED DOWN FOUR GENERATIONS</h6>
                    <p>Unleash the Timeless Spirit: Born in 1970, the Jimny has conquered nature's harshest trials, growing stronger with every challenge. Embark on your own legendary journey and be inspired to create stories that will withstand the test of time.</p>
                </TextCont>
            </div>
            <div className="legacyPanel">
                <video playsInline={true} preload="auto" muted="muted">
                    <source src={Video2} type="video/mp4" />
                </video>
                <TextCont>
                    <h6>A STORY PASSED DOWN FOUR GENERATIONS</h6>
                    <p>Unleash the Timeless Spirit: Born in 1970, the Jimny has conquered nature's harshest trials, growing stronger with every challenge. Embark on your own legendary journey and be inspired to create stories that will withstand the test of time.</p>
                </TextCont>
            </div>
            <div className="legacyPanel">
                <video playsInline={true} preload="auto" muted="muted">
                    <source src={Video3} />
                </video>
                <TextCont>
                    <h6>A STORY PASSED DOWN FOUR GENERATIONS</h6>
                    <p>Unleash the Timeless Spirit: Born in 1970, the Jimny has conquered nature's harshest trials, growing stronger with every challenge. Embark on your own legendary journey and be inspired to create stories that will withstand the test of time.</p>
                </TextCont>
            </div>
            <div className="legacyPanel">
                <video playsInline={true} preload="auto" muted="muted">
                    <source src={Video4} type="video/mp4" />
                </video>
                <TextCont>
                    <h6>A STORY PASSED DOWN FOUR GENERATIONS</h6>
                    <p>Unleash the Timeless Spirit: Born in 1970, the Jimny has conquered nature's harshest trials, growing stronger with every challenge. Embark on your own legendary journey and be inspired to create stories that will withstand the test of time.</p>
                </TextCont>
            </div>
        </Cont>
    )
}

const Cont = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    padding: 50px 0px;

    .legacyPanel {
        position: relative;
        width: 100%;

        &::before {
            content: '';
            position: absolute;
            height: 100%;
            width: 100%;
            z-index: 2;
            background: linear-gradient(90deg, rgba(0,0,0,0.9) 0%, rgba(0,0,0,0) 70%);
            pointer-events: none;
        }

        & > video {
            width: 100vw;
            height: 100vh;
            object-fit: cover;
            position: relative;
        }
    }
`

const TextCont = styled.p`
    position: absolute;
    top: 50%;
    left: 50px;
    transform: translateY(-50%);
    width: 33%;
    max-width: 600px;
    z-index: 5;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 25px;

    h6 {
        font-size: 25px;
        font-weight: 600;
        line-height: 125%;
        color: #fff;
    }

    p {
        font-size: 15px;
        font-weight: 400;
        line-height: 125%;
        color: rgba(255, 255, 255, 0.75);
    }

    @media only screen and (max-width: 1024px) {
        width: 50%;
    }
    @media only screen and (max-width: 800px) {
        width: 75%;
        bottom: 00px;
        left: 50%;
        transform: translateY(0%);
        transform: translateX(-50%);
    }
`