import { useForm } from "react-hook-form"
import { useNavigate } from "react-router-dom"
import { Form, Card, Row, Col } from "react-bootstrap"
import { errorToast } from "../../ui/toast/Notification"// o donde estén tus notificaciones
import { BrowserRouter, Route, Routes,Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button'

const NewBeer = ({onAddBeer}) => {

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors }
  } = useForm()

  const navigate = useNavigate()

  const onSubmit = async (data) => {
    const beerData = {
      beerName: data.name,
      beerStyle: data.style, // o podés agregar un campo al formulario
      priceUsd: parseFloat(data.price),
      available: true,
    }

    try {
      onAddBeer(beerData)
      reset()
      navigate("/")
    } 
      catch (error) {
      errorToast("Ocurrió un error al guardar la cerveza.")
    }
  }

  return (
    <div className="container d-flex justify-content-center flex-wrap">
      <Card className="m-4 w-50" >
        <Card.Body>
          <Form className="text-dark" onSubmit={handleSubmit(onSubmit)}>
            <Row>

              <Col md={6}>
                <Form.Group className="mb-3" controlId="name">
                  <Form.Label>Nombre</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Ej: American"
                    {...register("name", { required: "El nombre es obligatorio" })}
                  />
                  {errors.name && <span className="text-danger">{errors.name.message}</span>}
                </Form.Group>
              </Col>

              <Col md={6}>
                <Form.Group className="mb-3" controlId="style">
                  <Form.Label>Estilo de Cerveza</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Ej: IPA "
                    {...register("style", { required: "El estilo es obligatorio" })}
                  />
                  {errors.style && <span className="text-danger">{errors.style.message}</span>}
                </Form.Group>
              </Col>


              <Col md={6}>
                <Form.Group className="mb-3" controlId="price">
                  <Form.Label>Precio (USD)</Form.Label>
                  <Form.Control
                    type="number"
                    step="0.01"
                    placeholder="Ej: 4.99"
                    {...register("price", { required: "El precio es obligatorio" })}
                  />
                  {errors.price && <span className="text-danger">{errors.price.message}</span>}
                </Form.Group>
              </Col>
            </Row>
            <Button type="submit" variant="outline-success mt-3">
              Agregar cerveza 🍺
            </Button>
          </Form>
        </Card.Body>
      </Card>
    </div>
  )
}

export default NewBeer
