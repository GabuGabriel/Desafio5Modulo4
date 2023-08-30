const Buscador = ({ setFiltroBuscador }) => {

    return (
        <>
            <h2>Buscar</h2>
            <form class="d-flex" role="search">
                <input
                    type="text"
                    id="busqueda"
                    placeholder="Buscar"
                    onChange={(e) => setFiltroBuscador(e.target.value)} />
            </form>
        </>
    )
}

export default Buscador


