  import DataBeers from "../../data/DataBeers"

   //Funcion que recibe los parametros de la 
   // clase DataBeers y los lista
  const Beers = ({id, beerName, price,available, beerStyle}) => {
  return (
       <li className="list-group-item d-flex justify-content-between"> 
        {id}  {/*->Devuelve  1,2,3...9 */}
        {beerName}  {/*->Devuelve  "American","Argenta","Irish" */}
        {beerStyle} {/*->Devuelve  IPA, Red,APA*/}
        {price} {/*Devuelve el valor actual del dólar, pero convertido a pesos */}
        {available ? '✅': '❌'}
      </li>
    )
   }

   const ListBeer = ({DataBeers, dollarPrice}) => {
   
     return (
       <div>
            <h2> 📄Lista de Precios Actualizados (en pesos ARS)</h2>
            <ul className = "list-group">
              {/* Con el metodo MAP ,Recorre c/u de los 'datos' del arreglo a travez de
               "fila", los vá trayendo (los datos del arreglo) e igualando a los parametros de la Funcion, para luego
               devolverlos en forma de lista */}
            {DataBeers.map (fila => <Beers 
                            key= {fila.id}
                            beerName={fila.beerName}
                            beerStyle ={fila.beerStyle}
                            price={(fila.priceUsd * dollarPrice).toFixed(2)}
                            available = {fila.available}
                 />) }
            </ul>
        </div>
        )
    }

   export default ListBeer
   
