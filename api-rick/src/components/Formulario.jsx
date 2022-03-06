import React from "react";
import { useFormulario } from "../hooks/useFormulario";
import Swal from "sweetalert2";

const Formulario = ({ setNombrePersonaje }) => {
  // desestructuramos el props para capturar el nombre del personaje
  const [inputs, handleChange, reset] = useFormulario({
    nombre: "", // solo traemos el nombre porque tenemos un solo input
  }); // creo constante que trae  el hook creado en el proyecto To-Do-App y es donde se va a guardar la búsqueda de personajes

  const { nombre } = inputs; // desestructuramos el objeto input

  const handleSubmit = (e) => {
    // desarrollamos el evento submit

    e.preventDefault(); // evitamos la renderización por defecto del navegador
    console.log(nombre);

    if (!nombre.trim()) {
      // validación para enviar error de espacios en blanco y sin llenar
      return Swal.fire({
        // utilizamos sweetAlert para que aparezca una alerta de error
        title: "Error!",
        text: "Escriba algo por favor",
        icon: "error",
      });
    }

    setNombrePersonaje(nombre.trim().toLowerCase()); // método que actualiza el nombre del personaje que enviaremos a App. con trim limpiamos los carácteres de espacio si el usuario lo utiliza y le quitamos las mayúsculas

    reset(); // utilizamos f(x) reset para resetear el formulario
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Ingrese personaje"
        className="form-control mb-2"
        value={nombre} // valor dinámico que capta el nombre
        onChange={handleChange} // creo el evento change que traigo desde useFormulario
        name="nombre"
      />

      <button type="submit" className="btn btn-dark">
        Buscar
      </button>
    </form>
  );
};

export default Formulario;
