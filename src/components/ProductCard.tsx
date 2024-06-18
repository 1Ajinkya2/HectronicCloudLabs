import React, { useState } from 'react';

interface ProductCardProps {
  id: string;
  name: string;
  info: string;
  image: string;
  price: number;
}

const ProductCard: React.FC<ProductCardProps> = ({ id, name, info, image, price }) => {
  const [readMore, setReadMore] = useState(false);
  const description = readMore ? info : `${info.substring(0, 200)}....`;

  const readMoreHandler = () => {
    setReadMore(!readMore);
  };

  return (
    <div className="card border w-4 rounded-lg p-4 shadow-lg">
      <img src={image} className="image w-full h-48 object-cover rounded" alt={name} />
      <div className="product-info mt-4">
        <div className="product-details flex justify-between items-center">
          <h4 className="product-price text-lg font-bold">₹{price}</h4>
          <h4 className="product-name text-lg">{name}</h4>
        </div>

        <div className="description mt-2">
          {description}
          <span className="read-more text-blue-500 cursor-pointer ml-2" onClick={readMoreHandler}>
            {readMore ? `Show Less` : `Read More`}
          </span>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
