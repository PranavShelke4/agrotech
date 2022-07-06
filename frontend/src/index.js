import React from 'react';
import ReactDOM from 'react-dom/client';
import ConfigRoutes from './functions/routes';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from "react-router-dom";


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
     <ConfigRoutes></ConfigRoutes>
  </BrowserRouter>
);

reportWebVitals();
