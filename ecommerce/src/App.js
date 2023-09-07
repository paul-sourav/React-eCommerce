import React from 'react';
import {BrowserRouter as Router,Routes,Route} from "react-router-dom";
import Home from './pages/Home';
import Cart from './pages/Cart';
import Shop from './pages/Shop';
import { Provider } from 'react-redux';
import Store from "./Store/Store"
import ProductDetails from './components/ProductDetails';
const App = () => {
  return (
    <div className='App'>
        <Provider store={Store}>
        <Router>
          <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/cart' element={<Cart/>}/>
            <Route path='/shop/:search' element={<Shop/>}/>
            <Route path='/productCom/:product' element={<ProductDetails/>}/>
          </Routes>
        </Router>
        </Provider>
    </div>
  )
}

export default App
