import React, { useEffect, useState } from "react";
import Formulario from "./components/Formulario";
import PintarDatos from "./components/PintarDatos";

// capturamos el nmombre ingresado en el formulario
const App = () => {
  const [nombrePersonaje, setNombrePersonaje] = useState(""); // importamos el nombre del personaje desde Formulario. nombrePersonaje viaja a PintarDatos y setNombrePersonaje lo almacena en App

  // usamos localStorage para que muestre los resultados anteriores al recargar la página
  useEffect(() => {
    console.log(localStorage.getItem("nombreApi"));
    if (localStorage.getItem("nombreApi")) {
      setNombrePersonaje(JSON.parse(localStorage.getItem("nombreApi")));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("nombreApi", JSON.stringify(nombrePersonaje));
  }, [nombrePersonaje]);

  return (
    <div className="container">
      <h1>App Rick and Morty</h1>
      <Formulario setNombrePersonaje={setNombrePersonaje} />
      <PintarDatos nombrePersonaje={nombrePersonaje} />
    </div>
  );
};

export default App;
