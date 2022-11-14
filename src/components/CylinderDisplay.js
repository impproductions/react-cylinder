import { Children } from "react";
import styled, { keyframes } from "styled-components";
import Cylinder from "./Cylinder";

function CylinderDisplay({ diameters, children }) {
    const childrenList = Children.toArray(children);

    return (
        <Display>
            <Column>
                {childrenList.map((child, i) => {
                    return (
                        <Cylinder key={"cylinder-" + i} diameter={diameters[i]} className={i % 2 == 0 ? "rotate-cw" : "rotate-ccw"}>
                            {child}
                        </Cylinder>
                    )
                })}
            </Column>
        </Display>
    );
}

const spinAnimation = keyframes`
    from {
        transform: rotateY(0deg);
    }
    to {
        transform: rotateY(-360deg);
    }
`;

const Column = styled.div`
    transform-style: preserve-3d;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    .rotate-cw {
        animation: 10s linear 0s infinite reverse;
        animation-name: ${spinAnimation};
    }
    
    .rotate-ccw {
        animation: 10s linear 0s infinite;
        animation-name: ${spinAnimation};
    }
`;
const Display = styled.div`
    height: 100%;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    perspective: 800px;
    overflow: hidden;

`;

export default CylinderDisplay;