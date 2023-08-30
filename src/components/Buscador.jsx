const Buscador = ({ setSearchTerm }) => {

    return (
        <>
           <h2>Buscar</h2>
           <input 
           type="text"  
           id="busqueda"
           placeholder="Buscar"
           onChange={(e) => setSearchTerm(e.target.value)} />
        </>
    )
}

export default Buscador


