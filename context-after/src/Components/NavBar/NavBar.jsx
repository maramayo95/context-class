import {Navbar, Nav, Container } from 'react-bootstrap'
import TokyoLogo2 from '../../img/SvgTokyoS.svg'
import {LinkContainer} from 'react-router-bootstrap'
import './NavBar.css'


const NavBar = () => {
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
                                <Nav.Link>Carrito</Nav.Link>
                            </LinkContainer>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    )
}

export default NavBar