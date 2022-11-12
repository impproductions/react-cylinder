import styled, { keyframes } from "styled-components";

function Cylinder({ faces, height, children, diameter }) {
    const side = Math.sin((Math.PI / (faces))) * diameter;
    console.log(diameter, side);

    return (
        <CylinderContainer w={diameter} h={height}>
            <CylinderRotator>
                {
                    [...Array(faces)].map((v, i) => (
                        <CylinderFace key={i} h={height} w={side} index={i} faces={faces} diameter={diameter} aria-hidden={i > 0 && true}>
                            <FaceContent index={i} w={side}>
                                {children}
                            </FaceContent>
                        </CylinderFace>
                    ))
                }
            </CylinderRotator>
        </CylinderContainer>
    );
}

const FaceContent = styled.div`
    transform: translateX(${({ index, w }) => Number(index) * -w}px);
`;

const CylinderFace = styled.div`
    position: absolute;
    left: calc(50% - ${({ w }) => w / 2}px);
    top: 0;
    width: ${({ w }) => w}px;
    overflow: hidden;
    /* background-color: red; */
    /* border: 1px solid black; */
    /* opacity: 0.7; */
    transform: rotateY(${({ faces, index }) => 360 / faces * index}deg)  translateZ(${({ diameter, faces }) => Math.cos(Math.PI / faces) * (diameter / 2)}px);
`;

const spinAnimation = keyframes`
    from {
        transform: rotateY(0deg);
    }
    to {
        transform: rotateY(360deg);
    }
`;

const CylinderRotator = styled.div`
    transform-style: preserve-3d;
    background-color: green;
    animation: 10s linear 0s infinite;
    animation-name: ${spinAnimation};
`;
const CylinderContainer = styled.div`
    position: absolute;
    top: calc(50% - ${({ h }) => h / 1.5}px);
    /* border: 5px solid green; */
    left: 50%;
    min-width: ${({ w }) => w}px;
    transform-origin: bottom;
    transform-style: preserve-3d;
    transform: rotateX(-20deg) rotateY(0)  translateY(50px) translateX(${({ w }) => -w / 2}px);
`;

export default Cylinder;