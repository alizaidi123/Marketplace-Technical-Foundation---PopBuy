import React, { useState } from 'react';
import Image from 'next/image';

interface ProductCardProps {
  product: {
    title: string;
    description: string;
    price: number;
    productImage: {
      asset: {
        _id: string;
        url: string; 
      };
    };
    discountPercentage?: number;
    isNew?: boolean;
  };
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleProductClick = () => {
    setIsModalOpen(true);
  };

  return (
    <>
      <div 
        className="border p-4 rounded shadow" 
        onClick={handleProductClick}
      >
        <Image
          src={product.productImage.asset.url} 
          width={300} 
          height={200} 
          alt={product.title}
          className="rounded"
          objectFit="cover" 
        />
        <h2 className="text-lg font-bold mt-2">{product.title}</h2>
        <p className="text-gray-600 line-clamp-5">{product.description.substring(0, 80)}...</p> 
        <p className="text-blue-500 font-semibold">
          {product.discountPercentage ? (
            <>
              Discounted Price: $
              {(product.price * (1 - product.discountPercentage / 100)).toFixed(2)}
              <br />
              Original Price: ${product.price}
            </>
          ) : (
            `Price: $${product.price}`
          )}
        </p>
        {product.isNew && (
          <span className="bg-green-500 text-white px-2 py-1 rounded-full inline-block">
            New
          </span>
        )}
      </div>

      {isModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded shadow-lg overflow-y-auto max-h-screen"> 
            <button 
              className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 bg-white rounded-full p-2" 
              onClick={() => setIsModalOpen(false)}
            >
              &times; 
            </button>
            <h2>{product.title}</h2>
            <Image
              src={product.productImage.asset.url} 
              width={500} 
              height={400} 
              alt={product.title}
              className="rounded mb-4"
              objectFit="cover" 
            />
            <div className="mb-4">
              <h3 className="text-lg font-semibold mb-1">Description:</h3>
              <p>{product.description}</p> 
            </div>
            <div className="mb-4">
              <h3 className="text-lg font-semibold mb-1">Price:</h3>
              <p>
                {product.discountPercentage ? (
                  <>
                    Discounted Price: $
                    {(product.price * (1 - product.discountPercentage / 100)).toFixed(2)}
                    <br />
                    Original Price: ${product.price}
                  </>
                ) : (
                  `$${product.price}`
                )}
              </p>
            </div>
            {product.isNew && (
              <div className="bg-green-500 text-white px-2 py-1 rounded-full inline-block">
                New
              </div>
            )}
          </div>
        </div>
      )}
    </>
  );
};

export default ProductCard;