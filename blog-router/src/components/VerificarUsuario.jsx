import { useContext } from "react";
import { Navigate } from "react-router-dom";
import { UserContext } from "../context/UserProvider";

// componente que verifica si el usuario está conectado
const VerificarUsuario = ({ children }) => {
  const { user } = useContext(UserContext); // traigo el usuario

  if (!user) {
    // hacemos un redirect al inicio en caso q el usuario no exista
    return <Navigate to="/" />;
  }
  return children;
};

export default VerificarUsuario;
