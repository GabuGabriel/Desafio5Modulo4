const Buscador = ({ setFiltroBuscador }) => {

    return (
        <>
           <h2>Buscar</h2>
           <input 
           type="text"  
           id="busqueda"
           placeholder="Buscar"
           onChange={(e) => setFiltroBuscador(e.target.value)} />
        </>
    )
}

export default Buscador


