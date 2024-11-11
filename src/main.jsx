import * as React from "react";
import * as ReactDOM from "react-dom/client";
import {createBrowserRouter,RouterProvider,} from "react-router-dom";
import './App.css'
import ErrorPage from "./routes/404";
import HomePage from "./routes/Mainpage";
import MobileHomePage from "./routes/Mobroutes/Mobilepage";

const isMobile = window.innerWidth >= 768;

  const router = createBrowserRouter([
    {
      path: "/",
      element: isMobile ? <HomePage /> : <MobileHomePage/>, 
      errorElement: <ErrorPage />, 
     },
    {
      path:"/Mobile",
      element:<MobileHomePage/>
    },
    {
      path:"Home",
      element:<HomePage/>
    }
    ]);
  


  ReactDOM.createRoot(document.getElementById("root")).render(
  
    
    <RouterProvider router={router} />

 
  );
  

 


