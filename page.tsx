"use client"
import { useState, useEffect } from "react";
import ProductCard from "./components/ProductCard";
import SearchBar from "./components/SearchBar";
import { client } from "@/sanity/lib/client";

const Page = () => {
  const [products, setProducts] = useState<any[]>([]); 
  const [filteredProducts, setFilteredProducts] = useState<any[]>([]); 
  const [currentPage, setCurrentPage] = useState(1); 
  const productsPerPage = 8; 

  
  useEffect(() => {
    const fetchProducts = async () => {
      const data = await client.fetch(`*[_type == "product"]`);
      setProducts(data);
      setFilteredProducts(data);
    };

    fetchProducts();
  }, []);

  
  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  
  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = filteredProducts.slice(indexOfFirstProduct, indexOfLastProduct);

 
  const totalPages = Math.ceil(filteredProducts.length / productsPerPage);

  return (
    <main className="container mx-auto">
      <SearchBar products={products} onSearchResults={setFilteredProducts} />
      <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-4 gap-4">
        {currentProducts.map((product) => (
          <ProductCard key={product.title} product={product} />
        ))}
      </div>

     
      <div className="flex justify-center mt-6">
        <button
          onClick={() => handlePageChange(currentPage - 1)}  
          disabled={currentPage === 1}  
          className="px-4 py-2 bg-blue-500 text-white rounded disabled:bg-gray-400"
        >
          Previous
        </button>
        <span className="mx-4">
          Page {currentPage} of {totalPages}  
        </span>
        <button
          onClick={() => handlePageChange(currentPage + 1)}  
          disabled={currentPage === totalPages} 
          className="px-4 py-2 bg-blue-500 text-white rounded disabled:bg-gray-400"
        >
          Next
        </button>
      </div>
    </main>
  );
};

export default Page;
