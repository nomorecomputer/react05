import { Outlet, RouterProvider } from "react-router";
import { Router } from "react-router";
import { myRouter } from "./router";
import axios from "axios";
import { CartCountProvider } from "./CartCountContext";

export const API_PATH = import.meta.env.VITE_API_PATH;
// eslint-disable-next-line react-refresh/only-export-components
export const api = axios.create({ baseURL: import.meta.env.VITE_API_BASE });

function App() {
  return (
    <CartCountProvider>
      <RouterProvider router={myRouter}></RouterProvider>
    </CartCountProvider>
  );
}

export default App;
