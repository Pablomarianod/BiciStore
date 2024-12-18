import BikesPages from '../bikesPage/BikesPage';
import './homePage.css';
import { Container, Nav, Navbar } from 'react-bootstrap'

const HomePage = () => {
    return (
        <>
            <h1>Esta es la pagina principal</h1>
            <Navbar bg="primary" data-bs-theme="dark">
                <Container>
                    <Navbar.Brand href="#home">Bici Store</Navbar.Brand>
                    <Nav className="me-auto">
                        <Nav.Link href="/">Home</Nav.Link>
                        <Nav.Link href="#features">Productos</Nav.Link>
                        <Nav.Link href="#pricing">Otros</Nav.Link>
                    </Nav>
                </Container>
            </Navbar>
            <BikesPages />
        </>
    );
};

export default HomePage;