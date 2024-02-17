import logo from './logo.svg';
import './App.css';

import React from "react";
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Homepage from './components/homepage';
import AboutUs from './components/aboutUs';

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Homepage/>}/>
      <Route path='/home' element={<Homepage/>}/>
      <Route path='/aboutUs' element={<AboutUs/>}/>

    </Routes>
    </BrowserRouter>
  );
}

export default App;
