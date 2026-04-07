import React from 'react'

const Cart = () => {
  return (
    <div className="min-h-screen bg-slate-50 dark:bg-gray-950 text-slate-900 dark:text-white p-6 md:p-12">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold tracking-tight mb-8">Your Cart</h1>
        <p className="text-xl text-slate-600 dark:text-gray-400 mb-4">
          Your shopping cart is currently empty.
        </p>
        <p className="text-lg text-slate-500 dark:text-gray-500">
          Check out our latest laptops in the shop to add items here!
        </p>
      </div>
    </div>
  )
}

export default Cart