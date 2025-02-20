import "./App.css";
import CartaoUsuario from "./components/Perfil";
import Header from "./components/Header"
import Tupi from "./assets/TupiGato.png";
import Matheus from "./assets/Matheus.jpg";
import Maria from "./assets/Maria.jpg";
import Laura from "./assets/Laura.jpg";
import Ana from "./assets/Ana.jpg";
import Vitor from "./assets/Vitor.jpg";
import Valentina from "./assets/Valentina.jpeg";
import Leandro from "./assets/Leandro.jpg"

function App() {
  return (
    <>
    <Header/>
      <h1 className="h1">Usuários:</h1>
      <main className="mainPrincipal">
        <main className="main">
          <CartaoUsuario
            img={Maria}
            alt="Maria Clara"
            titulo="Maria Clara"
            idade="16 Anos"
            descricao="Inteligente/Fofa/Extrovertida"
          />

          <CartaoUsuario
            img={Matheus}
            alt="Matheus"
            titulo="Matheus"
            idade="17 anos"
            descricao="Inteligente/Prático/Joga online."
          />
          <CartaoUsuario
            img={Laura}
            alt="Laura Marques"
            titulo="Laura Marques"
            idade="16 anos"
            descricao="Inteligente/Comunicativa/Pratica esportes."
          />

          <CartaoUsuario
            img={Vitor}
            alt="Vitor Gabriel"
            titulo="Vitor"
            idade="16 anos"
            descricao="Inteligente/Extrovertido/Ama socializar."
          />
          <CartaoUsuario
            img={Ana}
            alt="Ana"
            titulo="Ana Clara"
            idade="16 anos"
            descricao="Inteligente/Gentil/Cuida da saúde."
          />

          <CartaoUsuario
            img={Valentina}
            alt="Valentina"
            titulo="Valentina"
            idade="17 anos"
            descricao="Inteligente/Sociavel/Cozinha."
          />
            <CartaoUsuario
            img={Tupi}
            alt="Tupi"
            titulo="Tupi"
            idade="10 anos A.C"
            descricao="Ama chimarrão/Odeio Palmeiras"
          />
            <CartaoUsuario
            img={Leandro}
            alt="Leandro"
            titulo="Leandro"
            idade="Nascido Dia 20/02/2025"
            descricao="I'm back/Amo Verde"
          />
        </main>
      </main>
    </>
  );
}

export default App;
