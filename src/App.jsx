import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import VendingMachine from './VendingMachine' 
import Pop from './Pop'
import Chips from './Chips'
import Candy from './Candy'
import Navbar from './Navbar'
import './App.css'


function App() {
  return (    
    <div className="App">
      <BrowserRouter>
       
        <Routes>
          <Route path="/" element={<VendingMachine/>} />
          <Route path="/pop" element={<Pop/>} />
          <Route path="/chips" element={<Chips/>} />
          <Route path="/candy" element={<Candy/>} />
        </Routes>
        <Navbar />
      </BrowserRouter>
    </div>
  )
}

export default App;
