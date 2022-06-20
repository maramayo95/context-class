import { Card, Button } from 'react-bootstrap'
import { LinkContainer } from 'react-router-bootstrap'


const Item = ({ products }) => {
    return (
        <div>
            <LinkContainer to={`/productos/${products.id}`}>
                <Card bg="dark" text="light">
                    <Card.Img bg="dark" variant="top" src={products.img} alt={products.name} />
                    <Card.Body className="text-center mt-4">
                        <Card.Title>{products.name}</Card.Title>
                        <p>${products.price}</p>
                    </Card.Body>
                    <Card.Footer className="d-flex justify-content-center">
                        <Button className="py-2 px-3 mt-2 mb-3" variant="danger" size="sm">
                            Ir Al Detalle
                        </Button>
                     
                    </Card.Footer>
                </Card>
            </LinkContainer>
        </div>
    )
}

export default Item