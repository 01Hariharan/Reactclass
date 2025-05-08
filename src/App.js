import './App.css';
import Btn from './Btn';
import LocalState from './LocalState';

function App() {
  return (
    <div className="App">
      {/* <Btn btnName="all" color="red" handleBtn={handleBtn}/>
      <Btn btnName="music" color="green" handleBtn={handleBtn}/>
      <Btn btnName="video" color="blue" handleBtn={handleBtn}/>
      <Btn btnName="shorts" handleBtn={handleBtn} /> */}
      <LocalState />
    </div>
  );
}

export default App;
