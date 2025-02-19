import './App.css'
import CartaoUsuario from './components/Perfil'
import Tupi from "./assets/TupiGato.png"
function App() {
 

  return (
    <>
 <CartaoUsuario
          img={Tupi}
          titulo="Tupi"
          alt="Tupi"
          descricao="Você é um verdadeiro apreciador da vida simples e autêntica! O chimarrão é mais do que apenas uma bebida, é uma tradição, uma cultura e uma forma de conectar-se com as pessoas e com a natureza. Você sabe apreciar o sabor forte e a companhia dos amigos ao redor da roda de chimarrão. É um momento para relaxar, conversar e criar memórias que duram uma vida inteira. Então, aqui vai um brinde ao chimarrão e às boas conversas!"
        />
    </>
  )
}

export default App
