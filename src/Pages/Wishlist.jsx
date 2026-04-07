import React from 'react';

const Wishlist = () => {
  return (
    <div className="min-h-screen bg-slate-50 dark:bg-gray-950 text-slate-900 dark:text-white p-6 md:p-12">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold tracking-tight mb-8">Your Wishlist</h1>
        <div className="bg-white dark:bg-gray-900 p-8 md:p-12 rounded-[2.5rem] border border-slate-200 dark:border-gray-800 shadow-sm">
          <p className="text-xl mb-6 font-medium text-slate-700 dark:text-gray-300">
            Keep track of the premium technology you're watching.
          </p>
          <p className="text-slate-600 dark:text-gray-400 leading-relaxed text-lg">
            You haven't added any items to your wishlist yet. Explore our featured laptops to start saving your favorites!
          </p>
        </div>
      </div>
    </div>
  );
};

export default Wishlist;