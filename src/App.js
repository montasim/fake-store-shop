import './App.css';
// using bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';
import Menubar from './components/Menubar/Menubar';

function App() {
  return (
    <div className="App">
      <Menubar></Menubar>
      <h1 className='text-danger'>Hello fake Store Shop</h1>
    </div>
  );
}

export default App;
