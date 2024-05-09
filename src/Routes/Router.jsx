import { createBrowserRouter } from "react-router-dom";
import Contact from "../components/Contact/Contact";
import About from "../components/About/About";
import Home from "../components/Home/Home";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    children: [
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/about",
        element: <About />,
      },
    ],
  },
]);

export default router;
