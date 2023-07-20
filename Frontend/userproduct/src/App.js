import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Regis from './Regi';
import Login from './Login';
import Products from './Products';
import MyProduct from './MyProduct';
import UpdateProduct from './UpdateProduct';
import Auth from './Auth';
import Bar from './Bar';
import Logout from './Logout';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path='/regis' element={<Regis/>}></Route>
          <Route path='/login' element={<Login/>}></Route>
          <Route element={<Auth/>}>
          <Route element={<Bar/>}>
          <Route path='/products' element={<Products/>}></Route>
          <Route path='/myproduct' element={<MyProduct/>}></Route>
          </Route>
          <Route path='/updateproduct/:id' element={<UpdateProduct/>}></Route>
          </Route>
          <Route path='/logout' element={<Logout/>}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
