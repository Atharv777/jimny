import React from 'react';
import styled from 'styled-components';

export default function Viewer3d() {
    return (
        <div>
            <StyledIFrame src="https://jimny-viewer.netlify.app/" frameborder="0" title="Jimny 3D view"></StyledIFrame>
        </div>
    )
}


const StyledIFrame = styled.iframe`
    width: calc(70vh * 5 / 3);
    height: 70vh;
`