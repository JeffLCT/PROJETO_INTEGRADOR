import React from 'react';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import './LoginPage.css';
import backgroundImage from '../images/background-image.png';

function LoginPage() {
  return (
    <div className="login-page">
      <Header />
      <div className="content">
        <div className="form-container">
          <form className="login-form">
            <h2>Mais clientes estão te esperando. Inscreva-se já!</h2>
            <input type="text" placeholder="Nome" />
            <input type="email" placeholder="E-mail" />
            <input type="tel" placeholder="Telefone" />
            <button type="submit" className="btn-primary">Quero me cadastrar</button>
            <button type="button" className="btn-secondary">Encontrar um profissional</button>
          </form>
        </div>
        <div className="image-container">
          <img src={backgroundImage} alt="Profissional de limpeza" />
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default LoginPage;
