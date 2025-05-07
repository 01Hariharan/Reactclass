import './App.css';
import Btn from './Btn';

function App() {
  return (
    <div className="App">
      <Btn btnName="all" color="red"></Btn>
      <Btn btnName="music" color="green"></Btn>
      <Btn btnName="video" color="blue"></Btn>
    </div>
  );
}

export default App;
