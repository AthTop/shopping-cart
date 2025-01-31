export async function productsLoader() {
  const url = "https://fakestoreapi.com/products";
  const data = await getData(url);
  return data;
}

const getData = async (url) => {
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`Response status: ${response.status}`);
    }
    const json = await response.json();
    return json;
  } catch (error) {
    console.log(error.message);
  }
};
