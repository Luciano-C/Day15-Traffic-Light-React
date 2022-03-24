import './App.css';

const TrafficLight = () => {
  return (
    <div className='global-container'>
      <div className='traffic-light-container'>
        <div className='pipe'>|</div>
        <div className='lights-container'>
          <div className='red-light light'></div>
          <div className='yellow-light light'></div>
          <div className='green-light light'></div>
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
