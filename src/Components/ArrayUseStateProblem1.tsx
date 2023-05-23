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

export default function ShoppingCart() {
  const [products, setProducts] = useState<any>(initialProducts);
  function handleIncreaseClick(productId: number) {
    // this is to know whats coming inside the array
    // console.log(products[productId].count);

    // this logic is working but its upading the list with counter also
    // setProducts([...products,products[productId].count++])
    
    setProducts(
      products.map((product: any) => {
        if (product.id === productId) {
          return { ...product, count: product.count + 1 };
        } else {
          return product;
        }
      })
    );
  }

  return (
    <ul>
      {products.map((product: any) => (
        <li key={product.id}>
          {product.name} (<b>{product.count}</b>)
          <button
            onClick={() => {
              handleIncreaseClick(product.id);
            }}
          >
            +
          </button>
        </li>
      ))}
    </ul>
  );
}
