"use Client";
function DisplayResultProduct({ products }: { products: any }) {
  return (
    <div className="flex flex-wrap gap-6">
      {products.map((product:any) => (
        <div key={product.id} className="p-6 shadow">
          <p>{product.product_name}</p>
          <p>€{product.product_price}</p>
        </div>
      ))}
    </div>
  );
}

export default DisplayResultProduct;
