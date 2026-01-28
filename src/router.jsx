import { createHashRouter } from "react-router";
import Products from "./views/Products";
import Home from "./views/Home";
import ProductDetail from "./views/ProductDetail";
import ShoppingCart from "./views/ShoppinCart";
import NotFound from "./views/NotFound";
import FrontendLayout from "./layout/FrontendLayout";

export const myRouter = createHashRouter([
  {
    path: "/",
    element: <FrontendLayout />,
    children: [
      { index: true, element: <Home /> },
      { path: "Product", element: <Products /> },
      { path: "Product/:id", element: <ProductDetail /> },
      { path: "ShoppingCart", element: <ShoppingCart /> },
    ],
  },
  {
    path: "*",
    element: <NotFound />,
  },
]);
