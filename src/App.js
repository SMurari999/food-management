
import './App.css';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Getstarted from './components/getstarted';
import Home from './components/home';
import Signup from './components/signup';
import Login from './components/login';
import Info from './components/info';
import Restaurant from '../src/pages/restarurant/restarurant';
import MyProducts from './pages/restarurant/myproducts';
import AddProducts from './pages/restarurant/addproducts';
import Customer from './pages/customer/customer';
import Products from './pages/customer/products';
import CartProduct from './pages/customer/cart';
import Restaurants from './pages/customer/restaurants';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>}>
        </Route>
        <Route path='/getstarted' element={<Getstarted></Getstarted>}>
        </Route>
        <Route path='/signup' element={<Signup/>}></Route>
        <Route path='/login' element={<Login/>}/>
        <Route path='/info' element={<Info></Info>}></Route>
        <Route path='/restaurant' element={<Restaurant/>}></Route>
        <Route path='/myproducts' element={<MyProducts/>}></Route>
        <Route path='/addproducts' element={<AddProducts/>}></Route> 
        <Route path='/customer' element={<Customer/>}></Route>
        <Route path='/products' element={<Products/>}></Route>
        <Route path='/cart' element={<CartProduct/>}></Route>
        <Route path='/restaurants' element={<Restaurants/>}></Route>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
