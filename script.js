import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import AboutUs from "./components/AboutUs";
import Error from "./components/Error";
import Body from "./components/Body";
import { RestaurantMenu } from "./components/RestaurantMenu";
import Contact from "./components/Contact";

const root = ReactDOM.createRoot(document.getElementById("root"));

const appRoute = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { path: "/", element: <Body /> },
      { path: "/about", element: <AboutUs str={"hello"} /> },
      { path: "/contact", element: <Contact /> },
      { path: "/restaurant/:resId", element: <RestaurantMenu /> },
    ],

    errorElement: <Error />,
  },
]);

root.render(<RouterProvider router={appRoute} />);
