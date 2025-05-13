import { Container, Row, Col, Button } from 'react-bootstrap';
import { useAuth } from '../context/AuthContext';
import { useNavigate } from 'react-router-dom';

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
          <h2>Bienvenido, {user.username}</h2>
        </Col>
        <Col className="text-end">
        </Col>
      </Row>
    </Container>
  );
}
