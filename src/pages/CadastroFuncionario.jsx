// importando compontentes do bootstrap
import FloatingLabel from "react-bootstrap/FloatingLabel";
import Form from "react-bootstrap/Form";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Alert from "react-bootstrap/Alert";


// importação de compontentes
import NavBarra from "../components/NavBarra";
import { useState, useEffect } from "react";

// importação do Navigate
import { useNavigate } from "react-router-dom";

const url = "http://localhost:5000/usuarios"

function CadastroFuncionario() {
  

  const [nome, setNome] = useState("")
  const [email, setEmail] = useState("")
  const [senha, setSenha] = useState("")
  const [confirmar, setConfirmar] = useState("")
  
  // Variaveis para alerta
  const [alertClass, setAlertClass] = useState("mb-3 d-none");
  const [alertMensagem, setAlertMensagem] = useState("");
  const [alertVariant, setAlertVariant] = useState("danger");

  // Criando o navigate
  const navigate = useNavigate();

  //  Função pra lidar com recarregamento da pagina
  const handleLogin = async (e) => {
    // previne a pagina de se recarregada
    e.preventDefault();
    if (nome != "") {
      if (email != "") {
        if (senha != "") {
          const cadastro = { nome, email, senha };
          console.log(cadastro);
          try {
            const req = await fetch(url, {
              method: "POST",
              headers: { "Content-type": "application/json" },
              body: JSON.stringify(cadastro),
            });
            const res = req.json();
            console.log(res);
            setAlertClass("mb-3 mt-2");
            setAlertVariant("success");
            setAlertMensagem("Login criado com sucesso");
            alert("login efetuado com sucesso");
            // navigate("/home");
          } catch (error) {
            console.log(error);
          }
        } else {
          setAlertClass("mb-3 mt-2");
          setAlertMensagem("O campo Senha não pode ser vazio");
        }
      } else {
        setAlertClass("mb-3 mt-2");
        setAlertMensagem("O campo Email não pode ser vazio");
      }
    } else {
      setAlertClass("mb-3 mt-2");
      setAlertMensagem("O campo nome não pode ser vazio");
    }
  };
  return (
    <div>
      <NavBarra />
    <div style={{height: "100vh"}} 
    className="justify-content-center align-content-center">
      
      <Container style={{backgroundColor: "white", height: "500px", width:"500px", borderRadius:"40px"}} className="justify-content-center align-content-center">
        <h1>Cadastrar Usuario</h1>
        <Form className="mt-3" onSubmit={handleLogin}>
        <Row style={{alignContent: "center", justifyContent: "center"}}>
          <Col xs={6}>
          {/* Caixinha de nome */}
          <FloatingLabel controlId="floatingInputNome"
          label="Nome"
          className="mb-3">
            <Form.Control type="text"
            placeholder="Digite o nome do usuario"
            value={nome}
            onChange={(e) => setNome(e.target.value)} />
          </FloatingLabel>
          {/* Caixinha de Email */}
          <FloatingLabel controlId="floatingInputemail"
          label="Email"
          className="mb-3">
            <Form.Control type="email"
            placeholder="Digite o nome do usuario"
            value={email}
            onChange={(e) => setEmail(e.target.value)} />
          </FloatingLabel>
          {/* Caixinha de senha */}
          <FloatingLabel controlId="floatingInputSenha"
          label="password"
          className="mb-3">
            <Form.Control type="password"
            placeholder="Digite uma senha para cadastro"
            value={senha}
            onChange={(e) => setSenha(e.target.value)} />
          </FloatingLabel>
          <FloatingLabel controlId="floatingInputConfirmar"
          label="password"
          className="mb-3">
            <Form.Control type="password"
            placeholder="Digite a mesma senha para confirmar"
            required
            value={confirmar}
            onChange={(e) => setConfirmar(e.target.value)} />
          </FloatingLabel>
          </Col>
        </Row>

        {/* Alerta casa haja erro */}
        <Alert variant={alertVariant} className={alertClass}>
          {alertMensagem}
        </Alert>
        <Button variant="primary" size="lg" type="submit">
          Cadastrar
        </Button>
        </Form>
      </Container>
    </div>
    </div>
  );
}

export default CadastroFuncionario
