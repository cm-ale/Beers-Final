import { Container, Row, Col, Button } from 'react-bootstrap';
import { useAuth } from '../hooks/useAuth';
import { useNavigate } from 'react-router-dom';
import BeerList from '../components/BeerList';

export default function Home() {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  return (
    <Container className="mt-4">
      <Row className="mb-3">
        <Col>
          <h2>Bienvenido, {user.email}</h2>
        </Col>
        <Col className="text-end">
          <Button variant="outline-secondary" onClick={handleLogout}>
            Cerrar sesión
          </Button>
        </Col>
      </Row>
      <BeerList />
    </Container>
  );
}
