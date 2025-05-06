
import { useEffect , useState } from "react"

const ChangeDollar = ({dollarPrice, setDollarPrice}) => {

    const [ParseDollarPrice, setParseDollarPrice] = useState (dollarPrice.toString())

     // Cuando cambia el valor desde el exterior (por props), sincronizamos el input
    useEffect (() => {
    setParseDollarPrice(dollarPrice.toString())
                    }, [dollarPrice]
                )

    const OnhandleChange = (e) => {
    const newRate = e.target.value //extrae el valor que el USUARIO escribe en el INPUT.
        setParseDollarPrice(newRate)//'setDollaPrice', ahora va a tener el 'Nuevo valor del dolar'.
        
        const parsed = parseFloat(newRate)
        if (!isNaN(parsed)) { //si newRate es un numero SIGUE
            setDollarPrice(parsed)  //'setParseDollarPrice', ahora va a tener el 'Nuevo valor del dolar'.
        }
        return 
    }

  return (
    <div className= "my-3">
        <label className = "form-label"> 💹 Cotización del Dolar: </label>
        {/* campos con entrada de datos */}
        <input
            type= "number"
            value={ParseDollarPrice} // Valor del dolar
            onChange={OnhandleChange} // Nuevo valor del Dolar
            className="form-control"
            placeholder="EJ: 1 DOLAR ES 1013 PESOS ARGENTINOS, ENTONCES COMPLETAR 1013"
            step="0.01"
        />
    </div>
  )
}

export default ChangeDollar
