import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { login as loginService } from '../services/authService';
import { useState } from 'react';
import { Form, Button, Alert, Container } from 'react-bootstrap';

export default function Login() {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const { loginUser } = useAuth();
  const navigate = useNavigate();
  const [loginError, setLoginError] = useState('');

  const onSubmit = async ({ username, password }) => {
    try {
      const { token, user } = await loginService(username, password);
      loginUser(user, token);
      navigate('/');
    } catch (err) {
      setLoginError('Usuario o contraseña incorrectos');
    }
  };

  return (
    <Container className="mt-5" style={{ maxWidth: '400px' }}>
      <h2>Iniciar Sesión</h2>
      {loginError && <Alert variant="danger">{loginError}</Alert>}
      <Form onSubmit={handleSubmit(onSubmit)}>
        <Form.Group controlId="username">
          <Form.Label>Usuario</Form.Label>
          <Form.Control
            type="text"
            placeholder="Ingresá tu usuario"
            {...register('username', { required: 'El usuario es obligatorio' })}
          />
          {errors.username && <small className="text-danger">{errors.username.message}</small>}
        </Form.Group>

        <Form.Group controlId="password" className="mt-3">
          <Form.Label>Contraseña</Form.Label>
          <Form.Control
            type="password"
            placeholder="Ingresá tu contraseña"
            {...register('password', { required: 'La contraseña es obligatoria' })}
          />
          {errors.password && <small className="text-danger">{errors.password.message}</small>}
        </Form.Group>

        <Button variant="primary" type="submit" className="mt-4 w-100">
          Ingresar
        </Button>
      </Form>
    </Container>
  );
}
