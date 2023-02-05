import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import NavBar from './Compoent/NavBar';
import Home from './Compoent/Home';
import About from './Compoent/About';

function App() {
  return (
      <BrowserRouter>
      <NavBar></NavBar>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/about' element={<About></About>}></Route>

      </Routes>
      </BrowserRouter>
    
  );
}

export default App;
