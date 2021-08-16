import Header from './Components/Header';
import logo from './logo.svg';
import './App.css';
const name = 'Karl'
const num = 1
const isBool = true


function App() {
  return (
    <div className="App">
      <Header title='Hi'></Header>
      <img src={logo} className="App-logo" alt="logo" />
      <h1>Hello World</h1>
      <h2>Hi {name}</h2>
      <h2>Number {num}</h2>      
      <h2>Condition {isBool ? 'Yes' : 'False' }</h2>
    </div>//Only 1 Parent, all elements must be inside the parent
  );
}

export default App;
