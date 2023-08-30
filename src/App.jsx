import './App.css'
import Buscador from './components/Buscador'
import MiApi from './components/MiApi'


const [search, setSearch] = useState("")
const handleChange = (e) => {
    setSearch(e.target.value);
};



function App() {

  return (
    <>
      <div className="divPrincipal">
        <div className="divContenedor">
          <Buscador onChange={handleChange} search={search}></Buscador>
          <MiApi> </MiApi>
        </div>
      </div>
    </>
  )
}

export default App
