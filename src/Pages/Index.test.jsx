import React from 'react';
import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { describe, it, expect, vi } from 'vitest';
import LaptopLandingPage from './Index';

// Mock Framer Motion to avoid animation-related issues during testing
vi.mock('framer-motion', () => ({
  motion: {
    div: ({ children, ...props }) => <div {...props}>{children}</div>,
    h1: ({ children, ...props }) => <h1 {...props}>{children}</h1>,
    p: ({ children, ...props }) => <p {...props}>{children}</p>,
  },
  AnimatePresence: ({ children }) => <>{children}</>,
}));

// Mocking local UI components to simplify the test environment
vi.mock('@/Components/UI/card', () => ({
  Card: ({ children, className }) => <div className={className}>{children}</div>,
  CardContent: ({ children, className }) => <div className={className}>{children}</div>,
}));
vi.mock('@/Components/UI/button', () => ({
  Button: ({ children, ...props }) => <button {...props}>{children}</button>,
}));
vi.mock('@/Components/UI/input', () => ({
  Input: (props) => <input {...props} />,
}));

describe('LaptopLandingPage', () => {
  const renderPage = () => render(
    <BrowserRouter>
      <LaptopLandingPage />
    </BrowserRouter>
  );

  it('renders the hero section with the initial slide title', () => {
    renderPage();
    expect(screen.getByText(/Premium Laptops For Professionals/i)).toBeDefined();
  });

  it('renders the featured products section with laptop listings', () => {
    renderPage();
    expect(screen.getByText(/Featured/i)).toBeDefined();
    expect(screen.getByText(/MacBook Pro M3/i)).toBeDefined();
    expect(screen.getByText(/Dell XPS 15/i)).toBeDefined();
  });

  it('displays the newsletter subscription area', () => {
    renderPage();
    expect(screen.getByText(/Stay Updated/i)).toBeDefined();
    expect(screen.getByPlaceholderText(/Email address/i)).toBeDefined();
  });
});