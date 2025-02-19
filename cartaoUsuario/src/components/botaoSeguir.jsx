import { useState } from "react";
import '../botaoSeguir.css';

function Seguir() {
  const [Seguindo, setSeguindo] = useState(false);

  const Seguir = () => {
    setSeguindo(true);
  };

  return (
    <>
      <button onClick={Seguir} className={Seguindo ? "seguindo" : "seguir"}>
        {Seguindo ? "Seguindo" : "Seguir"}
      </button>
    </>
  );
}

export default Seguir;