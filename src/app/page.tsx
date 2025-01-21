"use client";

import React, { useState, useEffect } from "react";
import { client } from "@/sanity/lib/client";
import Hero from "./Components/Hero";
import Sec_Hero from "./Components/Sec_Hero";
import ProductCard from "./Components/ProductCard";
import SearchBar from "./Components/SearchBar";
import Slide from "./Components/Slide";
import ShareSec from "./Components/ShareSec";

const Home = () => {
  const [products, setProducts] = useState<any[]>([]);
  const [filteredProducts, setFilteredProducts] = useState<any[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const productsPerPage = 8;

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const data = await client.fetch(`*[_type == "product"]`);
        setProducts(data);
        setFilteredProducts(data);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    fetchProducts();
  }, []);

  const handlePageChange = (page: number) => {
    if (page < 1 || page > totalPages) return;
    setCurrentPage(page);
  };

  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = filteredProducts.slice(indexOfFirstProduct, indexOfLastProduct);

  const totalPages = Math.ceil(filteredProducts.length / productsPerPage);

  return (
    <div>
      <Hero />
      <Sec_Hero />
      <SearchBar products={products} onSearchResults={setFilteredProducts} />
      <div className="container mx-auto mt-4">
        <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-4 gap-4">
          {currentProducts.map((product) => (
            <ProductCard key={product.title} params={{ title: product.title }} />
          ))}
        </div>
      </div>
      <div className="container mx-auto mt-8">
        <div className="flex justify-center mt-6 mb-6">
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
      </div>
      <Slide />
      <ShareSec />
    </div>
  );
};

export default Home;
