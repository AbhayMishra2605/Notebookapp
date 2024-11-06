import * as React from "react";
import * as ReactDOM from "react-dom/client";
import {createBrowserRouter,RouterProvider,} from "react-router-dom";
import './App.css'
import ErrorPage from "./routes/404";
import HomePage from "./routes/Mainpage";
import MobileHomePage from "./routes/Mobroutes/Mobilepage";

const isMobile = window.innerWidth <= 768;

  const router = createBrowserRouter([
    {
      path: "/",
      element: isMobile ? <MobileHomePage/> : <HomePage />, 
      errorElement: <ErrorPage />, 
     }
  ]);
  



  ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
      <RouterProvider router={router} />
    </React.StrictMode>
  );
  

 


