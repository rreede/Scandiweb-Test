import { useEffect, useState } from "react";

export default function Products(props) {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch(
      "http://localhost:80/Scandiweb-Test/Scandiweb-test/src/routes/api/api.php?getProducts",
      {
        method: "GET",
        crossorigin: true,
      }
    )
      .then((response) => response.json())
      .then(setProducts);
  }, []);

  return (
    <main>
      <hr />
      <div className="products">
        {products.map((product) => (
          <div
            key={product.id}
            id={product.id}
            name={product.name}
            price={product.price}
            dvdsize={product.dvdsize}
            furniturelength={product.furniturelength}
            furniturewidth={product.furniturewidth}
            furnitureheight={product.furnitureheight}
            bookweight={product.booksweight}
          ></div>
        ))}
      </div>
    </main>
  );
}
