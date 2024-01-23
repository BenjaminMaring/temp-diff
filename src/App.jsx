import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Header from './Components/Header'
import Main from './Components/Main'
import './App.css'

function App() {

  return (
    <div className="app--wrapper">
      <BrowserRouter >
        <Header />
        <Routes>
          <Route path="/" element={<Main />}/>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
