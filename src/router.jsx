import React from "react";
import ReactDom from "react-dom/client";
import App from "./App";
import About from "./assets/Pages/About"; 
import Error from "./assets/Pages/Error";
import FlatPage from "./assets/Pages/FlatPage";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <Error />,
  },
  // Modification de la route pour inclure l'ID dans l'URL
  {
    path: "/flat/:id",  // Le :id permet d'indiquer que c'est un paramètre dynamique
    element: <FlatPage />,
  },
  {
    path: "/About", 
    element: <About />, 
  },
]);

ReactDom.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
