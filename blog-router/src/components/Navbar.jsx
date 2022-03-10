import React from "react";
import { NavLink } from "react-router-dom";

// importamos NavLink en vez de link que crea la clase active en el elemento

const Navbar = () => {
  // usamos el componente NavLink en vez de usar anchor. En vex de href se usa: to
  return (
    <nav className="navbar navbar-dark bg-dark">
      <div className="container">
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
