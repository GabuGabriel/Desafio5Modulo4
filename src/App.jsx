import './App.css'
import Buscador from './components/Buscador'
import MiApi from './components/MiApi'
import { useState } from 'react'

const App = () => {
  const [filtroBuscador, setFiltroBuscador] = useState("");

  return (
    <>
      <div className="divPrincipal">
        <div className="divContenedor">
          <Buscador setFiltroBuscador={setFiltroBuscador} /* onChange={handleChange} search={search} */></Buscador>
          <MiApi filtroBuscador={filtroBuscador} > </MiApi>
        </div>
      </div>
    </>
  )
}

export default App
