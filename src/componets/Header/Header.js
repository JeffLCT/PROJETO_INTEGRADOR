import React from 'react';
import './Header.css';
import logo from '../images/logo.png';  // Substitua pelo caminho correto do seu logo

function Header() {
  return (
    <header className="header">
      <img src={logo} alt="Logo da Empresa" className="logo" />
    </header>
  );
}

export default Header;
