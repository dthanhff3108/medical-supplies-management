import React from 'react';
import './App.css';
import { useTranslation } from 'react-i18next';
import { BrowserRouter } from 'react-router-dom';
import renderRoutes, { routes } from 'routes';

function App() {
  return (
    <>
      <BrowserRouter>{renderRoutes(routes, false)}</BrowserRouter>
    </>
  );
}

export default App;
