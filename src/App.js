import './App.css';
// using bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';
import Menubar from './components/Menubar/Menubar';
import Test from './components/Test/Test';

function App() {
  const count = _ => {
    return <h2>From Count Function</h2>
  }
  return (
    <div className="App">
      <h1>0</h1>
      <Test count={count}></Test>
    </div>
  );
}

export default App;
