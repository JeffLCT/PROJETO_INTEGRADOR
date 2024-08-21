import React from 'react';
import styles from './ServicesPage.module.css';

function ServicesPage() {
    const services = [
        {
            icon: '🚗', // Aqui você pode substituir por um ícone SVG
            title: 'Automotiva',
            items: [
                'Lavagem Completa',
                'Polimento, enceramento e selagem de Pintura',
                'Limpeza e Condicionamento de Couro',
                'Limpeza de Estofados e Carpetes',
                'Tratamento de Plásticos e Borrachas Internas',
                'Limpeza de Moto',
                'Polimento de Faróis',
                'Limpeza de Detalhes (Detalhamento Fino)',
            ],
        },
        {
            icon: '🏠',
            title: 'Doméstica',
            items: [
                'Limpeza de Banheiros',
                'Limpeza de Cozinha',
                'Limpeza de Estofados e Carpetes',
                'Organização Geral',
                'Desodorização dos Ambientes',
                'Remoção de Lixo',
                'Limpeza profunda',
                'Limpeza pós mudança',
                'Limpeza de piscinas',
            ],
        },
        {
            icon: '🧱',
            title: 'Pós-obras',
            items: [
                'Remoção de Resíduos Sólidos',
                'Aspiração de Poeira',
                'Limpeza de Paredes e Tetos',
                'Limpeza de Janelas e Vidros',
                'Limpeza de Pisos',
                'Remoção de Manchas de Tinta',
                'Limpeza de Móveis e Utensílios',
                'Limpeza de Sanitários e Cozinhas',
                'Limpeza de Aparelhos de Iluminação e Ventilação',
                'Desodorização dos Ambientes',
                'Verificação Final e Detalhamento',
            ],
        },
        {
            icon: '🧼',
            title: 'Descontaminação',
            items: [
                'Descontaminação de Superfícies',
                'Descontaminação de Áreas Industriais',
                'Descontaminação de Ambientes com Mofo',
                'Descontaminação de Áreas Afetadas por Água',
                'Descontaminação de Áreas Alimentares',
                'Descontaminação de Veículos',
                'Descontaminação de Banheiros',
                'Descontaminação de Espaços Comerciais',
                'Descontaminação de Sistemas de Ar',
            ],
        },
    ];

    return (
        <div className={styles.container}>
            <header className={styles.header}>
                <div className={styles.profile}>
                    <div className={styles.icon}>👤</div>
                    <div>Nome</div>
                    <div className={styles.toggleSwitch}></div>
                </div>
            </header>
            <div className={styles.servicesGrid}>
                {services.map((service, index) => (
                    <div key={index} className={styles.serviceCard}>
                        <div className={styles.serviceHeader}>
                            <div className={styles.serviceIcon}>{service.icon}</div>
                            <div className={styles.serviceTitle}>{service.title}</div>
                        </div>
                        <ul className={styles.serviceList}>
                            {service.items.map((item, idx) => (
                                <li key={idx}>{item}</li>
                            ))}
                        </ul>
                        <button className={styles.button}>Ver todos</button>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default ServicesPage;
