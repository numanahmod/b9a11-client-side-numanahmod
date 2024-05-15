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
import Blogs from './Pages/Blogs';
import AllJobs from './Pages/AllJobs';
import ViewDetails from './Pages/ViewDetails';
import AddAJob from './Pages/AddAJob';

import MyAddedJobs from './Pages/MyAddedJobs';
import Update from './Pages/Update';
import AppliedJobs from './Pages/AppliedJobs';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';







const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout/>,
    errorElement:<NotFoundPage></NotFoundPage>,
    children:[
      {
        index: true,
        element: <Home/>,
        loader: () => fetch(`${import.meta.env.VITE_API_URL}/postedJobs`)
       
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
      {
        path: '/blogs',
        element: <Blogs></Blogs>
      },
      {
        path: '/allJobs',
        element: <AllJobs></AllJobs>,
        loader: () => fetch(`${import.meta.env.VITE_API_URL}/postedJobs`)
      },
      {
        path:"/job/:id",
        element: <PrivateRoute><ViewDetails></ViewDetails></PrivateRoute>, 
        loader: ({params}) => fetch(`${import.meta.env.VITE_API_URL}/job/${params.id}`)
      },
      {
        path:"/addJob",
        element: <PrivateRoute><AddAJob></AddAJob></PrivateRoute>, 
        
      },
      {
        path:"/myAddedJobs",
        element: <PrivateRoute><MyAddedJobs></MyAddedJobs></PrivateRoute>, 
        
      },
      {
        path:"/update/:id",
        element: <Update></Update>,
        loader: ({params}) => fetch(`${import.meta.env.VITE_API_URL}/job/${params.id}`)
        
      },
      {
        path:"/appliedJobs",
        element: <PrivateRoute><AppliedJobs></AppliedJobs></PrivateRoute>, 
        
      },
     
      
      
     

    ]
  },
  
]);




const queryClient = new QueryClient()
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    
    <AuthProvider>
      <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
      </QueryClientProvider>
    
    </AuthProvider>
  </React.StrictMode>,
)
