import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Products from './Pages/Products'
import Home from './Pages/Home'
import ContactUs from './Pages/Contactus'
import Header from './Components/header'


function App() {
  return (
    <div className='app-container'>
      <Router>
       <Header/>
        <Routes>
        <Route path='/' exact element={<Home />} />
        <Route path='/products' exact element={<Products />} />
        <Route path='/contact-us' exact element={<ContactUs />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
