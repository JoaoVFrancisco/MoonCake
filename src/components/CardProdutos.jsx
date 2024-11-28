import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
import Button from 'react-bootstrap/Button';

function CardProdutos(props) {
  return (
    <div>
      <Card style={{ width: "16rem", height: "25rem" }}>
        <Card.Img
          variant="top"
          src="https://images.squarespace-cdn.com/content/v1/55be995de4b071c106b3b4c0/6d4e2689-dc51-46ef-95ec-7f74c3ba1f91/Caramel+Almond+Mooncake-2.jpg?format=500w"
        />
        <Card.Body>
          <Card.Title>Moon Cake</Card.Title>
          <Card.Text>Bolo da casa</Card.Text>
        </Card.Body>
        <ListGroup className="list-group-flush">
          <ListGroup.Item>Preço: 50,00$</ListGroup.Item>
          <ListGroup.Item>Categoria: Bolo</ListGroup.Item>
        </ListGroup>
        <Card.Body>
          <Card.Link href="/Editar">
            <Button variant="warning">
                Editar
            </Button>
          </Card.Link>
          <Card.Link href="/home">
          <Button variant="danger">
            Excluir
          </Button>
          </Card.Link>
        </Card.Body>
      </Card>
    </div>
  );
}

export default CardProdutos;
