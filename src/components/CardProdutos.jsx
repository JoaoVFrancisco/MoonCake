import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
import Button from 'react-bootstrap/Button';

function CardProdutos(props) {

  const handleDelete = async (e) => {

    const req = await fetch(`http://localhost:5000/produtos/${props.id}`,
      {
        method:"DELETE"
      });
      const res =  await req.json()
      console.log(res)
      alert(`Produto ${res.nome} removido`)
  };
  return (
    <div>
      <Card style={{ width: "16rem", height: "30rem" }}>
        <Card.Img
          variant="top"
          src={props.imagemUrl}
          height="200px"
        />
        <Card.Body>
          <Card.Title>{props.nome}</Card.Title>
          <Card.Text><b> Descrição: </b> <br></br> {props.descricao}</Card.Text>
        </Card.Body>
        <ListGroup className="list-group-flush">
          <ListGroup.Item>Preço: {props.preco}</ListGroup.Item>
          <ListGroup.Item><b> Categoria: </b> <br></br> {props.categoria}</ListGroup.Item>
        </ListGroup>
        <Card.Body>
          <Card.Link href={`/produto/editar/${props.id}`}>
            <Button variant="warning">
                Editar
            </Button>
          </Card.Link>
          <Card.Link href="/home">
          <Button variant="danger" type="Button" onClick={handleDelete}>
            Excluir
          </Button>
          </Card.Link>
        </Card.Body>
      </Card>
    </div>
  );
}

export default CardProdutos;
