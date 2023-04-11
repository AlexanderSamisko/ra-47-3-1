import './App.css';
import Stars from './Components/Stars';

function App() {
  return (
    <div className="App">
      <Stars count={3} />
      <hr />
      <Stars count={-1} />
      <hr />
      <Stars count={6} />
      <hr />
      <Stars count={"Я сааам себе и небо и Луна..."} />
    </div>
  );
}

export default App;
