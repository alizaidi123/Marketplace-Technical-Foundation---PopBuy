import { client } from "@/sanity/lib/client";
import { notFound } from "next/navigation";

interface ProductDetailsProps {
  params: {
    title: string;
  };
}

export default async function ProductDetails({ params }: ProductDetailsProps) {
  const { title } = params;

  const product = await client.fetch(
    `*[_type == "product" && lower(title) == $title][0]{
      title,
      "imageUrl": productImage.asset->url,
      description,
      price,
      tags,
      discountPercentage,
      isNew
    }`,
    { title: title.toLowerCase() }
  );

  if (!product) {
    return notFound();
  }

  return (
    <div className="container mx-auto p-4">
      <div className="flex flex-col md:flex-row items-center">
        <img
          src={product.imageUrl || "/default-image.jpg"}  // Use fallback image
          alt={product.title}
          className="w-full md:w-1/2 rounded-lg shadow-lg"
        />
        <div className="md:ml-8 mt-4 md:mt-0">
          <h1 className="text-3xl font-bold">{product.title}</h1>
          <p className="text-lg mt-2">{product.description}</p>
          <p className="text-xl font-semibold mt-4">${product.price}</p>
          {product.discountPercentage && (
            <p className="text-green-500 mt-2">
              Discount: {product.discountPercentage}%
            </p>
          )}
          {product.isNew && <p className="text-blue-500 mt-2">New Arrival!</p>}
          {product.tags?.length > 0 && (
            <div className="mt-4">
              <h4 className="font-semibold">Tags:</h4>
              <ul className="flex space-x-2">
                {product.tags.map((tag: string, index: number) => (
                  <li key={index} className="bg-gray-200 px-2 py-1 rounded-lg">
                    {tag}
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
