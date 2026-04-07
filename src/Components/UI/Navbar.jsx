import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import {
  ShoppingCart,
  Search,
  Menu,
  Laptop,
  Moon,
  Sun,
  User,
  Heart,
  X,
} from 'lucide-react'
import { Input } from '@/Components/UI/input'
import { motion, AnimatePresence } from 'framer-motion'

const Navbar = ({ dark, setDark }) => {
  const [isSearchOpen, setIsSearchOpen] = useState(false)
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <nav className="sticky top-0 z-50 backdrop-blur-md bg-white/90 dark:bg-gray-950/90 border-b border-slate-200 dark:border-gray-800 text-slate-900 dark:text-white transition-all duration-300">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        
        {/* Search Overlay */}
        <AnimatePresence>
          {isSearchOpen && (
            <motion.div 
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="absolute inset-0 z-[60] bg-white dark:bg-gray-950 px-6 flex items-center"
            >
              <div className="max-w-7xl mx-auto w-full flex items-center gap-4">
                <Search className="text-slate-400" size={22} />
                <Input autoFocus placeholder="Search laptops, brands, specs..." className="flex-1 border-none bg-transparent text-lg focus-visible:ring-0 shadow-none placeholder:text-slate-400" />
                <button onClick={() => setIsSearchOpen(false)} className="p-2 hover:bg-slate-100 dark:hover:bg-gray-800 rounded-full transition-colors"><X size={24} /></button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        <div className="flex items-center gap-2 font-semibold text-2xl text-slate-900 dark:text-white">
          <Laptop className="text-blue-600" /> Telnet
        </div>

        <div className="hidden md:flex gap-8">
          <Link to="/" className="text-slate-600 dark:text-white hover:text-blue-600 dark:hover:text-blue-400 font-medium transition-colors relative group">
            Home
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-600 transition-all group-hover:w-full"></span>
          </Link>
          <Link to="/about" className="text-slate-600 dark:text-white hover:text-blue-600 dark:hover:text-blue-400 font-medium transition-colors relative group">
            About
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-600 transition-all group-hover:w-full"></span>
          </Link>
          <Link to="/shop" className="text-slate-600 dark:text-white hover:text-blue-600 dark:hover:text-blue-400 font-medium transition-colors relative group">
            Featured
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-600 transition-all group-hover:w-full"></span>
          </Link>
          <Link to="/blog" className="text-slate-600 dark:text-white hover:text-blue-600 dark:hover:text-blue-400 font-medium transition-colors relative group">
            Blog
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-600 transition-all group-hover:w-full"></span>
          </Link>
        </div>

        <div className="flex items-center gap-5 text-slate-600 dark:text-white">
          <button onClick={() => setIsSearchOpen(true)} className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors"><Search size={20} /></button>
          <Link to="/wishlist" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors"><Heart size={20} /></Link>
          <Link to="/cart" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors"><ShoppingCart size={20} /></Link>
          <Link to="/contact" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors"><User size={20} /></Link>

          <div className="h-6 w-px bg-slate-200 dark:bg-gray-800 mx-1"></div>

          <button
            onClick={() => setDark(!dark)}
            className="p-2.5 rounded-xl bg-slate-50 dark:bg-gray-900 hover:bg-slate-100 dark:hover:bg-gray-800 text-slate-600 dark:text-white hover:text-blue-600 dark:hover:text-blue-400 transition-all border border-slate-100 dark:border-gray-800"
          >
            {dark ? <Sun size={18} /> : <Moon size={18} />}
          </button>

          <button 
            onClick={() => setIsMenuOpen(!isMenuOpen)} 
            className="md:hidden p-2 hover:bg-slate-100 dark:hover:bg-gray-800 rounded-xl transition-colors"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="md:hidden bg-white dark:bg-gray-950 border-t border-slate-100 dark:border-gray-800 overflow-hidden"
          >
            <div className="px-6 py-8 flex flex-col gap-6">
              <Link to="/" onClick={() => setIsMenuOpen(false)} className="text-lg font-medium hover:text-blue-600 transition-colors">Home</Link>
              <Link to="/about" onClick={() => setIsMenuOpen(false)} className="text-lg font-medium hover:text-blue-600 transition-colors">About</Link>
              <Link to="/shop" onClick={() => setIsMenuOpen(false)} className="text-lg font-medium hover:text-blue-600 transition-colors">Featured</Link>
              <Link to="/blog" onClick={() => setIsMenuOpen(false)} className="text-lg font-medium hover:text-blue-600 transition-colors">Blog</Link>
              <div className="h-px bg-slate-100 dark:bg-gray-800 w-full my-2"></div>
              <div className="flex items-center gap-8 justify-center py-2 text-slate-600 dark:text-white">
                <Link to="/wishlist" onClick={() => setIsMenuOpen(false)}><Heart size={24} /></Link>
                <Link to="/cart" onClick={() => setIsMenuOpen(false)}><ShoppingCart size={24} /></Link>
                <Link to="/contact" onClick={() => setIsMenuOpen(false)}><User size={24} /></Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  )
}

export default Navbar