"use server";

import { Product } from "@/typings";
import { revalidateTag } from "next/cache";

export const addProductInDB = async (e: FormData) => {
  console.log("e", e);

  const product_name = e.get("product")?.toString();
  const product_price = e.get("price")?.toString();

  if (!product_name || !product_price) return;

  const newProduct: Omit<Product, "id"> = {
    product_name: product_name as string,
    product_price: product_price as string,
  };

  try {
    await fetch("https://64edb72e1f8721827141a1ee.mockapi.io/Products", {
      method: "POST",
      body: JSON.stringify(newProduct),
      headers: {
        "Content-Type": "application/json",
      },
    });
    // if the revalidation is ok the add product will persist on screen
    // else he will be removed to test it add a wrong url example: https://64edb72e1f8721827141a1ee.mockapi.io/Products8
    revalidateTag("Products");
  } catch (error) {
    return {
      error: "Something went wrong",
    };
  }
  // finally{
  //   revalidateTag("Products");
  // }
  //if you don't declare a tag in fetch use bellow
  // revalidateTag("https://64edb72e1f8721827141a1ee.mockapi.io/Products");
};
