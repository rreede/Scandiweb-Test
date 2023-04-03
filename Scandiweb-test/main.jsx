import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "./src/routes/Root";
import ProductAdd from "./src/routes/ProductAdd";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
  },
  {
    path: "productadd",
    element: <ProductAdd />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
