import React from "react";

interface SearchBarProps {
  products: any[];
  onSearchResults: (results: any[]) => void;
}

const SearchBar: React.FC<SearchBarProps> = ({ products, onSearchResults }) => {
  const handleSearch = (query: string) => {
    const results = products.filter((product) =>
      product.title.toLowerCase().includes(query.toLowerCase())
    );
    onSearchResults(results);
  };

  return (
    <div className="search-bar-container">
      <span className="search-bar-label">Search Bar</span>
      <input
        type="text"
        placeholder="Search products..."
        onChange={(e) => handleSearch(e.target.value)}
        className="search-bar-input rounded-full border px-4 py-2 focus:outline-none"
      />
    </div>
  );
};

export default SearchBar;

