import React from 'react';
//import logo from './logo.svg';
//import './App.css';
import './sass/sample.scss' 


import {BrowserRouter, Route ,Routes } from 'react-router-dom';
import { Landingpage } from './component/Landingpage';
//import { Managefoods } from './component/Managefoods';
const App:React.FC = () => {
  return (
    <div className="App">
       <BrowserRouter>
       <Routes>
       <Route path='/' element={<Landingpage/>}/>
       
         
         
         
       </Routes>
       </BrowserRouter>
       </div>
  );
}

export default App;
