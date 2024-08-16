import React from 'react';
import ReactDOM from 'react-dom/client';

import LoginPage from './componets/LoginPage/LoginPage';
import Header from './componets/Header/Header';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    
    <LoginPage />
    <Header />


   
  </React.StrictMode>
);


