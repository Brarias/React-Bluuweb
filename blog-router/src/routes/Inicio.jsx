import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { UserContext } from "../context/UserProvider";

const Inicio = () => {
  const { user, signIn, signOut } = useContext(UserContext); // constante para importar los atributos de userProvider pero llamamos a userContext

  return (
    //creamos un botón para inicio de sesión
    // el onClick cambia el estado del usuario
    // en el h2 mostramos el estado del usuario
    //solo me retorna un elemento, es por eso q debo envolver los elementos en un fragment

    <div>
      <h1>Inicio</h1>
      <h2>{user ? "conectado" : "desconectado"}</h2>
      {user ? (
        <>
          <button className="btn btn-danger" onClick={signOut}>
            Cerrar Sesión
          </button>
          <Link to="/protegida" className="btn btn-warning">
            Ruta Protegida
          </Link>
        </>
      ) : (
        <button className="btn btn-success" onClick={signIn}>
          Iniciar Sesión
        </button>
      )}
    </div>
  );
};

export default Inicio;
