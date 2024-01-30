import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Header from './Components/Header'
import Main from './Components/Main'
import City from './Components/City'
import Recent from './Components/Recent'
import './App.css'

function App() {

  return (
    <div className="app--wrapper">
      <BrowserRouter >
        <Header />
        <Routes>
          <Route path="/" element={<Main />}/>
          <Route path="/compare" element={<City />}/>
          <Route path="/recent" element={<Recent />}/>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
