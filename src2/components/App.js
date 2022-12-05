import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Nav from './Nav'
import Home from './Home'
import About from './About'
import Error from './Error'

export default function App() {
  return (
    <BrowserRouter>
      <Nav />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='about' element={<About />} />
        <Route path='*' element={<Error />} />
      </Routes>
    </BrowserRouter>
  )
}
