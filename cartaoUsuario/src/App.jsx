import './App.css'
import CartaoUsuario from './components/Perfil'
import Tupi from "./assets/TupiGato.png"
function App() {
 

  return (
    <>
<h1>Usuários:</h1>

<main className="main2">
        <CartaoUsuario
          img={Tupi}
          alt="Tupi"
          titulo="Tupi"
          descricao="Gosto de Chimarrão"
        />


        <CartaoUsuario
          img={Tupi}
          alt="Tupi"
          titulo="Tupi"
          descricao="Gosto de Chimarrão"
        />

   
      </main>
    </>
  )
}

export default App
