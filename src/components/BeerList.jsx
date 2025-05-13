import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Container, Form, Button, Table } from 'react-bootstrap';
import beersData from '../data/beers.json';
import { useAuth } from '../context/AuthContext';

export default function BeerList() {
  const { user } = useAuth();
  const [beers, setBeers] = useState(beersData);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors }
  } = useForm();

  const handleAdd = (data) => {
    const id = Math.max(...beers.map(b => b.id)) + 1;
    const newBeer = { id, ...data };
    setBeers([...beers, newBeer]);
    reset(); // limpia el formulario
  };

  const handleDelete = (id) => {
    setBeers(beers.filter(b => b.id !== id));
  };

  return (
    <Container className="mt-4">
     <h2>Gestion de Cervezas</h2>


      {user.role === 'admin' && (
        <Form onSubmit={handleSubmit(handleAdd)} className="mb-4">
          <Form.Group className="mb-2">
            <Form.Label>Nombre</Form.Label>
            <Form.Control
              type="text"
              {...register('name', { required: 'El nombre es obligatorio' })}
            />
            {errors.name && <small className="text-danger">{errors.name.message}</small>}
          </Form.Group>

          <Form.Group className="mb-2">
            <Form.Label>Tipo</Form.Label>
            <Form.Control
              type="text"
              {...register('type', { required: 'El tipo es obligatorio' })}
            />
            {errors.type && <small className="text-danger">{errors.type.message}</small>}
          </Form.Group>

          <Form.Group className="mb-2">
            <Form.Label>Precio</Form.Label>
            <Form.Control
              type="number"
              step="0.01"
              {...register('price', {
                required: 'El precio es obligatorio',
                min: { value: 0, message: 'El precio no puede ser negativo' }
              })}
            />
            {errors.price && <small className="text-danger">{errors.price.message}</small>}
          </Form.Group>

          <Button type="submit" className="mt-2">Agregar Cerveza</Button>
        </Form>
      )}

      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Nombre</th>
            <th>Tipo</th>
            <th>Precio</th>
            {user.role === 'admin' && <th>Acciones</th>}
          </tr>
        </thead>
        <tbody>
          {beers.map(beer => (
            <tr key={beer.id}>
              <td>{beer.name}</td>
              <td>{beer.type}</td>
              <td>${beer.price}</td>
              {user.role === 'admin' && (
                <td>
                  <Button
                    variant="danger"
                    size="sm"
                    onClick={() => handleDelete(beer.id)}
                  >
                    Eliminar
                  </Button>
                </td>
              )}
            </tr>
          ))}
        </tbody>
      </Table>
    </Container>
  );
}
