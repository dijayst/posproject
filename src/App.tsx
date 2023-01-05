import React from 'react';
//import logo from './logo.svg';
//import './App.css';
import './sass/sample.scss' 


import {BrowserRouter, Route ,Routes } from 'react-router-dom';
import { Landingpage } from './component/Landingpage';
import { Foodlist } from './component/Foodlist';
import { Manage } from './component/Manage';
//import { Managefoods } from './component/Managefoods';
const App:React.FC = () => {
  return (
    <div className="App">
       <BrowserRouter>
       <Routes>
       <Route path='/' element={<Landingpage/>}/>
       <Route path='/f' element={<Foodlist/>}/>
       <Route path='/m' element={<Manage/>}/>
       
         
         
         
       </Routes>
       </BrowserRouter>
       </div>
  );
}

export default App;
