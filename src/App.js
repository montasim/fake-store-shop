import './App.css';
// using bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';
import Menubar from './components/Menubar/Menubar';
import AllProducts from './components/Products/Products';

function App() {
  return (
    <div className="App">
      <Menubar></Menubar>
      <AllProducts></AllProducts>
    </div>
  );
}

export default App;
