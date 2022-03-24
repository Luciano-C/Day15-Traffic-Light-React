import './App.css';

const TrafficLight = () => {
  return (
    <div className='global-container'>
      <div className='traffic-light-container'>
        <div className='pipe'>|</div>
        <div className='lights-container'>
          <div className='red-light light'><i className="fa-solid fa-circle"></i></div>
          <div className='yellow-light light'><i className="fa-solid fa-circle"></i></div>
          <div className='green-light light'><i className="fa-solid fa-circle"></i></div>
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
