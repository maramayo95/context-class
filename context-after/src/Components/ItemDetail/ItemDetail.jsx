import { Table, Container, Alert, Button } from 'react-bootstrap'
import ItemCount from '../ItemCount/ItemCount'
import './ItemDetail.css'
import { LinkContainer } from 'react-router-bootstrap'
const ItemDetail = ({ data }) => {
  // console.log(data)
  return (
    <div>
      <Container >

        <h1 className="text-center mb-5 mt-5">Detalle del Producto</h1>

        <div className="detail-content d-flex flex-column align-items-center m-3">
          <div className="d-flex flex-column justify-content-center align-items-center mb-5 imagen">
            <img src={data.img} alt={data.name} />
          </div>
          <div className="d-flex flex-column">
            <Table className='mt-1' striped bordered hover variant="dark">
              <thead>
                <tr>
                  <th>Nombre</th>
                  <th>Año</th>
                  <th>Precio</th>
                  <th>Genero</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>{data.name}</td>
                  <td>{data.year}</td>
                  <td>{data.price}</td>
                  <td>{data.genre}</td>
                </tr>
              </tbody>
            </Table>
            <Alert variant="dark">
              <p>{data.description}</p>
            </Alert>
            <ItemCount product={data} stock={5} max={5} min={1} />
            
            <div className="d-flex justify-content-center mt-3">
              <LinkContainer to="/">
                              <Button className="m-2 boton-mirando" variant="secondary">
                                  Seguir Mirando
                              </Button>
              </LinkContainer>
            </div> 

          </div>

        </div>
        <div className="mb-5 mt-5 d-flex justify-content-center  align-items-center botones">
        </div>
      </Container>
    </div>
  )
}

export default ItemDetail