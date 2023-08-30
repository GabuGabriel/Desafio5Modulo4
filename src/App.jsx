import './App.css'
import Buscador from './components/Buscador'
import MiApi from './components/MiApi'
import { useState } from 'react'

const App = () => {
  const [searchTerm, setSearchTerm] = useState("");

  return (
    <>
      <div className="divPrincipal">
        <div className="divContenedor">
          <Buscador setSearchTerm={setSearchTerm} /* onChange={handleChange} search={search} */></Buscador>
          <MiApi searchTerm={searchTerm} > </MiApi>
        </div>
      </div>
    </>
  )
}

export default App
