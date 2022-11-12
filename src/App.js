import Cylinder from './components/Cylinder';
import './App.css';
import styled from 'styled-components';

function App() {
  const faces = 50;
  const diameter = 300;
  const height = 400;
  const angle = 2 * Math.PI / faces;
  const perimeter = (diameter / 2) * Math.sin(angle / 2) * faces * 2;

  return (
    <main className="App">
      <Container3D>
        <Cylinder faces={faces} diameter={diameter} height={height}>
          <div style={{ ["--padding"]: "0.5rem", width: "calc(" + perimeter + "px - 2 * var(--padding))", textAlign: "justify", padding: "var(--padding)", border: "1px solid black", wordWrap: "break-word", background: "rgba(200, 200, 200, 0.7)" }}>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus sagittis ac risus eu porttitor. In tristique arcu in lacus dapibus efficitur. Suspendisse efficitur ex ac tortor iaculis, in faucibus lacus imperdiet. Pellentesque consectetur, libero ut fermentum interdum, orci dui ullamcorper nisl, sed dignissim purus velit sed leo. Cras enim arcu, faucibus ut ipsum ac, aliquet finibus arcu. Fusce at ante tortor. Sed convallis enim libero, a bibendum ante eleifend quis. Praesent massa nibh, interdum in erat at, sollicitudin lobortis lectus. Nunc sodales pellentesque nibh a molestie. Donec pulvinar nisi vitae convallis fermentum. Praesent nibh sem, lobortis quis tincidunt ut, tincidunt eget felis. Nunc elementum nibh ut arcu pulvinar, sed rhoncus felis scelerisque.
            </p>
            <p>
              Curabitur dui mi, dignissim eget turpis sit amet, varius suscipit elit. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Aliquam commodo molestie augue sit amet eleifend. Quisque malesuada justo sed sapien consequat imperdiet. Nunc euismod risus neque, sed faucibus nibh ullamcorper et. Nulla laoreet suscipit libero, in consequat turpis luctus efficitur. Vivamus nec gravida augue, vel fringilla risus. Mauris malesuada enim imperdiet tristique tincidunt. Vivamus sollicitudin at nulla sit amet convallis. Vivamus blandit scelerisque dui a hendrerit.
            </p>
          </div>
        </Cylinder>
      </Container3D>
    </main>
  );
}

const Container3D = styled.div`
  position: absolute;
  top: 10%;
  left: 10%;
  height: 80%;
  width: 80%;
  display: flex;
  align-items: center;
  justify-content: center;
  perspective: 800px;
  border: 1px solid black;
`

export default App;
