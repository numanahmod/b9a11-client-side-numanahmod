import React from 'react'
import ReactDOM from 'react-dom/client'

import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import MainLayout from './layouts/MainLayout';
import Home from './Pages/Home';



import Register from './Pages/Register';
import AuthProvider from './providers/AuthProvider';
import PrivateRoute from './routes/PrivateRoute';

import NotFoundPage from './Pages/NotFoundPage';

import Contact from './Pages/Contact';
import LogIn from './Pages/LogIn';






const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout/>,
    errorElement:<NotFoundPage></NotFoundPage>,
    children:[
      {
        index: true,
        element: <Home/>,
       
      },
      
      
      
     
      
      {
        path: "/register",
        element: <Register> </Register>
      },
      {
        path: "/login",
        element: <LogIn></LogIn>
      },
      {
        path:"/contact",
        element: <PrivateRoute><Contact></Contact></PrivateRoute>, 
      },
      
      
      
     

    ]
  },
  
]);
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    
    <AuthProvider>
    <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>,
)
