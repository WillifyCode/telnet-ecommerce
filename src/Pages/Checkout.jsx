import React from 'react';

const Checkout = () => {
  return (
    <div className="min-h-screen bg-slate-50 dark:bg-gray-950 text-slate-900 dark:text-white p-6 md:p-12">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold tracking-tight mb-8">Checkout</h1>
        <div className="bg-white dark:bg-gray-900 p-8 md:p-12 rounded-[2.5rem] border border-slate-200 dark:border-gray-800 shadow-sm">
          <p className="text-xl mb-6 font-medium text-slate-700 dark:text-gray-300">
            Secure your premium technology today.
          </p>
          <p className="text-slate-600 dark:text-gray-400 leading-relaxed text-lg">
            The checkout system is being finalized. Please check back shortly to complete your purchase.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Checkout;