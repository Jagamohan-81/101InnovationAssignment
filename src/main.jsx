import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import AllRoutes from './AllRoutes'
import {BrowserRouter} from 'react-router-dom'
ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <AllRoutes />
  </BrowserRouter>
)
