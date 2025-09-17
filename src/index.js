import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './App.jsx';
import "./index.css";

import Home from './components/Home.jsx';
import About from './components/About.jsx';
import Services from './components/Services.jsx';
import Contact from './components/Contact.jsx';
import NotFound from './components/NotFound.jsx';
import Layout from './components/layout.jsx';
import Confirmation from './components/Confirmation.jsx';

import { createBrowserRouter, RouterProvider } from 'react-router-dom';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />, 
    errorElement: <NotFound />, 
    children: [
      {
        path: '/',
        element: <Home />,
      },
      {
        path: '/about',
        element: <About />,
      },
      {
        path: '/services',
        element: <Services />,
      },
      {
        path: '/contact',
        element: <Contact />,
      },
      {
        path: '/confirmation/:name',
        element: <Confirmation />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
