"use client";
import Link from "next/link";
import React from "react";

export default function Header() {
  return (
    <header>
      <div className="flex  bg-slate-500 p-6 flex-grow">
        <Link href="/" className="text-white pr-5">
          Home
        </Link>
        <Link href="/ProductList" className="text-white pr-5">
          Product
        </Link>
      </div>
    </header>
  );
}
