export default class CylinderHelper {
    static perimeter(diameter, faces) {
        const angle = 2 * Math.PI / faces;
        return (diameter / 2) * Math.sin(angle / 2) * faces * 2;
    }

    static side(diameter, faces) {
        return Math.sin((Math.PI / (faces))) * diameter;
    }

    static innerSide(diameter, faces) {
        return Math.cos(Math.PI / faces) * (diameter / 2);
    }
}