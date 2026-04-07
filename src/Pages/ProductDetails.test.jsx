import React from 'react';
import { render, screen } from '@testing-library/react';
import { MemoryRouter, Route, Routes } from 'react-router-dom';
import { describe, it, expect } from 'vitest';
import ProductDetails from './ProductDetails';

describe('ProductDetails Component', () => {
  it('extracts and displays the product ID from the URL params', () => {
    render(
      <MemoryRouter initialEntries={['/product/macbook-pro-m3']}>
        <Routes>
          <Route path="/product/:id" element={<ProductDetails />} />
        </Routes>
      </MemoryRouter>
    );

    expect(screen.getByText(/macbook-pro-m3/i)).toBeDefined();
  });

  it('falls back to "Generic Model" when the ID parameter is missing', () => {
    render(
      <MemoryRouter initialEntries={['/product/']}>
        <Routes>
          <Route path="/product/" element={<ProductDetails />} />
        </Routes>
      </MemoryRouter>
    );

    expect(screen.getByText(/Generic Model/i)).toBeDefined();
  });
});