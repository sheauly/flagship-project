import { createBrowserRouter } from "react-router";
import App from "../App";

import Home from "../pages/Home";
import MainLayouts from "../layouts/MainLayouts";
import About from "../pages/About";
import Favorite from "../pages/Favorite";
import PhoneDetails from "../pages/PhoneDetails";
import ErrorPages from "../pages/ErrorPages";

export const router = createBrowserRouter([
  {
    path: '/',
        Component: MainLayouts,
        errorElement: <ErrorPages/>, 
        children: [
            {
                index:true,
                // path: '/',
                Component: Home,
            },
      {
        path: '/favorites',
            Component: Favorite,
           
            },
      {
    path: '/about',
    Component:About
    },
    {
        path: '/phone-details',
        Component: PhoneDetails,
    }
    ]
    }, 
    
])
export default router;
