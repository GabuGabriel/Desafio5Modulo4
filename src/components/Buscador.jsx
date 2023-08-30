import { useState } from "react"

const Buscador = () => {
    const [busqueda, setBusqueda] = useState("")

    return (
        <>
           <h2>Buscar</h2>
           <input 
           type="text"  
           id="busqueda"
           placeholder="Buscar"
           value={busqueda}
           onChange={(e) => {
            setBusqueda(e.target.value)
           }} />

        </>
    )
}

export default Buscador


