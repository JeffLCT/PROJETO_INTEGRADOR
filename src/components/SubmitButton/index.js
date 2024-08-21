import React from 'react';
import styles from '../RegisterPage/RegisterPage.module.css'; // Importando o CSS Module

function SubmitButton({ text }) {
    return (
        <button type="submit" className={styles.submitButton}>
            {text}
        </button>
    );
}

export default SubmitButton;
