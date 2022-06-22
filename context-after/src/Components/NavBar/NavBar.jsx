import {Navbar, Nav, Container, Button , Badge } from 'react-bootstrap'
import TokyoLogo2 from '../../img/SvgTokyoS.svg'
import {LinkContainer} from 'react-router-bootstrap'
import { useCartContext } from '../../context/CartContext'
import './NavBar.css'
const NavBar = () => {

    const {iconCart, cartList} = useCartContext()

    return (
        <>
            <Navbar bg="dark" variant="dark" expand="lg">
                <Container>
                    <LinkContainer to="/">
                    <Navbar.Brand><img className="logo" src={TokyoLogo2}/></Navbar.Brand>
                    </LinkContainer>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                          <LinkContainer to={`categorias/anime`}>
                            <Nav.Link>Anime</Nav.Link>
                          </LinkContainer>
                          <LinkContainer to={`categorias/clasicos`}>
                              <Nav.Link>Clasicos</Nav.Link>
                          </LinkContainer>
                            <LinkContainer to={`categorias/novedades`}>
                                <Nav.Link>Novedades</Nav.Link>
                            </LinkContainer>
                            <LinkContainer to="/carrito">
                                <Button variant="danger">
                                  Carrito  <Badge bg="primary">{cartList.length === 0 ? 0 : iconCart()}</Badge>
                                </Button>
                            </LinkContainer>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    )
}

export default NavBar