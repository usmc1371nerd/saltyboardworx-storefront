import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/home';
import Cart from './components/cart';
import About from './components/about';
import Register from './components/register';
import Login from './components/login';
import Product from './components/product';
import Footer from './components/footer'


function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route exact path='/' element={<Home/>}/>
          <Route exact path='/cart' element={<Cart/>}/>
          <Route exact path='/about' element={<About/>}/>
          <Route exact path='/register' element={<Register/>}/>
          <Route exact path='/login' element={<Login/>}/>
          <Route exact path='/product' element={<Product/>}/>
          <Route exact path='/footer' element={<Footer/>}/>


  

          
        </Routes>

      </Router>
    </div>
  );
}

export default App;
