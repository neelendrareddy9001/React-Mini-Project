import React from 'react'
import CheckoutStepper from './CheckoutStepper'

const CHECKOUT_STEPS = [
  {name: "Customer Info", 
    component: () => <div>Provide your contact details.</div>
  },
  {
    name: "Shipping Info",
    component : () => <div>Enter your shippingn details.</div>
  },
  {
    name: "Payment",
    component: () => <div>Complete payment for your order.</div>
  },
  {
    name: "Delivered",
    component: () => <div>Your order has been delivered.</div>
  }
]

const App = () => {
  return (
    <div>
      <h2>Checkout</h2>
      <CheckoutStepper stepsConfig={CHECKOUT_STEPS} />
    </div>
  )
}

export default App
