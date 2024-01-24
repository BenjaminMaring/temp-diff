import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Header from './Components/Header'
import Main from './Components/Main'
import City from './Components/City'
import './App.css'

function App() {

  return (
    <div className="app--wrapper">
      <BrowserRouter >
        <Header />
        <Routes>
          <Route path="/" element={<Main />}/>
          <Route path="/temp" element={<City />}/>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
