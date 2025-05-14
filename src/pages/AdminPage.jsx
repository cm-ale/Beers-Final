import { Container } from 'react-bootstrap';

export default function AdminPage() {
  return (
    <Container className="mt-4">
      <h2>Panel de administración</h2>
      <p>Bienvenido, administrador.</p> 
      <p>Acceso exclusivo para administradores.</p>
    </Container>
  );
}
