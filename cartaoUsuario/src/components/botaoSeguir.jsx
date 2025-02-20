import { useState } from "react";
import './botaoSeguir.css';


function Seguir() {
  const [Seguindo, setSeguindo] = useState(false);

  const Seguir = () => {
    setSeguindo(!Seguindo);
  };

  return (
    <>
      <button onClick={Seguir} className={Seguindo ? "cancelar" : "seguir"}>
        {Seguindo ? "Deixar de seguir ❌" : "Seguir 🔔"}
      </button>
    </>
  );
}

export default Seguir;