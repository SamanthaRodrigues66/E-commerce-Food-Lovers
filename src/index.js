import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './index.css';
import App from './App';
import Home from './pages/Home/index.jsx';
import Carrinho from './pages/Carrinho/index.jsx';
import Produto from './pages/Produto/index.jsx';
import Sobre from './pages/Sobre/index.jsx'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route element={<App />}>
          <Route path="/" element={<Home/>} />
          <Route path="carrinho" element={<Carrinho/>} />
          <Route path="produto" element={<Produto/>} />
          <Route path="sobre" element={<Sobre/>} />
      </Route>
    </Routes>
  </BrowserRouter>
  </React.StrictMode >
);



