import React from 'react'

const Blog = () => {
  return (
    <div className="min-h-screen bg-slate-50 dark:bg-gray-950 text-slate-900 dark:text-white p-6 md:p-12">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-8">Blog</h1>
        <p className="text-xl text-slate-700 dark:text-gray-300 mb-6 leading-relaxed">
          Stay updated with the latest in technology and laptop reviews.
        </p>
        <p className="text-lg text-slate-600 dark:text-gray-400">
          Coming soon: Articles on laptop buying guides, tech news, and more.
        </p>
      </div>
    </div>
  )
}

export default Blog