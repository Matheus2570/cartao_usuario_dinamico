import "./Perfil.css";

function Perfil(props) {
  return (
    <>
    <div className="blocoPerfil">
      <h2>{props.titulo}</h2>
        <img className="img" src={props.img} alt={props.alt} />
        <p>{props.descricao}</p>
      </div>
    </>
  );
}

export default Perfil;
