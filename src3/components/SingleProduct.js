import React from 'react'
import { useParams } from 'react-router-dom'

export default function SingleProduct() {
  const { productId } = useParams()
  return (
    <div>
      <h4>{productId}</h4>
      <h1>SingleProduct</h1>
    </div>
  )
}
