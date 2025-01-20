import React, { useState } from "react";
import Image from "next/image";

interface ProductCardProps {
  product: {
    title: string;
    description: string;
    price: number;
    productImage?: {
      asset?: {
        _id?: string;
        url?: string;
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

  
  const imageUrl =
    product.productImage?.asset?.url || "/image-4.png";

  return (
    <>
     
      <div
        className="card border shadow-lg rounded-lg overflow-hidden cursor-pointer"
        onClick={handleProductClick}
      >
        
        <Image
          src={imageUrl}
          width={300}
          height={200}
          alt={product.title}
          className="object-cover w-full h-[200px]"
        />
        <div className="card-body p-4">
         
          <h5 className="card-title font-bold text-lg">{product.title}</h5>
       
          <p className="card-text text-gray-600">
            {product.description.substring(0, 80)}...
          </p>
        
          <h5 className="card-title font-bold text-lg mt-2 text-blue-500">
            {product.discountPercentage ? (
              <>
                Discounted: $
                {(
                  product.price *
                  (1 - product.discountPercentage / 100)
                ).toFixed(2)}
                <br />
                <span className="line-through text-gray-500">
                  Original: ${product.price}
                </span>
              </>
            ) : (
              `Price: $${product.price}`
            )}
          </h5>
          {product.isNew && (
            <span className="bg-green-500 text-white px-2 py-1 rounded-full inline-block mt-2">
              New
            </span>
          )}
        </div>
      </div>

      
      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded shadow-lg overflow-y-auto max-h-screen relative w-[90%] md:w-[70%] lg:w-[50%]">
           
            <button
              className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 bg-gray-200 rounded-full p-2"
              onClick={() => setIsModalOpen(false)}
            >
              &times;
            </button>
           
            <h2 className="text-2xl font-bold mb-4">{product.title}</h2>
            <Image
              src={imageUrl}
              width={500}
              height={400}
              alt={product.title}
              className="rounded mb-4 w-full h-[300px] object-cover"
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
                    {(
                      product.price *
                      (1 - product.discountPercentage / 100)
                    ).toFixed(2)}
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
