import './App.css';
// using bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';
import Menubar from './components/Menubar/Menubar';
import Products from './components/Products/Products';
import { useState } from 'react';

function App() {
  const [count, setCount] = useState(0);
  return (
    <div className="App">
      <Menubar count={count}></Menubar>
      <Products></Products>
    </div>
  );
}

export default App;
