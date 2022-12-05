import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Home from './Home'
import About from './About'
import Error from './Error'
import Shared from './Shared'
import Products from './Products'
import SingleProduct from './SingleProduct'
import SharedProduct from './SharedProduct'
import Login from './Login'
import ProtectedRoute from './ProtectedRoute'
import Dashboard from './Dashboard'

export default function App() {
  const [user, setUser] = React.useState({})
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
          <Route path='login' element={<Login setUser={setUser} />} />
          <Route
            path='dashboard'
            element={
              <ProtectedRoute user={user}>
                <Dashboard user={user} />
              </ProtectedRoute>
            }
          />
          <Route path='*' element={<Error />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}
