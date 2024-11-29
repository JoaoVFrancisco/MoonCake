  // importação de compontentes
import Container from "react-bootstrap/esm/Container";
import NavBarra from "../components/NavBarra";
import CardProdutos from "../components/CardProdutos";

// importar o hook useState para monitorar a mudança das variaveis
import { useState, useEffect } from "react";

  const url = "http://localhost:5000/produtos";
  function Home() {
    const [produtos, setProdutos] = useState([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const req = await fetch(url);
        const prods = await req.json();
        console.log(prods);
        setProdutos(prods);
      } catch (erro) {
        console.log(erro.message);
      }
    }
    fetchData();
  }, [produtos]);

   return (
     <div>
       <NavBarra />
       <h1>Produtos da MoonCake </h1>
       <Container>
       <div className="lista-produtos d-flex col-12 gap-2 mt-3 justify-content-center flex-wrap">

        {/* Card com inforções fixas */}
          {/* <CardProdutos
           id="1"
           nome="Shampoo Cr7"
           descricao="Melhor Shampoo do mundo"
           preco="7,77"
           categoria="Saúde e beleza"
           imagemUrl="https:images-americanas.b2w.io/produtos/2473557992/imagens/shampoo-anticaspa-clear-men-sports-limpeza-profunda-200ml/2473557992_2_large.jpg"
         /> */}


      {/* card com informações variaveis */}
       {produtos.map((prod) => (
            <CardProdutos
              key={prod.id}
              id={prod.id}
              nome={prod.nome}
              descricao={prod.descricao}
              preco={prod.preco}
              categoria={prod.categoria}
              imagemUrl={prod.imagemUrl}
            />
          ))}
        </div>
       </Container>
     </div>
   )
 }
 
 export default Home
 