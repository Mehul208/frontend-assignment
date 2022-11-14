import React from "react";
import ProductCard from "./productCard";

const DisplayProducts = ({ products }) => {
  return (
    <div className="container d-flex flex-wrap justify-content-center my-3">
      {products.map((item, i) => {
        return <ProductCard key={i} {...item} />;
      })}
    </div>
  );
};

export default DisplayProducts;