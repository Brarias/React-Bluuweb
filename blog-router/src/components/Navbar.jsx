import React, { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { UserContext } from "../context/UserProvider";

// importamos NavLink en vez de link que crea la clase active en el elemento

const Navbar = () => {
  // usamos el componente NavLink en vez de usar anchor. En vex de href se usa: to

  const { user } = useContext(UserContext); // importamos el user de UserProvider

  return (
    <nav className="navbar navbar-dark bg-dark">
      <div className="container">
        <Link to="/">{user ? "Juanito" : "Sin conexión"}</Link>
        <NavLink to="/" className="btn btn-outline-primary">
          Inicio
        </NavLink>
        <NavLink to="/blog" className="btn btn-outline-primary">
          Blog
        </NavLink>
        <NavLink to="/contacto" className="btn btn-outline-primary">
          Contacto
        </NavLink>
      </div>
    </nav>
  );
};

export default Navbar;
