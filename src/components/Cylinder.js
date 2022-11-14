import styled from "styled-components";
import CH from "../helpers/cylinderHelper";

function Cylinder({ diameter, offsetCorrection = 4, children, ...restProps }) {
    const isMobile = /Android|iPhone/i.test(navigator.userAgent);
    const faces = !isMobile ? 40 : 25;
    const side = CH.side(diameter, faces);
    const perimeter = CH.perimeter(diameter, faces);
    const innerSide = CH.innerSide(diameter, faces);

    return (
        <Holder {...restProps}>
            <Container width={diameter}>
                {
                    [...Array(faces)].map((v, i) => (
                        <Face
                            key={i}
                            index={i}
                            faces={faces}
                            diameter={diameter}
                            width={side}
                            innerSide={innerSide}
                            offsetCorrection={offsetCorrection}
                        >
                            <FaceContent
                                index={i}
                                perimeter={perimeter}
                                width={side}
                                aria-hidden={i > 0 && "true"}
                            >
                                {children}
                            </FaceContent>
                        </Face>
                    ))
                }
            </Container>
        </Holder>
    );
}

const FaceContent = styled.section.attrs(() => ({ "data-cylinder-face-content": "" }))`
    transform: translateX(${props => props.index * -props.width}px);

    &:first-child {
        width: ${props => props.perimeter}px;
    }
`;

const Face = styled.div.attrs(() => ({ "data-cylinder-face": "" }))`
    position: relative;
    left: calc(50% - ${props => props.width / 2}px);
    width: ${props => props.width}px;
    overflow: hidden;
    transform: 
        translateX(${props => -props.width * props.index}px)
        rotateY(${props => 360 / props.faces * props.index}deg) 
        translateZ(${props => props.innerSide - props.offsetCorrection}px);
`;

const Holder = styled.div`
    transform-style: preserve-3d;
`;

const Container = styled.div`
    min-width: ${props => props.width}px;
    transform-origin: bottom;
    transform-style: preserve-3d;
    display: flex;
    align-items: center;
    justify-content: center;
`;



export default Cylinder;