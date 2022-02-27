import { useState } from "react";

const Formulario = () => {
  const [todo, setTodo] = useState({
    todoNombre: "",
    todoDescripcion: "",
    todoEstado: "Pendiente",
    todoCheck: false,
  });

  const [error, setError] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    const { todoNombre, todoDescripcion } = todo;

    if (!todoNombre.trim() || !todoDescripcion.trim()) {
      setError(true);
      return;
    }

    setError(false);
    console.log(todo);
  };

  const handleChange = (e) => {
    const { name, value, checked, type } = e.target;

    setTodo({
      ...todo,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const PintarError = () => {
    return <div className="alert alert-danger">Campos obligatorios</div>;
  };

  return (
    <>
      <h2>Formulario No Controlado</h2>
      {error && <PintarError />}
      <form onSubmit={handleSubmit}>
        <input
          className="form-control mb-2"
          type="text"
          placeholder="Ingrese un TODO"
          name="todoNombre"
          onChange={handleChange}
          value={todo.todoNombre}
        />
        <textarea
          className="form-control mb-2"
          type="text"
          placeholder="Ingrese un TODO"
          name="todoDescripcion"
          onChange={handleChange}
          value={todo.todoDescripcion}
        />
        <select
          className="form-control mb-2"
          name="todoEstado"
          onChange={handleChange}
          value={todo.todoEstado}
        >
          <option value="pendiente">Pendiente</option>
          <option value="completado">Completado</option>
        </select>

        <div className="form-check">
          <input
            className="form-check-input"
            type="checkbox"
            checked={todo.todoCheck}
            id="flexCheckDefault"
            name="todoCheck"
            onChange={handleChange}
          />
          <label className="form-check-label" htmlFor="flexCheckDefault">
            Dar prioridad
          </label>
        </div>

        <button className="btn btn-primary" type="submit">
          Agregar
        </button>
      </form>
    </>
  );
};

export default Formulario;
