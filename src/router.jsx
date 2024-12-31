import React from "react";
import ReactDom from "react-dom/client";
import App from "./App";
import About from "./assets/Pages/About"; 
import Error from "./assets/Pages/Error";
import FlatPage from "./assets/Pages/FlatPage";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

// createBrowserRouter : Cette fonction permet de créer un routeur basé 
// sur l'historique du navigateur, qui gère la navigation via l'URL.//

// RouterProvider : Fournit le routeur à l'application, permettant aux composants enfants de gérer 
//la navigation.

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <Error />,
  },
  {
    path: "/flat/:id",  
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
