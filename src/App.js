import styled, { keyframes } from 'styled-components';

import './App.css';
import logo from "./logo.svg";
import CylinderDisplay from './components/CylinderDisplay';


function App() {

  return (
    <main className="App">
      <CylinderDisplay diameters={[400, 250, 500]}>
        <BannerTop>
          <p>
            Typescript is better than Javascript is better than
          </p>
        </BannerTop>
        <ExampleArticle>
          <h1>Heading 1</h1>
          <img src={logo} alt="Logo" height="100" style={{ float: "right", margin: "0" }} />
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus sagittis ac risus eu porttitor. In tristique arcu in lacus dapibus efficitur. Suspendisse efficitur ex ac tortor iaculis, in faucibus lacus imperdiet. Pellentesque consectetur, libero ut fermentum interdum, orci dui ullamcorper nisl, sed dignissim purus velit sed leo. Cras enim arcu, faucibus ut ipsum ac, aliquet finibus arcu. Fusce at ante tortor. Sed convallis enim libero, a bibendum ante eleifend quis. Praesent massa nibh, interdum in erat at, sollicitudin lobortis lectus. Nunc sodales pellentesque nibh a molestie. Donec pulvinar nisi vitae convallis fermentum. Praesent nibh sem, lobortis quis tincidunt ut, tincidunt eget felis. Nunc elementum nibh ut arcu pulvinar, sed rhoncus felis scelerisque.
          </p>
          <h2>Heading 2</h2>
          <p>
            Etiam pellentesque vitae velit eget tristique. Phasellus condimentum ante velit, non porta arcu tristique eu. Nullam a tincidunt ligula. Phasellus sed sapien auctor, luctus elit et, posuere lorem. Aliquam sed quam tellus. Ut sodales aliquet mi, non mattis neque consequat id. Integer id egestas mi, ac sodales risus. Ut tincidunt neque massa, a maximus sapien dapibus eget. Curabitur vitae mollis tellus, vitae viverra magna. Sed sollicitudin, tortor et sodales aliquet, eros purus placerat ex, id consectetur nibh leo eget tortor.
          </p>
          <CodeBox>
            <pre>
              {
                `<h1>Heading 1</h1>
<img src={logo} alt="Logo" height="100" style={{ float: "right", margin: "0" }} />
<p>
  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus sagittis ac risus eu porttitor [...]
</p>
<p>
  Curabitur dui mi, dignissim eget turpis sit amet, varius suscipit elit. Orci varius natoque penatibus [...]
</p>
<h2>Heading 2</h2>
<p>
  Etiam pellentesque vitae velit eget tristique. Phasellus condimentum ante velit, non porta arcu [...]
</p>
`
              }
            </pre>
          </CodeBox>
        </ExampleArticle>
        <BannerBottom>
          <p>
            One Ring to rule them all, One Ring to find them, One Ring to bring them all and in the darkness bind them &nbsp;
          </p>
        </BannerBottom>
      </CylinderDisplay>
    </main>
  );
}

const blinkBannerTop = keyframes`
  from {
    text-shadow: 0 0 6px rgba(0, 170, 0,18);
    border-top: 5px solid rgba(0, 170, 0, 1);
    border-bottom: 5px solid rgba(0, 170, 0, 1);
    color: rgba(0, 170, 0, 1);
  }
  to {
    text-shadow: 0;
    border-top: 5px solid black;
    border-bottom: 5px solid black;
    color: black;
  }
`;

const BannerTop = styled.article`
  font-size: 30pt;
  height: 70px;
  display: flex;
  align-items: center;
  justify-content: stretch;
  text-align: justify;
  text-align-last: justify;
  background-color: rgba(0, 0, 0, 0.8);
  animation: 1s linear 0s infinite alternate;
  animation-name: ${blinkBannerTop};
  font-family: monospace;
`;

const BannerBottom = styled.article`
  display: block;
  background: linear-gradient(0deg, rgba(113,87,0,1) 0%, rgba(232,182,0,1) 42%, rgba(255,224,110,1) 55%, rgba(229,180,0,1) 67%, rgba(113,87,0,1) 100%);

  & p {
    font-size: 18pt;
    text-align: justify;
    text-align-last: justify;
    letter-spacing: 0.2rem;
    font-stretch: expanded;
    font-family: cursive;
    color: rgba(150,0,0,1);
    text-shadow: 0px 0px 3px black;
  }
`;

const ExampleArticle = styled.article`
  width: calc(${(props) => props.width}px - 2rem);
  text-align: justify; 
  border-top: 1px solid rgba(255,255,127, 0.7);
  border-bottom: 1px solid rgba(255,255,127, 0.7);
  padding: 1rem;
  word-wrap: break-word;
  font-size: 7pt;
  background: rgba(50, 50, 50, 0.7);
  color: white;
`;

const CodeBox = styled.article`
  background-color: rgba(220,220,220,0.7);
  color: black;
  border: 1px solid black;
  padding: 1rem;
  margin: 1rem;
`;

export default App;
