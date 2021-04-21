import React from 'react'
import './Checkout.css'

function Checkout() {
  return (
    <div className="checkout">
      <div className="checkout_left">
        <img className='checkout_ad'
          src="https://images-na.ssl-images-amazon.com/images/G/01/pxd/marketing/diamond/ILMs/non-incentive/Diamond_Center-28_650X45_EN_v2._CB403107166_.jpg"
          alt=" " />
        <div>
          <h2 className="checkout_title"> Your shopping cart</h2>
        </div>
      </div>
      
      <div classnmae="checkout_right">
     <h2>The subtotal will go here</h2>
      </div>
    </div>
  )
}
export default Checkout
