import React from 'react';
import styled from 'styled-components';

export default function Viewer3d() {
    return (
        <Cont>
            <TextCont>
                <h3>360° Interactive Experience</h3>
                <p> Explore the Jimny like never before. Get a comprehensive view of the exterior and interior of the car, allowing you to examine its sleek lines, bold features, and refined details</p>
            </TextCont>
            <StyledIFrame src="https://jimny-viewer.netlify.app/" frameborder="0" title="Jimny 3D view"></StyledIFrame>
        </Cont>
    )
}

const Cont = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding-bottom: 150px;
    gap: 40px;
`
const TextCont = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 10px;

    h3 {
        font-size: 27px;
        font-weight: 500;
        line-height: 125%;
        color: #fff;
        text-align: center;
    }

    p {
        font-size: 12px;
        font-weight: 200;
        line-height: 125%;
        color: rgba(255, 255, 255, 0.5);
        text-align: center;
        max-width: 700px;
        padding: 0px 20px;
    }
`
const StyledIFrame = styled.iframe`
    width: calc(95vh * 5 / 3);
    height: 95vh;

    @media only screen and (max-width: 800px) {
        width: 100vw;
        height: calc(100vw * 3 / 5);
    }
`