import React from "react";
import styled from "styled-components";

import Viewer3d from "./components/Viewer3d";
import Header from "./components/Header";
import Hero from "./components/Hero";
import BodySpecs from "./components/BodySpecs";
import Legacy from "./components/Legacy";
import Safety from "./components/Safety";
import Varients from "./components/Varients";
// import BodySpecs from "./components/BodySpecsTrash";


function App() {
    return (
        <MainCont>
            {/* <Viewer3d /> */}
            <Header />
            <Hero />
            <BodySpecs />
            <Legacy />
            <Safety />
            <Varients />
        </MainCont>
    );
}

export default App;


const MainCont = styled.div`
    background-color: var(--bg);
    width: 100vw;
    min-height: 100vh;
    font-family: 'Groteska';
`