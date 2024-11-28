  // importação de compontentes
import Container from "react-bootstrap/esm/Container";
import NavBarra from "../components/NavBarra";
import CardProdutos from "../components/CardProdutos";
  
  function Home() {
   return (
     <div>
       <NavBarra />
       <h1>Produtos da MoonCake </h1>
       <Container>
       <div lassName="lista-produtos d-flex col-12 gap-2 mt-3 justify-content-center flex-wrap">
        <CardProdutos />
        </div>
       </Container>
     </div>
   )
 }
 
 export default Home
 