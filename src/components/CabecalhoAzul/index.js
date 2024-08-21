import { Link } from "react-router-dom";
import logo from './logo.png';
import styles from './CabecalhoAzul.module.css';
import CabecalhoLink from "components/CabecalhoLink";

function CabecalhoAzul() {
    return (
        <header className={styles.cabecalhoAzul}>
            <Link to="./">
                <img src={logo} alt="Logo"></img>
            </Link>
            <nav>
                <CabecalhoLink url="./">
                    Home
                </CabecalhoLink>

            </nav>
        </header>
    )
}

export default CabecalhoAzul;