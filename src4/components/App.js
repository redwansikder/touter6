import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Home from './Home'
import About from './About'
import Error from './Error'
import Shared from './Shared'
import Products from './Products'
import SingleProduct from './SingleProduct'
import SharedProduct from './SharedProduct'

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Shared />}>
          <Route index element={<Home />} />
          <Route path='about' element={<About />} />
          <Route path='products' element={<SharedProduct />}>
            <Route index element={<Products />} />
            <Route path=':productId' element={<SingleProduct />} />
          </Route>
          <Route path='*' element={<Error />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}
