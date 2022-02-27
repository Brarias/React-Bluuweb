import { useRef } from "react";

const FormNoControlado = () => {
  const formulario = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();

    const datos = new FormData(formulario.current);

    // console.log(...datos.entries());

    const objetoDatos = Object.fromEntries([...datos.entries()]);
    console.log(objetoDatos);

    const { todoDescripcion, todoEstado, todoNombre } = objetoDatos;

    if (!todoDescripcion.trim() || !todoNombre.trim()) {
      console.log("NOOO WEON ESTA VACIO");
      return;
    }

    console.log("Pasó validaciones");
  };

  return (
    <>
      <h2>No controlado</h2>
      <form ref={formulario} onSubmit={handleSubmit}>
        <input
          className="form-control mb-2"
          type="text"
          placeholder="Ingrese un TODO"
          name="todoNombre"
          defaultValue="Tarea #01"
        />
        <textarea
          className="form-control mb-2"
          type="text"
          placeholder="Ingrese un TODO"
          name="todoDescripcion"
          defaultValue="Descripción tarea #01"
        />
        <select
          className="form-control mb-2"
          name="todoEstado"
          defaultValue="completado"
        >
          <option value="pendiente">Pendiente</option>
          <option value="completado">Completado</option>
        </select>
        <button className="btn btn-primary" type="submit">
          Agregar
        </button>
      </form>
    </>
  );
};

export default FormNoControlado;
