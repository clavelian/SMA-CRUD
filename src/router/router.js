import {
  createBrowserRouter
} from "react-router-dom";

import { Home } from "../pages/Index";
import AboutUs from "../pages/AboutUs"
const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />
  },
  {
    path: "/about-us",
    element: <AboutUs />,
  }
]);

export default router;