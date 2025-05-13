import { Navbar, Nav, Container, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

export default function NavBarApp() {
  const { user, logoutUser } = useAuth();

  return (
    <Navbar bg="dark" variant="dark" expand="lg">
      <Container>
        <Navbar.Brand as={Link} to="/">
          Beers
        </Navbar.Brand>
        <Nav className="me-auto">
          {user && (
            <>
              <Nav.Link as={Link} to="/beers">Cervezas</Nav.Link>
              {user.role === 'admin' && (
                <Nav.Link as={Link} to="/admin">Admin</Nav.Link>
              )}
            </>
          )}
        </Nav>
        <Nav>
          {user ? (
            <>
              <Navbar.Text className="me-2">Hola, {user.username}</Navbar.Text>
              <Button variant="outline-light" onClick={logoutUser}>
                Cerrar sesión
              </Button>
            </>
          ) : (
            <Nav.Link as={Link} to="/login">Login</Nav.Link>
          )}
        </Nav>
      </Container>
    </Navbar>
  );
}
