import { BrowserRouter, Route, Routes } from "react-router-dom";
import LoginPage from 'components/LoginPage';
import RegisterPage from "components/RegisterPage";
import Rodape from "components/Rodape";
import Cadastro from "components/Cadastro";
import ServicesPage from "components/ServicesPage";
import Cabecalho from "components/Cabecalho";




function AppRoutes() {
    return (
        <BrowserRouter>
            <Cabecalho />
            
            <Routes>

                <Route path="/" element={<LoginPage />} />
                <Route path="/register" element={<RegisterPage />} />
                <Route path="/cadastro" element={<Cadastro />} />
                <Route path="/ServicesPage" element={<ServicesPage />} />

            </Routes >
            <Rodape />

        </BrowserRouter>

    )

}
export default AppRoutes;