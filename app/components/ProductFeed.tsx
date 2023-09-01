"use client"
import React from "react";
import Product from "./Product";

interface Products {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
}

function ProductFeed({ products }: { products: Products[] }) {
  console.log("prod1:", products);
  
  return (
    <main>
      <div className="grid grid-flow-row-dense md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 md:mt-52 mx-auto">
        {products
          .slice(0, 4)
          .map(({ id, title, price, description, category, image }) => (
            <Product
              key={id}
              id={id}
              title={title}
              price={price}
              description={description}
              category={category}
              image={image}
            />
          ))}
        <div className="md:col-span-2">
          {products
            .slice(4, 5)
            .map(({ id, title, price, description, category, image }) => (
              <Product
                key={id}
                id={id}
                title={title}
                price={price}
                description={description}
                category={category}
                image={image}
              />
            ))}
        </div>
        {products
          .slice(5, products.length)
          .map(({ id, title, price, description, category, image }) => (
            <Product
              key={id}
              id={id}
              title={title}
              price={price}
              description={description}
              category={category}
              image={image}
            />
          ))}
      </div>
    </main>
  );
}

export default ProductFeed;
