import './App.css';
import Navbar from './Component/Navbar';
import Home from './Component/Home';
// import {Switch ,Route} from 'react-router-dom';
import Products from './Component/Products';
import Product from './Component/Product';
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';

function App() {
  return (
    <>

      <Navbar />
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='Products' element={<Products />}></Route>
        <Route path='Products/:id' element={<Product />}></Route>

      </Routes>


    </>
  );
}

export default App;
