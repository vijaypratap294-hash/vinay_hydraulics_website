'use client';

import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ProductsHero from './ProductsHero';
import ProductsGrid from './ProductsGrid';
import ProductsComparison from './ProductsComparison';
import ProductsSpecs from './ProductsSpecs';
import ProductsCTA from './ProductsCTA';

export default function ProductsPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <ProductsHero />
      <ProductsGrid />
      <ProductsSpecs />
      <ProductsComparison />
      <ProductsCTA />
      <Footer />
    </div>
  );
}