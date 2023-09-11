"use client";
import React, { useState } from "react";
import Image from "next/image";
import { StarIcon } from "@heroicons/react/20/solid";
import CurrencyFormat from "react-currency-format";

const MAX_RATING = 6;
const MIN_RATING = 1;

function Product({
  id,
  title,
  price,
  description,
  category,
  image,
}: {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
}) {
  // console.log("prod2:", products);
  const [rating] = useState(
    Math.floor(Math.random() * (MAX_RATING - MIN_RATING + 1)) + MIN_RATING
  );

  const hasPrime = Math.random() < 0.5;
  return (
      <div className="shadow-lg shadow-cyan-500/100 relative flex flex-col m-5 bg-white z-30 p-10 rounded-xl">
        <p className=" absolute top-2 right-2 text-xs italic text-gray-400">
          {category}
        </p>
        <Image
          src={image}
          height={200}
          width={200}
          className="border-gray-400 object-contain"
          alt=""
        />
        <h4 className="my-3">{title}</h4>
        <div className="flex">
          {Array(rating)
            .fill()
            .map((_, i) => (
              // eslint-disable-next-line react/jsx-key
              <StarIcon className="h-5 text-yellow-500" />
            ))}
        </div>
        <p className="text-xs my-2 line-clamp-2">{description}</p>
        <div className="mb-5 ">
          <CurrencyFormat value={price} displayType={"text"} prefix={"€"} />
        </div>
        {hasPrime && (
          <div className="flex items-center space-x-2 -mt-5">
            <p className="text-xs text-gray-500">FREE NEXT DAY Delivery</p>
          </div>
        )}

        <button className="mt-auto button">
          Add to Basket
        </button>
      </div>
  );
}

export default Product;
