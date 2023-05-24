import { useState } from "react";

const initialProducts = [
  {
    id: 0,
    name: "Baklava",
    count: 1,
  },
  {
    id: 1,
    name: "Cheese",
    count: 5,
  },
  {
    id: 2,
    name: "Spaghetti",
    count: 2,
  },
];

export default function ArrayUseStateProblem2() {
  const [products, setProducts] = useState(initialProducts);

  // this function will increase the count while not mutating the original array
  function handleIncreaseClick(productId: number) {
    setProducts(
      products.map((product) => {
        if (product.id === productId) {
          return {
            ...product,
            count: product.count + 1,
          };
        } else {
          return product;
        }
      })
    );
  }

  // this function will decrease the count while not mutating the original array
  const handleDecreaseClick = (productId: number) => {
    setProducts(
      products.map((product) => {
        if (product.id === productId) {
          return { ...product, count: product.count - 1 };
        } else {
          return product;
        }
      })
    );
  };

  console.log(products.map((product) => console.log(product.count)));

  return (
    <>
      <h1>
        learning modifying array by using useState and not mutating original
        array
      </h1>
      <ul>
        {products.map((product) => (
          <li key={product.id}>
            {product.name} (<b>{product.count}</b>)
            <button
              onClick={() => {
                handleIncreaseClick(product.id);
              }}
            >
              +
            </button>
            <button
              onClick={() => {
                handleDecreaseClick(product.id);
              }}
            >
              –
            </button>
          </li>
        ))}
      </ul>
    </>
  );
}
