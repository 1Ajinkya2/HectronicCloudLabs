import React from 'react';
import ProductCard from './ProductCard';

interface Product {
  id: string;
  name: string;
  info: string;
  image: string;
  price: number;
}

interface ProductsProps {
  products: Product[];
}

const Products: React.FC<ProductsProps> = ({ products }) => {
  return (
    <div className="container">
      <div className="cards grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {products.map((product) => (
          <ProductCard key={product.id} {...product} />
        ))}
      </div>
    </div>
  );
};

export default Products;
