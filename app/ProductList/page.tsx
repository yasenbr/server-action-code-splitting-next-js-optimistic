"use client"
import dynamic from "next/dynamic";
import React, { useState, useEffect } from "react";

interface Product {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
}

const DynamicProductFeed = dynamic(() => import("../components/ProductFeed"));

function ProductList() {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);


  return (
    <main className="max-w-screen-2xl mx-auto">
      <DynamicProductFeed products={products} />
    </main>
  );
}

export default ProductList;
