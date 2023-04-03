import Product from "./Product";
import { useEffect, useState } from "react";

export default function MainContent(props) {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    fetch("http://localhost:80/react-app-backend/api.php?getProducts", {
      method: "GET",
      crossorigin: true,
    })
      .then((response) => response.json())
      // .then(response => console.log(response))
      .then(setProducts);
  }, []);

  return (
    <main>
      <hr />
      
      <div className="products">
        {products.map((product) => (  
          <Product key={product.id} name={product.name} price={product.price} sku={product.sku} />
        ))}
         
      </div>
      <hr />
    </main>
  );
}
