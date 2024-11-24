import { FC, useState } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "../layout/Layout";
import Home from "../pages/Home";
import Shop from "../pages/Shop";
import Card from "../pages/Card";
import Checkout from "../pages/Checkout";
import Order from "../pages/Order";
// import Login from "../components/Login";
// import Register from "../components/Register";
import FilterData from "../pages/FilterData";
import ProductDetails from "../pages/ProductDetails";

interface Order {
  products: Array<{
    id: number;
    name: string;
    price: number;
    quantity: number;
  }>;
  orderNumber: string;
  shippingInformation: {
    address: string;
    city: string;
    zip: string;
  };
  totalPrice: number;
}

const AppRouter: FC = () => {
  const [order, setOrder] = useState<Order | null>(null);

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "/shop",
          element: <Shop />,
        },
        {
          path: "/cart",
          element: <Card />,
        },
        {
          path: "/checkout",
          element: <Checkout setOrder={setOrder} />,
        },
        {
          path: "/order-confirmation",
          element: <Order order={order} />,
        },
        {
          path: "/filter-data",
          element: <FilterData />,
        },
        {
          path: "/product/:id",
          element: <ProductDetails />,
        },
        // {
        //   path: "/login",
        //   element: <Login />,
        // },
        // {
        //   path: "/register",
        //   element: <Register />,
        // },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
};

export default AppRouter;
