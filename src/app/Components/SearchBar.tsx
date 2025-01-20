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
    <div className="flex items-center justify-center w-full"> 
      <div className="relative w-full max-w-xs"> 
        <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
          <svg className="w-4 h-4 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0"></path></svg>
        </div>
        <input 
          type="text" 
          placeholder="Search..." 
          className="py-2 px-3 pl-10 rounded-md border border-gray-300 focus:ring-blue-500 focus:border-blue-500 w-full" 
          onChange={(e) => handleSearch(e.target.value)} 
        />
      </div>
    </div>
  );
};

export default SearchBar;