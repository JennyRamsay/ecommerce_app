import React from 'react'
import { Link } from "react-router-dom";

const Item = ({ product }) => {

  return (
    <>
      <Link to={`/products/${product.id}`}>
        <h1>Product Details</h1>
        <p>{product.title}</p>
      </Link>    
  </>
  )
}

export default Item;