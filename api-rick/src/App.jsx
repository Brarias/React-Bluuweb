import React, { useState } from "react";
import Formulario from "./components/Formulario";
import PintarDatos from "./components/PintarDatos";

// capturamos el nmombre ingresado en el formulario
const App = () => {
  const [nombrePersonaje, setNombrePersonaje] = useState(""); // importamos el nombre del personaje desde Formulario. nombrePersonaje viaja a PintarDatos y setNombrePersonaje lo almacena en App

  return (
    <div className="container">
      <h1>App Rick and Morty</h1>
      <Formulario setNombrePersonaje={setNombrePersonaje} />
      <PintarDatos nombrePersonaje={nombrePersonaje} />
    </div>
  );
};

export default App;
