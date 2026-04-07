import React from 'react';
import { useParams } from 'react-router-dom';

const ProductDetails = () => {
  const { id } = useParams();

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-gray-950 text-slate-900 dark:text-white p-6 md:p-12">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold tracking-tight mb-8">Product Details</h1>
        <div className="bg-white dark:bg-gray-900 p-8 md:p-12 rounded-[2.5rem] border border-slate-200 dark:border-gray-800 shadow-sm">
          <p className="text-xl mb-6 font-medium text-slate-700 dark:text-gray-300">
            Viewing details for: <span className="font-mono text-blue-600 bg-blue-50 px-3 py-1 rounded-lg">{id || "Generic Model"}</span>
          </p>
          <p className="text-slate-600 dark:text-gray-400 leading-relaxed text-lg">
            Full specifications, performance benchmarks, and user reviews for this device are currently being updated.
          </p>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;