import React from 'react';
import {BrowserRouter as Router,Routes,Route} from "react-router-dom";
import Home from './pages/Home';
import Cart from './pages/Cart';
import Shop from './pages/Shop';
import { Provider } from 'react-redux';
import Store from "./Store/Store"
const App = () => {
  return (
    <div className='App'>
        <Provider store={Store}>
        <Router>
          <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/cart' element={<Cart/>}/>
            <Route path='/shop' element={<Shop/>}/>
          </Routes>
        </Router>
        </Provider>
    </div>
  )
}

export default App
