import React from 'react';
import styles from '../RegisterPage/RegisterPage.module.css'; // Importando o CSS Module

function FormField({ label, name, type, value, onChange, checked }) {
    return (
        <div className={styles.formGroup}>
            <label>{label}</label>
            <input
                type={type}
                name={name}
                value={type === 'checkbox' ? undefined : value}
                checked={type === 'checkbox' ? checked : undefined}
                onChange={onChange}
            />
        </div>
    );
}

export default FormField;
