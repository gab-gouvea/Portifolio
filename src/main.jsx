import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App.jsx";
import "./index.css";
import { Home } from "./routes/Home.jsx";
import { Sobre } from "./routes/Sobre.jsx";
import { Projetos } from "./routes/Projetos.jsx";
import Contato from "./routes/Contato.jsx";


const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
        {
          index: true, element: <Home/>
        },
        {
          path: "/sobre", element: <Sobre/>
        },
        {
          path: "/projetos", element: <Projetos/>
        },
        {
          path: "/contato", element: <Contato/>
        }
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
