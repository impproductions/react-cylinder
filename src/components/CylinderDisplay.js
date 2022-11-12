import styled, { keyframes } from "styled-components";
import Cylinder from "./Cylinder";

function CylinderDisplay({ faces, diameter, size, children }) {
    return (
        <Display size={size}>
            <Rotator>
                <Cylinder faces={faces} diameter={diameter} height={size[1]}>
                    {children}
                </Cylinder>
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
`;

const Display = styled.div`
  height: ${({size}) => size[1]}px;
  width: ${({size}) => size[0]}px;
  display: flex;
  align-items: center;
  justify-content: center;
  perspective: 800px;
  border: 1px solid black;
  overflow: hidden;
  background: radial-gradient(circle at 10% 20%, rgb(69, 86, 102) 0%, rgb(34, 34, 34) 90%);
`;

export default CylinderDisplay;