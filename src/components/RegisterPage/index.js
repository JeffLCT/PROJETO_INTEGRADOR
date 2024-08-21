import React from 'react';
import RegisterForm from '../RegisterForm';
import styles from './RegisterPage.module.css'; // Importando o CSS Module
import Cabecalho from 'components/Cabecalho';

function RegisterPage() {
    return (
        <div>
            <Cabecalho />
        <div className={styles.registerContainer}>
            <RegisterForm />
        </div>
        </div>
    );
}

export default RegisterPage;
