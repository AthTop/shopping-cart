import { products } from "../../products";

export async function productsLoader() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(products);
    }, 3000);
  });
}
