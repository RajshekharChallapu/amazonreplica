import React from 'react'
import './Product.css'

function Product({title, image, price}) {
  return (
    <div className="product">
      <div className="product_info">
        <p>{title}</p>
        <p className="product_price">
          <small>$</small>
          <strong>{price}</strong>
        </p>
      </div>
      <img className="image_src"
        src={image} alt="" />
      <button>Add to Cart</button>
    </div>
  )
}

export default Product
