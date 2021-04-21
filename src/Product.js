import React from 'react'
import './Product.css'

function Product() {
  return (
    <div className="product">
      <div className="product_info">
        <p>The Lean Startup</p>
        <p className="product_price">
          <small>$</small>
          <strong>19.99</strong>
        </p>
      </div>
      <img className="image_src"
        src="https://images-na.ssl-images-amazon.com/images/I/51%2BQEQnqF3L._AC_SX425_.jpg" alt="" />
      <button>Add to Cart</button>
    </div>
  )
}

export default Product
