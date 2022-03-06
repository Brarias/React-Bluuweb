import React, { useEffect, useState } from "react";
import Swal from "sweetalert2";
import Loading from "./Loading";
import Personaje from "./Personaje";

// vamos a traer el nombre del personaje enviado desde App y haremos solicitud en Fetch()

const PintarDatos = ({ nombrePersonaje }) => {
  const [personajes, setPersonajes] = useState([]); // creamos array para empujar los personajes de la respuesta del fetch

  const [loading, setLoading] = useState(false); // constante para pintar el loading

  useEffect(() => {
    // usamos useEffect para controlar el renderizado y le asignamos como parámetro [nombrePersonaje] para que renderice una sola vez
    consumirApi(nombrePersonaje); // pasamos parámetro para que esté pendiente del nombre
  }, [nombrePersonaje]); // cada vez q el nombre cambie, hacemos solicitud en fetch()

  const consumirApi = async (nombre) => {
    setLoading(true);
    // constante para consumir api asincrónicamente
    try {
      const res = await fetch(
        // capturamos la respuesta del fetch
        `https://rickandmortyapi.com/api/character/?name=${nombre}&status=alive`
      ); // usamos  backsticks para capturar dinámicamente el nombre y le pasamos nombrePersonaje al name para capturarlo
      if (!res.ok) {
        // si no encuentra el personaje por mala escritura le arrojamos el alert
        return Swal.fire({
          title: "Error!",
          text: `Personaje no encontrado ${nombre}`,
          icon: "error",
        });
      }
      const datos = await res.json(); // guardamos la res del json

      console.log(datos.results);

      setPersonajes(datos.results); // recibo los personajes desde App
    } catch (error) {
      // manejamos las excepciones(errorres)
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    // importamos el loading para q se visualice
    return <Loading />;
  }

  return (
    <div className="row mt-2">
      {personajes.map(
        (
          item // iteramos los personajes recibidos para mostrarlos
        ) => (
          <Personaje
            key={item.id}
            personaje={item}
            // pasamos el id del personaje en la key
          />
        )
      )}
    </div>
  );
};

export default PintarDatos;
