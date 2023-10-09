import React from 'react'
import ReactDOM from 'react-dom/client'

import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './MainRout/Root';
import Home from './Pges/Home/Home';
import Login from './Pges/Login/Login';
import Registration from './Pges/Registretion/Registration';
import Services from './Pges/Services/Services';
import NavBarService from './Pges/Services/NavBarService';
import AuthProvider from './Aurhprovider/Authprovider';
import PrivateRout from './PrivateRout/PrivateRout';
import Gallery from './Pges/gallery/Gallery';
import AboutUs from './Pges/AboutUs/AboutOus';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children: [
      {
        path: '/',
        element: <Home></Home>

      },
      {
        path: '/login',
        element: <Login></Login>
      },
      {
        path: '/service/:id',
        element: <PrivateRout><Services></Services></PrivateRout>,
        loader : ()=> fetch('/data.json')
      },
      {
        path: '/aboutus',
        element: <PrivateRout><AboutUs></AboutUs></PrivateRout>,
       
      },
      { path : '/servicecard',
        element : <NavBarService></NavBarService>,
        loader : ()=> fetch('/data.json')
      },
     
      {
        path: '/registration',
        element: <Registration></Registration>,
       
      },
      {
        path : '/gallery',
        element:<PrivateRout><Gallery></Gallery></PrivateRout>
      }

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
