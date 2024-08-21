import React from 'react';
import { Link } from 'react-router-dom';
import styles from './LoginPage.module.css';
import backgroundImage from '../../imagens/image-container.png';


function LoginPage() {
  return (


    <div className={styles.content}>
      <div className={styles.formContainer}>
        <form className={styles.loginForm}>
          <h2>Mais clientes estão te esperando. Inscreva-se já!</h2>
          <input type="text" placeholder="Nome" />
          <input type="email" placeholder="E-mail" />
          <input type="tel" placeholder="Telefone" />
          <Link to="/cadastro">
            <button type="submit" className={styles.btnPrimary}>
              Quero me cadastrar</button>
          </Link>
          <Link to="/ServicesPage">
          <button type="button" className={styles.btnSecondary}>Encontrar um profissional</button>
          </Link>
        </form>
      </div>
      <div className={styles.imageContainer}>
        <img src={backgroundImage} alt="Profissional de limpeza" />
      </div>
    </div>

  )

}

export default LoginPage;