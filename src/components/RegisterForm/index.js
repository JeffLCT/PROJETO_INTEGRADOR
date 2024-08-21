import React, { useState } from 'react';
import FormField from '../FormField';
import SubmitButton from '../SubmitButton';
import LogoUpload from '../LogoUpload';
//import styles from '../RegisterPage/RegisterPage.module.css'; // Importando o CSS Module

function RegisterForm() {
    const [formData, setFormData] = useState({
        nome: '',
        telefone: '',
        email: '',
        servicoOferecido: '',
        areaAbrangencia: '',
        valorHora: '',
        frequenciaDisponivel: '',
        metodosPagamento: '',
        necessidadeMateriais: false,
    });

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setFormData({
            ...formData,
            [name]: type === 'checkbox' ? checked : value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Lógica de envio do formulário
        console.log(formData);
    };

    return (
        <form onSubmit={handleSubmit}>
            <FormField label="Nome" name="nome" type="text" value={formData.nome} onChange={handleChange} />
            <FormField label="Telefone" name="telefone" type="text" value={formData.telefone} onChange={handleChange} />
            <FormField label="E-mail" name="email" type="email" value={formData.email} onChange={handleChange} />
            <FormField label="Serviço Oferecido" name="servicoOferecido" type="text" value={formData.servicoOferecido} onChange={handleChange} />
            <FormField label="Área de Abrangência" name="areaAbrangencia" type="text" value={formData.areaAbrangencia} onChange={handleChange} />
            <FormField label="Valor por Hora (previsão)" name="valorHora" type="text" value={formData.valorHora} onChange={handleChange} />
            <FormField label="Frequência Disponível" name="frequenciaDisponivel" type="text" value={formData.frequenciaDisponivel} onChange={handleChange} />
            <FormField label="Métodos de Pagamento" name="metodosPagamento" type="text" value={formData.metodosPagamento} onChange={handleChange} />
            <FormField label="Necessidade de Materiais" name="necessidadeMateriais" type="checkbox" checked={formData.necessidadeMateriais} onChange={handleChange} />
            <LogoUpload />
            <SubmitButton text="Salvar" />
        </form>
    );
}

export default RegisterForm;
