import React from 'react';
import styles from '../RegisterPage/RegisterPage.module.css'; // Importando o CSS Module

function LogoUpload() {
    return (
        <div className={styles.logoUpload}>
            <label>Logo</label>
            <div className={styles.logoPlaceholder}>
                <span>logo</span>
            </div>
            {/* Aqui você pode adicionar um input para upload de arquivo se necessário */}
        </div>
    );
}

export default LogoUpload;
