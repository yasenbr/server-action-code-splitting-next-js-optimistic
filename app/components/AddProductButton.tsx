"use client";

import { addProductInDB } from "@/actions/serverAction";
import { useTransition } from "react";

function AddProductButton({}) {
    const [isPending, startTransition] = useTransition();
  const formData = new FormData();
  return (
    <button
      className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
      onClick={() => startTransition(() => addProductInDB(formData))}>
      {isPending? "Adding..." : "Add Product"}
    </button>
  );
}

export default AddProductButton;
