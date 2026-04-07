import React from 'react';
import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import Cart from './Cart';

describe('Cart Page', () => {
  it('renders the empty state correctly', () => {
    render(<Cart />);
    
    expect(screen.getByRole('heading', { name: /Your Cart/i })).toBeDefined();
    expect(screen.getByText(/Your shopping cart is currently empty/i)).toBeDefined();
    expect(screen.getByText(/Check out our latest laptops/i)).toBeDefined();
  });
});