import { useState } from 'react';
import './App.css';

const TrafficLight = () => {
  const [isRedOn, toggleRed] = useState(false);
  const [isYellowOn, toggleYellow] = useState(false);
  const [isGreenOn, toggleGreen] = useState(false);

  const turnRedOn = () => {
    if (isRedOn === false) {
      toggleRed(true);
      toggleYellow(false);
      toggleGreen(false);
    }
    else {
      toggleRed(false);
      toggleYellow(false);
      toggleGreen(false);
    }
  };

  const turnYellowOn = () => {
    if (isYellowOn === false) {
      toggleRed(false);
      toggleYellow(true);
      toggleGreen(false);
    }
    else {
      toggleRed(false);
      toggleYellow(false);
      toggleGreen(false);
    }
  };

  const turnGreenOn = () => {
    if (isGreenOn === false) {
      toggleRed(false);
      toggleYellow(false);
      toggleGreen(true);
    }
    else {
      toggleRed(false);
      toggleYellow(false);
      toggleGreen(false);
    }
  };


  return (
    <div className='global-container'>
      <div className='traffic-light-container'>
        <div className='pipe'>|</div>
        <div className='lights-container'>
          <div className={isRedOn ? 'red-light-on light' : 'red-light light'} onClick={turnRedOn}></div>
          <div className={isYellowOn ? 'yellow-light-on light': 'yellow-light light'} onClick={turnYellowOn}></div>
          <div className={isGreenOn ? 'green-light-on light':'green-light light'} onClick={turnGreenOn}></div>
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
