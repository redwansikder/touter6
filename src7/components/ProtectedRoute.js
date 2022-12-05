import React from 'react'
import { Navigate, useLocation } from 'react-router-dom'

export default function ProtectedRoute({ children, user }) {
  const location = useLocation()
  if (!user.name) {
    return <Navigate to='/login' state={{ from: location }} />
  }
  return children
}
