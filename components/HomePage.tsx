"use client";
import React, {
  experimental_useOptimistic as useOptimistic,
  useState,
  lazy,
} from "react";
import { addProductInDB } from "@/actions/serverAction";
import DisplayResultProduct from "./DisplayResultProduct";
import AddProductButton from "./AddProductButton";
import { Product } from "@/typings";
// dymanic import fo component
const TextComponent = lazy(() => import("./TextComponent"));

function HomePage({ products }: { products: Product[] }) {
  const [optimisticProducts, addOptimisticProduct] = useOptimistic(
    products,
    (state, newProduct: Product) => {
      return [...state, newProduct];
    }
  );

  // code splitting for lazy load component tu use on button click
  const [component, setComponent] = useState<React.ComponentType<any>| null>(null);

  const onLoad = async () => {
    const TextComponentLoad = await TextComponent;
    setComponent(TextComponentLoad);
  };
  // end code splitting
  // on button component  we add suspense with falback to simulate a loading in case of slow connection
  //see exempla on line 63 to line72

  return (
    <main>
      <div className="text-4xl font-bold text-center">Product List</div>
      <form
        action={async (formData) => {
          const product_name = formData.get("product")?.toString();
          const product_price = formData.get("price")?.toString();

          const newProduct: Omit<Product, "id"> = {
            product_name: product_name as string,
            product_price: product_price as string,
          };

          console.log("prod", newProduct);

          addOptimisticProduct(newProduct);
          await addProductInDB(formData);
        }}
        className="flex flex-col gap-5 max-w-xl mx-auto p-5">
        <input
          name="product"
          className="border border-gray-300 p-3 rounded-md"
          placeholder="Enter Product name"
        />
        <input
          name="price"
          className="border border-gray-300 p-3 rounded-md"
          placeholder="Enter Product price"
        />
        <AddProductButton />
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          onClick={onLoad}>
          Load
        </button>
        {component && (
          <React.Suspense fallback={<div>Loading...</div>}>
            <TextComponent />
          </React.Suspense>
        )}
      </form>

      <h2 className="font-bold p-5">Products Display</h2>
      <DisplayResultProduct products={optimisticProducts} />
    </main>
  );
}

export default HomePage;
