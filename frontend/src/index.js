import React from 'react';
import ReactDOM from 'react-dom/client';
import {BrowserRouter, Routes,Route} from "react-router-dom";
import './index.css';
import HomePage from './landing_Page/home/HomePage';
import Signup from './landing_Page/signup/Signup';
import Login from './landing_Page/login/Login';
import ProductPage from './landing_Page/products/ProductPage';
import AboutPage from './landing_Page/about/AboutPage';
import PricingPage from './landing_Page/pricing/PricingPage';
import SupportPage from './landing_Page/support/SupportPage';
import NavBar from './landing_Page/NavBar';
import Footer from './landing_Page/Footer';
import Universe from './landing_Page/products/Universe';
import NotFound from './landing_Page/NotFound';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
  <NavBar/>
  <Routes>
    <Route path='/' element={<HomePage/>}/>
    <Route path='/signup' element={<Signup/>}/>
    <Route path='/login' element={<Login/>}/>
    <Route path='/about' element={<AboutPage/>}/>
    <Route path='/product' element={<ProductPage/>}/>
    <Route path='/pricing' element={<PricingPage/>}/>
    <Route path='/support' element={<SupportPage/>}/>
    <Route path='*' element={<NotFound/>}/>

  </Routes>
  <Footer/>
  </BrowserRouter>
 
);


