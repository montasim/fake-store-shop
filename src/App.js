import './App.css';
// using bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';
import Menubar from './components/Menubar/Menubar';

function App() {
  return (
    <div className="App">
      <Menubar country={'Uganda'}></Menubar>
    </div>
  );
}

export default App;
