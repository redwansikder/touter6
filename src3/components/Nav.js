import React from 'react'
import { Link } from 'react-router-dom'

export default function Nav() {
  return (
    <div>
      <Link to='/'>Home</Link>
      <Link to='about'>About</Link>
      <Link to='products'>Products</Link>
    </div>
  )
}
