import React, { useState, useEffect } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './Components/UI/Navbar'
import Index from './Pages/Index'
import About from './Pages/About'
import Shop from './Pages/Shop'
import Blog from './Pages/Blog'
import Cart from './Pages/Cart'
import Checkout from './Pages/Checkout'
import Contact from './Pages/Contact'
import ProductDetails from './Pages/ProductDetails'
import Wishlist from './Pages/Wishlist'

const App = () => {
  const [dark, setDark] = useState(() => {
    const saved = localStorage.getItem('theme')
    return saved === 'dark'
  })

  useEffect(() => {
    if (dark) {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
  }, [dark])

  const toggleDark = () => {
    const newDark = !dark
    setDark(newDark)
    localStorage.setItem('theme', newDark ? 'dark' : 'light')
  }

  return (
    <Router>
      <Navbar dark={dark} setDark={toggleDark} />
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/about" element={<About />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/product/:id" element={<ProductDetails />} />
        <Route path="/wishlist" element={<Wishlist />} />
      </Routes>
    </Router>
  )
}

export default App