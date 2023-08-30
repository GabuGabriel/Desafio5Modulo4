import { useState } from "react"

const Buscador = ({ onChange, search }) => {
    const [busqueda, setBusqueda] = useState("")

const dataToLower = (cd) => {
    return cd.name.toLowerCase().includes(busqueda.toLowerCase())
} 

    return (
        <>
            <div className="divBuscador">
                <form class="d-flex" role="search">
                    <input
                        class="form-control mb-4"
                        type="search"
                        placeholder="Buscar"
                        aria-label="Search"
                        value={busqueda}
                        onChange={(e) => {
                        setBusqueda(e.target.value);
                        }}
                    />
                </form>
            </div>
        </>
    )
}

export default Buscador


