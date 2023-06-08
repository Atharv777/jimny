import React from "react";
import styled from "styled-components";

import Viewer3d from "./components/Viewer3d";
import Header from "./components/Header";
import Hero from "./components/Hero";
import BodySpecs from "./components/BodySpecs";
import Legacy from "./components/Legacy";
import Safety from "./components/Safety";
import Varients from "./components/Varients";
import DesignExterior from "./components/DesignExterior";
import DesignInterior from "./components/DesignInterior";
import Footer from "./components/Footer";


function App() {

    return (
        <MainCont>
            <Header />
            <Hero />
            <BodySpecs />
            <Legacy />
            <Viewer3d />
            <DesignExterior />
            <DesignInterior />
            <Safety />
            <Varients />
            <Footer />
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