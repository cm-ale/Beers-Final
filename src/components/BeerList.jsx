import { useState } from 'react';
import { useAuth } from '../hooks/useAuth';
import beersData from '../data/beers.json';
import { Table, Button, Form, Row, Col } from 'react-bootstrap';

export default function BeerList() {
  const { user } = useAuth();
  const [beers, setBeers] = useState(beersData);
  const [newBeer, setNewBeer] = useState({ name: '', type: '', price: '' });

  const handleDelete = (id) => {
    setBeers(beers.filter(b => b.id !== id));
  };

  const handleAdd = (e) => {
    e.preventDefault();
    const id = Math.max(...beers.map(b => b.id)) + 1;
    setBeers([...beers, { ...newBeer, id }]);
    setNewBeer({ name: '', type: '', price: '' });
  };

  return (
    <>
      {user.role === 'admin' && (
        <Form onSubmit={handleAdd} className="mb-4">
          <Row>
            <Col><Form.Control placeholder="Nombre" value={newBeer.name} onChange={e => setNewBeer({ ...newBeer, name: e.target.value })} required /></Col>
            <Col><Form.Control placeholder="Tipo" value={newBeer.type} onChange={e => setNewBeer({ ...newBeer, type: e.target.value })} required /></Col>
            <Col><Form.Control placeholder="Precio" type="number" value={newBeer.price} onChange={e => setNewBeer({ ...newBeer, price: e.target.value })} required /></Col>
            <Col><Button type="submit" variant="success">Agregar</Button></Col>
          </Row>
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
          {beers.map((beer) => (
            <tr key={beer.id}>
              <td>{beer.name}</td>
              <td>{beer.type}</td>
              <td>${beer.price}</td>
              {user.role === 'admin' && (
                <td>
                  <Button variant="danger" size="sm" onClick={() => handleDelete(beer.id)}>
                    Eliminar
                  </Button>
                </td>
              )}
            </tr>
          ))}
        </tbody>
      </Table>
    </>
  );
}
