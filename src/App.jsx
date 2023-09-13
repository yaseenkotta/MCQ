import logo from './logo.svg';
import React from 'react'

import './App.css';
import LoginButton from './components/buttons/LoginButton';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Question from './pages/Question';

import { ResultPage } from './pages/ResultPage';
import { StartPage } from './pages/StartPage';



function App() {

  return( 
   
    
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<StartPage />}/>
            <Route path="/ques" element={< Question />}/>
            <Route path="/result" element={< ResultPage />}/>
             
          </Routes>
        </BrowserRouter>
      
  )
}

export default App;
