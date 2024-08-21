
import styles from './Cadastro.module.css';

function Cadastro() {
    return (
     
        <div className={styles.container}>
             
            <div className={styles.formContainer}>
                <form className={styles.form}>
                    <div className={styles.column}>
                        <label>Nome</label>
                        <input type="text" name="nome" />
                    </div>
                    <div className={styles.column}>
                        <label>Telefone</label>
                        <input type="text" name="telefone" />
                    </div>
                    <div className={styles.column}>
                        <label>E-mail</label>
                        <input type="email" name="email" />
                    </div>
                    <div className={styles.column}>
                        <label>Serviço Oferecido</label>
                        <input type="text" name="servico" />
                    </div>
                    <div className={styles.column}>
                        <label>Área de Abrangência</label>
                        <input type="text" name="area" />
                    </div>
                    <div className={styles.column}>
                        <label>Valor por Hora (previsão)</label>
                        <input type="text" name="valor" />
                    </div>
                    <div className={styles.column}>
                        <label>Frequência Disponível</label>
                        <input type="text" name="frequencia" />
                    </div>
                    <div className={styles.column}>
                        <label>Métodos de Pagamento</label>
                        <input type="text" name="metodos" />
                    </div>
                    <div className={styles.column}>
                        <label>
                            <input type="checkbox" name="necessidadeMateriais" />
                            Necessidade de Materiais
                        </label>
                    </div>
                    <div className={styles.logoContainer}>
                        <label>Logo</label>
                        <div className={styles.logo}>logo</div>
                    </div>
                    <div className={styles.buttonContainer}>
                        <button type="submit">Salvar</button>
                    </div>
                </form>
            </div>
        </div>
       
    )
}

export default Cadastro;
