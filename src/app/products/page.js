import { ProductLayout } from "@/components/products/products-layout";
import ProductListing from "@/components/products/products-listing";
import React from "react";

const Products = () => {
  return (
    <ProductLayout>
      <ProductListing />
    </ProductLayout>
  );
};

export default Products;
