import React from 'react'
import { Link } from 'react-router-dom'

export default function Nav() {
  return (
    <div>
      <Link to='/'>Home</Link>
      <Link to='about'>About</Link>
      <Link to='products'>Products</Link>
      {/* <Link to='login'>Login</Link> */}
      <Link to='dashboard'>Dashboard</Link>
      <Link to='dashboard2'>Dashboard</Link>
      <Link to='dashboard3'>Dashboard</Link>
    </div>
  )
}
