import { createContext, useState } from "react";
// creamos el contexto para poder acceder desde otros componentes alejados
// userProvider es el q provee el contexto a userContext dentro de los componentes
export const UserContext = createContext(); // exportamos el contexto

const UserProvider = (props) => {
  // el props tiene in children y lo sacamos

  // traemos estas constantes de Inicio.jsx
  const [user, setUser] = useState(false); // constantes para manejar la sesión del usuario y llevarlo al navbar

  const signIn = () => setUser(true); // f(x) de inicio de sesión

  const signOut = () => setUser(false); // f(x) de cierre de sesión. Ambos métodos cambian el estado de user

  return (
    // en el value le indicamos todo lo que será exportado que estará dentro del props.children
    <UserContext.Provider value={{ user, signIn, signOut }}>
      {props.children}
    </UserContext.Provider>
  );
};

// en {children} viajan los componentes que estamos envolviendo

export default UserProvider;
