import React from 'react';
import ReactDOM from 'react-dom';
import Navbar from './components/Navbar.jsx';
import Catalogo from './components/ItemListContainer.jsx'

ReactDOM.render(
  <React.StrictMode>
    <Navbar />
    <Catalogo greeting='NUESTROS PRODUCTOS' />
  </React.StrictMode>,
  document.getElementById('root')
);

