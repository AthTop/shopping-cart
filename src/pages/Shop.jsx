import { useLoaderData } from "react-router-dom";

export default function Shop() {
  const products = useLoaderData();
  console.log(products);
  if (products === undefined) {
    console.log("not loaded");
    return <>Loading...</>;
  }

  return (
    <div>
      {products.map((product) => {
        return (
          <div key={product.id}>
            <p>Name: {product.title}</p>{" "}
          </div>
        );
      })}
    </div>
  );
}
