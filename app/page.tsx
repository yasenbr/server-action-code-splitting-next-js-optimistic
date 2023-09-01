
import HomePage from "@/app/Homepage/page";
import { Product } from "@/typings";

export default async function Home() {
  const res = await fetch(
    "https://64edb72e1f8721827141a1ee.mockapi.io/Products",
    {
      cache: "no-cache",
      //to declare a tag in fetch use bellow to be used later in revalidateTag to refresh the cache
      next: {
        tags: ["Products"],
      },
    }
  );

  const products: Product[] = await res.json();

  return (
    <div>
      <main>
        <HomePage products={products} />
      </main>
    </div>
  );
}
