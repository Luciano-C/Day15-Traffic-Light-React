import { useState } from 'react';
import './App.css';

const TrafficLight = () => {
  const [isRedOn, toggleRed] = useState(false);
  const [isYellowOn, toggleYellow] = useState(false);
  const [isGreenOn, toggleGreen] = useState(false);


  const turnLightOn = (color) => {
    if (color === "red" && isRedOn === false) {
      toggleRed(true);
      toggleYellow(false);
      toggleGreen(false);
    }
    else if (color === "yellow" && isYellowOn === false) {
      toggleYellow(true);
      toggleRed(false);
      toggleGreen(false);
    }
    else if (color === "green" && isGreenOn === false) {
      toggleGreen(true);
      toggleRed(false);
      toggleYellow(false);
    }
    else {
      toggleRed(false);
      toggleYellow(false);
      toggleGreen(false);
    }
  }
  


  return (
    <div className='global-container'>
      <div className='traffic-light-container'>
        <div className='pipe'>|</div>
        <div className='lights-container'>
          <div className={isRedOn ? 'red-light-on light' : 'red-light light'} onClick={() => {turnLightOn("red")}}></div>
          <div className={isYellowOn ? 'yellow-light-on light': 'yellow-light light'} onClick={() => {turnLightOn("yellow")}}></div>
          <div className={isGreenOn ? 'green-light-on light':'green-light light'} onClick={() => {turnLightOn("green")}}></div>
        </div>
      </div>
    </div>

  )
}








function App() {
  return (
    <div>
      <TrafficLight />
    </div>
  )
}

export default App;
