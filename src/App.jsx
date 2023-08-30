import './App.css'
import Buscador from './components/Buscador'
import MiApi from './components/MiApi'


function App() {

  return (
    <>
      <div className="divPrincipal">
        <div className="divContenedor">
          <Buscador></Buscador>
          <MiApi> </MiApi>
        </div>
      </div>
    </>
  )
}

export default App
