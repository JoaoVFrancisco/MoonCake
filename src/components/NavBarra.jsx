import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

const NavBar = () => {
  return (
    <div>
      <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          {/* icone Loja */}
          <span
            className="material-symbols-outlined"
            style={{ fontSize: "40px", color: "white" }}
          >dark_mode
          </span>
          <Navbar.Brand href="/home">MoonCake</Navbar.Brand>
          {/* Paginas */}
          <Nav className="me-auto">
            <Nav.Link href="/produto/cadastrar">Cadastrar Items</Nav.Link>
            <Nav.Link href="/cadastro/usuario">Cadastrar Funcionario</Nav.Link>
          </Nav>
          <Nav className="justify-content-end">
              <Navbar.Text style={{color: "white" }}></Navbar.Text>
              <Nav.Link href="/" >Sair</Nav.Link>
            </Nav>
        </Container>
      </Navbar>
    </div>
  );
};

export default NavBar;
