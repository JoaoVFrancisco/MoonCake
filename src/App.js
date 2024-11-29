//  importação do bootstrap
import "bootstrap/dist/css/bootstrap.min.css";

// Importação do estilo CSS padrão
import './App.css';

// importação de paginas
import Login from "./pages/Login";
import Home from "./pages/Home";
import CadastroProduto from "./pages/CadastroProduto";
import EditarProduto from "./pages/EditarProduto";
import CadastroFuncionario from "./pages/CadastroFuncionario";

// importação do gerenciador de rotas
import {BrowserRouter, Route, Routes} from "react-router-dom"

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />}/>
        <Route path="/login" element={<Login />}/> 
        <Route path="/home" element={<Home />}/>
        <Route path="/produto/cadastrar" element={<CadastroProduto />}/>
        <Route path="/produto/editar/:id" element={<EditarProduto />}/>
        <Route path="/cadastro/usuario" element={<CadastroFuncionario />}/>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
