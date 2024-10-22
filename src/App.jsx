import React from "react";
import { Layout,  AuthLayout } from "./routes/layout/Layout";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomePage from "./Pages/HomePage/HomePage";
import UserProfile from "./Pages/Admin/UserProfile";
import Dashboard from "./components/Dashboard/Dashboard";
import Admin from "./Pages/Admin/Admin";
import Table from "./components/Table/Table";
import Calender from "./components/Calendar/Calender";
import Iframely from "./components/Socials/Social";
import SocialPosts from "./Pages/Admin/SocialPosts";
import Chat from "./components/Chat/Chat";
import Signup from "./Pages/Auth/Signup";
import List from "./Pages/Admin/List";
import Login from "./Pages/Auth/Login";
import CarbonFootprint from "./components/CarbonFootprint";

function App() {

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "/",
          element: <HomePage />,
        },
        {
          path: "/user-profile",
          element: <UserProfile />,
        },
        {
          path: "/admin-dashboard",
          element: <Admin />,
        },
        {
          path: "/table",
          element: <Table />,
        },
        {
          path: "/calendar",
          element: <Calender />,
        },
        {
          path: "/social",
          element: <SocialPosts />,
        },
        {
          path: "/chat",
          element: <Chat />,
        },
        {
          path: "/list",
          element: <List />,
        },
        {
          path: "/carbon-footprint",
          element: <CarbonFootprint />,
        },
      ],
    },
    {
      path: "/",
      element: <AuthLayout />,
      children: [
        {
          path: "/signup",
          element: <Signup />,
        },
        {
          path: "/login",
          element: <Login />,
        },
      ],
    },

    

  ]);

  return (
  <>
  <RouterProvider router={router} />;
  </>
  )
}

export default App;
