import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'

import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";

import App from "./App";
import Shop from "./pages/Shop"
import Outlets from "./pages/Outlets"
import Orders from "./pages/Orders"
import Gallery from "./pages/Gallery"

export const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<App />} />
      <Route path="gallery" element={<Gallery />} />
      <Route path="outlets" element={<Outlets />} />
      <Route path="shop" element={<Shop />} />
      <Route path="orders" element={<Orders />} />
    </>
  )
);


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
