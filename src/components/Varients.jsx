import React, { useState } from 'react';
import styled from 'styled-components';

import Green from '../assets/img/Kinetic-yellow-with-bluish-black-roof.png';
import White from "../assets/img/Pearl-Artic-White.png";
import RedBlue from '../assets/img/Sizzling-Red-With-Bluish-Black-Roof.png';
import Black from "../assets/img/Granite-Grey.png";
import BlueBlack from "../assets/img/Bluish-Black.png";
import Red from '../assets/img/Sizzling-Red.png';
import Blue from "../assets/img/NEXA-Blue.png";


export default function Varients() {

    const ColorArray = [Green, White, RedBlue, Black, BlueBlack, Red, Blue,]
    const [currentInd, setCurrentInd] = useState(0);


    return (
        <Container>
            <TopCont>
                <h3>Color Varients</h3>
                <img src={ColorArray[currentInd]} alt="" />
            </TopCont>
            <BottomCont>
                <div className={currentInd === 0 && "active"} onClick={() => setCurrentInd(0)} title='Kinetic Yellow With Bluish Black Roof'></div>
                <div className={currentInd === 1 && "active"} onClick={() => setCurrentInd(1)} title='Pearl Artic White'></div>
                <div className={currentInd === 2 && "active"} onClick={() => setCurrentInd(2)} title='Sizzling Red With Bluish Black Roof'></div>
                <div className={currentInd === 3 && "active"} onClick={() => setCurrentInd(3)} title='Granite Grey'></div>
                <div className={currentInd === 4 && "active"} onClick={() => setCurrentInd(4)} title='Bluish Black'></div>
                <div className={currentInd === 5 && "active"} onClick={() => setCurrentInd(5)} title='Sizzling Red'></div>
                <div className={currentInd === 6 && "active"} onClick={() => setCurrentInd(6)} title='NEXA Blue'></div>
            </BottomCont>
        </Container>
    )
}

const Container = styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 0px 50px;
    padding-bottom: 50px;
`
const TopCont = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    position: relative;
    height: calc(100vh - 50px);

    h3 {
        font-weight: 700;
        font-size: 30px;
        line-height: 125%;
        color: #FFFFFF;
        margin-bottom: 50px;
    }

    img{
        height: 62.5%;
        object-fit: contain;
        object-position: top;

        @media only screen and (max-width: 600px) {
            height: auto;
            width: 90%;
        }
    }
`
const BottomCont = styled.div`
    height: 50px;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    gap: 20px;

    div {
        width: 30px;
        height: 30px;
        border: 1px solid white;
        border-radius: 100%;
    }
    
    & > div:nth-child(1){background-color: rgb(169, 176, 76)}
    & > div:nth-child(2){background-color: rgb(247, 249, 249)}
    & > div:nth-child(3){background-color: rgb(183, 57, 44)}
    & > div:nth-child(4){background-color: rgb(62, 64, 63)}
    & > div:nth-child(5){background-color: #000}
    & > div:nth-child(6){background-color: rgb(230, 41, 36);}
    & > div:nth-child(7){background-color: rgb(23, 61, 121)}
    
    div.active {
        border: 7px solid #fff;
    }
`