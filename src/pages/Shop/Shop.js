import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { products } from "./ProductsListing";
import ProductItem from "./ProductItem";
function ProductListing({ addToCart }) {
  const [filtered, setFiltered] = useState(false);
  const [searched, setSearched] = useState("");
  const [productList, setProductList] = useState(products);

  const checkSearch = () => {
    if (searched === "") {
      setFiltered(filtered);
    } else {
      setFiltered(!filtered);
    }
  };

  const filteredProducts = products
    .map((item) => item)
    .filter((item) => item.name.toLowerCase().includes(searched.toLowerCase()));

  const handleSearch = (e) => {
    const _productList = products.filter((item) =>
      item.name.toLowerCase().includes(e.target.value.toLowerCase())
    );
    setProductList(_productList);
  };

  return (
    <div className="product-page">
      <h3 className="title">POPULAR PRODUCTS</h3>
      <div className="search-container">
        <input
          type="text"
          placeholder="What are you looking for?"
          className="item-search"
          onChange={(e) => {
            e.preventDefault();
            handleSearch(e);
            // setSearched(e.target.value.trim());
            // checkSearch();
          }}
        />
      </div>

      <div className="product-container">
        {productList.map((productItem, index) => (
          <ProductItem
            products={productList}
            index={index}
            addToCart={addToCart}
            key={productList.at(index).id}
          />
        ))}
        {/*         
        {filtered ? 
        filteredProducts.map((filteredProductsItem, index) => (
          <ProductItem
            products={filteredProducts}
            index={index}
            addToCart={addToCart}
            key={filteredProducts.at(index).id}
          />
        ))
        : products.map((productsItem, index) => (
          <ProductItem
            products={products}
            index={index}
            addToCart={addToCart}
            key={products.at(index).id}
          />
        ))} */}
      </div>
    </div>
  );
}

export default ProductListing;
