import {useState} from 'react'
import ListBeer from './Components/ListBeer/ListBeer'
import ChangeDollar from './Components/ChangeDollar/ChangeDollar'
import NewBeer from './Components/NewBeer/NewBeer'
import Button from 'react-bootstrap/Button'
import { successToast } from "./ui/toast/Notification"
import { BrowserRouter, Route, Routes,Link } from 'react-router-dom';
import DataBeers from './data/DataBeers';

const App = () => {
  // Cambiar el valor inicial de dollarPrice a un número (por ejemplo, 1)
  const [dollarPrice, setDollarPrice] = useState(1); // valor inicial del dólar (número)
  const [showChangeDollar, SetShowChangeDollar] = useState(true); // controla visibilidad
  
  const [beers, setBeers] = useState(DataBeers)

  const handleAddBeer = (beer) => {
    setBeers(prev => [...prev, { ...beer, id: Date.now() }]); // asigna ID único
    successToast("Cerveza agregada correctamente 🍺");
  };

  const toggleChangeDollar = () => {
    SetShowChangeDollar(prev => !prev);
  };

  return (
<BrowserRouter>
  <div className="container mt-4">
    <h1> 🍻 Project Beer🍻 </h1>

    <Button onClick={toggleChangeDollar} variant="outline-success mt-3">
      {showChangeDollar ? "Ocultar" : "Mostrar"} cotización del Dólar
    </Button>

    {showChangeDollar && (
      <ChangeDollar dollarPrice={dollarPrice} setDollarPrice={setDollarPrice} />
    )}

    <Routes>
      <Route path="/" element={<ListBeer DataBeers={beers} dollarPrice={dollarPrice} />} />
      <Route path="/agregar-beer" element={<NewBeer onAddBeer={handleAddBeer} />} />
    </Routes>

    <Link to="/agregar-beer">
      <Button variant="outline-success mt-3">Agregar nueva cerveza</Button>
    </Link>
  </div>
</BrowserRouter>
  );
};

export default App
