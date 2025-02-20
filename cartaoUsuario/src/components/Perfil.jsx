import "./Perfil.css";
import Botao from "./botaoSeguir"

function Perfil(props) {
  return (
    <>
    <div className="blocoPerfil">
      <h2>{props.titulo}</h2>
        <img className="img" src={props.img} alt={props.alt} />
        <p>{props.idade}</p>
        <p>{props.descricao}</p>
        <Botao/>
      </div>
    </>
  );
}

export default Perfil;
