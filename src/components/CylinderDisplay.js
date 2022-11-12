import { Children } from "react";
import styled, { keyframes } from "styled-components";
import Cylinder from "./Cylinder";

function CylinderDisplay({ diameters, children }) {
    const childrenList = Children.toArray(children);

    console.log(childrenList)
    return (
        <Display>
            <Rotator>
                {childrenList.map((child, i) => {
                    return (
                        <Cylinder key={"cylinder" + i} diameter={diameters[i]}>
                            {child}
                        </Cylinder>
                    )
                })}
            </Rotator>
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

const Rotator = styled.div`
    transform-style: preserve-3d;
    animation: 10s linear 0s infinite;
    animation-name: ${spinAnimation};
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;
const Display = styled.div`
    height: 100%;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    perspective: 800px;
    overflow: hidden;
`;

export default CylinderDisplay;